// Alphabet letters
export const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Shuffle array
export function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// Random balloon color
export function randomColor() {
  const colors = [
    "bg-pink-500",
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-purple-500",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

// Create one game round
export function createRound() {
  const correct =
    LETTERS[Math.floor(Math.random() * LETTERS.length)];

  const wrong = shuffle(
    LETTERS.filter((l) => l !== correct)
  ).slice(0, 3);

  const options = shuffle([correct, ...wrong]);

  return {
    target: correct,
    balloons: options.map((letter) => ({
      id: crypto.randomUUID(),
      letter,
      left: 10 + Math.random() * 75,
      duration: 7 + Math.random() * 2,
      color: randomColor(),
    })),
  };
}

// Save High Score
export function saveHighScore(score) {
  const best = Number(localStorage.getItem("balloon-high-score") || 0);

  if (score > best) {
    localStorage.setItem("balloon-high-score", score);
  }
}

// Get High Score
export function getHighScore() {
  return Number(localStorage.getItem("balloon-high-score") || 0);
}