const FloatingLabelInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  isFocused,
  onFocus,
  onBlur,
}) => {
  return (
    <div className="relative mb-6">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder=" "
        className={`peer w-full text-black border-2 rounded-md px-3 pt-3 pb-3 text-base outline-none transition-all duration-300 cursor-text ${
          error ? "border-red-500" : isFocused ? "border-blue-500" : "border-gray-300"
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 bg-white px-1 transition-all duration-300 select-none cursor-text pointer-events-none ${
          isFocused || value ? "-top-2 text-sm text-blue-600" : "top-3 text-base text-gray-500"
        }`}
        onClick={onFocus}
      >
        {label}
      </label>
      <p className="h-5 text-red-500 text-sm mt-1">{error || ""}</p>
    </div>
  );
};

export default FloatingLabelInput;
