function CountingObjects({ number }) {
  // Show individual apples for 1–20
  if (number <= 20) {
    return (
      <div className="flex flex-wrap justify-center gap-2 text-5xl my-8 max-w-xl mx-auto">
        {Array.from({ length: number }).map((_, index) => (
          <span key={index}>🍎</span>
        ))}
      </div>
    );
  }

  // Group by tens for 21–100
  const tens = Math.floor(number / 10);
  const ones = number % 10;

  return (
    <div className="my-8 flex flex-col items-center gap-3">

      <div className="flex flex-wrap justify-center gap-3">
        {Array.from({ length: tens }).map((_, index) => (
          <div
            key={index}
            className="bg-red-100 rounded-xl px-4 py-2 text-2xl font-bold shadow"
          >
            🍎 ×10
          </div>
        ))}
      </div>

      {ones > 0 && (
        <div className="flex flex-wrap justify-center gap-2 text-4xl">
          {Array.from({ length: ones }).map((_, index) => (
            <span key={index}>🍎</span>
          ))}
        </div>
      )}

    </div>
  );
}

export default CountingObjects;