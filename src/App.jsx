import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import English from "./pages/English";

function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-sky-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
      </Routes>
    </div>
  );
}

export default App;