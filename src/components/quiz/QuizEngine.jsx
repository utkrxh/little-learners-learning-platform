import { useMemo } from "react";
import alphabet from "../../data/alphabet";
import PictureQuiz from "./PictureQuiz";

function shuffle(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function QuizEngine({ currentIndex, onCorrect }) {
  const current = alphabet[currentIndex];

  const options = useMemo(() => {
    const wrong = alphabet
      .filter((item) => item.letter !== current.letter)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    return shuffle([current, ...wrong]);
  }, [current]);

  return (
    <PictureQuiz
      question={`Which one is ${current.word}?`}
      options={options}
      correct={current}
      onCorrect={onCorrect}
    />
  );
}

export default QuizEngine;