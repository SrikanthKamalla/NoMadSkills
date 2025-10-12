import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
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
  TrendingUp,
  Brain,
  Globe,
} from "lucide-react";

const DataAnalyticsSyllabus = () => {
  const [activeModule, setActiveModule] = useState(1);

  const syllabusData = [
    {
      id: 1,
      title: "Data Analytics Foundation",
      icon: <BarChart3 className="w-6 h-6" />,
      duration: "4 Weeks",
      level: "Beginner",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      topics: [
        "Introduction to Data Analytics",
        "Descriptive Statistics",
        "Probability Theory",
        "Data Types & Measurement Scales",
        "Exploratory Data Analysis (EDA)",
        "Data Visualization Principles",
        "Statistical Inference",
      ],
      projects: ["Statistical Analysis Report", "EDA Dashboard", "Data Storytelling Presentation"],
      skills: ["Statistics", "Excel", "Data Visualization", "EDA"],
      outcome: "Understand fundamental statistical concepts and perform basic data analysis",
    },
    {
      id: 2,
      title: "SQL for Data Analysis",
      icon: <Database className="w-6 h-6" />,
      duration: "5 Weeks",
      level: "Beginner",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      topics: [
        "SQL Fundamentals & Syntax",
        "SELECT Queries & Filtering",
        "JOINs & Relationships",
        "Aggregate Functions",
        "Window Functions",
        "Subqueries & CTEs",
        "Data Cleaning with SQL",
        "Performance Optimization",
      ],
      projects: [
        "Business Intelligence Queries",
        "Data Cleaning Pipeline",
        "Sales Analysis Report",
      ],
      skills: ["SQL", "PostgreSQL", "Query Optimization", "Data Wrangling"],
      outcome: "Extract and transform data using advanced SQL queries",
    },
    {
      id: 3,
      title: "Python for Data Analysis",
      icon: <Code className="w-6 h-6" />,
      duration: "6 Weeks",
      level: "Intermediate",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
      topics: [
        "Python Programming Basics",
        "Pandas Data Manipulation",
        "NumPy for Numerical Computing",
        "Data Cleaning with Python",
        "Data Visualization with Matplotlib/Seaborn",
        "Working with APIs",
        "Web Scraping for Data Collection",
        "Object-Oriented Programming",
      ],
      projects: ["Data Cleaning Script", "API Integration", "Web Scraper", "Analysis Automation"],
      skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
      outcome: "Automate data processing and perform advanced analysis using Python",
    },
    {
      id: 4,
      title: "Data Visualization & BI Tools",
      icon: <TrendingUp className="w-6 h-6" />,
      duration: "4 Weeks",
      level: "Intermediate",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      topics: [
        "Tableau Fundamentals",
        "Power BI Dashboard Development",
        "Advanced Chart Types",
        "Interactive Dashboards",
        "Storytelling with Data",
        "Dashboard Design Principles",
        "Business Metrics & KPIs",
        "Data Presentation Techniques",
      ],
      projects: ["Interactive Dashboard", "Business Report", "KPI Monitoring System", "Data Story"],
      skills: ["Tableau", "Power BI", "Dashboard Design", "Data Storytelling"],
      outcome: "Create compelling visualizations and business intelligence dashboards",
    },

    {
      id: 5,
      title: "Big Data & Advanced Analytics",
      icon: <Globe className="w-6 h-6" />,
      duration: "5 Weeks",
      level: "Advanced",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      topics: [
        "Big Data Concepts",
        "Apache Spark Fundamentals",
        "Cloud Analytics (AWS/Azure)",
        "Real-time Data Processing",
        "Data Warehousing",
        "ETL Pipeline Development",
        "Data Governance & Security",
        "Scalable Analytics Architecture",
      ],
      projects: [
        "Spark Data Processing",
        "Cloud Analytics Setup",
        "Real-time Dashboard",
        "ETL Pipeline",
      ],
      skills: ["Apache Spark", "AWS", "Data Warehousing", "ETL"],
      outcome: "Process large-scale data and deploy analytics solutions on cloud platforms",
    },

    {
      id: 6,
      title: "DSA & System Design",
      icon: <Cpu className="w-6 h-6" />,
      duration: "6 Weeks",
      level: "Advanced",
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

  const stats = [
    { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "29 Weeks" },
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
              Data Analytics Journey
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

        {/* Enhanced Syllabus Layout with Equal Height */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto min-h-[600px]">
          {/* Module Navigation - Fixed Height */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6 h-full flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>Learning Path</span>
              </h3>

              <div className="space-y-3 flex-1 overflow-y-auto">
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
                          <div className="flex items-center space-x-3 mt-1 text-xs text-gray-600">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{module.duration}</span>
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full ${
                                module.level === "Beginner"
                                  ? "bg-green-100 text-green-800"
                                  : module.level === "Intermediate"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {module.level}
                            </span>
                          </div>
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
          </motion.div>

          {/* Module Details - Matching Height */}
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div
              className={`bg-white rounded-2xl shadow-lg border-2 ${activeModuleData.borderColor} overflow-hidden h-full flex flex-col`}
            >
              {/* Module Header */}
              <div className={`bg-gradient-to-r ${activeModuleData.color} p-8 text-white`}>
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
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span>{activeModuleData.duration}</span>
                      </span>
                      <span className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                        <BarChart3 className="w-4 h-4" />
                        <span>{activeModuleData.level}</span>
                      </span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="hidden lg:block flex-shrink-0 ml-4"
                  >
                    <Zap className="w-10 h-10 lg:w-12 lg:h-12 text-yellow-300" />
                  </motion.div>
                </div>
              </div>

              {/* Module Content - Flexible Height */}
              <div className="p-6 lg:p-8 flex-1">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 h-full">
                  {/* Topics - Takes more space */}
                  <div className="lg:col-span-2">
                    <h3 className="flex items-center space-x-2 text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">
                      <PlayCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                      <span>What You'll Learn</span>
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3 lg:gap-4 max-h-96 overflow-y-auto pr-2">
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

                  {/* Projects & Skills - Sidebar */}
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

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 lg:mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 lg:py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Start This Module</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsSyllabus;
