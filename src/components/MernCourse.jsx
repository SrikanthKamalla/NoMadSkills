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
const MernCourse = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
              <Rocket className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">NomadSkills</span>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
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
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                Master{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  MERN Stack
                </span>{" "}
                Development &{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Data Strctures
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-gray-300 leading-relaxed">
                Crack top tech companies and launch your dream career with our comprehensive program
                curated by industry experts.
              </motion.p>

              {/* Features Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                  >
                    <div className="text-purple-400">{feature.icon}</div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="flex space-x-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-2xl font-bold text-white">
                      <span>{stat.number}</span>
                      {stat.icon}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Form */}
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="inline-flex items-center space-x-2 bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full mb-6"
              >
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold">Start learning for FREE</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-2xl font-bold text-white mb-4">
                Begin Your Tech Journey Today
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-300 mb-6">
                Lectures & assignments curated by Top Tech Professionals from leading companies.
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              <motion.p variants={itemVariants} className="text-gray-400 text-sm mt-6 text-center">
                <Shield className="w-4 h-4 inline mr-1" />
                By clicking 'Apply Now', you agree to our{" "}
                <button className="text-purple-300 hover:text-purple-200 underline transition-colors">
                  Terms & Conditions
                </button>
              </motion.p>

              {/* Trust Badges */}
              <motion.div variants={itemVariants} className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm"></div>
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
            className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-60"
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
      <MernSyllabus />
      <StepsToSuccess />
      <FAQ />
    </div>
  );
};

export default MernCourse;
