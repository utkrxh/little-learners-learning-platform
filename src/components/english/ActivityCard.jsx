import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ActivityCard({
  title,
  emoji,
  description,
  color,
  link,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${color} rounded-3xl shadow-xl p-8 text-center`}
    >
      <div className="text-6xl mb-4">{emoji}</div>

      <h2 className="text-3xl font-bold mb-3">
        {title}
      </h2>

      <p className="mb-6 text-lg">
        {description}
      </p>

      <Link to={link}>
        <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:scale-105 transition">
          Open
        </button>
      </Link>
    </motion.div>
  );
}

export default ActivityCard;