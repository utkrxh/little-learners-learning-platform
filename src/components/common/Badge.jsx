import { motion } from "framer-motion";

function Badge({ score }) {
  let badge = "🌱 Beginner";
  let color = "bg-gray-200 text-gray-800";

  if (score >= 50) {
    badge = "🥉 Bronze Explorer";
    color = "bg-orange-200 text-orange-800";
  }

  if (score >= 100) {
    badge = "🥈 Silver Learner";
    color = "bg-gray-300 text-gray-900";
  }

  if (score >= 150) {
    badge = "🥇 Gold Master";
    color = "bg-yellow-300 text-yellow-900";
  }

  if (score >= 250) {
    badge = "👑 Alphabet Champion";
    color = "bg-purple-300 text-purple-900";
  }

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className={`px-5 py-3 rounded-full font-bold shadow-md ${color}`}
    >
      {badge}
    </motion.div>
  );
}

export default Badge;