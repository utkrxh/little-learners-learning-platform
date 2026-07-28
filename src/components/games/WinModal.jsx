import { motion } from "framer-motion";

function WinModal({
  score,
  highScore,
  unlockedBadges = [],
  onRestart,
}) {
  return (
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">

      <motion.div
        initial={{
          scale: 0,
          rotate: 10,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
        className="bg-white rounded-3xl shadow-2xl p-12 w-[500px] text-center"
      >
        <div className="text-8xl">
          🎉🏆🎈
        </div>

        <h1 className="text-5xl font-black text-green-600 mt-6">
          Congratulations!
        </h1>

        <p className="text-2xl mt-5">
          You completed the Balloon Game!
        </p>

        <div className="mt-8 space-y-3">

          <p className="text-2xl font-bold">
            ⭐ Score: {score}
          </p>

          <p className="text-xl">
            🏆 High Score: {highScore}
          </p>

        </div>

        <div className="mt-6 rounded-2xl bg-yellow-50 p-4 ring-2 ring-yellow-100">
          <p className="text-lg font-black text-yellow-700">
            🎈 Balloon Champ badge earned!
          </p>
          {unlockedBadges.length > 0 && (
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {unlockedBadges.map((badge) => (
                <span
                  key={badge.id}
                  className="rounded-full bg-white px-4 py-2 text-sm font-black text-sky-700 shadow-sm"
                >
                  {badge.icon} {badge.title}
                </span>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={onRestart}
          className="mt-10 bg-green-500 hover:bg-green-600 transition text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg"
        >
          ▶️ Play Again
        </button>

      </motion.div>

    </div>
  );
}

export default WinModal;
