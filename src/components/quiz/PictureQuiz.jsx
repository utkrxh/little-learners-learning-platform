import { useState } from "react";
import { motion } from "framer-motion";

function PictureQuiz({
  question,
  options,
  correct,
  onCorrect,
}) {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    if (selected) return;

    setSelected(option.letter);

    if (option.letter === correct.letter) {
      setTimeout(() => {
        onCorrect();
      }, 1200);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-3xl shadow-2xl p-10 mt-8"
    >
      <h2 className="text-5xl font-bold text-center text-sky-500 mb-4">
        🧩 Quiz Time!
      </h2>

      <p className="text-2xl text-center mb-10">
        {question}
      </p>

      <div className="grid grid-cols-2 gap-6">

        {options.map((option) => {
          const isCorrect = option.letter === correct.letter;
          const isSelected = selected === option.letter;

          let style =
            "bg-yellow-100 hover:bg-yellow-200";

          if (selected) {
            if (isCorrect) {
              style =
                "bg-green-400 text-white scale-105";
            } else if (isSelected) {
              style =
                "bg-red-400 text-white";
            }
          }

          return (
            <motion.button
              key={option.letter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={
                isSelected &&
                !isCorrect && {
                  x: [-10, 10, -10, 10, 0],
                }
              }
              transition={{
                duration: 0.4,
              }}
              onClick={() => handleClick(option)}
              className={`${style} rounded-3xl p-8 transition duration-300`}
            >
              <div className="text-7xl">
                {option.emoji}
              </div>

              <p className="mt-4 text-2xl font-bold">
                {option.word}
              </p>

              {selected && isCorrect && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-4 text-2xl font-bold"
                >
                  ⭐ +10 XP
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default PictureQuiz;