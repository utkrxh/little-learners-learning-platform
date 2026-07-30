import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import English from "./pages/EnglishPage";;
import AlphabetPage from "./pages/AlphabetPage";
import NumbersPage from "./pages/NumbersPage";
import Tracing from "./pages/Tracing";

// Games
import BalloonGame from "./components/games/BalloonGame";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sky-100 flex flex-col">

        <Navbar />

        <main className="flex-1">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/english" element={<English />} />

            <Route path="/alphabet" element={<AlphabetPage />} />

            <Route path="/numbers" element={<NumbersPage />} />

            <Route path="/tracing" element={<Tracing />} />

            <Route path="/balloons" element={<BalloonGame />} />

          </Routes>

        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;