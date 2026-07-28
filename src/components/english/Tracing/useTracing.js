import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  COMPLETION_RATIO,
  HIT_RADIUS,
  buildPathSamples,
  findNearestSample,
  getProgressPercent,
  getSamplesWithinRadius,
  getSvgPoint,
} from "./tracingUtils";

const EMPTY_POINT = null;

function useTracing({ letter, onComplete }) {
  const svgRef = useRef(null);
  const pathRefs = useRef([]);
  const samplesRef = useRef([]);
  const visitedRef = useRef(new Set());
  const completionCalledRef = useRef(false);

  const [isDrawing, setIsDrawing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [drawnSegments, setDrawnSegments] = useState([]);

  const registerPath = useCallback((element, index) => {
    if (element) {
      pathRefs.current[index] = element;
    }
  }, []);

  const resetTracing = useCallback(() => {
    visitedRef.current = new Set();
    completionCalledRef.current = false;
    setDrawnSegments([]);
    setIsDrawing(false);
    setProgress(0);
    setCompleted(false);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const paths = pathRefs.current.filter(Boolean);
      samplesRef.current = buildPathSamples(paths);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [letter]);

  const updateProgress = useCallback(() => {
    const ratio = visitedRef.current.size / samplesRef.current.length;
    const isComplete = ratio >= COMPLETION_RATIO;
    const nextProgress = isComplete
      ? 100
      : getProgressPercent(visitedRef.current.size, samplesRef.current.length);

    setProgress(nextProgress);

    if (isComplete && !completionCalledRef.current) {
      completionCalledRef.current = true;
      setCompleted(true);
      setIsDrawing(false);
      onComplete?.();
    }
  }, [onComplete]);

  const markTracePoint = useCallback(
    (point) => {
      const samples = samplesRef.current;
      const nearest = findNearestSample(point, samples);

      // Misses are ignored, so off-letter drawing never renders or adds progress.
      if (!nearest.sample || nearest.distance > HIT_RADIUS) {
        return EMPTY_POINT;
      }

      getSamplesWithinRadius(point, samples).forEach((sample) => {
        visitedRef.current.add(sample.id);
      });

      updateProgress();

      return {
        x: nearest.sample.x,
        y: nearest.sample.y,
      };
    },
    [updateProgress]
  );

  const appendTracePoint = useCallback((point, startsNewSegment = false) => {
    setDrawnSegments((segments) => {
      if (startsNewSegment || !segments.length) {
        return [...segments, [point]];
      }

      return segments.map((segment, index) => {
        if (index !== segments.length - 1) {
          return segment;
        }

        return [...segment, point];
      });
    });
  }, []);

  const beginTracing = useCallback(
    (event) => {
      if (completed || !svgRef.current) {
        return;
      }

      event.preventDefault();
      const svgPoint = getSvgPoint(event, svgRef.current);
      const tracePoint = markTracePoint(svgPoint);

      if (!tracePoint) {
        return;
      }

      setIsDrawing(true);
      appendTracePoint(tracePoint, true);
    },
    [appendTracePoint, completed, markTracePoint]
  );

  const continueTracing = useCallback(
    (event) => {
      if (!isDrawing || completed || !svgRef.current) {
        return;
      }

      event.preventDefault();
      const svgPoint = getSvgPoint(event, svgRef.current);
      const tracePoint = markTracePoint(svgPoint);

      if (!tracePoint) {
        setIsDrawing(false);
        return;
      }

      appendTracePoint(tracePoint);
    },
    [appendTracePoint, completed, isDrawing, markTracePoint]
  );

  const stopTracing = useCallback(() => {
    setIsDrawing(false);
  }, []);

  const drawnPathData = useMemo(
    () =>
      drawnSegments
        .filter((segment) => segment.length > 0)
        .map((segment) =>
          segment
            .map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`)
            .join(" ")
        ),
    [drawnSegments]
  );

  return {
    completed,
    drawnPathData,
    isDrawing,
    progress,
    registerPath,
    resetTracing,
    svgRef,
    tracingHandlers: {
      onMouseDown: beginTracing,
      onMouseLeave: stopTracing,
      onMouseMove: continueTracing,
      onMouseUp: stopTracing,
      onTouchCancel: stopTracing,
      onTouchEnd: stopTracing,
      onTouchMove: continueTracing,
      onTouchStart: beginTracing,
    },
  };
}

export default useTracing;
