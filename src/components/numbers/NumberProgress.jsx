function NumberProgress({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full mb-8">

      <div className="flex justify-between font-bold mb-2">
        <span>
          Number {current} of {total}
        </span>

        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="bg-gray-200 rounded-full h-5 overflow-hidden">

        <div
          className="bg-gradient-to-r from-green-400 to-sky-500 h-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />

      </div>

    </div>
  );
}

export default NumberProgress;