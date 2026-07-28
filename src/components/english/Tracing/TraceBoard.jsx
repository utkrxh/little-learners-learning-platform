import { useCallback, useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";

import TraceCanvas from "./TraceCanvas";
import TraceControls from "./TraceControls";
import TraceProgress from "./TraceProgress";
import TraceReward from "./TraceReward";
import LETTER_PATHS from "./letterPaths";
import { recordTracingCompletion } from "../../../progress/learningProgress";

const STORAGE_KEY = "little-learners-tracing-index";
const AUTO_NEXT_DELAY = 1000;

function getSavedIndex() {
  const savedIndex = Number(localStorage.getItem(STORAGE_KEY));

  if (Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < LETTER_PATHS.length) {
    return savedIndex;
  }

  return 0;
}

function getLetterAudio(index) {
  return new URL(`../../../assets/audio/alphabet/${index + 1}.mp3`, import.meta.url).href;
}

function TraceBoard() {
  const autoNextTimeout = useRef(null);
  const [letterIndex, setLetterIndex] = useState(getSavedIndex);
  const [showConfetti, setShowConfetti] = useState(false);
  const [unlockedBadges, setUnlockedBadges] = useState([]);
  const [traceState, setTraceState] = useState({
    completed: false,
    progress: 0,
  });

  const currentLetter = LETTER_PATHS[letterIndex];
  const isFirstLetter = letterIndex === 0;
  const isLastLetter = letterIndex === LETTER_PATHS.length - 1;

  const clearAutoNext = useCallback(() => {
    if (autoNextTimeout.current) {
      window.clearTimeout(autoNextTimeout.current);
      autoNextTimeout.current = null;
    }
  }, []);

  const playLetterAudio = useCallback(() => {
    const audio = new Audio(getLetterAudio(letterIndex));
    audio.play().catch(() => {});
  }, [letterIndex]);

  const goToLetter = useCallback(
    (nextIndex) => {
      clearAutoNext();
      setLetterIndex(nextIndex);
      setTraceState({
        completed: false,
        progress: 0,
      });
      setUnlockedBadges([]);
    },
    [clearAutoNext]
  );

  const goPrevious = useCallback(() => {
    goToLetter(Math.max(0, letterIndex - 1));
  }, [goToLetter, letterIndex]);

  const goNext = useCallback(() => {
    goToLetter(Math.min(LETTER_PATHS.length - 1, letterIndex + 1));
  }, [goToLetter, letterIndex]);

  const handleProgressChange = useCallback((nextTraceState) => {
    setTraceState(nextTraceState);
  }, []);

  const handleComplete = useCallback(() => {
    clearAutoNext();
    const result = recordTracingCompletion(currentLetter.letter);
    setUnlockedBadges(result.unlockedBadges);

    if (isLastLetter) {
      setShowConfetti(true);
      window.setTimeout(() => setShowConfetti(false), 5000);
      return;
    }

    autoNextTimeout.current = window.setTimeout(() => {
      setTraceState({
        completed: false,
        progress: 0,
      });
      setUnlockedBadges([]);
      setLetterIndex((index) => Math.min(LETTER_PATHS.length - 1, index + 1));
    }, AUTO_NEXT_DELAY);
  }, [clearAutoNext, currentLetter.letter, isLastLetter]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(letterIndex));
    playLetterAudio();
  }, [letterIndex, playLetterAudio]);

  useEffect(
    () => () => {
      clearAutoNext();
    },
    [clearAutoNext]
  );

  return (
    <main className="min-h-screen bg-sky-100 px-4 py-8 sm:px-6 lg:px-8">
      {showConfetti && <Confetti recycle={false} numberOfPieces={450} />}

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <header className="text-center">
          <p className="text-lg font-black uppercase tracking-[0.18em] text-sky-500">
            Alphabet Tracing
          </p>
          <h1 className="mt-2 text-5xl font-black text-sky-800 sm:text-7xl">
            {currentLetter.letter}
          </h1>
          <p className="mt-1 text-2xl font-bold text-slate-600 sm:text-3xl">
            {currentLetter.word}
          </p>
        </header>

        <TraceProgress letter={currentLetter.letter} progress={traceState.progress} />

        <TraceReward completed={traceState.completed} unlockedBadges={unlockedBadges} />

        <TraceCanvas
          key={currentLetter.letter}
          letterData={currentLetter}
          onComplete={handleComplete}
          onProgressChange={handleProgressChange}
        />

        <TraceControls
          isFirstLetter={isFirstLetter}
          isLastLetter={isLastLetter}
          onNext={goNext}
          onPrevious={goPrevious}
          onReplayAudio={playLetterAudio}
        />
      </div>
    </main>
  );
}

export default TraceBoard;
