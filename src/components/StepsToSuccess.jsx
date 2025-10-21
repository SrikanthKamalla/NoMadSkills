import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Star,
  Users,
  Target,
  BookOpen,
  MessageCircle,
  Code2,
  Briefcase,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Zap,
  Rocket,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

const StepsToSuccess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Learn",
      subtitle: "Foundation Building",
      number: "01",
      gradient: "from-blue-500 to-cyan-500",
      icon: <BookOpen className="w-6 h-6" />,
      section: {
        title: "Learn from Industry Experts",
        description:
          "Master high-demand skills through our comprehensive curriculum designed by top tech professionals",
        content: [
          {
            type: "image",
            src: "/classroom.jpg",
            alt: "Expert-led learning sessions",
          },
          {
            type: "stats",
            stats: [
              {
                value: "4.7/5",
                label: "Course Rating",
                description: "Rated by 2000+ students",
                icon: <Star className="w-5 h-5 text-yellow-400" />,
              },
            ],
          },
        ],
      },
    },
    {
      id: 2,
      title: "Mentor",
      subtitle: "Guidance & Support",
      number: "02",
      gradient: "from-purple-500 to-pink-500",
      icon: <MessageCircle className="w-6 h-6" />,
      section: {
        title: "1-on-1 Mentorship Sessions",
        description:
          "Get personalized guidance and instant doubt resolution from experienced mentors",
        content: [
          {
            type: "image",
            src: "/One-one session.png",
            alt: "Personal mentorship sessions",
          },
          {
            type: "stats",
            stats: [
              {
                value: "4.9/5",
                label: "Mentor Rating",
                icon: <Users className="w-5 h-5 text-green-500" />,
              },
              {
                value: "20+",
                label: "Doubt Sessions",
                icon: <Zap className="w-5 h-5 text-blue-500" />,
              },
            ],
          },
        ],
      },
    },
    {
      id: 3,
      title: "Build",
      subtitle: "Real Projects",
      number: "03",
      gradient: "from-green-500 to-emerald-500",
      icon: <Code2 className="w-6 h-6" />,
      section: {
        title: "Build Industry-Ready Projects",
        description:
          "Work on real-world projects that simulate actual workplace scenarios and challenges",
        content: [
          {
            type: "image",
            src: "/Project.png",
            alt: "Hands-on project development",
          },
          {
            type: "stats",
            stats: [
              {
                value: "6+",
                label: "Live Projects",
                description: "Portfolio-ready applications",
                icon: <Target className="w-5 h-5 text-red-500" />,
              },
            ],
          },
        ],
      },
    },
    {
      id: 4,
      title: "Practice",
      subtitle: "Mock Interviews",
      number: "04",
      gradient: "from-orange-500 to-red-500",
      icon: <GraduationCap className="w-6 h-6" />,
      section: {
        title: "Ace Interviews with Mock Sessions",
        description: "Practice with comprehensive mock interviews and get detailed feedback",
        content: [
          {
            type: "image",
            src: "/Mock.png",
            alt: "Mock interview practice",
          },
          {
            type: "stats",
            stats: [
              {
                value: "10+",
                label: "Mock Interviews",
                description: "With industry experts",
                icon: <CheckCircle className="w-5 h-5 text-green-500" />,
              },
            ],
          },
        ],
      },
    },
    {
      id: 5,
      title: "Place",
      subtitle: "Career Launch",
      number: "05",
      gradient: "from-indigo-500 to-purple-500",
      icon: <Rocket className="w-6 h-6" />,
      section: {
        title: "Launch Your Tech Career",
        description: "Get placed in top companies with our comprehensive placement support system",
        content: [
          {
            type: "image",
            src: "https://storage.googleapis.com/acciojob-open-file-collections/f3c6a303-9ae8-40fb-8f05-013c41d7fb7d_web%20post.jpg",
            alt: "Career Launch",
          },
          {
            type: "stats",
            stats: [
              {
                value: "2000+",
                label: "Students Placed",
                icon: <Briefcase className="w-5 h-5 text-blue-500" />,
              },
              {
                value: "7.4 LPA",
                label: "Average Package",
                icon: <Star className="w-5 h-5 text-yellow-500" />,
              },
            ],
          },
        ],
      },
    },
  ];

  const activeStepData = steps.find(step => step.id === activeStep);

  // Calculate positions for circular layout
  const getStepPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const radius = 160;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6 border border-blue-200"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Your Journey To Excellence
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Path To{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success
            </span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Embark on a transformative journey through our carefully crafted 5-step pathway to tech
            excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Circular Progress Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 flex items-center justify-center"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

            {/* Central Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 border-2 border-blue-500/20 rounded-full"
            ></motion.div>

            {/* Progress Ring */}
            <svg className="absolute w-80 h-80 -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-300"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: activeStep / 5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Content */}
            <div className="relative z-10 text-center">
              <motion.div
                key={activeStep}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl text-white">
                  {activeStepData.icon}
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeStepData.title}</h3>
              <p className="text-blue-600 font-semibold">{activeStepData.subtitle}</p>

              {/* Progress Indicator */}
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="text-sm text-gray-500">
                  Step {activeStep} of {steps.length}
                </div>
              </div>
            </div>

            {/* Orbiting Steps */}
            {steps.map((step, index) => {
              const position = getStepPosition(index, steps.length);
              const isActive = activeStep === step.id;
              const isCompleted = step.id < activeStep;

              return (
                <motion.button
                  key={step.id}
                  initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: position.x,
                    y: position.y,
                    transition: { delay: index * 0.1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setIsHovered(step.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  onClick={() => setActiveStep(step.id)}
                  className={`absolute w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-2xl transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${step.gradient} ring-4 ring-white/50 scale-110`
                      : isCompleted
                        ? `bg-gradient-to-r ${step.gradient} ring-2 ring-white/30`
                        : isHovered === step.id
                          ? `bg-gradient-to-r ${step.gradient} ring-2 ring-white/30`
                          : "bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700"
                  }`}
                >
                  {isCompleted ? <CheckCircle className="w-6 h-6" /> : step.number}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Content Section */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-2xl">
              {/* Step Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`p-3 rounded-2xl bg-gradient-to-r ${activeStepData.gradient} text-white`}
                >
                  {activeStepData.icon}
                </div>
                <div>
                  <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                    Step {activeStepData.number}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {activeStepData.section.title}
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {activeStepData.section.description}
              </p>

              {/* Content Cards */}
              <div className="grid gap-4">
                {activeStepData.section.content.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
                  >
                    {item.type === "image" && (
                      <div className="aspect-video relative">
                        <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    )}

                    {(item.type === "stats" || item.type === "text") && (
                      <div className="p-6">
                        {item.stats && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {item.stats.map((stat, statIndex) => (
                              <div
                                key={statIndex}
                                className="text-center p-4 bg-white rounded-xl border border-gray-200"
                              >
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                  {stat.icon}
                                  <div className="text-2xl font-bold text-gray-900">
                                    {stat.value}
                                  </div>
                                </div>
                                <div className="text-gray-700 font-semibold">{stat.label}</div>
                                {stat.description && (
                                  <div className="text-gray-500 text-sm mt-1">
                                    {stat.description}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        {item.description && (
                          <div className="text-gray-600 leading-relaxed text-center">
                            {item.description}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                  disabled={activeStep === 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    activeStep === 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                  <span>Previous</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
                  disabled={activeStep === steps.length}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    activeStep === steps.length
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-purple-500 text-white hover:bg-purple-600"
                  }`}
                >
                  <span>Next</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StepsToSuccess;
