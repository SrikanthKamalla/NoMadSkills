import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FloatingLabelInput from "./FloatingLabelInput";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .refine(val => val.includes("@"), {
      message: "Email must include @",
    })
    .refine(val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Invalid email format",
    }),
  phone: z
    .string()
    .min(10, "Phone must be exactly 10 digits")
    .max(10, "Phone must be exactly 10 digits")
    .regex(/^\d+$/, "Phone must contain only digits"),
});

const CallbackForm = ({ title }) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const [formValues, setFormValues] = useState({ name: "", email: "", phone: "" });
  const [focusState, setFocusState] = useState({ name: false, email: false, phone: false });

  const handleChange = field => e => {
    let newValue = e.target.value;
    if (field === "phone") {
      newValue = newValue.replace(/\D/g, "").slice(0, 10);
    }
    setFormValues(prev => ({ ...prev, [field]: newValue }));
    setValue(field, newValue, { shouldValidate: false });
    if (errors[field]) clearErrors(field);
  };

  const handleFocus = field => setFocusState(prev => ({ ...prev, [field]: true }));
  const handleBlur = field =>
    setFocusState(prev => ({
      ...prev,
      [field]: formValues[field] !== "",
    }));

  const onSubmit = data => console.log("Form Data:", data);

  return (
    <div>
      <h2 className="text-black text-3xl text-center mb-6">{title}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        <FloatingLabelInput
          id="name"
          label="Full Name"
          value={formValues.name}
          onChange={handleChange("name")}
          isFocused={focusState.name}
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name")}
          error={errors.name?.message}
        />

        <FloatingLabelInput
          id="email"
          label="Email"
          type="text"
          value={formValues.email}
          onChange={handleChange("email")}
          isFocused={focusState.email}
          onFocus={() => handleFocus("email")}
          onBlur={() => handleBlur("email")}
          error={errors.email?.message}
        />

        <FloatingLabelInput
          id="phone"
          label="Phone Number"
          value={formValues.phone}
          onChange={handleChange("phone")}
          isFocused={focusState.phone}
          onFocus={() => handleFocus("phone")}
          onBlur={() => handleBlur("phone")}
          error={errors.phone?.message}
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 not-first:text-white font-medium py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CallbackForm;
