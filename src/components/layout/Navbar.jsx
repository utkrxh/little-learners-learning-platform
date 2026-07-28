import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-sky-500 cursor-pointer">
            🌈 Little Learners
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold items-center">

          <li>
            <Link
              to="/"
              className="hover:text-sky-500 transition"
            >
              🏠 Home
            </Link>
          </li>

          <li>
            <Link
              to="/english"
              className="hover:text-sky-500 transition"
            >
              🔤 English
            </Link>
          </li>

          <li>
            <Link
              to="/tracing"
              className="hover:text-sky-500 transition"
            >
              ✍️ Tracing
            </Link>
          </li>

          <li>
            <Link
              to="/balloons"
              className="hover:text-sky-500 transition"
            >
              🎈 Balloons
            </Link>
          </li>

          <li>
            <Link
              to="/hindi"
              className="hover:text-sky-500 transition"
            >
              🇮🇳 Hindi
            </Link>
          </li>

          <li>
            <Link
              to="/games"
              className="hover:text-sky-500 transition"
            >
              🎮 Games
            </Link>
          </li>

          <li>
            <Link
              to="/stories"
              className="hover:text-sky-500 transition"
            >
              📚 Stories
            </Link>
          </li>

        </ul>

        {/* Start Learning Button */}
        <Link to="/english">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-bold transition transform hover:scale-105">
            ⭐ Start Learning
          </button>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;