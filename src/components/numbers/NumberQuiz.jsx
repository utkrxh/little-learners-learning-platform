import { useMemo, useState } from "react";
import numbers from "../../data/numbers";

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function NumberQuiz({ currentNumber, onCorrect }) {
  const quiz = useMemo(() => {
    const answer = currentNumber;

    const wrong = shuffle(
      numbers
        .filter((n) => n.number !== answer)
        .map((n) => n.number)
    ).slice(0, 3);

    return {
      answer,
      options: shuffle([answer, ...wrong]),
    };
  }, [currentNumber]);

  const [selected, setSelected] = useState(null);

  const choose = (num) => {
    if (selected !== null) return;

    setSelected(num);

    if (num === quiz.answer) {
      setTimeout(() => {
        onCorrect();
      }, 1000);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">

      <h2 className="text-4xl font-bold text-sky-600 mb-8">
        🎯 Which number is
      </h2>

      <div className="text-8xl font-black text-pink-500 mb-10">
        {quiz.answer}
      </div>

      <div className="grid grid-cols-2 gap-6">

        {quiz.options.map((option) => {

          const correct = option === quiz.answer;

          const clicked = option === selected;

          return (
            <button
              key={option}
              onClick={() => choose(option)}
              className={`rounded-2xl p-6 text-3xl font-bold transition
              ${
                selected === null
                  ? "bg-sky-400 hover:bg-sky-500 text-white"
                  : clicked && correct
                  ? "bg-green-500 text-white"
                  : clicked
                  ? "bg-red-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {option}
            </button>
          );
        })}

      </div>

      {selected !== null && selected !== quiz.answer && (
        <div className="mt-8">

          <p className="text-red-600 text-2xl font-bold">
            ❌ Try Again
          </p>

          <button
            onClick={() => setSelected(null)}
            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl"
          >
            Try Again
          </button>

        </div>
      )}

    </div>
  );
}

export default NumberQuiz;