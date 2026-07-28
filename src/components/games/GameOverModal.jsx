import { motion } from "framer-motion";

function GameOverModal({
  score,
  highScore,
  onRestart,
}) {
  return (
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">

      <motion.div
        initial={{
          scale: 0,
          rotate: -10,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
        className="bg-white rounded-3xl shadow-2xl p-12 w-[450px] text-center"
      >
        <div className="text-7xl mb-5">
          😢
        </div>

        <h1 className="text-5xl font-black text-red-500">
          Game Over
        </h1>

        <p className="text-xl mt-6">
          Better luck next time!
        </p>

        <div className="mt-8 space-y-3">

          <p className="text-2xl font-bold">
            ⭐ Score: {score}
          </p>

          <p className="text-xl">
            🏆 High Score: {highScore}
          </p>

        </div>

        <button
          onClick={onRestart}
          className="mt-10 bg-sky-500 hover:bg-sky-600 transition text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg"
        >
          🔄 Play Again
        </button>

      </motion.div>

    </div>
  );
}

export default GameOverModal;