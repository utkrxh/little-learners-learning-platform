import { Link } from "react-router-dom";

function Card({ emoji, title, description, link = "#" }) {
  return (
    <Link to={link}>
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center cursor-pointer">

        <div className="text-6xl mb-4">
          {emoji}
        </div>

        <h3 className="text-2xl font-bold text-sky-700 mb-3">
          {title}
        </h3>

        <p className="text-gray-600">
          {description}
        </p>

      </div>
    </Link>
  );
}

export default Card;