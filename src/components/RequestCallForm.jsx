import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FloatingLabelInput from "./FloatingLabelInput";
import { sendEmail } from "../nodeMailerServer";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phone: z
    .string()
    .min(10, "Phone must be exactly 10 digits")
    .max(10, "Phone must be exactly 10 digits")
    .regex(/^\d+$/, "Phone must contain only digits"),
});

const CallbackForm = ({ title = "Request a Callback", onClose, onSuccess }) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [focusState, setFocusState] = useState({
    name: false,
    email: false,
    phone: false,
  });

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

  const handleBlur = field => {
    setFocusState(prev => ({
      ...prev,
      [field]: formValues[field] !== "",
    }));
  };
  const onSubmit = async data => {
    try {
      const result = await sendEmail({
        phone: data.phone,
        name: data.name,
        email: data.email,
      });

      if (result.success) {
        // Show success message (replace with your toast library)
        if (typeof onSuccess === "function") {
          onSuccess("Query sent successfully! We'll get back to you shortly.");
        }

        // Close modal if onClose function is provided
        if (typeof onClose === "function") {
          onClose();
        }

        // Reset form
        setFormValues({ name: "", email: "", phone: "" });
        setFocusState({ name: false, email: false, phone: false });
      } else {
        // Handle error
        if (typeof onSuccess === "function") {
          onSuccess("Failed to send query. Please try again.", "error");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (typeof onSuccess === "function") {
        onSuccess("An error occurred. Please try again.", "error");
      }
    }
  };

  return (
    <div>
      <h2 className="text-gray-800 text-2xl font-semibold text-center mb-2">{title}</h2>
      <p className="text-gray-600 text-center mb-6">We'll get back to you shortly</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <FloatingLabelInput
          id="name"
          label="Full Name"
          value={formValues.name}
          onChange={handleChange("name")}
          isFocused={focusState.name}
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name")}
          error={errors.name?.message}
          className="border-gray-300 focus:border-indigo-500"
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
          className="border-gray-300 focus:border-indigo-500"
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
          className="border-gray-300 focus:border-indigo-500"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0d77cf] text-white font-semibold py-3 px-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Request Callback"}
        </button>
      </form>
    </div>
  );
};

export default CallbackForm;
