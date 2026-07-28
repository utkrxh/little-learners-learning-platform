import ActivityCard from "../components/english/ActivityCard";

function English() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-sky-50 py-12 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black text-center text-sky-700 mb-4">
          🔤 English Learning
        </h1>

        <p className="text-center text-xl text-gray-600 mb-12">
          Choose an activity and start learning!
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ActivityCard
            emoji="📚"
            title="Alphabet Lessons"
            description="Learn A-Z with pictures, sounds, quizzes and XP."
            color="bg-sky-200"
            link="/alphabet"
          />

          <ActivityCard
            emoji="✍️"
            title="Letter Tracing"
            description="Practice writing every alphabet."
            color="bg-pink-200"
            link="/tracing"
          />

          <ActivityCard
            emoji="🎈"
            title="Balloon Game"
            description="Pop the correct alphabet balloon."
            color="bg-green-200"
            link="/balloons"
          />

          <ActivityCard
            emoji="🔢"
            title="Numbers 1–100"
            description="Learn numbers with counting, audio and quizzes."
            color="bg-purple-200"
            link="/numbers"
          />

          <ActivityCard
            emoji="📚"
            title="Stories"
            description="Coming Soon"
            color="bg-yellow-200"
            link="/english"
          />

          <ActivityCard
            emoji="🎵"
            title="Alphabet Song"
            description="Coming Soon"
            color="bg-orange-200"
            link="/english"
          />

        </div>

      </div>
    </div>
  );
}

export default English;