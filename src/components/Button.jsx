const Button = ({ text, variant = "primary" }) => {
  const base = "w-full py-2 rounded-lg text-black-100  font-medium transition-200";
  const style =
    variant === "primary"
      ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
      : "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 ";

  return <button className={`${base} ${style}`}> {text} </button>;
};

export default Button;
