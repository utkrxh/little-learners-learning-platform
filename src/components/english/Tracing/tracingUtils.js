export const SAMPLE_GAP = 6;
export const HIT_RADIUS = 38;
export const TRACE_RADIUS = 30;
export const COMPLETION_RATIO = 0.985;

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function distance(pointA, pointB) {
  return Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y);
}

export function getSvgPoint(event, svg) {
  const pointer = event.touches?.[0] ?? event.changedTouches?.[0] ?? event;
  const point = svg.createSVGPoint();

  point.x = pointer.clientX;
  point.y = pointer.clientY;

  return point.matrixTransform(svg.getScreenCTM().inverse());
}

export function buildPathSamples(pathElements, gap = SAMPLE_GAP) {
  return pathElements.flatMap((path, pathIndex) => {
    // Native SVG length APIs keep progress tied to the actual path geometry.
    const length = path.getTotalLength();
    const steps = Math.max(1, Math.ceil(length / gap));

    return Array.from({ length: steps + 1 }, (_, index) => {
      const pathLength = clamp((index / steps) * length, 0, length);
      const point = path.getPointAtLength(pathLength);

      return {
        id: `${pathIndex}-${index}`,
        pathIndex,
        pathLength,
        x: point.x,
        y: point.y,
      };
    });
  });
}

export function findNearestSample(point, samples) {
  // The nearest sampled path point decides whether a pointer is on the letter.
  return samples.reduce(
    (nearest, sample) => {
      const sampleDistance = distance(point, sample);

      if (sampleDistance >= nearest.distance) {
        return nearest;
      }

      return {
        sample,
        distance: sampleDistance,
      };
    },
    {
      sample: null,
      distance: Infinity,
    }
  );
}

export function getSamplesWithinRadius(point, samples, radius = TRACE_RADIUS) {
  return samples.filter((sample) => distance(point, sample) <= radius);
}

export function getProgressPercent(visitedCount, totalCount) {
  if (!totalCount) {
    return 0;
  }

  return clamp((visitedCount / totalCount) * 100, 0, 100);
}
