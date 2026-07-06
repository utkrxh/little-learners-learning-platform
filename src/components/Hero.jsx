function Hero() {
  return (
    <section className="bg-gradient-to-b from-sky-200 via-sky-100 to-yellow-100 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-6xl font-extrabold text-blue-700 leading-tight">
            Learn Through
            <br />
            Play 🌈
          </h2>

          <p className="mt-6 text-xl text-gray-700">
            Fun lessons, interactive games, stories, and activities specially
            designed for children aged 0–5.
          </p>

          <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transition">
            🚀 Start Learning
          </button>
        </div>

        {/* Right Side */}
        <div className="text-center">
          <div className="text-[180px]">🧸</div>

          <p className="text-2xl font-semibold text-blue-700">
            Your Learning Buddy
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;