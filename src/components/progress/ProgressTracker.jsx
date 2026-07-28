function ProgressTracker({
  label,
  value,
  max = 100,
  tone = "sky",
  caption,
}) {
  const percent = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  const fillClass =
    tone === "emerald"
      ? "from-emerald-400 via-teal-400 to-sky-400"
      : "from-sky-400 via-blue-500 to-emerald-400";

  return (
    <section className="w-full" aria-label={label}>
      <div className="mb-2 flex items-center justify-between gap-4 text-sky-800">
        <p className="text-base font-black sm:text-lg">{label}</p>
        <p className="text-base font-black tabular-nums sm:text-lg">
          {percent}%
        </p>
      </div>

      <div className="h-5 overflow-hidden rounded-full bg-slate-200 shadow-inner">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${fillClass} transition-[width] duration-300`}
          style={{ width: `${percent}%` }}
        />
      </div>

      {caption && (
        <p className="mt-2 text-sm font-bold text-slate-500">
          {caption}
        </p>
      )}
    </section>
  );
}

export default ProgressTracker;
