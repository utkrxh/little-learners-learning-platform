function GameHeader({
  score,
  lives,
  highScore,
  target,
  onSpeak,
  level,
}) {
  return (
    <>
      {/* Left Panel */}
      <div className="absolute top-5 left-5 z-50 bg-white rounded-2xl shadow-xl px-6 py-4">

        <h2 className="text-2xl font-bold">
          ⭐ Score: {score}
        </h2>

        <p className="text-lg mt-2">
          ❤️ Lives: {lives}
        </p>

        <p className="text-lg mt-2">
          🏆 High Score: {highScore}
        </p>

        <p className="text-lg mt-2">
          📈 Level: {level}
        </p>

      </div>

      {/* Center Panel */}

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 text-center">

        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          🎈 Balloon Pop Game
        </h1>

        <p className="mt-5 text-2xl text-white font-semibold">
          Pop the letter
        </p>

        <h2 className="text-8xl text-yellow-300 font-black mt-3">
          {target}
        </h2>

        <button
          onClick={onSpeak}
          className="mt-6 bg-pink-500 hover:bg-pink-600 transition text-white px-8 py-3 rounded-full text-xl font-bold shadow-xl"
        >
          🔊 Hear Again
        </button>

      </div>
    </>
  );
}

export default GameHeader;