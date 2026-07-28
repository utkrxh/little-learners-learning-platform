function NumberBadge({ score }) {
  let badge = "🌱 Beginner";

  if (score >= 100) badge = "🥉 Bronze";
  if (score >= 250) badge = "🥈 Silver";
  if (score >= 500) badge = "🥇 Gold";
  if (score >= 800) badge = "💎 Diamond";
  if (score >= 1000) badge = "👑 Number Master";

  return (
    <div className="bg-yellow-300 px-5 py-2 rounded-full font-bold shadow-lg">
      {badge}
    </div>
  );
}

export default NumberBadge;