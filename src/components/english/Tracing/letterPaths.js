export const VIEW_BOX = {
  width: 700,
  height: 500,
};

const makeLetter = (letter, word, paths) => ({
  letter,
  word,
  paths,
});

// Each entry uses real SVG path commands, split into natural pencil strokes.
// Keeping strokes separate makes distance-based progress predictable for kids.
export const LETTER_PATHS = [
  makeLetter("A", "Apple", [
    "M170 420 L350 80 L530 420",
    "M245 285 L455 285",
  ]),
  makeLetter("B", "Ball", [
    "M205 82 L205 420",
    "M205 85 C385 75 485 115 485 205 C485 275 405 305 205 295",
    "M205 295 C425 285 505 330 505 405 C505 475 380 445 205 420",
  ]),
  makeLetter("C", "Cat", [
    "M510 145 C450 80 320 70 235 125 C125 195 115 350 225 415 C315 468 450 445 515 365",
  ]),
  makeLetter("D", "Dog", [
    "M205 82 L205 420",
    "M205 82 C405 80 525 145 525 250 C525 360 405 425 205 420",
  ]),
  makeLetter("E", "Elephant", [
    "M500 90 L205 90 L205 420 L505 420",
    "M205 255 L455 255",
  ]),
  makeLetter("F", "Fish", [
    "M205 420 L205 90 L510 90",
    "M205 255 L455 255",
  ]),
  makeLetter("G", "Grapes", [
    "M520 150 C455 75 315 70 225 130 C115 205 120 360 235 420 C345 475 500 425 525 315",
    "M525 315 L390 315 L390 250",
  ]),
  makeLetter("H", "Hen", [
    "M190 90 L190 420",
    "M510 90 L510 420",
    "M190 255 L510 255",
  ]),
  makeLetter("I", "Ice Cream", [
    "M245 90 L455 90",
    "M350 90 L350 420",
    "M245 420 L455 420",
  ]),
  makeLetter("J", "Jug", [
    "M235 90 L505 90",
    "M390 90 L390 330 C390 425 320 455 245 410 C210 388 195 350 205 310",
  ]),
  makeLetter("K", "Kite", [
    "M205 90 L205 420",
    "M500 90 L205 270",
    "M275 230 L515 420",
  ]),
  makeLetter("L", "Lion", [
    "M215 90 L215 420 L505 420",
  ]),
  makeLetter("M", "Monkey", [
    "M165 420 L165 90 L350 300 L535 90 L535 420",
  ]),
  makeLetter("N", "Nest", [
    "M190 420 L190 90 L510 420 L510 90",
  ]),
  makeLetter("O", "Orange", [
    "M350 80 C470 80 555 150 555 255 C555 360 470 430 350 430 C230 430 145 360 145 255 C145 150 230 80 350 80 Z",
  ]),
  makeLetter("P", "Parrot", [
    "M205 420 L205 90",
    "M205 90 C385 75 500 125 500 220 C500 315 385 335 205 310",
  ]),
  makeLetter("Q", "Queen", [
    "M350 80 C470 80 555 150 555 255 C555 360 470 430 350 430 C230 430 145 360 145 255 C145 150 230 80 350 80 Z",
    "M425 350 L535 445",
  ]),
  makeLetter("R", "Rabbit", [
    "M205 420 L205 90",
    "M205 90 C385 75 500 125 500 220 C500 315 385 335 205 305",
    "M300 305 L515 420",
  ]),
  makeLetter("S", "Sun", [
    "M505 135 C445 75 295 65 220 130 C150 190 190 250 335 275 C500 305 535 370 455 420 C370 475 220 450 170 370",
  ]),
  makeLetter("T", "Tiger", [
    "M170 90 L530 90",
    "M350 90 L350 420",
  ]),
  makeLetter("U", "Umbrella", [
    "M180 90 L180 300 C180 390 245 430 350 430 C455 430 520 390 520 300 L520 90",
  ]),
  makeLetter("V", "Van", [
    "M165 90 L350 420 L535 90",
  ]),
  makeLetter("W", "Watch", [
    "M130 90 L220 420 L350 190 L480 420 L570 90",
  ]),
  makeLetter("X", "Xylophone", [
    "M175 90 L525 420",
    "M525 90 L175 420",
  ]),
  makeLetter("Y", "Yak", [
    "M170 90 L350 265 L530 90",
    "M350 265 L350 420",
  ]),
  makeLetter("Z", "Zebra", [
    "M175 90 L525 90 L175 420 L525 420",
  ]),
];

export const LETTERS = LETTER_PATHS.map(({ letter }) => letter);

export default LETTER_PATHS;
