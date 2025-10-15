import { motion } from "framer-motion";
import { useState } from "react";
import { 
  BookOpen, 
  Hammer, 
  BadgeCheck, 
  Briefcase, 
  Star,
  Github,
  Linkedin,
  FileText,
  Play,
  ChevronRight
} from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Learn",
    subtitle: "Experience the New way of Learning with AI",
    description: "Digital Edify offers best technologies in the work, Curated for your Career Growth",
    icon: BookOpen,
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
    courses: [
      {
        name: "DevOps Training",
        duration: "2 Months",
        projects: "5 Live Projects",
        rating: "4.8/5",
        description: "DevOps training emphasises on integrating development, operations, automation, and continuous delivery collaboration.",
        curriculum: ["CI/CD Pipelines", "Containerization", "Cloud Infrastructure", "Monitoring & Logging"]
      },
      {
        name: "Java Training",
        duration: "2 Months",
        projects: "6 Live Projects",
        rating: "4.9/5",
        description: "Java training focuses on programming basics, OOP, data structures, APIs, and app development.",
        curriculum: ["Core Java", "Spring Framework", "REST APIs", "Microservices"]
      }
    ]
  },
  {
    step: 2,
    title: "Build",
    subtitle: "Work on our Real-time Projects, Task Based",
    description: "Apply your knowledge by building real-world, production-ready projects",
    icon: Hammer,
    gradient: "from-purple-500 to-pink-500",
    projects: [
      {
        name: "LMS Project",
        description: "An LMS project develops a digital platform for online creation, content management, user tracking, assessment aimed at enhancing educational interaction.",
        tech: ["React", "Node.js", "MongoDB", "AWS"],
        commands: "MS-Project-site/ git push",
        liveLink: "#",
        githubLink: "#"
      }
    ]
  },
  {
    step: 3,
    title: "Get Certification",
    subtitle: "Internships and Course certifications for Enhanced Skill Validation",
    description: "Earn recognized certifications that validate your technical expertise",
    icon: BadgeCheck,
    gradient: "from-green-500 to-emerald-500",
    certificates: [
      {
        type: "Internship Certificate",
        issuer: "DigitalEdify"
      },
      {
        type: "Course Completion Certificate", 
        issuer: "DigitalEdify"
      }
    ]
  },
  {
    step: 4,
    title: "Get Job",
    subtitle: "Our focus on job-readiness",
    description: "Github Profile, Linkedin Profile, Resume Prep and Help Apply",
    icon: Briefcase,
    gradient: "from-orange-500 to-red-500",
    jobPrep: [
      {
        platform: "GitHub Profile",
        description: "Guidance on creating and maintaining a professional GitHub profile to showcase technical projects and coding prowess.",
        icon: Github
      },
      {
        platform: "LinkedIn Profile",
        description: "Optimize your LinkedIn profile to attract recruiters and showcase your professional journey.",
        icon: Linkedin
      },
      {
        platform: "Resume Preparation",
        description: "Craft ATS-friendly resumes that highlight your skills and project experience effectively.",
        icon: FileText
      }
    ]
  }
];

export default function EnhancedCareerSteps() {
  const [activeStep, setActiveStep] = useState(0);

  // Get current step icon component
  const CurrentStepIcon = steps[activeStep]?.icon || BookOpen;

  const renderStepContent = () => {
    const step = steps[activeStep];
    
    switch(step.step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-white/10"
          >
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Our Trending Courses</h4>
            <div className="space-y-4">
              {step.courses.map((course, index) => (
                <motion.div
                  key={course.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-4 sm:p-6 border border-white/10"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <h5 className="text-lg sm:text-xl font-bold">{course.name}</h5>
                    <div className="flex items-center space-x-2 text-sm text-gray-300 flex-wrap">
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.projects}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <span className="text-xs sm:text-sm">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base mb-4">{course.description}</p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {course.curriculum.slice(0, 2).map((item, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                          {item}
                        </span>
                      ))}
                      {course.curriculum.length > 2 && (
                        <span className="px-2 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                          +{course.curriculum.length - 2} more
                        </span>
                      )}
                    </div>
                    <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-4 sm:px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform text-sm sm:text-base w-full sm:w-auto justify-center">
                      <span>Enroll Now</span>
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-4 sm:p-6 border border-purple-500/20"
          >
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h4 className="text-xl sm:text-2xl font-bold">{step.projects[0].name}</h4>
                <div className="flex flex-wrap gap-2">
                  {step.projects[0].tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-4">{step.projects[0].description}</p>
              
              <div className="bg-black/50 rounded-xl p-3 sm:p-4 font-mono text-xs sm:text-sm mb-4 border border-white/10">
                <div className="text-green-400 mb-2">$ {step.projects[0].commands}</div>
                <div className="text-gray-400">Pushing latest changes to repository...</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
              <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-semibold hover:scale-105 transition-transform text-sm sm:text-base">
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>View Project</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 bg-white/10 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm sm:text-base">
                <span>View All Courses</span>
              </button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h4 className="text-xl sm:text-2xl font-bold text-center">Earn Recognized Certifications</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {step.certificates.map((cert, index) => (
                <motion.div
                  key={cert.type}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-4 sm:p-6 border border-green-500/20 text-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <BadgeCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h5 className="font-bold text-base sm:text-lg mb-2">{cert.type}</h5>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4">Issued by {cert.issuer}</p>
                  <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Certificate</div>
                    <div className="font-mono text-xs sm:text-sm">DigitalEdify Certified</div>
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
            className="space-y-4 sm:space-y-6"
          >
            <h4 className="text-xl sm:text-2xl font-bold text-center">Job Readiness Preparation</h4>
            <div className="space-y-4">
              {step.jobPrep.map((prep, index) => {
                const IconComponent = prep.icon;
                return (
                  <motion.div
                    key={prep.platform}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-4 sm:p-6 border border-orange-500/20"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-base sm:text-lg mb-1 truncate">{prep.platform}</h5>
                        <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">{prep.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl py-2 sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Explore the Digital Edify way
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Your complete journey from learning to career success with AI-powered guidance
          </p>
        </motion.div>

        {/* Progress Indicator - Mobile */}
        <div className="lg:hidden flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-white/5 rounded-2xl p-3 backdrop-blur-xl border border-white/10 w-full max-w-md">
            {steps.map((step, index) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(index)}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 flex-1 min-w-[120px] justify-center ${
                  activeStep === index 
                    ? `bg-gradient-to-r ${step.gradient} text-white shadow-lg scale-105` 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <step.icon className="w-4 h-4" />
                <span className="font-semibold text-sm">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Indicator - Desktop */}
        <div className="hidden lg:flex justify-center mb-8 lg:mb-12">
          <div className="flex items-center space-x-4 bg-white/5 rounded-2xl p-4 backdrop-blur-xl border border-white/10">
            {steps.map((step, index) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeStep === index 
                    ? `bg-gradient-to-r ${step.gradient} text-white shadow-lg scale-105` 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <step.icon className="w-5 h-5" />
                <span className="font-semibold">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Side - Step Overview */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${steps[activeStep].gradient} flex items-center justify-center flex-shrink-0`}>
                  <CurrentStepIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <span className="text-sm font-medium text-gray-400">Step {steps[activeStep].step}</span>
                    {steps[activeStep].featured && (
                      <div className="flex items-center space-x-1 bg-yellow-500/20 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-yellow-400">Featured</span>
                      </div>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1 truncate">{steps[activeStep].title}</h2>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200">{steps[activeStep].subtitle}</h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{steps[activeStep].description}</p>
              </div>
            </div>

            {/* Step-specific Content */}
            {renderStepContent()}
          </motion.div>

          {/* Right Side - Visual Timeline */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 h-full"
            >
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Your Success Journey</h3>
                <p className="text-gray-400 text-sm sm:text-base">Follow the path to your dream career</p>
              </div>

              {/* Vertical Timeline */}
              <div className="relative">
                <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-0.5 bg-white/20 rounded-full"></div>
                <motion.div
                  className="absolute left-4 sm:left-6 top-4 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"
                  initial={{ height: 0 }}
                  animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />

                <div className="space-y-6 sm:space-y-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center space-x-4 sm:space-x-6"
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center relative z-10 flex-shrink-0 ${
                        index <= activeStep 
                          ? `bg-gradient-to-br ${step.gradient} shadow-lg` 
                          : 'bg-white/10 border border-white/20'
                      }`}>
                        {index <= activeStep ? (
                          <step.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        ) : (
                          <span className="text-gray-400 font-semibold text-xs sm:text-sm">{step.step}</span>
                        )}
                      </div>
                      <div className={`flex-1 p-3 sm:p-4 rounded-2xl transition-all duration-300 min-w-0 ${
                        index === activeStep 
                          ? 'bg-blue-500/20 border border-blue-500/30 scale-105' 
                          : 'bg-white/5 border border-white/10'
                      }`}>
                        <h4 className={`font-bold text-base sm:text-lg truncate ${
                          index <= activeStep ? 'text-white' : 'text-gray-400'
                        }`}>
                          {step.title}
                        </h4>
                        <p className={`text-xs sm:text-sm mt-1 line-clamp-2 ${
                          index <= activeStep ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {step.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Progress Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 text-sm sm:text-base">Journey Progress</span>
                  <span className="font-bold text-base sm:text-lg">{Math.round((activeStep / (steps.length - 1)) * 100)}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center mt-8 sm:mt-12 space-x-3 sm:space-x-4">
          <button
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="px-6 sm:px-8 py-2 sm:py-3 rounded-xl bg-white/10 border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all text-sm sm:text-base"
          >
            Previous
          </button>
          <button
            onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStep === steps.length - 1}
            className="px-6 sm:px-8 py-2 sm:py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Next Step
          </button>
        </div>
      </div>
    </section>
  );
}