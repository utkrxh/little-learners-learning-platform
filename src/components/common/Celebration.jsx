import Confetti from "react-confetti";

function Celebration({ onRestart }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <Confetti recycle={false} numberOfPieces={400} />

      <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-lg mx-4">

        <h1 className="text-6xl mb-4">🎉</h1>

        <h2 className="text-4xl font-extrabold text-green-600">
          Congratulations!
        </h2>

        <p className="text-xl mt-4">
          You completed the English Alphabet!
        </p>

        <div className="text-5xl mt-6">
          🏆 ⭐ ⭐ ⭐ ⭐ ⭐
        </div>

        <button
          onClick={onRestart}
          className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold"
        >
          🔄 Learn Again
        </button>

      </div>
    </div>
  );
}

export default Celebration;