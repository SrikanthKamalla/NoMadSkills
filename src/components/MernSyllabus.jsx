import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Code,
  Database,
  Layout,
  Server,
  BookOpen,
  Clock,
  BarChart3,
  CheckCircle,
  PlayCircle,
  FileText,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  Cpu,
} from "lucide-react";

const MernSyllabus = () => {
  const [activeModule, setActiveModule] = useState(1);

  const syllabusData = [
    {
      id: 1,
      title: "Frontend Foundation",
      icon: <Layout className="w-6 h-6" />,

      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      topics: [
        "HTML5 & Semantic Web",
        "CSS3 & Flexbox/Grid",
        "JavaScript ES6+ Features",
        "DOM Manipulation",
        "Async JavaScript & APIs",
        "Modern CSS with Tailwind",
        "Responsive Design Principles",
      ],
      projects: ["Portfolio Website", "Weather App", "Task Manager"],
      skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      outcome: "Build responsive, modern websites from scratch",
    },
    {
      id: 2,
      title: "React & Ecosystem",
      icon: <Code className="w-6 h-6" />,

      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      topics: [
        "React Components & JSX",
        "State & Props Management",
        "Hooks (useState, useEffect, custom)",
        "Context API & State Management",
        "React Router & Navigation",
        "Component Lifecycle",
        "Performance Optimization",
        "Testing with Jest & React Testing Library",
      ],
      projects: ["E-commerce Frontend", "Social Media App", "Admin Dashboard"],
      skills: ["React", "React Router", "Context API", "Jest"],
      outcome: "Create dynamic single-page applications",
    },
    {
      id: 3,
      title: "Backend with Node.js",
      icon: <Server className="w-6 h-6" />,

      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      topics: [
        "Node.js Runtime Environment",
        "Express.js Framework",
        "RESTful API Design",
        "Middleware & Error Handling",
        "Authentication & Authorization",
        "File Upload & Processing",
        "API Security Best Practices",
        "WebSockets & Real-time Communication",
      ],
      projects: ["REST API Server", "Chat Application", "File Sharing Service"],
      skills: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
      outcome: "Develop robust backend servers and APIs",
    },
    {
      id: 4,
      title: "Database with MongoDB",
      icon: <Database className="w-6 h-6" />,

      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      topics: [
        "NoSQL Database Concepts",
        "MongoDB CRUD Operations",
        "Mongoose ODM",
        "Data Modeling & Relationships",
        "Aggregation Framework",
        "Indexing & Performance",
        "Database Security",
        "Transactions in MongoDB",
      ],
      projects: ["Database Design", "Data Analytics Setup", "User Management System"],
      skills: ["MongoDB", "Mongoose", "Data Modeling", "Aggregation"],
      outcome: "Design and optimize database solutions",
    },
    {
      id: 5,
      title: "Full Stack Integration",
      icon: <Users className="w-6 h-6" />,

      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      topics: [
        "MERN Stack Integration",
        "JWT Authentication Flow",
        "State Management with Redux",
        "API Integration & Error Handling",
        "Deployment Strategies",
        "Docker & Containerization",
        "CI/CD Pipelines",
        "Performance Monitoring",
      ],
      projects: ["Complete MERN Application", "Deployment on Cloud", "CI/CD Setup"],
      skills: ["JWT", "Redux", "Docker", "CI/CD"],
      outcome: "Deploy full-stack applications to production",
    },
    {
      id: 6,
      title: "DSA & System Design",
      icon: <Cpu className="w-6 h-6" />,

      color: "from-rose-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
      topics: [
        "Time & Space Complexity",
        "Arrays, Strings & Linked Lists",
        "Stacks, Queues & Hash Tables",
        "Trees & Binary Search Trees",
        "Graph Algorithms",
        "Sorting & Searching Algorithms",
        "Dynamic Programming",
        "System Design Fundamentals",
      ],
      projects: ["Algorithm Visualizer", "Problem Solving Portfolio", "System Design Docs"],
      skills: ["Data Structures", "Algorithms", "System Design", "Optimization"],
      outcome: "Ace technical interviews and design scalable systems",
    },
  ];

  const activeModuleData = syllabusData.find(module => module.id === activeModule);

  // Navigation functions
  const nextModule = () => {
    if (activeModule < syllabusData.length) {
      setActiveModule(activeModule + 1);
    }
  };

  const prevModule = () => {
    if (activeModule > 1) {
      setActiveModule(activeModule - 1);
    }
  };

  const stats = [
    { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "36 Weeks" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Modules", value: "6" },
    { icon: <Target className="w-5 h-5" />, label: "Projects", value: "15+" },
    { icon: <CheckCircle className="w-5 h-5" />, label: "Skills", value: "40+" },
    { icon: <Star className="w-5 h-5" />, label: "Rating", value: "4.9/5" },
  ];

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
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wide">CURRICULAM</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master The Complete{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MERN Stack Journey
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow our structured learning path with hands-on projects, real-world applications, and
            industry-best practices to become job-ready.
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Syllabus Layout */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Module Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6 h-[600px] flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>Learning Path</span>
              </h3>

              <div className="flex-1 overflow-y-auto">
                <div className="space-y-3">
                  {syllabusData.map((module, index) => (
                    <motion.button
                      key={module.id}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveModule(module.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 ${
                        activeModule === module.id
                          ? `border-blue-500 bg-blue-50 shadow-md`
                          : `border-gray-100 bg-white hover:border-blue-300 hover:bg-blue-25`
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${module.color} text-white`}
                          >
                            {module.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 truncate">{module.title}</h4>
                            <div className="flex items-center space-x-3 mt-1 text-xs text-gray-600"></div>
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${
                            activeModule === module.id ? "rotate-90 text-blue-600" : ""
                          }`}
                        />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Module Details */}
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div
              className={`bg-white rounded-2xl shadow-lg border-2 ${activeModuleData.borderColor} overflow-hidden h-[600px] flex flex-col`}
            >
              {/* Module Header */}
              <div
                className={`bg-gradient-to-r ${activeModuleData.color} p-6 lg:p-8 text-white flex-shrink-0`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm flex-shrink-0">
                        {activeModuleData.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl lg:text-3xl font-bold">{activeModuleData.title}</h2>
                        <p className="text-blue-100 mt-1 text-sm lg:text-base">
                          {activeModuleData.outcome}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm"></div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="hidden lg:block flex-shrink-0 ml-4"
                  >
                    <Zap className="w-10 h-10 lg:w-12 lg:h-12 text-yellow-300" />
                  </motion.div>
                </div>
              </div>

              {/* Module Content */}
              <div className="flex-1 flex flex-col min-h-0">
                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto p-6 lg:p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Topics Section */}
                    <div className="lg:col-span-2">
                      <h3 className="flex items-center space-x-2 text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">
                        <PlayCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                        <span>What You'll Learn</span>
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                        {activeModuleData.topics.map((topic, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 group hover:bg-white hover:shadow-md transition-all duration-300"
                          >
                            <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium text-sm lg:text-base">
                              {topic}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Projects & Skills Sidebar */}
                    <div className="space-y-6 lg:space-y-8">
                      {/* Projects */}
                      <div>
                        <h3 className="flex items-center space-x-2 text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                          <Target className="w-5 h-5 text-green-600" />
                          <span>Hands-on Projects</span>
                        </h3>
                        <div className="space-y-2 lg:space-y-3">
                          {activeModuleData.projects.map((project, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                              whileHover={{ x: 5 }}
                              className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200 group"
                            >
                              <FileText className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700 font-medium text-sm lg:text-base">
                                {project}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h3 className="flex items-center space-x-2 text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                          <Star className="w-5 h-5 text-orange-500" />
                          <span>Skills Gained</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {activeModuleData.skills.map((skill, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.5 }}
                              whileHover={{ scale: 1.05 }}
                              className="px-2 py-1 lg:px-3 lg:py-2 bg-orange-100 text-orange-800 rounded-full text-xs lg:text-sm font-medium border border-orange-200"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons - Always visible at bottom */}
                <div className="flex-shrink-0 border-t border-gray-200 bg-gray-50 p-6">
                  <div className="flex justify-between">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={prevModule}
                      disabled={activeModule === 1}
                      className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                        activeModule === 1
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Previous</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={nextModule}
                      disabled={activeModule === syllabusData.length}
                      className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                        activeModule === syllabusData.length
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-purple-600 text-white hover:bg-purple-700"
                      }`}
                    >
                      <span>Next</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MernSyllabus;
