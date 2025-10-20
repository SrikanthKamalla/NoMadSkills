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
  TrendingUp,
  Brain,
  Globe,
  Briefcase,
  LineChart,
  TestTube,
  GitBranch,
  Award,
} from "lucide-react";

const DataAnalyticsSyllabus = () => {
  const [activeModule, setActiveModule] = useState(1);

  // Data structured from the PDF content
  const syllabusData = [
    {
      id: 1,
      title: "Analytics Mindset & Excel Foundations",
      icon: <BarChart3 className="w-6 h-6" />,
      duration: "2 Weeks",
      level: "Beginner",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      topics: [
        "Thinking like an Analyst",
        "KPI trees development",
        "Tidy data principles",
        "Excel formulas and functions",
        "Pivot tables mastery",
        "XLOOKUP advanced usage",
        "Power Query for data transformation",
      ],
      projects: ["Retail KPI Workbook"],
      skills: ["Excel", "Power Query", "Data Thinking", "KPI Analysis"],
      outcome: "Build strong analytical foundation and master Excel for business analysis",
    },
    {
      id: 2,
      title: "SQL for Data Analysts",
      icon: <Database className="w-6 h-6" />,
      duration: "3 Weeks",
      level: "Beginner",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      topics: [
        "SELECT queries & filtering",
        "WHERE clauses & conditions",
        "GROUP BY & aggregate functions",
        "JOINs & table relationships",
        "Common Table Expressions (CTEs)",
        "Window Functions for analytics",
        "DateTime functions",
        "Subqueries & nested queries",
      ],
      projects: ["Food Delivery Case Analysis"],
      skills: ["SQL", "PostgreSQL", "Query Optimization", "Data Analysis"],
      outcome: "Write production-ready SQL queries for complex data analysis",
    },
    {
      id: 3,
      title: "Python for Data Wrangling & EDA",
      icon: <Code className="w-6 h-6" />,
      duration: "3 Weeks",
      level: "Intermediate",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
      topics: [
        "Python programming basics",
        "Pandas for data cleaning",
        "Data reshaping techniques",
        "Exploratory Data Analysis (EDA)",
        "Data visualization with matplotlib/plotly",
        "Working with APIs",
        "CSV/JSON data imports",
        "Statistical analysis with Python",
      ],
      projects: ["E-commerce Customer Segmentation"],
      skills: ["Python", "Pandas", "EDA", "Data Visualization", "APIs"],
      outcome: "Clean, analyze, and visualize data using Python for business insights",
    },
    {
      id: 4,
      title: "Statistics for Business Decisions",
      icon: <TrendingUp className="w-6 h-6" />,
      duration: "2 Weeks",
      level: "Intermediate",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      topics: [
        "Statistical distributions",
        "Sampling techniques",
        "Hypothesis testing fundamentals",
        "T-tests implementation",
        "Chi-square tests",
        "Correlation vs causation",
        "A/B testing methodology",
        "Business experiment design",
      ],
      projects: ["Landing Page A/B Test"],
      skills: ["Statistics", "A/B Testing", "Hypothesis Testing", "Business Experiments"],
      outcome: "Apply statistical methods to make data-driven business decisions",
    },
    {
      id: 5,
      title: "Data Visualization & BI Dashboards",
      icon: <Layout className="w-6 h-6" />,
      duration: "3 Weeks",
      level: "Intermediate",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      topics: [
        "Chart types selection",
        "Dashboard design principles",
        "Data modeling for BI",
        "DAX & calculated fields",
        "Row-level security",
        "Drill-through functionality",
        "Power BI/Tableau mastery",
        "Executive reporting",
      ],
      projects: ["Executive Sales Dashboard"],
      skills: ["Power BI", "Tableau", "Dashboard Design", "Data Storytelling", "DAX"],
      outcome: "Create compelling BI dashboards for executive decision-making",
    },
    {
      id: 6,
      title: "Business & Product Analytics",
      icon: <Briefcase className="w-6 h-6" />,
      duration: "2 Weeks",
      level: "Intermediate",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
      topics: [
        "Funnel analysis techniques",
        "Cohort analysis implementation",
        "Churn & retention analysis",
        "Customer Acquisition Cost (CAC)",
        "Lifetime Value (LTV)",
        "Marketing mix modeling",
        "Product metrics tracking",
        "SaaS business analytics",
      ],
      projects: ["SaaS Churn Dashboard", "App Funnel Report"],
      skills: ["Funnel Analysis", "Cohort Analysis", "Product Metrics", "SaaS Analytics"],
      outcome: "Analyze business performance and product metrics for growth",
    },
    {
      id: 7,
      title: "Automation & Collaboration",
      icon: <GitBranch className="w-6 h-6" />,
      duration: "1 Week",
      level: "Advanced",
      color: "from-gray-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-gray-50 to-blue-50",
      borderColor: "border-gray-200",
      topics: [
        "Scheduled refresh automation",
        "ETL pipeline basics",
        "dbt concepts introduction",
        "Git & GitHub for analysts",
        "Reproducible analysis",
        "Documentation best practices",
        "Version control for data",
        "Collaborative workflows",
      ],
      projects: ["Automated Weekly BI Report"],
      skills: ["Git", "GitHub", "ETL", "Automation", "Documentation"],
      outcome: "Automate reporting and collaborate effectively using modern tools",
    },
    {
      id: 8,
      title: "Domain Specialization Track",
      icon: <Target className="w-6 h-6" />,
      duration: "2 Weeks",
      level: "Advanced",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-green-50",
      borderColor: "border-teal-200",
      topics: [
        "Marketing Analytics deep dive",
        "Product Analytics specialization",
        "Finance/RevOps analytics",
        "Domain-specific KPIs",
        "Industry case studies",
        "Advanced query writing",
        "Custom dashboard development",
        "Business stakeholder management",
      ],
      projects: ["Domain-Specific Dashboard + Queries"],
      skills: ["Domain Expertise", "Advanced SQL", "Custom Dashboards", "Stakeholder Management"],
      outcome: "Specialize in your chosen domain and build portfolio-ready projects",
    },
    {
      id: 9,
      title: "Capstone & Placement Prep",
      icon: <Award className="w-6 h-6" />,
      duration: "2 Weeks",
      level: "Advanced",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      topics: [
        "Capstone project execution",
        "Domain/business problem selection",
        "GitHub portfolio development",
        "BI dashboard creation",
        "Business presentation skills",
        "Resume optimization",
        "LinkedIn profile enhancement",
        "Mock interviews practice",
      ],
      projects: ["Capstone Project", "GitHub Portfolio", "Business Presentation"],
      skills: [
        "Portfolio Development",
        "Interview Prep",
        "Business Communication",
        "Project Management",
      ],
      outcome: "Graduate with a strong portfolio and be interview-ready for analyst roles",
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

  // Updated stats based on PDF data
  const stats = [
    { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "3 Months" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Modules", value: "9" },
    { icon: <Target className="w-5 h-5" />, label: "Projects", value: "6-8 + Capstone" },
    { icon: <CheckCircle className="w-5 h-5" />, label: "Skills", value: "15+" },
    { icon: <Star className="w-5 h-5" />, label: "Mode", value: "Hybrid" },
  ];

  // Career roles from PDF
  const careerRoles = [
    "Data Analyst / Business Analyst",
    "BI Analyst / Reporting Analyst",
    "Junior Analytics Engineer",
    "Marketing/Product/Finance Analyst",
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
            <span className="font-semibold text-sm uppercase tracking-wide">
              Industry-Aligned Program
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Become a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Job-Ready Data Analyst
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Extract, analyze, and visualize data to solve real-world business problems through
            hands-on projects, domain case studies, and industry-standard tools.
          </p>

          {/* Career Roles */}
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Ideal Roles After This Program:
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {careerRoles.map((role, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white px-4 py-2 rounded-full border border-blue-200 text-blue-800 font-medium shadow-sm text-sm sm:text-base"
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 max-w-4xl mx-auto">
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

        {/* Enhanced Syllabus Layout - Fixed Responsiveness */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Module Navigation - Fixed responsive tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>20-Week Learning Path</span>
              </h3>

              <div className="space-y-3 max-h-[600px] overflow-y-auto">
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
                    <div className="flex items-start space-x-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${module.color} text-white flex-shrink-0 mt-1`}
                      >
                        {module.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight sm:leading-normal break-words">
                          {module.title}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mt-2 text-xs text-gray-600 space-y-1 sm:space-y-0">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{module.duration}</span>
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full w-fit ${
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
                      <ChevronRight
                        className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 mt-1 ${
                          activeModule === module.id ? "rotate-90 text-blue-600" : ""
                        }`}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Module Details - Fixed responsive layout */}
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div
              className={`bg-white rounded-2xl shadow-lg border-2 ${activeModuleData.borderColor} overflow-hidden`}
            >
              {/* Module Header */}
              <div className={`bg-gradient-to-r ${activeModuleData.color} p-6 lg:p-8 text-white`}>
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

              {/* Module Content - Improved responsive layout */}
              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Topics Section */}
                  <div className="lg:col-span-2">
                    <h3 className="flex items-center space-x-2 text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">
                      <PlayCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                      <span>What You'll Learn</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                      {activeModuleData.topics.map((topic, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 group hover:bg-white hover:shadow-md transition-all duration-300"
                        >
                          <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-gray-700 font-medium text-sm lg:text-base leading-relaxed">
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
                            className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200 group"
                          >
                            <FileText className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 font-medium text-sm lg:text-base leading-relaxed">
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
                            className="px-3 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium border border-orange-200"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6 lg:mt-8">
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
          </motion.div>
        </div>

        {/* Tools Covered Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Tools Covered in This Program
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming & Querying Tools */}
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-4">Programming & Querying</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Python (pandas, numpy, matplotlib, plotly, scipy)</div>
                <div>SQL (PostgreSQL/MySQL, BigQuery basics)</div>
                <div>Jupyter Notebook, VS Code, GitHub</div>
              </div>
            </div>

            {/* Visualization Tools */}
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Layout className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-4">Visualization Tools</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Power BI (primary)</div>
                <div>Tableau (secondary)</div>
              </div>
            </div>

            {/* Data Analysis Tools */}
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-4">Data Analysis Tools</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Excel/Google Sheets (Power Query, pivots)</div>
                <div>DBeaver / Beekeeper for SQL</div>
                <div>Markdown for docs, dbt concepts, Airbyte basics</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataAnalyticsSyllabus;
