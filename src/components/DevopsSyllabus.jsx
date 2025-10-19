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
  Terminal,
  Cloud,
  Box,
  Settings,
  GitMerge,
  Globe,
  Shield,
  GitBranch,
  Container,
  Wrench,
  Monitor,
  Bug,
  Award,
} from "lucide-react";

const DevopsSyllabus = () => {
  const [activeModule, setActiveModule] = useState(1);

  // Data structured from the PDF content
  const syllabusData = [
    {
      id: 1,
      title: "Cloud Computing & AWS Fundamentals",
      icon: <Cloud className="w-6 h-6" />,
      duration: "4 Weeks",
      level: "Beginner",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
      borderColor: "border-orange-200",
      topics: [
        "Cloud Computing Concepts & Models",
        "AWS Global Infrastructure",
        "EC2 Instances & Configurations",
        "Elastic Load Balancing (ELB)",
        "Auto Scaling Groups",
        "AWS Lambda Functions",
        "S3 & Storage Classes",
        "EBS, Glacier & Storage Gateway",
        "AWS Management Console, CLI, SDKs",
        "Pricing Models & Free Tier",
      ],
      projects: ["Multi-tier AWS Architecture", "Auto Scaling Setup", "Storage Solution Design"],
      skills: ["AWS", "EC2", "S3", "Cloud Computing", "Infrastructure"],
      outcome: "Master AWS core services and deploy scalable cloud infrastructure",
    },
    {
      id: 2,
      title: "Linux & Python Fundamentals",
      icon: <Terminal className="w-6 h-6" />,
      duration: "4 Weeks",
      level: "Beginner",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      topics: [
        "Linux Distributions & Basics",
        "File System Navigation & Permissions",
        "User Management & Security",
        "Shell Scripting Fundamentals",
        "Package Management (apt, yum)",
        "System Monitoring & Performance",
        "Python Syntax & Data Types",
        "Control Flow Statements",
        "Functions & Modules",
        "File Handling & Exception Handling",
      ],
      projects: ["Automation Scripts", "System Monitoring Tool", "Python Utilities"],
      skills: ["Linux", "Python", "Bash Scripting", "System Administration"],
      outcome: "Automate tasks and manage systems using Linux and Python",
    },
    {
      id: 3,
      title: "DevOps & CI/CD with Jenkins",
      icon: <GitMerge className="w-6 h-6" />,
      duration: "3 Weeks",
      level: "Intermediate",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
      borderColor: "border-red-200",
      topics: [
        "DevOps Principles & Practices",
        "CI/CD Concepts & Benefits",
        "Jenkins Architecture & Setup",
        "Jenkins Jobs & Pipelines",
        "Version Control Integration",
        "Jenkins Plugins & Ecosystem",
        "Pipeline as Code (Jenkinsfile)",
        "Automated Testing Integration",
        "GitLab CI & CircleCI Overview",
        "CI/CD Best Practices",
      ],
      projects: ["End-to-End CI/CD Pipeline", "Automated Testing Setup", "Multi-stage Deployment"],
      skills: ["Jenkins", "CI/CD", "Git", "Automation", "Pipeline Design"],
      outcome: "Build automated CI/CD pipelines using Jenkins and related tools",
    },
    {
      id: 4,
      title: "Infrastructure as Code with Terraform",
      icon: <Settings className="w-6 h-6" />,
      duration: "3 Weeks",
      level: "Intermediate",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      topics: [
        "Infrastructure as Code Concepts",
        "Terraform Installation & Setup",
        "Terraform Configuration Files",
        "CLI Commands (init, plan, apply)",
        "Terraform Modules & Reusability",
        "State Management Strategies",
        "Provisioners & Providers",
        "CI/CD Pipeline Integration",
        "Version Control Best Practices",
        "Collaborative Workflows",
      ],
      projects: ["Infrastructure Automation", "Multi-environment Setup", "Module Development"],
      skills: ["Terraform", "IaC", "Infrastructure Automation", "Cloud Provisioning"],
      outcome: "Manage cloud infrastructure as code using Terraform",
    },
    {
      id: 5,
      title: "Containerization with Docker & Kubernetes",
      icon: <Container className="w-6 h-6" />,
      duration: "4 Weeks",
      level: "Intermediate",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      topics: [
        "Docker Architecture & Benefits",
        "Images & Container Management",
        "Dockerfile Best Practices",
        "Docker Compose & Multi-container",
        "Kubernetes Architecture & Components",
        "Pods, Services & Deployments",
        "Kubernetes Networking & Storage",
        "Helm Charts & Package Management",
        "Local Development (MiniKube, Kind)",
        "Production Kubernetes Setup",
      ],
      projects: [
        "Dockerized Application",
        "Kubernetes Cluster Deployment",
        "Helm Chart Creation",
        "Multi-service Architecture",
      ],
      skills: ["Docker", "Kubernetes", "Containerization", "Helm", "Orchestration"],
      outcome: "Containerize applications and manage them using Kubernetes",
    },
    {
      id: 6,
      title: "Configuration Management with Ansible",
      icon: <Wrench className="w-6 h-6" />,
      duration: "3 Weeks",
      level: "Intermediate",
      color: "from-gray-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-gray-50 to-blue-50",
      borderColor: "border-gray-200",
      topics: [
        "Configuration Management Concepts",
        "Ansible Architecture & Setup",
        "Playbooks & YAML Syntax",
        "Modules & Ad-hoc Commands",
        "Inventory Management",
        "Roles & Playbook Organization",
        "Ansible Vault for Secrets",
        "Ansible Galaxy & Custom Modules",
        "CI/CD Pipeline Integration",
        "Ansible Tower/AWX Overview",
      ],
      projects: ["Infrastructure Configuration", "Automated Deployment", "Role Development"],
      skills: ["Ansible", "Configuration Management", "Automation", "YAML"],
      outcome: "Automate configuration management and application deployment",
    },
    {
      id: 7,
      title: "Advanced AWS Services",
      icon: <Database className="w-6 h-6" />,
      duration: "3 Weeks",
      level: "Advanced",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
      topics: [
        "AWS Networking (VPC, Subnets)",
        "Security Groups & NACLs",
        "Direct Connect & VPN",
        "RDS, DynamoDB & Aurora",
        "Database Migration Service",
        "IAM Advanced Features",
        "KMS & Encryption Services",
        "Security Hub & GuardDuty",
        "Lambda & Serverless Architecture",
        "API Gateway & Step Functions",
      ],
      projects: [
        "Secure VPC Architecture",
        "Database Migration Plan",
        "Serverless Application",
        "Security Implementation",
      ],
      skills: ["AWS Advanced", "Networking", "Security", "Serverless", "Databases"],
      outcome: "Design and implement advanced AWS solutions for enterprise applications",
    },
    {
      id: 8,
      title: "DevSecOps & Security Best Practices",
      icon: <Shield className="w-6 h-6" />,
      duration: "3 Weeks",
      level: "Advanced",
      color: "from-red-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-red-50 to-purple-50",
      borderColor: "border-red-200",
      topics: [
        "DevSecOps Principles & Practices",
        "Shift Left Security Approach",
        "Secure Coding Practices",
        "SAST/DAST Implementation",
        "Vulnerability Scanning",
        "Infrastructure Security",
        "Network Security & Segmentation",
        "Compliance Frameworks (GDPR, HIPAA)",
        "Continuous Compliance",
        "Auditing & Monitoring",
      ],
      projects: [
        "Security Pipeline Integration",
        "Compliance Implementation",
        "Security Assessment",
        "Incident Response Plan",
      ],
      skills: ["DevSecOps", "Security", "Compliance", "SAST/DAST", "Risk Management"],
      outcome: "Integrate security throughout the DevOps lifecycle",
    },
    {
      id: 9,
      title: "Monitoring & Logging Solutions",
      icon: <Monitor className="w-6 h-6" />,
      duration: "3 Weeks",
      level: "Advanced",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      topics: [
        "Monitoring Concepts & Metrics",
        "Prometheus & Grafana Setup",
        "ELK Stack for Log Management",
        "Centralized Logging with Splunk",
        "Alerting & Notification Systems",
        "Incident Management (PagerDuty)",
        "Application Performance Monitoring",
        "Distributed Tracing",
        "Microservices Monitoring",
        "SRE Principles & Practices",
      ],
      projects: [
        "Monitoring Stack Deployment",
        "Dashboard Creation",
        "Alert System Setup",
        "Log Analysis Solution",
      ],
      skills: ["Prometheus", "Grafana", "ELK Stack", "Monitoring", "Observability"],
      outcome: "Implement comprehensive monitoring and observability solutions",
    },
    {
      id: 10,
      title: "Serverless Development with AWS Lambda",
      icon: <Zap className="w-6 h-6" />,
      duration: "2 Weeks",
      level: "Advanced",
      color: "from-blue-500 to-green-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-green-50",
      borderColor: "border-blue-200",
      topics: [
        "Serverless Architecture Concepts",
        "AWS Lambda Setup & Configuration",
        "Triggers & Event Sources",
        "Error Handling & Retries",
        "Lambda Integration Patterns",
        "Security Best Practices",
        "Monitoring & Logging",
        "CI/CD for Serverless",
        "Cost Optimization",
        "Real-world Use Cases",
      ],
      projects: ["Serverless Application", "Event-driven Architecture", "Lambda Optimization"],
      skills: ["AWS Lambda", "Serverless", "Event-driven Architecture", "Microservices"],
      outcome: "Build and deploy serverless applications using AWS Lambda",
    },
    {
      id: 11,
      title: "Troubleshooting & Incident Response",
      icon: <Bug className="w-6 h-6" />,
      duration: "2 Weeks",
      level: "Advanced",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      topics: [
        "Systematic Troubleshooting",
        "Application Debugging Techniques",
        "Infrastructure Problem Resolution",
        "Log Analysis & Diagnostics",
        "Incident Response Frameworks",
        "Communication & Coordination",
        "Post-incident Reviews",
        "Root Cause Analysis",
        "Automated Incident Response",
        "Continuous Improvement",
      ],
      projects: ["Troubleshooting Scenarios", "Incident Response Plan", "RCA Documentation"],
      skills: ["Troubleshooting", "Incident Response", "Debugging", "RCA"],
      outcome: "Effectively troubleshoot issues and manage incident response",
    },
    {
      id: 12,
      title: "Project-Based Learning & Mentorship",
      icon: <Users className="w-6 h-6" />,
      duration: "4 Weeks",
      level: "Advanced",
      color: "from-teal-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-blue-50",
      borderColor: "border-teal-200",
      topics: [
        "Real-world Project Development",
        "Industry Scenario Implementation",
        "CI/CD Pipeline Construction",
        "Serverless Function Deployment",
        "Weekly Mentorship Meetings",
        "Technical Guidance & Code Reviews",
        "Portfolio Development",
        "Problem-solving Skills",
        "Best Practices Implementation",
        "Quality Assurance",
      ],
      projects: [
        "End-to-End DevOps Pipeline",
        "Cloud Infrastructure Project",
        "Portfolio Development",
        "Capstone Project",
      ],
      skills: ["Project Management", "Solution Design", "Portfolio Development", "Mentorship"],
      outcome: "Apply all learned skills to real-world projects under expert guidance",
    },
    {
      id: 13,
      title: "AWS DevOps Certification Prep",
      icon: <Award className="w-6 h-6" />,
      duration: "2 Weeks",
      level: "Advanced",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      topics: [
        "AWS Certified DevOps Engineer Exam Format",
        "Key Concepts & Domains Review",
        "Practice Exam Questions",
        "Exam Objectives Deep Dive",
        "Personalized Study Plan",
        "Time Management Strategies",
        "Troubleshooting Scenarios",
        "Best Practices Review",
        "Hands-on Lab Exercises",
        "Exam Readiness Assessment",
      ],
      projects: ["Practice Exams", "Study Plan Creation", "Concept Reinforcement"],
      skills: ["AWS Certification", "Exam Preparation", "Concept Mastery", "Test Strategies"],
      outcome: "Prepare for and pass the AWS Certified DevOps Engineer Professional exam",
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
    { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "6 Months" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Modules", value: "13" },
    { icon: <Target className="w-5 h-5" />, label: "Projects", value: "5 Capstone" },
    { icon: <CheckCircle className="w-5 h-5" />, label: "Skills", value: "18+" },
    { icon: <Star className="w-5 h-5" />, label: "Live Sessions", value: "160+ Hrs" },
  ];

  // Tools covered from PDF
  const tools = [
    "AWS",
    "Linux",
    "Python",
    "Jenkins",
    "Git",
    "GitLab CI",
    "CircleCI",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Ansible",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "Splunk",
    "PagerDuty",
    "Opsgenie",
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
              AWS DEVOPS ENGINEER PROGRAM
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AWS DevOps Engineering
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Become an in-demand DevOps Engineer with comprehensive AWS cloud skills, CI/CD
            expertise, and hands-on experience with industry-standard tools and practices.
          </p>

          {/* Program Highlights */}
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Achieve:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
              >
                <Award className="w-5 h-5 text-green-600" />
                <span>AWS Certified DevOps Engineer - Professional Ready</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
              >
                <Cloud className="w-5 h-5 text-blue-600" />
                <span>Master AWS Cloud & DevOps Tools</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
              >
                <GitMerge className="w-5 h-5 text-purple-600" />
                <span>Build CI/CD, Containers & IaC Expertise</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
              >
                <Shield className="w-5 h-5 text-red-600" />
                <span>Automate with Ansible & DevSecOps</span>
              </motion.div>
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

        {/* Enhanced Syllabus Layout - Fixed Height Issue */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Module Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>6-Month Learning Path</span>
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

          {/* Module Details - Fixed Height Issue */}
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

              {/* Module Content - Fixed Layout */}
              <div className="p-6 lg:p-8">
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
            Tools & Technologies Covered
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full font-medium border border-blue-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DevopsSyllabus;
