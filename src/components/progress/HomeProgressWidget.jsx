import { Link } from "react-router-dom";

import useLearningProgress from "../../hooks/useLearningProgress";
import AchievementBadges from "./AchievementBadges";
import DailyStreakCounter from "./DailyStreakCounter";
import ProgressTracker from "./ProgressTracker";

function HomeProgressWidget() {
  const progress = useLearningProgress();
  const tracedCount = progress.tracedLetters.length;

  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-sky-50 p-6 shadow-lg ring-2 ring-sky-100 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-500">
                My Progress
              </p>
              <h2 className="mt-2 text-3xl font-black text-sky-800 sm:text-4xl">
                Keep your learning streak alive
              </h2>
            </div>

            <DailyStreakCounter streak={progress.streak} />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ProgressTracker
              label="Alphabet tracing"
              value={tracedCount}
              max={26}
              caption={`${tracedCount} of 26 letters traced`}
            />
            <ProgressTracker
              label="Balloon wins"
              value={progress.balloonWins}
              max={3}
              tone="emerald"
              caption={`${progress.balloonWins} wins collected`}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/tracing"
              className="rounded-full bg-sky-500 px-6 py-3 text-base font-black text-white shadow-md transition hover:bg-sky-600"
            >
              Trace letters
            </Link>
            <Link
              to="/balloons"
              className="rounded-full border-2 border-sky-300 bg-white px-6 py-3 text-base font-black text-sky-700 transition hover:bg-sky-100"
            >
              Play balloons
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-yellow-50 p-6 shadow-lg ring-2 ring-yellow-100 sm:p-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-600">
                Badges
              </p>
              <h2 className="mt-2 text-3xl font-black text-sky-800">
                Achievements
              </h2>
            </div>
            <p className="rounded-full bg-white px-4 py-2 text-lg font-black text-yellow-600 shadow-sm">
              {progress.badges.length}
            </p>
          </div>

          <AchievementBadges badgeIds={progress.badges} compact />
        </div>
      </div>
    </section>
  );
}

export default HomeProgressWidget;
