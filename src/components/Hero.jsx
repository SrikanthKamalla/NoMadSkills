import { Helmet } from "react-helmet";

import { useState, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, X } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { sendEmail } from "../nodeMailerServer";
import { toast } from "react-toastify";
import FloatingLabelInput from "./FloatingLabelInput"; // Adjust path as needed

// Form schema
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

const Hero = ({ className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Form hooks
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    reset,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

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
        const result = await sendEmail({
          title: "Get Started Form Submission",
          phone: data.phone,
          name: data.name,
          email: data.email,
          course: data.program,
        });

        if (result.success) {
          setIsModalOpen(false);

          // Reset form
          setFormValues({ name: "", email: "", phone: "", program: "" });
          setFocusState({ name: false, email: false, phone: false, program: false });
          setShowProgramsDropdown(false);
          reset();
        } else {
          toast.error("Failed to submit form. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please try again.");
      }
    },
    [reset]
  );

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    // Reset form when modal closes
    setFormValues({ name: "", email: "", phone: "", program: "" });
    setFocusState({ name: false, email: false, phone: false, program: false });
    setShowProgramsDropdown(false);
    reset();
  }, [reset]);

  return (
    <section
      className={`min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-14 ${className}`}
    >
      <Helmet>
        <title>NomadSkills | Learn MERN, Data Analytics & DevOps with Real Projects</title>
        <meta
          name="description"
          content="Join NomadSkills and master MERN Stack, Data Analytics, and DevOps with hands-on projects, expert mentorship, and job-focused training. Learn. Build. Get Hired."
        />
        <meta
          name="keywords"
          content="NomadSkills, MERN stack, DevOps, Data Analytics, tech career, online bootcamp, job-ready skills, IT training, real projects"
        />
        <link rel="canonical" href="https://nomadskills.in/" />
        <meta
          property="og:title"
          content="NomadSkills | Learn MERN, Data Analytics & DevOps with Real Projects"
        />
        <meta
          property="og:description"
          content="Master in-demand skills with NomadSkills through real projects and career mentorship. Build your portfolio and get hired faster."
        />
        <meta property="og:url" content="https://nomadskills.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nomadskills.in/assets/og-image.webp" />
      </Helmet>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#008cff] mb-6"
        >
          Build Your Future-Ready Skills
        </motion.h1>

        {/* Subheading */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-12"
        >
          <motion.span className="inline-block mr-4" whileHover={{ scale: 1.05 }}>
            Learn.
          </motion.span>
          <motion.span className="inline-block mr-4" whileHover={{ scale: 1.05 }}>
            Build.
          </motion.span>
          <motion.span className="inline-block" whileHover={{ scale: 1.05 }}>
            Get Hired.
          </motion.span>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Feature 1 */}
          <motion.div
            variants={featureVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Master through Projects</h3>
            <p className="text-gray-600 text-sm">
              Hands-on learning with real-world projects that build your portfolio
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            variants={featureVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Connected Mentors</h3>
            <p className="text-gray-600 text-sm">
              Learn from professionals working at top tech companies
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            variants={featureVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Career-focused Skill Exploration
            </h3>
            <p className="text-gray-600 text-sm">
              Discover and develop skills that employers are looking for
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          onClick={() => setIsModalOpen(true)}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started For Free
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div variants={itemVariants} className="mt-16">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Get Started Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Get Started For Free</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <p className="text-gray-600 text-center mb-6">Start your learning journey today</p>

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
                            selectedProgram === program.name
                              ? "bg-blue-50 text-[#0d77cf]"
                              : "text-gray-900"
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

                  <div className="h-5 mt-1">
                    {errors.program && (
                      <p className="text-red-500 text-sm">{errors.program.message}</p>
                    )}
                  </div>
                </div>

                {/* Using the shared FloatingLabelInput component */}
                <div className="mt-6">
                  <FloatingLabelInput
                    id="name"
                    label="Full Name"
                    value={formValues.name}
                    onChange={handleChange("name")}
                    error={errors.name?.message}
                    isFocused={focusState.name}
                    onFocus={() => handleFocus("name")}
                    onBlur={() => handleBlur("name")}
                  />
                </div>

                <div className="mt-6">
                  <FloatingLabelInput
                    id="email"
                    label="Email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange("email")}
                    error={errors.email?.message}
                    isFocused={focusState.email}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                  />
                </div>

                <div className="mt-6">
                  <FloatingLabelInput
                    id="phone"
                    label="Phone Number"
                    value={formValues.phone}
                    onChange={handleChange("phone")}
                    error={errors.phone?.message}
                    isFocused={focusState.phone}
                    onFocus={() => handleFocus("phone")}
                    onBlur={() => handleBlur("phone")}
                  />
                </div>

                <input type="hidden" {...register("program")} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0d77cf] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#0a5fa4] focus:outline-none focus:ring-2 focus:ring-[#0d77cf] focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6 hover:scale-102 active:scale-98"
                >
                  {isSubmitting ? "Submitting..." : "Get Started Now"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
