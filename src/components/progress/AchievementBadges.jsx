import { getAchievementById } from "../../progress/learningProgress";

function AchievementBadges({ badgeIds, compact = false }) {
  const badges = badgeIds.map(getAchievementById).filter(Boolean);

  if (!badges.length) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-sky-200 bg-white/80 p-5 text-center">
        <p className="text-lg font-black text-sky-700">Badges are waiting</p>
        <p className="mt-1 text-sm font-bold text-slate-500">
          Trace letters or win a game to unlock your first badge.
        </p>
      </div>
    );
  }

  return (
    <div className={compact ? "flex flex-wrap gap-3" : "grid gap-3 sm:grid-cols-2 lg:grid-cols-3"}>
      {badges.map((badge) => (
        <article
          key={badge.id}
          className="rounded-2xl bg-white p-4 shadow-md ring-2 ring-yellow-100"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-100 text-3xl">
              {badge.icon}
            </span>
            <div>
              <h3 className="text-base font-black text-sky-800">
                {badge.title}
              </h3>
              {!compact && (
                <p className="text-sm font-bold text-slate-500">
                  {badge.description}
                </p>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default AchievementBadges;
