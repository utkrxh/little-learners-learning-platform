import { motion } from "framer-motion";

function Quiz({ question, options, answer, onAnswer }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-3xl shadow-2xl p-10 text-center"
    >
      <h2 className="text-5xl font-bold text-sky-500 mb-8">
        🧩 Quiz Time!
      </h2>

      <h3 className="text-3xl font-semibold mb-10">
        {question}
      </h3>

      <div className="grid grid-cols-3 gap-6">

        {options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="bg-yellow-100 hover:bg-yellow-300 rounded-2xl p-6 text-5xl transition"
          >
            {option}
          </button>
        ))}

      </div>
    </motion.div>
  );
}

export default Quiz;