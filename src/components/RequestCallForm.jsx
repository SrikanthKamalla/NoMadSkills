import { useState, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";
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
  program: z.string().min(1, "Please select a program"),
});

const CallbackForm = ({ title = "Request a Callback", onClose, onSuccess }) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
  });

  const [focusState, setFocusState] = useState({
    name: false,
    email: false,
    phone: false,
    program: false,
  });

  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);

  // Memoize programs list
  const programs = useMemo(
    () => [
      { id: 1, name: "Full Stack MERN" },
      { id: 2, name: "AI & Data Science" },
      { id: 3, name: "AWS DevOps" },
      { id: 4, name: "Data Analyst" },
    ],
    []
  );

  const selectedProgram = watch("program");

  // Memoized handlers
  const handleChange = useCallback(
    field => e => {
      let newValue = e.target.value;
      if (field === "phone") {
        newValue = newValue.replace(/\D/g, "").slice(0, 10);
      }
      setFormValues(prev => ({ ...prev, [field]: newValue }));
      setValue(field, newValue, { shouldValidate: false });
      if (errors[field]) clearErrors(field);
    },
    [setValue, clearErrors, errors]
  );

  const handleFocus = useCallback(field => {
    setFocusState(prev => ({ ...prev, [field]: true }));
  }, []);

  const handleBlur = useCallback(field => {
    setFocusState(prev => ({
      ...prev,
      [field]: false,
    }));
  }, []);

  const handleProgramSelect = useCallback(
    programName => {
      setValue("program", programName, { shouldValidate: true });
      setFormValues(prev => ({ ...prev, program: programName }));
      setShowProgramsDropdown(false);
      setFocusState(prev => ({ ...prev, program: true }));
      if (errors.program) clearErrors("program");
    },
    [setValue, clearErrors, errors.program]
  );

  const toggleProgramsDropdown = useCallback(() => {
    setShowProgramsDropdown(prev => !prev);
  }, []);

  const handleDropdownBlur = useCallback(() => {
    setTimeout(() => setShowProgramsDropdown(false), 200);
  }, []);

  const onSubmit = useCallback(
    async data => {
      try {
        console.log(data);
        const result = await sendEmail({
          phone: data.phone,
          name: data.name,
          email: data.email,
          program: data.program,
        });

        if (result.success) {
          if (typeof onSuccess === "function") {
            onSuccess("Query sent successfully! We'll get back to you shortly.");
          }

          if (typeof onClose === "function") {
            onClose();
          }

          // Reset form
          setFormValues({ name: "", email: "", phone: "", program: "" });
          setFocusState({ name: false, email: false, phone: false, program: false });
          setShowProgramsDropdown(false);
        } else {
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
    },
    [onClose, onSuccess]
  );

  return (
    <div>
      <h2 className="text-gray-800 text-2xl font-semibold text-center mb-2">{title}</h2>
      <p className="text-gray-600 text-center mb-6">We'll get back to you shortly</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Programs Dropdown */}
        <div className="relative mt-6">
          <div
            className={`w-full border-2 rounded-lg px-3 py-3 pt-4 focus:outline-none focus:ring-2 focus:ring-[#0d77cf] focus:border-[#0d77cf] cursor-pointer transition-all duration-200 ${
              errors.program
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-[#0d77cf]"
            } ${showProgramsDropdown ? "border-[#0d77cf] ring-2 ring-[#0d77cf]" : ""}`}
            onClick={toggleProgramsDropdown}
            onBlur={handleDropdownBlur}
            tabIndex={0}
            role="button"
            aria-expanded={showProgramsDropdown}
          >
            <div className="flex justify-between items-center">
              <span className={selectedProgram ? "text-gray-900" : "text-gray-500"}>
                {selectedProgram || "Choose a program"}
              </span>
              <ChevronDown
                size={20}
                className={`text-gray-400 transition-transform duration-200 ${
                  showProgramsDropdown ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          {showProgramsDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              {programs.map(program => (
                <div
                  key={program.id}
                  className={`px-3 py-3 cursor-pointer transition-colors duration-200 hover:bg-blue-50 ${
                    selectedProgram === program.name ? "bg-blue-50 text-[#0d77cf]" : "text-gray-900"
                  } first:rounded-t-lg last:rounded-b-lg`}
                  onClick={() => handleProgramSelect(program.name)}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleProgramSelect(program.name);
                    }
                  }}
                  tabIndex={0}
                  role="option"
                  aria-selected={selectedProgram === program.name}
                >
                  {program.name}
                </div>
              ))}
            </div>
          )}

          {/* {errors.program && (
            <p className="h-5 mt-1 text-red-500 text-sm">{errors.program.message}</p>
          )} */}
          <div className="h-5 mt-1">
            {errors.program && <p className="text-red-500 text-sm">{errors.program.message}</p>}
          </div>
        </div>

        <FloatingLabelInput
          id="name"
          label="Full Name"
          value={formValues.name}
          onChange={handleChange("name")}
          isFocused={focusState.name}
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name")}
          error={errors.name?.message}
          className="border-gray-300 focus:border-[#0d77cf]"
        />

        <FloatingLabelInput
          id="email"
          label="Email"
          value={formValues.email}
          onChange={handleChange("email")}
          isFocused={focusState.email}
          onFocus={() => handleFocus("email")}
          onBlur={() => handleBlur("email")}
          error={errors.email?.message}
          className="border-gray-300 focus:border-[#0d77cf]"
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
          className="border-gray-300 focus:border-[#0d77cf]"
        />

        <input type="hidden" {...register("program")} />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0d77cf] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#0a5fa4] focus:outline-none focus:ring-2 focus:ring-[#0d77cf] focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-2 hover:scale-102 active:scale-98"
        >
          {isSubmitting ? "Sending..." : "Request Callback"}
        </button>
      </form>
    </div>
  );
};

export default CallbackForm;
