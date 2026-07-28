import { motion } from "framer-motion";
import { useEffect } from "react";

function Balloon({
  balloon,
  target,
  onCorrect,
  onWrong,
  onMiss,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Balloon reached the top

      if (balloon.letter === target) {
        onMiss();
      }
    }, balloon.duration * 1000);

    return () => clearTimeout(timer);
  }, [balloon, target, onMiss]);

  const handleClick = () => {
    if (balloon.letter === target) {
      onCorrect();
    } else {
      onWrong();
    }
  };

  return (
    <motion.div
      initial={{
        y: 900,
        scale: 0.8,
      }}
      animate={{
        y: -1100,
        scale: 1,
      }}
      transition={{
        duration: balloon.duration,
        ease: "linear",
      }}
      className="absolute"
      style={{
        left: `${balloon.left}%`,
        bottom: "-120px",
      }}
    >
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={handleClick}
      >
        {/* Balloon */}

        <div
          className={`
            w-24
            h-28
            rounded-full
            shadow-2xl
            border-4
            border-white
            flex
            items-center
            justify-center
            text-white
            text-4xl
            font-black
            ${balloon.color}
          `}
        >
          {balloon.letter}
        </div>

        {/* String */}

        <div className="w-1 h-24 bg-gray-700 mx-auto"></div>
      </motion.button>
    </motion.div>
  );
}

export default Balloon;