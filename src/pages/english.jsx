import alphabet from "../data/alphabet";

function English() {

  function speak(letter, word) {
    const speech = new SpeechSynthesisUtterance(`${letter} for ${word}`);
    speech.rate = 0.8;
    speech.pitch = 1.1;
    window.speechSynthesis.speak(speech);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-pink-100 p-10">

      <h1 className="text-5xl font-bold text-center text-blue-700 mb-12">
        🔤 Learn English
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

        {alphabet.map((item) => (

          <div
            key={item.letter}
            onClick={() => speak(item.letter, item.word)}
            className="bg-white rounded-3xl shadow-lg p-8 text-center cursor-pointer hover:scale-110 transition duration-300"
          >

            <div className="text-6xl mb-4">
              {item.emoji}
            </div>

            <h2 className="text-6xl font-bold text-pink-500">
              {item.letter}
            </h2>

            <p className="text-2xl mt-4 font-semibold">
              {item.word}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default English;