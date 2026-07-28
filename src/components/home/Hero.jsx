import { motion } from "framer-motion";
import Button from "./Button";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-sky-100 via-sky-50 to-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="bg-yellow-300 text-yellow-900 px-5 py-2 rounded-full font-bold">
              Ages 0–5 Years
            </span>

            <h1 className="text-6xl md:text-7xl font-extrabold text-sky-600 mt-8 leading-tight">
              Learn Through
              <br />
              Play 🌈
            </h1>

            <p className="text-xl text-gray-600 mt-8 leading-8">
              Fun interactive lessons for English, Hindi, Numbers,
              Stories, Moral Values and Games.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">

              <Button>
                🚀 Start Learning
              </Button>

              <button
                className="
                bg-white
                border-2
                border-sky-400
                text-sky-600
                px-8
                py-4
                rounded-full
                font-bold
                hover:bg-sky-100
                transition
                "
              >
                Explore Lessons
              </button>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-center"
          >

            <div className="text-[260px]">
              🧸
            </div>

            <h2 className="text-3xl font-bold text-sky-600">
              Your Learning Buddy
            </h2>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;