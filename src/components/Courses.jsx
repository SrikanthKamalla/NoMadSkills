import React, { useState } from "react";
import {
  Clock,
  Code,
  BarChart3,
  Cpu,
  Users,
  Star,
  Target,
  BookOpen,
  ChevronRight,
} from "lucide-react";

const courses = [
  {
    id: "fullstack",
    title: "Full Stack (MERN) Development",
    duration: "9 MONTHS",
    color: "from-purple-500 to-blue-500",
    accent: "bg-gradient-to-r from-purple-500 to-blue-500",
    cardColor: "bg-white/10",
    tools: ["MongoDB", "Express", "React", "Node.js"],
    icons: ["💻", "⚛️", "🌐", "🗄️"],
    description:
      "Master the complete MERN stack to build modern, full-scale web applications from database to UI.",
    outcomes: [
      "Build & deploy production-ready apps",
      "Master frontend & backend integration",
      "Learn DevOps & CI/CD basics",
    ],
    stats: {
      students: "12K+",
      rating: "4.9",
      projects: "50+",
      placement: "95%",
    },
  },
  {
    id: "devops",
    title: "DevOps & Cloud Engineering",
    duration: "7 MONTHS",
    color: "from-green-400 to-cyan-500",
    accent: "bg-gradient-to-r from-green-400 to-cyan-500",
    cardColor: "bg-white/10",
    tools: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    icons: ["🐳", "☸️", "☁️", "🔁"],
    description:
      "Automate deployment, scaling, and management of containerized applications using industry-standard tools.",
    outcomes: [
      "Implement full CI/CD pipelines",
      "Manage cloud infrastructure",
      "Master container orchestration",
    ],
    stats: {
      students: "8K+",
      rating: "4.8",
      projects: "35+",
      placement: "92%",
    },
  },
  {
    id: "data",
    title: "Data Analytics & Visualization",
    duration: "6 MONTHS",
    color: "from-orange-400 to-pink-500",
    accent: "bg-gradient-to-r from-orange-400 to-pink-500",
    cardColor: "bg-white/10",
    tools: ["MySQL", "Excel", "Power BI", "Python"],
    icons: ["🧮", "📊", "⚡", "🐍"],
    description:
      "Transform raw data into actionable insights and compelling visual stories for business decision-making.",
    outcomes: [
      "Create interactive dashboards",
      "Perform advanced data analysis",
      "Build predictive models",
    ],
    stats: {
      students: "6K+",
      rating: "4.7",
      projects: "25+",
      placement: "89%",
    },
  },
];

const Courses = () => {
  const [selected, setSelected] = useState("fullstack");
  const currentCourse = courses.find(c => c.id === selected);

  return (
    <div id="courses" className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden py-5 px-4">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-purple-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-400 text-sm font-medium mb-6">
            <span>⭐</span> Explore Our Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Career Path
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from our industry-leading programs designed to transform you into a top-tier tech
            professional.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {courses.map(course => (
            <button
              key={course.id}
              onClick={() => setSelected(course.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 backdrop-blur-md ${
                selected === course.id
                  ? `${course.accent} text-white shadow-lg transform scale-105`
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {course.id === "fullstack" && <Code size={20} />}
              {course.id === "devops" && <Cpu size={20} />}
              {course.id === "data" && <BarChart3 size={20} />}
              <span className="font-semibold">{course.title}</span>
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Course Details */}
          <div className="flex flex-col">
            <div
              className={`rounded-2xl ${currentCourse.cardColor} backdrop-blur-md border border-white/20 p-8 flex-1 flex flex-col`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {currentCourse.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-300">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {currentCourse.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={16} />
                      {currentCourse.stats.students} Enrolled
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center whitespace-nowrap gap-1 bg-yellow-400/20 text-yellow-300 p-3 rounded-full text-sm leading-none">
                  <Star size={14} className="shrink-0" />
                  <span>{`${currentCourse.stats.rating} Rating`}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed flex-grow-0">
                {currentCourse.description}
              </p>

              <div className="mb-6 flex-grow-0">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Target size={18} />
                  Key Learning Outcomes
                </h4>
                <ul className="text-gray-300 space-y-2">
                  {currentCourse.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 flex-grow-0">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <BookOpen size={18} />
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                  {currentCourse.tools.map((tool, idx) => (
                    <span
                      key={tool}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium"
                    >
                      <span className="text-lg">{currentCourse.icons[idx]}</span>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual & Stats */}
          <div className="flex flex-col">
            <div
              className={`rounded-2xl ${currentCourse.cardColor} backdrop-blur-md border border-white/20 overflow-hidden flex-1 flex flex-col`}
            >
              <div
                className={`h-48 bg-gradient-to-r ${currentCourse.color} flex items-center justify-center p-6`}
              >
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Launch Your Career?</h3>
                  <p className="opacity-90">
                    Join {currentCourse.stats.students} aspiring developers
                  </p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                {/* Comprehensive Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-2xl font-bold text-white">
                      {currentCourse.stats.placement}
                    </div>
                    <div className="text-sm text-gray-400">Placement Rate</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-2xl font-bold text-white">
                      {currentCourse.stats.projects}
                    </div>
                    <div className="text-sm text-gray-400">Real Projects</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-2xl font-bold text-white">1:1</div>
                    <div className="text-sm text-gray-400">Mentor Sessions</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-400">Code Support</div>
                  </div>
                </div>

                <div className="mt-auto">
                  <button
                    className={`w-full ${currentCourse.accent} text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    View Program <ChevronRight size={20} />
                  </button>
                  <p className="text-center text-gray-400 text-sm mt-4">
                    Start with a free 7-day trial • No credit card required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
