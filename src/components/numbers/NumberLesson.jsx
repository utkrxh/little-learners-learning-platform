import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

import numbers from "../../data/numbers";

import CountingObjects from "./CountingObjects";
import NumberProgress from "./NumberProgress";
import NumberBadge from "./NumberBadge";
import NumberQuiz from "./NumberQuiz";

function NumberLesson() {
  const [index, setIndex] = useState(() => {
    const saved = localStorage.getItem("number-progress");
    return saved ? Number(saved) : 0;
  });

  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const audioRef = useRef(null);

  const current = numbers[index];

  // Save progress
  useEffect(() => {
    localStorage.setItem("number-progress", index);
  }, [index]);

  // Stop previous audio when changing page
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Play audio
  const speak = (src) => {
    try {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(src);
      audio.preload = "auto";

      audio.play().catch((err) => {
        console.log("Audio blocked:", err);
      });

      audioRef.current = audio;
    } catch (err) {
      console.log(err);
    }
  };

  // Auto play AFTER first interaction
  useEffect(() => {
    if (!showQuiz && document.hasFocus()) {
      setTimeout(() => {
        speak(current.audio);
      }, 250);
    }
  }, [index, showQuiz]);

  const playAudio = () => {
    speak(current.audio);
  };

  const next = () => {
    if ((index + 1) % 10 === 0 && index !== numbers.length - 1) {
      setShowQuiz(true);
      return;
    }

    if (index < numbers.length - 1) {
      const newIndex = index + 1;
      setIndex(newIndex);

      setTimeout(() => {
        speak(numbers[newIndex].audio);
      }, 150);
    } else {
      setCompleted(true);
    }
  };

  const previous = () => {
    if (index > 0) {
      const newIndex = index - 1;
      setIndex(newIndex);

      setTimeout(() => {
        speak(numbers[newIndex].audio);
      }, 150);
    }
  };

  const handleQuizCorrect = () => {
    setScore((prev) => prev + 20);
    setShowQuiz(false);

    if (index < numbers.length - 1) {
      const newIndex = index + 1;
      setIndex(newIndex);

      setTimeout(() => {
        speak(numbers[newIndex].audio);
      }, 200);
    } else {
      setCompleted(true);
    }
  };

  const restart = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    setCompleted(false);
    setShowQuiz(false);
    setIndex(0);
    setScore(0);

    localStorage.removeItem("number-progress");

    setTimeout(() => {
      speak(numbers[0].audio);
    }, 300);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-sky-700">
          ⭐ XP: {score}
        </h2>

        <NumberBadge score={score} />
      </div>

      <NumberProgress
        current={index + 1}
        total={numbers.length}
      />

      {showQuiz ? (
        <NumberQuiz currentNumber={current.number}
  onCorrect={handleQuizCorrect} />
      ) : (
        <>
          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -40,
                scale: 0.9,
              }}
              transition={{
                duration: 0.45,
              }}
              className="bg-white rounded-3xl shadow-2xl p-10 text-center"
            >

              <h1 className="text-8xl font-black text-sky-500">
                {current.number}
              </h1>

              <CountingObjects
                number={current.number}
              />

              <h2 className="text-5xl font-bold mb-6">
                {current.word}
              </h2>

              <button
                onClick={playAudio}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-xl transition hover:scale-105"
              >
                🔊 Speak Again
              </button>

            </motion.div>

          </AnimatePresence>

          <div className="flex justify-between mt-10">

            <button
              onClick={previous}
              disabled={index === 0}
              className="bg-sky-500 hover:bg-sky-600 disabled:opacity-40 text-white px-8 py-3 rounded-xl"
            >
              ⬅ Previous
            </button>

            <button
              onClick={next}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl"
            >
              {index === numbers.length - 1
                ? "Finish 🎉"
                : "Next ➡"}
            </button>

          </div>

        </>
      )}

      {completed && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <Confetti
            recycle={false}
            numberOfPieces={500}
          />

          <div className="bg-white rounded-3xl p-10 shadow-2xl text-center max-w-lg">

            <h1 className="text-6xl mb-4">
              🎉
            </h1>

            <h2 className="text-4xl font-bold text-green-600">
              Congratulations!
            </h2>

            <p className="text-xl mt-4">
              You completed Numbers 1–100!
            </p>

            <div className="mt-6 text-3xl font-bold">
              ⭐ Final XP: {score}
            </div>

            <NumberBadge score={score} />

            <button
              onClick={restart}
              className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold"
            >
              🔄 Learn Again
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default NumberLesson;