const Button = ({ text, variant = "primary" }) => {
  const base = "w-full py-2 rounded-lg text-white font-medium";
  const style =
    variant === "primary"
      ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
      : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50 ";

  return <button className={`${base} ${style}`}> {text} </button>;
};
