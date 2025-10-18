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
    <div className="relative mb-2">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder=" "
        className={`peer w-full text-black border-2 rounded-md px-3 pt-5 pb-2 text-base outline-none transition-all duration-300 cursor-text ${
          error
            ? "border-red-500 focus:border-red-500"
            : isFocused
              ? "border-blue-500 focus:border-blue-500"
              : "border-gray-300 focus:border-blue-500"
        } ${isFocused ? "ring-2 ring-blue-200 ring-opacity-50" : ""}`}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 bg-[#f8f9fa] px-1 transition-all duration-300 select-none cursor-text pointer-events-none ${
          isFocused || value ? "-top-2 text-sm text-blue-600" : "top-3 text-base text-gray-500"
        } ${error ? "text-red-500" : ""} ${(isFocused || value) && error ? "text-red-600" : ""}`}
      >
        {label}
      </label>
      <div className="h-5 mt-1">{error && <p className="text-red-500 text-sm">{error}</p>}</div>
    </div>
  );
};

export default FloatingLabelInput;
