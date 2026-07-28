import { useCallback, useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import Balloon from "./Balloon";
import GameHeader from "./GameHeader";
import GameOverModal from "./GameOverModal";
import WinModal from "./WinModal";
import { createRound, getHighScore, saveHighScore } from "./utils";
import { recordBalloonWin } from "../../progress/learningProgress";

function BalloonGame() {
  const winRecordedRef = useRef(false);
  const [round, setRound] = useState(createRound());
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [highScore, setHighScore] = useState(getHighScore());
  const [winBadges, setWinBadges] = useState([]);

  const won = score >= 10;
  const gameOver = lives <= 0;

  // 🔊 Play the current letter audio
  const speak = useCallback((letter) => {
    const index = letter.charCodeAt(0) - 64;

    const audio = new Audio(
      new URL(
        `../../assets/audio/alphabet/${index}.mp3`,
        import.meta.url
      ).href
    );

    audio.play().catch((err) => {
      console.error("Audio failed:", err);
    });
  }, []);

  // Play audio whenever a new round starts
  useEffect(() => {
    speak(round.target);
  }, [round, speak]);

  useEffect(() => {
    saveHighScore(score);
    setHighScore(getHighScore());
    setLevel(Math.floor(score / 3) + 1);
  }, [score]);

  useEffect(() => {
    if (!won || winRecordedRef.current) {
      return;
    }

    winRecordedRef.current = true;
    const result = recordBalloonWin();
    setWinBadges(result.unlockedBadges);
  }, [won]);

  const nextRound = () => {
    setRound(createRound());
  };

  const onCorrect = () => {
    if (won || gameOver) return;

    setScore((s) => s + 1);

    setTimeout(() => {
      nextRound();
    }, 300);
  };

  const loseLife = () => {
    if (won || gameOver) return;

    setLives((l) => l - 1);

    setTimeout(() => {
      nextRound();
    }, 300);
  };

  const restart = () => {
    winRecordedRef.current = false;
    setScore(0);
    setLives(3);
    setLevel(1);
    setWinBadges([]);
    setRound(createRound());
  };

  return (
    <div className="relative h-[90vh] overflow-hidden bg-gradient-to-b from-sky-200 to-cyan-400">

      {won && (
        <Confetti recycle={false} numberOfPieces={300} />
      )}

      <GameHeader
        score={score}
        lives={lives}
        highScore={highScore}
        target={round.target}
        level={level}
        onSpeak={() => speak(round.target)}
      />

      {!won &&
        !gameOver &&
        round.balloons.map((b) => (
          <Balloon
            key={b.id}
            balloon={{
              ...b,
              duration: Math.max(2, b.duration - level * 0.4),
            }}
            target={round.target}
            onCorrect={onCorrect}
            onWrong={loseLife}
            onMiss={loseLife}
          />
        ))}

      {won && (
        <WinModal
          score={score}
          highScore={highScore}
          unlockedBadges={winBadges}
          onRestart={restart}
        />
      )}

      {gameOver && (
        <GameOverModal
          score={score}
          highScore={highScore}
          onRestart={restart}
        />
      )}

    </div>
  );
}

export default BalloonGame;
