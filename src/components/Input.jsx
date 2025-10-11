const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default Input;
