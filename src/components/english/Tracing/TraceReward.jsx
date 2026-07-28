function TraceReward({ completed, unlockedBadges = [] }) {
  return (
    <div
      aria-live="polite"
      className="flex min-h-16 flex-col items-center justify-center gap-2 text-center"
    >
      {completed && (
        <p className="animate-bounce rounded-full bg-emerald-100 px-6 py-3 text-3xl font-black text-emerald-600 shadow-lg sm:text-4xl">
          Excellent!
        </p>
      )}

      {unlockedBadges.map((badge) => (
        <p
          key={badge.id}
          className="rounded-full bg-yellow-100 px-5 py-2 text-base font-black text-yellow-700 shadow-md sm:text-lg"
        >
          {badge.icon} Badge unlocked: {badge.title}
        </p>
      ))}
    </div>
  );
}

export default TraceReward;
