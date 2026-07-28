import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

import { VIEW_BOX } from "./letterPaths";
import useTracing from "./useTracing";

function TraceCanvas({ letterData, onComplete, onProgressChange }) {
  const {
    completed,
    drawnPathData,
    progress,
    registerPath,
    resetTracing,
    svgRef,
    tracingHandlers,
  } = useTracing({
    letter: letterData.letter,
    onComplete,
  });

  useEffect(() => {
    onProgressChange?.({
      completed,
      progress,
    });
  }, [completed, onProgressChange, progress]);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VIEW_BOX.width} ${VIEW_BOX.height}`}
        role="img"
        aria-label={`Trace uppercase ${letterData.letter}`}
        className="h-auto w-full max-w-[700px] touch-none select-none rounded-[28px] border-8 border-sky-300 bg-white shadow-2xl"
        {...tracingHandlers}
      >
        <rect
          width={VIEW_BOX.width}
          height={VIEW_BOX.height}
          rx="24"
          fill="#ffffff"
        />

        {letterData.paths.map((path, index) => (
          <path
            key={`hit-${letterData.letter}-${index}`}
            ref={(element) => registerPath(element, index)}
            d={path}
            fill="none"
            stroke="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="70"
          />
        ))}

        {letterData.paths.map((path, index) => (
          <path
            key={`guide-${letterData.letter}-${index}`}
            d={path}
            fill="none"
            stroke="#cbd5e1"
            strokeDasharray="2 20"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="46"
          />
        ))}

        {drawnPathData.map((path, index) => (
          <path
            key={`${letterData.letter}-drawn-${index}`}
            d={path}
            fill="none"
            stroke="#0ea5e9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="34"
          />
        ))}
      </svg>

      <button
        type="button"
        onClick={resetTracing}
        className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 text-lg font-black text-white shadow-lg transition hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-200"
      >
        <RotateCcw size={22} aria-hidden="true" />
        Clear
      </button>
    </div>
  );
}

export default TraceCanvas;
