import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-sky-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              🌈 Little Learners
            </h2>

            <p className="text-sky-100">
              Helping children aged 0–5 learn through fun, interactive
              activities, stories and games.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>Home</li>
              <li>English</li>
              <li>Hindi</li>
              <li>Stories</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Parents
            </h3>

            <ul className="space-y-2">
              <li>Privacy</li>
              <li>Support</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-sky-500 mt-10 pt-6 text-center">

          <p className="flex items-center justify-center gap-2">

            Made with <Heart size={18} fill="red" color="red" />

            for little learners ❤️

          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;