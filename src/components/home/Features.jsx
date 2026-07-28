import { Smile, BookOpen, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Smile size={40} />,
    title: "Fun Learning",
    text: "Interactive lessons designed to keep children engaged.",
  },
  {
    icon: <BookOpen size={40} />,
    title: "Educational",
    text: "Learn English, Hindi, numbers, colors, animals and more.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Safe for Kids",
    text: "Ad-free, child-friendly and easy to use.",
  },
  {
    icon: <Star size={40} />,
    title: "Reward System",
    text: "Earn stars and badges after completing lessons.",
  },
];

function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-sky-600 mb-4">
          Why Parents Love Us ❤️
        </h2>

        <p className="text-center text-gray-600 mb-14 text-lg">
          Designed to make learning fun, safe and meaningful.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-sky-50 rounded-3xl p-8 shadow-lg text-center"
            >
              <div className="text-sky-500 flex justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;