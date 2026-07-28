function Button({ children }) {
  return (
    <button
      className="
      bg-pink-500
      hover:bg-pink-600
      text-white
      px-8
      py-4
      rounded-full
      text-xl
      font-bold
      shadow-xl
      hover:scale-105
      transition
      duration-300
      "
    >
      {children}
    </button>
  );
}

export default Button;