function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-10">

      <div className="flex justify-between mb-2">

        <span className="font-bold text-sky-600">
          Progress
        </span>

        <span className="font-bold">
          {current}/{total}
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">

        <div
          className="bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 h-5 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}

export default ProgressBar;