import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

import alphabet from "../../data/alphabet";

import ProgressBar from "./ProgressBar";
import Badge from "../common/Badge";
import QuizEngine from "../quiz/QuizEngine";

function AlphabetLesson() {
  const [index, setIndex] = useState(() => {
    const saved = localStorage.getItem("alphabet-progress");
    return saved ? Number(saved) : 0;
  });

  const [completed, setCompleted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);

  const audioRef = useRef(null);

  const current = alphabet[index];

  useEffect(() => {
    localStorage.setItem("alphabet-progress", index);

    if (!showQuiz && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();

      setTimeout(() => {
        audioRef.current?.play().catch(() => {});
      }, 250);
    }
  }, [index, showQuiz]);

  const playAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  const next = () => {
    // Show quiz after every 5 letters except Z
    if ((index + 1) % 5 === 0 && index !== alphabet.length - 1) {
      setShowQuiz(true);
      return;
    }

    if (index < alphabet.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const previous = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleQuizCorrect = () => {
    setScore((prev) => prev + 10);
    setShowQuiz(false);

    if (index < alphabet.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const restart = () => {
    setCompleted(false);
    setShowQuiz(false);
    setIndex(0);
    setScore(0);
    localStorage.removeItem("alphabet-progress");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-sky-600">
            ⭐ XP: {score}
          </h2>
        </div>

        <Badge score={score} />

        <div className="text-2xl">
          {"⭐".repeat(index + 1)}
        </div>

      </div>

      {/* Progress */}
      <ProgressBar
        current={index + 1}
        total={alphabet.length}
      />

      {/* Quiz */}
      {showQuiz ? (
        <QuizEngine
          currentIndex={index}
          onCorrect={handleQuizCorrect}
        />
      ) : (
        <>
          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -50,
                scale: 0.9,
              }}
              transition={{
                duration: 0.45,
                type: "spring",
              }}
              className="bg-white rounded-3xl shadow-2xl p-10 mt-8 text-center"
            >

              <h1 className="text-8xl font-extrabold text-sky-500">
                {current.letter}
              </h1>

              <motion.div
                className="text-[160px] my-6"
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, -6, 6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                {current.emoji}
              </motion.div>

              <h2 className="text-5xl font-bold mb-8">
                {current.word}
              </h2>

              <audio
                ref={audioRef}
                src={current.audio}
              />

              <button
                onClick={playAudio}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-xl transition"
              >
                🔊 Speak Again
              </button>

            </motion.div>

          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-10">

            <button
              onClick={previous}
              disabled={index === 0}
              className="bg-sky-500 hover:bg-sky-600 disabled:opacity-40 text-white px-6 py-3 rounded-xl"
            >
              ⬅ Previous
            </button>

            <button
              onClick={next}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              {index === alphabet.length - 1
                ? "Finish 🎉"
                : "Next ➡"}
            </button>

          </div>
        </>
      )}

      {/* Celebration */}
      {completed && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <Confetti
            recycle={false}
            numberOfPieces={450}
          />

          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-lg">

            <h1 className="text-6xl mb-4">
              🎉
            </h1>

            <h2 className="text-4xl font-bold text-green-600">
              Congratulations!
            </h2>

            <p className="text-xl mt-4">
              You completed the English Alphabet!
            </p>

            <div className="mt-6 text-3xl font-bold">
              ⭐ Final XP: {score}
            </div>

            <Badge score={score} />

            <button
              onClick={restart}
              className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold"
            >
              🔄 Learn Again
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default AlphabetLesson;