import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CategoryCard({ title, emoji, color, link }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      whileTap={{ scale: 0.97 }}
    >
      <Link
        to={link}
        className={`${color}
        rounded-3xl
        p-8
        shadow-xl
        flex
        flex-col
        justify-between
        h-72
        transition`}
      >
        <div className="text-7xl text-center">
          {emoji}
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white text-center">
            {title}
          </h2>
        </div>

        <div className="flex justify-end">
          <ArrowRight color="white" size={34} />
        </div>
      </Link>
    </motion.div>
  );
}

export default CategoryCard;