import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-sky-500"
        >
          🌈 Little Learners
        </Link>

        <ul className="hidden md:flex gap-8 text-lg font-semibold">

          <li>
            <Link to="/" className="hover:text-sky-500">
              Home
            </Link>
          </li>

          <li>
            <Link to="/english" className="hover:text-sky-500">
              English
            </Link>
          </li>

          <li className="text-gray-400">Hindi</li>

          <li className="text-gray-400">Games</li>

          <li className="text-gray-400">Stories</li>

        </ul>

        <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-bold transition">
          ⭐ Start Learning
        </button>

      </div>
    </nav>
  );
}

export default Navbar;