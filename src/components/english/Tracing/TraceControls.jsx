import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";

function TraceControls({
  isFirstLetter,
  isLastLetter,
  onNext,
  onPrevious,
  onReplayAudio,
}) {
  const buttonClass =
    "inline-flex min-w-36 items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-black text-white shadow-lg transition focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-45 sm:text-lg";

  return (
    <nav
      className="flex w-full flex-wrap items-center justify-center gap-3"
      aria-label="Tracing letter controls"
    >
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstLetter}
        className={`${buttonClass} bg-amber-500 hover:bg-amber-600 focus:ring-amber-200`}
      >
        <ChevronLeft size={22} aria-hidden="true" />
        Previous
      </button>

      <button
        type="button"
        onClick={onReplayAudio}
        className={`${buttonClass} bg-sky-500 hover:bg-sky-600 focus:ring-sky-200`}
      >
        <Volume2 size={22} aria-hidden="true" />
        Replay
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={isLastLetter}
        className={`${buttonClass} bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-200`}
      >
        Next
        <ChevronRight size={22} aria-hidden="true" />
      </button>
    </nav>
  );
}

export default TraceControls;
