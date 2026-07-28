function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-sky-700 mb-4">
        {title}
      </h2>

      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;