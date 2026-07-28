function DailyStreakCounter({ streak }) {
  return (
    <div className="rounded-3xl bg-orange-50 p-5 text-center shadow-md ring-2 ring-orange-100">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-500">
        Daily Streak
      </p>
      <div className="mt-2 flex items-end justify-center gap-2 text-orange-600">
        <span className="text-5xl font-black tabular-nums">{streak}</span>
        <span className="pb-2 text-lg font-black">days</span>
      </div>
      <p className="mt-2 text-sm font-bold text-slate-500">
        Complete a lesson or win a game today.
      </p>
    </div>
  );
}

export default DailyStreakCounter;
