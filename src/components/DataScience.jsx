import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Trophy,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Target,
} from "lucide-react";
import MernSyllabus from "./MernSyllabus";
import StepsToSuccess from "./StepsToSuccess";
import FAQ from "./FAQ";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../nodeMailerServer";
import { toast } from "react-toastify";
import DataScienceSyllabus from "./DataScienceSyllabus";
const DataScience = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    { icon: <BookOpen className="w-6 h-6" />, text: "Structured Curriculum" },
    { icon: <Users className="w-6 h-6" />, text: "Mentor Support" },
    { icon: <Trophy className="w-6 h-6" />, text: "Career Guidance" },
    { icon: <Target className="w-6 h-6" />, text: "Real Projects" },
  ];

  const stats = [
    { number: "95%", label: "Placement Rate" },
    { number: "50K+", label: "Students Trained" },
    { number: "4.9", label: "Rating", icon: <Star className="w-4 h-4 fill-current" /> },
  ];
  const navigate = useNavigate();
  return (
    <div className="min-h-screen mt-6 bg-gradient-to-br from-blue-50 via-blue-100 to-[#0d77cf]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0d77cf] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.header
            variants={itemVariants}
            className="flex justify-between items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <Rocket className="w-8 h-8 text-[#0d77cf]" />
              <span className="text-xl font-bold text-gray-800">NomadSkills</span>
            </motion.div>
            <motion.button
              onClick={async () => {
                await navigate("/");
                setTimeout(() => {
                  const el = document.getElementById("courses");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }, 500);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0d77cf] hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors shadow-lg"
            >
              Browse Courses
            </motion.button>
          </motion.header>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              >
                Master{" "}
                <span className="bg-gradient-to-r from-[#0d77cf] to-blue-600 bg-clip-text text-transparent">
                  Data
                </span>{" "}
                Science &{" "}
                <span className="bg-gradient-to-r from-blue-600 to-[#0d77cf] bg-clip-text text-transparent">
                  AI
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-gray-700 leading-relaxed">
                Crack top tech companies and launch your dream career with our comprehensive program
                curated by industry experts.
              </motion.p>

              {/* Features Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg backdrop-blur-sm border border-blue-100 shadow-sm"
                  >
                    <div className="text-[#0d77cf]">{feature.icon}</div>
                    <span className="text-gray-800 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="flex space-x-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-2xl font-bold text-gray-800">
                      <span>{stat.number}</span>
                      {stat.icon}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Form */}
            <motion.div
              variants={itemVariants}
              className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-white/60 shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="inline-flex items-center space-x-2 bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full mb-6 shadow-md"
              >
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold">Start learning for FREE</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-800 mb-4">
                Begin Your Tech Journey Today
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-600 mb-6">
                Lectures & assignments curated by Top Tech Professionals from leading companies.
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d77cf] focus:border-transparent shadow-sm"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d77cf] focus:border-transparent shadow-sm"
                  />
                </div>

                <motion.button
                  onClick={async () => {
                    const result = await sendEmail({ phone: number, name: name,course:"Data Science" });
                    if (result.success) {
                      toast("Query sent successfully");
                      setNumber("");
                      setName("");
                    } else {
                      toast.error("Failed to send query");
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#0d77cf] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              <motion.p variants={itemVariants} className="text-gray-500 text-sm mt-6 text-center">
                <Shield className="w-4 h-4 inline mr-1" />
                By clicking 'Apply Now', you agree to our{" "}
                <button
                  onClick={() => navigate("/termsandconditions")}
                  className="text-[#0d77cf] hover:text-blue-700 underline transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </motion.p>

              {/* Trust Badges */}
              <motion.div variants={itemVariants} className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4 text-gray-500 text-sm"></div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-10 w-4 h-4 bg-[#0d77cf] rounded-full opacity-60"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-60"
          />
        </motion.div>
      </div>
      <DataScienceSyllabus />
      <StepsToSuccess />
      <FAQ />
    </div>
  );
};

export default DataScience;
