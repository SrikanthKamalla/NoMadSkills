import { Helmet } from "react-helmet";

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
  Brain,
  Database,
  Cloud,
  Globe,
  PieChart,
  Container,
  Zap,
  Server,
  LineChart,
  Table,
  Workflow,
  Binary,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: "fullstack",
    navigateTo: "/merncourse",
    title: "Full Stack (MERN) Development",
    duration: "9 MONTHS",
    color: "from-blue-500 to-indigo-500",
    accent: "bg-gradient-to-r from-blue-500 to-indigo-500",
    buttonGradient: "from-blue-600 to-indigo-600",
    cardColor: "bg-white/80",
    tools: ["MongoDB", "Express", "React", "Node.js"],
    icons: [<Database size={20} />, <Zap size={20} />, <Code size={20} />, <Server size={20} />],
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
    mainIcon: <Globe size={24} />,
    tabIcon: <Globe size={20} />,
    visualIcon: <Code size={48} />,
  },
  {
    id: "devops",
    navigateTo: "/devops",
    title: "DevOps & Cloud Engineering",
    duration: "6 MONTHS",
    color: "from-cyan-500 to-blue-500",
    accent: "bg-gradient-to-r from-cyan-500 to-blue-500",
    buttonGradient: "from-cyan-600 to-blue-600",
    cardColor: "bg-white/80",
    tools: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    icons: [
      <Container size={20} />,
      <Workflow size={20} />,
      <Cloud size={20} />,
      <Zap size={20} />,
    ],
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
    mainIcon: <Cpu size={24} />,
    tabIcon: <Cloud size={20} />,
    visualIcon: <Container size={48} />,
  },
  {
    id: "data",
    navigateTo: "/dataanalytics",
    title: "Data Analytics & Visualization",
    duration: "6 MONTHS",
    color: "from-sky-500 to-blue-500",
    accent: "bg-gradient-to-r from-sky-500 to-blue-500",
    buttonGradient: "from-sky-600 to-blue-600",
    cardColor: "bg-white/80",
    tools: ["MySQL", "Excel", "Power BI", "Python"],
    icons: [
      <Database size={20} />,
      <Table size={20} />,
      <BarChart3 size={20} />,
      <LineChart size={20} />,
    ],
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
    mainIcon: <PieChart size={24} />,
    tabIcon: <PieChart size={20} />,
    visualIcon: <BarChart3 size={48} />,
  },
  {
    id: "datascience",
    navigateTo: "/datascience",
    title: "Data Science & Machine Learning",
    duration: "6 MONTHS",
    color: "from-indigo-500 to-purple-500",
    accent: "bg-gradient-to-r from-indigo-500 to-purple-500",
    buttonGradient: "from-indigo-600 to-purple-600",
    cardColor: "bg-white/80",
    tools: ["Python", "TensorFlow", "SQL", "PyTorch"],
    icons: [<Code size={20} />, <Brain size={20} />, <Database size={20} />, <Binary size={20} />],
    description:
      "Master advanced machine learning algorithms and statistical models to extract insights and build intelligent systems.",
    outcomes: [
      "Build and train ML models",
      "Work with real-world datasets",
      "Deploy models to production",
    ],
    stats: {
      students: "9K+",
      rating: "4.8",
      projects: "30+",
      placement: "91%",
    },
    mainIcon: <Brain size={24} />,
    tabIcon: <Brain size={20} />,
    visualIcon: <Sparkles size={48} />,
  },
];

const Courses = () => {
  const [selected, setSelected] = useState("fullstack");
  const navigate = useNavigate();
  const currentCourse = courses.find(c => c.id === selected);

  const handleViewProgram = course => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(course.navigateTo);
    }, 100);
  };

  const getVisualTitle = courseId => {
    switch (courseId) {
      case "fullstack":
        return "Build Amazing Web Apps";
      case "devops":
        return "Deploy with Confidence";
      case "data":
        return "Uncover Data Insights";
      case "datascience":
        return "Start Your AI Journey";
      default:
        return "Launch Your Career";
    }
  };

  const getVisualSubtitle = (courseId, students) => {
    switch (courseId) {
      case "fullstack":
        return `Join ${students} aspiring developers`;
      case "devops":
        return `Join ${students} cloud engineers`;
      case "data":
        return `Join ${students} data analysts`;
      case "datascience":
        return `Join ${students} data scientists`;
      default:
        return `Join ${students} aspiring professionals`;
    }
  };

  return (
    <>
      <Helmet>
        <title>NomadSkills Programs | MERN, DevOps, Data Analytics & Data Science Courses</title>
        <meta
          name="description"
          content="Explore NomadSkills’ industry-ready programs in Full Stack (MERN), DevOps, Data Analytics, and Data Science. Learn hands-on with real projects, 1:1 mentorship, and 95% placement success."
        />
        <meta
          name="keywords"
          content="NomadSkills courses, MERN course, DevOps course, Data Analytics course, Data Science training, tech bootcamp, online coding programs, learn programming"
        />
        <link rel="canonical" href="https://nomadskills.in/#courses" />
        <meta
          property="og:title"
          content="NomadSkills Programs | MERN, DevOps, Data Analytics & Data Science"
        />
        <meta
          property="og:description"
          content="Hands-on training in MERN, DevOps, Data Analytics, and Data Science with NomadSkills. Learn with real-world projects and get industry-ready."
        />
        <meta property="og:url" content="https://nomadskills.in/#courses" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nomadskills.in/assets/og-image.webp" />
      </Helmet>

      <div
        id="courses"
        className="w-full min-h-screen bg-gradient-to-br from-[#bedbfe] to-[#e3effe] relative overflow-hidden py-5 px-4"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 left-20 w-32 h-32 bg-indigo-300 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-cyan-300 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/50 text-blue-600 text-sm font-medium mb-6 shadow-lg">
              <Star size={16} />
              Explore Our Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Career Path
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our industry-leading programs designed to transform you into a top-tier
              tech professional.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {courses.map(course => (
              <button
                key={course.id}
                onClick={() => setSelected(course.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 backdrop-blur-md shadow-lg ${
                  selected === course.id
                    ? `${course.accent} text-white shadow-xl transform scale-105`
                    : "bg-white/80 border-white/50 text-gray-700 hover:bg-white hover:shadow-xl hover:border-white/70"
                }`}
              >
                {course.tabIcon}
                <span className="font-semibold">{course.title}</span>
              </button>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Course Details */}
            <div className="flex flex-col">
              <div
                className={`rounded-2xl ${currentCourse.cardColor} backdrop-blur-md border border-white/50 p-8 flex-1 flex flex-col shadow-2xl`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-blue-600">{currentCourse.mainIcon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {currentCourse.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {currentCourse.duration}
                      </span>
                      {/* <span className="flex items-center gap-1">
                      <Users size={16} />
                      {currentCourse.stats.students} Enrolled
                    </span> */}
                    </div>
                  </div>
                  <div className="inline-flex items-center whitespace-nowrap gap-1 bg-yellow-400/40 text-yellow-700 p-3 rounded-full text-sm leading-none shadow-md">
                    <Star size={14} className="shrink-0" />
                    <span>{`${currentCourse.stats.rating} Rating`}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed flex-grow-0">
                  {currentCourse.description}
                </p>

                <div className="mb-6 flex-grow-0">
                  <h4 className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                    <Target size={18} />
                    Key Learning Outcomes
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    {currentCourse.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            currentCourse.id === "fullstack"
                              ? "bg-blue-500"
                              : currentCourse.id === "devops"
                                ? "bg-cyan-500"
                                : currentCourse.id === "data"
                                  ? "bg-sky-500"
                                  : "bg-indigo-500"
                          }`}
                        ></div>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 flex-grow-0">
                  <h4 className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                    <BookOpen size={18} />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {currentCourse.tools.map((tool, idx) => (
                      <span
                        key={tool}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/50 text-gray-700 text-sm font-medium shadow-sm"
                      >
                        <span className="text-gray-600">{currentCourse.icons[idx]}</span>
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
                className={`rounded-2xl ${currentCourse.cardColor} backdrop-blur-md border border-white/50 overflow-hidden flex-1 flex flex-col shadow-2xl`}
              >
                <div
                  className={`h-48 bg-gradient-to-r ${currentCourse.color} flex items-center justify-center p-6 relative overflow-hidden`}
                >
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white rounded-full"></div>
                  </div>

                  <div className="text-center text-white relative z-10">
                    <div className="mb-4 transform hover:scale-110 transition-transform duration-300">
                      {currentCourse.visualIcon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{getVisualTitle(currentCourse.id)}</h3>
                    <p className="opacity-90">
                      {getVisualSubtitle(currentCourse.id, currentCourse.stats.students)}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Comprehensive Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 rounded-lg bg-white/60 border border-white/50 shadow-md">
                      <div className="text-2xl font-bold text-gray-800">
                        {currentCourse.stats.placement}
                      </div>
                      <div className="text-sm text-gray-600">Placement Rate</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/60 border border-white/50 shadow-md">
                      <div className="text-2xl font-bold text-gray-800">
                        {currentCourse.stats.projects}
                      </div>
                      <div className="text-sm text-gray-600">Real Projects</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/60 border border-white/50 shadow-md">
                      <div className="text-2xl font-bold text-gray-800">1:1</div>
                      <div className="text-sm text-gray-600">Mentor Sessions</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/60 border border-white/50 shadow-md">
                      <div className="text-2xl font-bold text-gray-800">24/7</div>
                      <div className="text-sm text-gray-600">Code Support</div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button
                      onClick={() => handleViewProgram(currentCourse)}
                      className={`w-full bg-gradient-to-r ${currentCourse.buttonGradient} text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg`}
                    >
                      View Program <ChevronRight size={20} />
                    </button>
                    <p className="text-center text-gray-600 text-sm mt-4">
                      Start with a free 7-day trial • No credit card required
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
