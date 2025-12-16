import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  BookOpen,
  Hammer,
  BadgeCheck,
  Briefcase,
  Star,
  Users,
  Award,
  Target,
  Rocket,
  Clock,
  CheckCircle,
  TrendingUp,
  Building,
  Zap,
  Code,
  Cloud,
  Database,
  Server,
} from "lucide-react";
import certificate from "../assets/certificate.webp";
import certificateIntership from "../assets/cerificateIntership.webp";
import { Helmet } from "react-helmet";


const steps = [
  {
    step: 1,
    title: "Learn",
    subtitle: "Master In-Demand Technologies with Industry Experts",
    description:
      "Immerse yourself in comprehensive learning experiences designed by industry professionals. Get hands-on with real-world projects and cutting-edge technologies.",
    icon: BookOpen,
    gradient: "from-blue-600 to-cyan-600",
    featured: true,
    courses: [
      {
        name: "DevOps Engineering",
        duration: "3 Months",
        projects: "8 Live Projects",
        rating: "4.9/5",
        description:
          "Master the art of DevOps with comprehensive training in CI/CD, containerization, cloud infrastructure, and automation tools. Become an expert in deploying and maintaining scalable applications.",
        curriculum: [
          "Docker & Kubernetes",
          "AWS/Azure Cloud",
          "Jenkins & GitLab CI",
          "Terraform & Ansible",
          "Monitoring & Logging",
          "Security Best Practices",
        ],
        similarCourses: ["Cloud Computing", "Kubernetes Advanced", "Site Reliability Engineering"],
        icon: Cloud,
      },
      {
        name: "MERN Stack Development",
        duration: "4 Months",
        projects: "12 Live Projects",
        rating: "4.8/5",
        description:
          "Become a full-stack developer with the MERN stack. Learn to build dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js with modern development practices.",
        curriculum: [
          "React & Redux",
          "Node.js & Express",
          "MongoDB & Mongoose",
          "RESTful APIs",
          "JWT Authentication",
          "Deployment Strategies",
        ],
        similarCourses: ["MEAN Stack", "React Native", "Full Stack Development"],
        icon: Code,
      },
    ],
  },
  {
    step: 2,
    title: "Build",
    subtitle: "Create Real-World Projects That Impress Employers",
    description:
      "Transform your knowledge into tangible skills by building industry-standard projects that solve real problems and showcase your expertise.",
    icon: Hammer,
    gradient: "from-purple-600 to-pink-600",
    projects: [
      {
        name: "Enterprise CI/CD Pipeline",
        description:
          "Design and implement a complete CI/CD pipeline for microservices architecture. Automate testing, containerization, and deployment across multiple environments with comprehensive monitoring.",
        tech: ["Docker", "Kubernetes", "Jenkins", "AWS", "Prometheus", "Grafana"],
        commands: "cd ci-cd-pipeline && kubectl apply -f deployment.yaml",
        relevantProjects: [
          "Cloud Infrastructure Setup",
          "Monitoring Dashboard",
          "Auto-scaling System",
        ],
        icon: Server,
      },
      {
        name: "Full-Stack E-Commerce Platform",
        description:
          "Build a scalable e-commerce solution with real-time inventory, payment processing, and admin dashboard. Implement advanced features like recommendation engine and analytics.",
        tech: ["React", "Node.js", "MongoDB", "Redis", "Stripe", "Socket.io"],
        commands: "npm run dev && mongod --dbpath ./data",
        relevantProjects: [
          "Social Media App",
          "Task Management System",
          "Real-time Chat Application",
        ],
        icon: Database,
      },
    ],
  },
  {
    step: 3,
    title: "Get Certified",
    subtitle: "Earn Industry-Recognized Certifications",
    description:
      "Validate your skills with certifications that are respected by employers worldwide. Showcase your expertise and stand out in the job market.",
    icon: BadgeCheck,
    gradient: "from-green-600 to-emerald-600",
    certificates: [
      {
        type: "Program Certificate",
        issuer: "NomadSkills & Industry Partners",
        level: "Advanced",
        image: certificate,
        benefits: [
          "Global Recognition",
          "Skill Validation",
          "Career Advancement",
          "Industry Standard",
        ],
        duration: "Lifetime Validity",
      },
      {
        type: "Internship Certificate",
        issuer: "NomadSkills & Partner Companies",
        level: "Professional",
        image: certificateIntership,
        benefits: [
          "Real-world Experience",
          "Industry Exposure",
          "Job Readiness",
          "Project Portfolio",
        ],
        duration: "Lifetime Validity",
      },
    ],
  },
  {
    step: 4,
    title: "Launch Your Career",
    subtitle: "Get Ready for Your Dream Tech Job",
    description:
      "We don't just train you - we prepare you for success. From resume building to interview preparation, we're with you until you land your dream job.",
    icon: Briefcase,
    gradient: "from-orange-600 to-red-600",
    jobPrep: [
      {
        platform: "Career Acceleration Program",
        description:
          "Personalized career coaching, mock interviews, and negotiation training. We help you identify your strengths and position yourself for top tech roles with competitive salaries.",
        icon: Rocket,
        features: ["Mock Interviews", "Salary Negotiation", "Career Strategy", "Personal Coach"],
        duration: "6 Weeks",
      },
      {
        platform: "Professional Branding",
        description:
          "Transform your online presence with optimized LinkedIn, GitHub, and portfolio. Learn to showcase your projects and skills in ways that attract recruiters and hiring managers.",
        icon: Users,
        features: [
          "LinkedIn Optimization",
          "GitHub Portfolio",
          "Personal Website",
          "Online Presence",
        ],
        duration: "2 Weeks",
      },
    ],
  },
];

export default function EnhancedCareerSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  // Scroll to top when step changes
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeStep]);

  const CurrentStepIcon = steps[activeStep]?.icon || BookOpen;

  const progressPercent = ((activeStep + 1) / steps.length) * 100;

  const renderStepContent = () => {
    const step = steps[activeStep];

    switch (step.step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-blue-200 shadow-2xl"
          >
            <h4 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
              Master High-Demand Technologies
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {step.courses.map((course, index) => {
                const CourseIcon = course.icon;
                return (
                  <motion.div
                    key={course.name}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 border border-blue-100 shadow-lg"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <CourseIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-gray-800">{course.name}</h5>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>{course.duration}</span>
                          <span>•</span>
                          <span>{course.projects}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 text-base mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {course.curriculum.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Similar Courses Section */}
                    <div className="mt-4 pt-4 border-t border-blue-200">
                      <h6 className="text-sm font-semibold mb-3 text-gray-700">Similar Paths:</h6>
                      <div className="flex flex-wrap gap-2">
                        {course.similarCourses.map((similarCourse, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200"
                          >
                            {similarCourse}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {step.projects.map((project, projectIndex) => {
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-purple-200 shadow-2xl"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <ProjectIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{project.name}</h4>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="bg-gray-800 rounded-xl p-4 font-mono text-sm mb-4 border border-gray-700">
                    <div className="text-green-400 mb-2">$ {project.commands}</div>
                    <div className="text-gray-300">Building and deploying your project...</div>
                  </div>

                  {/* Relevant Projects Section */}
                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <h6 className="text-sm font-semibold mb-3 text-gray-700">Related Projects:</h6>
                    <div className="flex flex-wrap gap-2">
                      {project.relevantProjects.map((relevantProject, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm border border-pink-200"
                        >
                          {relevantProject}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h4 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
              Industry-Recognized Certifications
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {step.certificates.map(cert => (
                <motion.div
                  key={cert.type}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-green-200 shadow-2xl"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                        <BadgeCheck className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-xl text-gray-800 mb-1">{cert.type}</h5>
                        <p className="text-gray-600 text-sm mb-2">Issued by {cert.issuer}</p>
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {cert.level} Level
                        </span>
                      </div>
                    </div>
                    <img
                      src={cert.image}
                      alt={cert.type}
                      className="w-full h-64 object-contain rounded-lg border border-green-200"
                    />
                    <div className="space-y-3">
                      <h6 className="font-semibold text-gray-700">Key Benefits:</h6>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cert.benefits.map(b => (
                          <li key={b} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-between text-sm text-gray-500 pt-2 border-t border-green-200">
                        <span className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{cert.duration}</span>
                        </span>
                        <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                          Globally Recognized
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {step.jobPrep.map((prep, index) => {
              const IconComponent = prep.icon;
              return (
                <motion.div
                  key={prep.platform}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-orange-200 shadow-2xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-bold text-lg text-gray-800">{prep.platform}</h5>
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                          {prep.duration}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                        {prep.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {prep.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 text-xs text-gray-600"
                          >
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Career Path | Learn, Build, and Launch Your Tech Career | NomadSkills</title>
        <meta
          name="description"
          content="Follow NomadSkills’s step-by-step career journey: Learn top tech skills, build real-world projects, earn certifications, and launch your dream job in tech."
        />
        <meta
          name="keywords"
          content="Career in Tech, Learn Coding, DevOps, MERN Stack, Data Analytics, Data Science, Certifications, NomadSkills, Job Ready"
        />
        <meta property="og:title" content="NomadSkills - Career Steps to Success" />
        <meta
          property="og:description"
          content="Learn, build, and launch your tech career with NomadSkills’s guided 4-step journey."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourdomain.com/careersteps" />
        <meta property="og:image" content="https://www.yourdomain.com/preview-image.jpg" />
        <meta
          name="google-site-verification"
          content="j4ORLKZP8m5CDbROLwqodTxsLkdw2gpTAZQF_gz0Xgs"
        />
        <link rel="canonical" href="https://www.yourdomain.com/careersteps" />
      </Helmet>
      <section
        ref={sectionRef}
        className="bg-gradient-to-br from-[#bedbfe] to-[#e3effe] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-gray-900 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Your Tech Career Launchpad
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              From beginner to hired professional - A structured path to your dream tech career
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-3 border border-blue-200 shadow-lg">
              <div className="flex flex-wrap justify-center gap-2">
                {steps.map((step, index) => (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(index)}
                    className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 font-semibold ${
                      activeStep === index
                        ? `bg-gradient-to-r ${step.gradient} text-white shadow-lg scale-105`
                        : "text-gray-600 hover:text-gray-900 hover:bg-white border border-blue-200"
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                    <span>{step.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Symmetric Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Step Overview */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col space-y-8"
            >
              {/* Step Header Card */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-blue-200 shadow-2xl">
                <div className="flex items-center space-x-6 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${steps[activeStep].gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <CurrentStepIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center space-x-3 flex-wrap mb-2">
                      <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        Step {steps[activeStep].step}
                      </span>
                      {steps[activeStep].featured && (
                        <div className="flex items-center space-x-1 bg-yellow-100 px-3 py-1 rounded-full">
                          <Star className="w-3 h-3 text-yellow-600" />
                          <span className="text-xs text-yellow-700 font-semibold">Featured</span>
                        </div>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">{steps[activeStep].title}</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {steps[activeStep].subtitle}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>

              {/* Step-specific Content */}
              <div className="flex-grow">{renderStepContent()}</div>
            </motion.div>

            {/* Right Side - Visual Timeline */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-blue-200 shadow-2xl h-full flex flex-col"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Your Career Journey</h3>
                  <p className="text-gray-600 text-lg">Structured path to success in tech</p>
                </div>

                {/* Enhanced Timeline */}
                <div className="flex-grow mb-8">
                  <div className="relative h-full">
                    {/* Progress Line - Only visible for completed steps */}
                    <motion.div
                      className="absolute left-6 top-4 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg"
                      initial={{ height: 0 }}
                      animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />

                    <div className="space-y-8">
                      {steps.map((step, index) => (
                        <motion.div
                          key={step.step}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center space-x-6"
                        >
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center relative z-10 flex-shrink-0 shadow-lg ${
                              index <= activeStep
                                ? `bg-gradient-to-br ${step.gradient}`
                                : "bg-white border-2 border-gray-300"
                            }`}
                          >
                            {index <= activeStep ? (
                              <step.icon className="w-6 h-6 text-white" />
                            ) : (
                              <span className="text-gray-400 font-bold text-sm">{step.step}</span>
                            )}
                          </div>
                          <div
                            className={`flex-1 p-4 rounded-2xl transition-all duration-300 min-w-0 border-2 ${
                              index === activeStep
                                ? "bg-blue-50 border-blue-200 scale-105 shadow-lg"
                                : index < activeStep
                                  ? "bg-green-50 border-green-200"
                                  : "bg-white border-gray-200"
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4
                                  className={`font-bold text-lg mb-1 ${
                                    index <= activeStep ? "text-gray-800" : "text-gray-500"
                                  }`}
                                >
                                  {step.title}
                                </h4>
                                <p
                                  className={`text-sm mb-2 ${
                                    index <= activeStep ? "text-gray-600" : "text-gray-400"
                                  }`}
                                >
                                  {step.subtitle}
                                </p>
                              </div>
                              {index <= activeStep && (
                                <CheckCircle
                                  className={`w-5 h-5 ${index === activeStep ? "text-blue-500" : "text-green-500"} flex-shrink-0 mt-1`}
                                />
                              )}
                            </div>

                            {/* Timeline details */}
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>
                                  {step.step === 1 && "3-4 months"}
                                  {step.step === 2 && "2-3 months"}
                                  {step.step === 3 && "1 month"}
                                  {step.step === 4 && "Ongoing"}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <TrendingUp className="w-3 h-3" />
                                <span>
                                  {step.step === 1 && "Foundation"}
                                  {step.step === 2 && "Portfolio"}
                                  {step.step === 3 && "Credential"}
                                  {step.step === 4 && "Career"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Progress Stats */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-6 border border-blue-200 shadow-lg"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 font-semibold">Career Progress</span>
                      <span className="font-bold text-xl text-gray-800">
                        {Math.round((activeStep / (steps.length - 1)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <motion.div
                        className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 shadow-lg"
                        initial={{ width: 0 }}
                        animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>Start Learning</span>
                      <span>Career Ready</span>
                    </div>

                    {/* Progress Metrics */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                        <div className="font-semibold text-blue-800">Skills Mastered</div>
                        <div className="text-gray-700 font-bold text-lg">{activeStep * 5}+</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-xl border border-green-200">
                        <div className="font-semibold text-green-800">Projects Built</div>
                        <div className="text-gray-700 font-bold text-lg">{activeStep * 3}+</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Career Impact Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                      <Building className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600">Partners</div>
                      <div className="font-bold text-gray-800 text-lg">200+</div>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                      <Zap className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600">Success Rate</div>
                      <div className="font-bold text-gray-800 text-lg">94%</div>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                      <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600">Experts Connections</div>
                      <div className="font-bold text-gray-800 text-lg">2K+</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-8 py-3 rounded-xl bg-white border-2 border-blue-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 text-gray-700 font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Previous Step
            </button>
            <button
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 transition-transform text-white font-semibold shadow-lg hover:shadow-xl"
            >
              Next Step
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
