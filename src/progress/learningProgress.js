const STORAGE_KEY = "little-learners-progress";
const PROGRESS_EVENT = "little-learners-progress-updated";

export const ACHIEVEMENTS = {
  FIRST_TRACE: {
    id: "first-trace",
    icon: "✍️",
    title: "First Trace",
    description: "Complete your first tracing letter.",
  },
  TRACE_FIVE: {
    id: "trace-five",
    icon: "🌟",
    title: "Tracing Star",
    description: "Trace 5 different letters.",
  },
  ALPHABET_TRACER: {
    id: "alphabet-tracer",
    icon: "🏅",
    title: "Alphabet Tracer",
    description: "Trace every letter from A to Z.",
  },
  BALLOON_WIN: {
    id: "balloon-win",
    icon: "🎈",
    title: "Balloon Champ",
    description: "Win the balloon game.",
  },
  STREAK_THREE: {
    id: "streak-three",
    icon: "🔥",
    title: "3 Day Streak",
    description: "Learn for 3 days in a row.",
  },
  STREAK_SEVEN: {
    id: "streak-seven",
    icon: "☀️",
    title: "7 Day Streak",
    description: "Learn for 7 days in a row.",
  },
};

const DEFAULT_PROGRESS = {
  badges: [],
  balloonWins: 0,
  lastActiveDate: "",
  streak: 0,
  tracedLetters: [],
};

function getTodayKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getDateDiffInDays(fromDateKey, toDateKey) {
  if (!fromDateKey || !toDateKey) {
    return Number.POSITIVE_INFINITY;
  }

  const fromDate = new Date(`${fromDateKey}T00:00:00`);
  const toDate = new Date(`${toDateKey}T00:00:00`);

  return Math.round((toDate - fromDate) / 86400000);
}

function normalizeProgress(progress) {
  return {
    ...DEFAULT_PROGRESS,
    ...progress,
    badges: Array.isArray(progress?.badges) ? progress.badges : [],
    tracedLetters: Array.isArray(progress?.tracedLetters) ? progress.tracedLetters : [],
  };
}

function readProgress() {
  if (typeof window === "undefined") {
    return DEFAULT_PROGRESS;
  }

  try {
    return normalizeProgress(JSON.parse(window.localStorage.getItem(STORAGE_KEY)));
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function writeProgress(progress) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new CustomEvent(PROGRESS_EVENT, { detail: progress }));
}

function addBadge(progress, achievement, unlockedBadges) {
  if (progress.badges.includes(achievement.id)) {
    return progress;
  }

  unlockedBadges.push(achievement);

  return {
    ...progress,
    badges: [...progress.badges, achievement.id],
  };
}

function recordDailyActivity(progress, unlockedBadges) {
  const today = getTodayKey();

  if (progress.lastActiveDate === today) {
    return progress;
  }

  const dayDiff = getDateDiffInDays(progress.lastActiveDate, today);
  const nextProgress = {
    ...progress,
    lastActiveDate: today,
    streak: dayDiff === 1 ? progress.streak + 1 : 1,
  };

  let progressWithBadges = nextProgress;

  if (nextProgress.streak >= 3) {
    progressWithBadges = addBadge(progressWithBadges, ACHIEVEMENTS.STREAK_THREE, unlockedBadges);
  }

  if (nextProgress.streak >= 7) {
    progressWithBadges = addBadge(progressWithBadges, ACHIEVEMENTS.STREAK_SEVEN, unlockedBadges);
  }

  return progressWithBadges;
}

export function getLearningProgress() {
  return readProgress();
}

export function getAchievementById(id) {
  return Object.values(ACHIEVEMENTS).find((achievement) => achievement.id === id);
}

export function subscribeToLearningProgress(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleProgressUpdate = (event) => {
    callback(event.detail ?? readProgress());
  };

  const handleStorageUpdate = (event) => {
    if (event.key === STORAGE_KEY) {
      callback(readProgress());
    }
  };

  window.addEventListener(PROGRESS_EVENT, handleProgressUpdate);
  window.addEventListener("storage", handleStorageUpdate);

  return () => {
    window.removeEventListener(PROGRESS_EVENT, handleProgressUpdate);
    window.removeEventListener("storage", handleStorageUpdate);
  };
}

export function recordTracingCompletion(letter) {
  const unlockedBadges = [];
  const progress = recordDailyActivity(readProgress(), unlockedBadges);
  const normalizedLetter = letter.toUpperCase();
  const tracedLetters = new Set(progress.tracedLetters);
  const alreadyCompleted = tracedLetters.has(normalizedLetter);

  tracedLetters.add(normalizedLetter);

  let nextProgress = {
    ...progress,
    tracedLetters: [...tracedLetters].sort(),
  };

  if (!alreadyCompleted && tracedLetters.size >= 1) {
    nextProgress = addBadge(nextProgress, ACHIEVEMENTS.FIRST_TRACE, unlockedBadges);
  }

  if (tracedLetters.size >= 5) {
    nextProgress = addBadge(nextProgress, ACHIEVEMENTS.TRACE_FIVE, unlockedBadges);
  }

  if (tracedLetters.size >= 26) {
    nextProgress = addBadge(nextProgress, ACHIEVEMENTS.ALPHABET_TRACER, unlockedBadges);
  }

  writeProgress(nextProgress);

  return {
    alreadyCompleted,
    progress: nextProgress,
    unlockedBadges,
  };
}

export function recordBalloonWin() {
  const unlockedBadges = [];
  const progress = recordDailyActivity(readProgress(), unlockedBadges);
  let nextProgress = {
    ...progress,
    balloonWins: progress.balloonWins + 1,
  };

  nextProgress = addBadge(nextProgress, ACHIEVEMENTS.BALLOON_WIN, unlockedBadges);
  writeProgress(nextProgress);

  return {
    progress: nextProgress,
    unlockedBadges,
  };
}
