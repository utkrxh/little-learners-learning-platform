import ProgressTracker from "../../progress/ProgressTracker";

function TraceProgress({ letter, progress }) {
  const roundedProgress = Math.round(progress);

  return (
    <div className="w-full max-w-2xl">
      <ProgressTracker label={`Trace ${letter}`} value={roundedProgress} />
    </div>
  );
}

export default TraceProgress;
