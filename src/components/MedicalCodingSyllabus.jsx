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
  Stethoscope,
  FileSearch,
  Shield,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const MedicalCodingSyllabus = () => {
  const [activeModule, setActiveModule] = useState(1);

  const syllabusData = [
    {
      id: 1,
      title: "Introduction to Medical Coding",
      icon: <Stethoscope className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      topics: [
        "What is Medical Coding?",
        "US Healthcare System",
        "RCM Workflow",
        "Role of Providers, Payers, and Coders",
        "HIPAA, HITECH, and Compliance",
        "Types of Coding: IP, OP, ED, SDS, DRG",
      ],
      projects: ["Healthcare System Analysis", "RCM Workflow Chart", "Compliance Guidelines"],
      skills: ["Healthcare Basics", "RCM Understanding", "HIPAA Compliance"],
      outcome: "Understand healthcare systems and coding fundamentals",
    },
    {
      id: 2,
      title: "Medical Terminology",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      topics: [
        "Prefixes, Suffixes, Root Words",
        "Directional Terms",
        "Body Planes & Positions",
        "Abbreviations & Symbols",
        "Medical Documentation & Chart Review",
        "Medical Word Formation Exercises",
      ],
      projects: ["Medical Terminology Guide", "Chart Review Practice", "Abbreviation Dictionary"],
      skills: ["Medical Terminology", "Chart Review", "Documentation Analysis"],
      outcome: "Master medical language and documentation review",
    },
    {
      id: 3,
      title: "Anatomy & Physiology",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      topics: [
        "Body Systems Overview",
        "Circulatory, Respiratory, Digestive Systems",
        "Musculoskeletal, Reproductive, Nervous Systems",
        "Diagnostic Terms",
        "Surgical Procedures",
        "System-wise Coding Practice",
      ],
      projects: ["Body Systems Chart", "Diagnostic Terms Guide", "Surgical Procedures Index"],
      skills: ["Anatomy Knowledge", "Physiology Basics", "System-wise Coding"],
      outcome: "Apply anatomy knowledge to coding scenarios",
    },
    {
      id: 4,
      title: "ICD-10-CM Coding",
      icon: <FileSearch className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      topics: [
        "ICD Guidelines",
        "Chapters A–Z",
        "Coding Scenarios",
        "Principal Diagnosis",
        "Combination Coding",
        "Laterality, Excludes1/Excludes2",
        "Case Sheets Practice",
      ],
      projects: ["100+ ICD-10-CM Practice Cases", "Diagnosis Coding", "Case Sheet Analysis"],
      skills: ["ICD-10-CM", "Diagnosis Coding", "Guideline Application"],
      outcome: "Code medical diagnoses with high accuracy",
    },
    {
      id: 5,
      title: "CPT-4 Coding",
      icon: <Code className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      topics: [
        "Structure & Sections",
        "E/M Coding",
        "Anesthesia Coding",
        "Surgery Section (Major Focus)",
        "Radiology & Pathology",
        "Modifiers & Correct Usage",
      ],
      projects: ["80+ CPT Practice Charts", "Procedure Coding", "Modifier Application"],
      skills: ["CPT-4", "Procedure Coding", "Modifiers", "E/M Coding"],
      outcome: "Master procedure coding and modifier usage",
    },
    {
      id: 6,
      title: "HCPCS & Advanced Topics",
      icon: <Database className="w-6 h-6" />,
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
      topics: [
        "Level II Codes",
        "Supplies, Drugs, and DME",
        "Real US Healthcare Scenarios",
        "Coding Compliance & Auditing",
        "CMS Guidelines",
        "OIG Compliance",
        "Documentation Improvement",
      ],
      projects: ["HCPCS Coding Practice", "Compliance Audit", "Documentation Review"],
      skills: ["HCPCS", "Compliance", "Auditing", "CMS Guidelines"],
      outcome: "Handle advanced coding scenarios and compliance",
    },
    {
      id: 7,
      title: "CPC Certification Prep",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-teal-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-blue-50",
      borderColor: "border-teal-200",
      topics: [
        "AAPC Exam Format",
        "Time Management Strategies",
        "Practice Exams",
        "2000+ CPC-style Questions",
        "Final Mock Exam",
        "Doubt-clearing Sessions",
      ],
      projects: ["Practice Tests", "Mock Exams", "Question Bank Practice"],
      skills: ["Exam Strategy", "Time Management", "CPC Preparation"],
      outcome: "Ready to pass CPC certification exam",
    },
    {
      id: 8,
      title: "Projects & Placement",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      topics: [
        "Outpatient Surgery Coding",
        "Radiology Coding",
        "Emergency Department Coding",
        "Chart Auditing Exercise",
        "Resume Building",
        "HR Interview Preparation",
        "Company-specific Training",
      ],
      projects: ["Complete Coding Portfolio", "Resume Preparation", "Mock Interviews"],
      skills: ["Real-world Coding", "Interview Skills", "Job Readiness"],
      outcome: "Job-ready with portfolio and interview skills",
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
    { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "3 Months" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Modules", value: "8" },
    { icon: <Target className="w-5 h-5" />, label: "Practice Cases", value: "200+" },
    { icon: <CheckCircle className="w-5 h-5" />, label: "Skills", value: "25+" },
    { icon: <Star className="w-5 h-5" />, label: "CPC Pass Rate", value: "95%" },
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
            <span className="font-semibold text-sm uppercase tracking-wide">CURRICULUM</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master Medical Coding with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CPC Certification
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow our structured learning path with hands-on medical charts, real-world coding
            scenarios, and comprehensive CPC exam preparation to become job-ready in healthcare.
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

export default MedicalCodingSyllabus;
