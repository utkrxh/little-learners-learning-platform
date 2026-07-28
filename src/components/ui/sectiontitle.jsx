function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-sky-600">
        {title}
      </h2>

      <p className="text-xl text-gray-600 mt-4">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;