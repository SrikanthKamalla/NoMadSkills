import React, { useState } from "react";
import {
  HelpCircle,
  MessageCircle,
  BookOpen,
  Users,
  CreditCard,
  Clock,
  ChevronDown,
  Laptop,
  Database,
  Brain,
  Server,
  CardSim,
  CreditCardIcon,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();
  const currentSEO = {
    title: "FAQs - DigitalEdify | Learn MERN, Data Science, DevOps, and More",
    description:
      "Find answers to common questions about our live training, placements, certifications, and courses in MERN, Data Science, DevOps, and more.",
  };

  /* ---------------------- GENERAL FAQs ---------------------- */
  const generalFAQs = [
    {
      question: "Are the classes live or recorded?",
      answer:
        "We conduct live instructor-led sessions. However, all sessions are recorded and available in your dashboard for lifetime access.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      question: "Do I need prior experience to enroll?",
      answer:
        "No prior technical experience is required! Each course starts from scratch, making it beginner-friendly.",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      question: "What is the course fee, and are EMI options available?",
      answer:
        "Yes, we offer flexible payment options, including zero-cost EMI facilities. The program fee varies depending on the Tech-Stack you choose. We also provide scholarships for meritorious students and early bird discounts.",
      icon: <CreditCardIcon className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "Will I receive a certificate after completion?",
      answer:
        "Yes, you’ll receive an industry-recognized certificate upon successful completion of the course.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      question: "Is there any placement support?",
      answer:
        "Absolutely! We provide resume preparation, mock interviews, career guidance, and referrals to our 200+ hiring partners.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      question: "Can I switch batches if I miss classes?",
      answer:
        "Yes, you can switch batches or rejoin live classes at no additional cost. All sessions are recorded as well.",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      question: "How do I get doubt support?",
      answer:
        "You’ll have access to 1-on-1 mentorship sessions, doubt-solving live calls, and an active student community for 24x7 help.",
      icon: <HelpCircle className="w-5 h-5" />,
    },
  ];

  /* ---------------------- MERN STACK FAQs ---------------------- */
  const mernFAQs = [
    {
      question: "What topics are covered in the MERN Stack course?",
      answer:
        "The course includes HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB, Git, and deployment with cloud hosting.",
      icon: <Laptop className="w-5 h-5" />,
    },
    {
      question: "What real-world projects will I build?",
      answer:
        "You'll develop 15+ projects including a Chat App, E-commerce Store, Portfolio, and Social Media Platform.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      question: "Is DSA included in the course?",
      answer:
        "Yes, we dedicate 6 weeks to Data Structures & Algorithms for mastering problem-solving and interview readiness.",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      question: "How long does the MERN Stack course take?",
      answer:
        "It’s a 29-week structured program covering both frontend and backend with weekly projects.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      question: "What are the career outcomes?",
      answer:
        "You can become a Frontend Developer, Backend Developer, or Full Stack Developer with average salaries ranging from 6–12 LPA.",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  /* ---------------------- DATA SCIENCE FAQs ---------------------- */
  const dataScienceFAQs = [
    {
      question: "What tools are taught in Data Science?",
      answer: "We cover Python, Pandas, NumPy, Scikit-learn, TensorFlow, PowerBI, and Tableau.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      question: "Will I learn Machine Learning and AI?",
      answer:
        "Yes! You’ll learn supervised and unsupervised ML, deep learning, and AI model deployment on cloud.",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      question: "Do I need coding experience for Data Science?",
      answer:
        "No, you don’t. The course begins with Python fundamentals and gradually builds up to advanced ML concepts.",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      question: "What projects are included?",
      answer:
        "You’ll build predictive models, sentiment analysis apps, fraud detection systems, and data dashboards.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      question: "Is this course suitable for non-engineers?",
      answer:
        "Yes, anyone from math, business, or engineering backgrounds can learn Data Science effectively through this course.",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  /* ---------------------- DATA ANALYTICS FAQs ---------------------- */
  const dataAnalyticsFAQs = [
    {
      question: "Which tools are used in the Data Analytics course?",
      answer:
        "The course covers SQL, Excel, Power BI, Python, and Google Analytics for end-to-end data analysis.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      question: "What kind of projects will I complete?",
      answer:
        "You’ll analyze business performance, customer data, marketing metrics, and real-time datasets to derive insights.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      question: "Is coding necessary for analytics?",
      answer:
        "Not much! We use minimal Python. The focus is on data cleaning, visualization, and reporting with tools like Power BI.",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      question: "What roles can I apply for after the course?",
      answer:
        "You can work as a Data Analyst, Business Analyst, or BI Analyst in startups or large organizations.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      question: "How long is the Data Analytics course?",
      answer:
        "The program duration is 20 weeks with live sessions, hands-on projects, and assessments.",
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  /* ---------------------- DEVOPS FAQs ---------------------- */
  const devopsFAQs = [
    {
      question: "What technologies are covered in DevOps training?",
      answer:
        "Docker, Kubernetes, Jenkins, Terraform, AWS, Git, CI/CD pipelines, and Linux fundamentals are covered.",
      icon: <Server className="w-5 h-5" />,
    },
    {
      question: "Do I need a development background?",
      answer:
        "No, but basic programming or Linux knowledge helps. We cover everything from the basics.",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      question: "Are there hands-on labs included?",
      answer:
        "Yes, every concept includes hands-on practice through cloud labs and real project simulations.",
      icon: <Laptop className="w-5 h-5" />,
    },
    {
      question: "What kind of projects will I build?",
      answer:
        "You’ll automate deployments, create CI/CD pipelines, containerize apps, and deploy on AWS or GCP.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      question: "How long is the DevOps course?",
      answer:
        "It’s a 24-week intensive program designed to take you from beginner to job-ready DevOps engineer.",
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  /* ---------------------- PATH-BASED LOGIC ---------------------- */
  const path = location.pathname;
  let faqData = [];

  if (path === "/") faqData = generalFAQs;
  else if (path === "/merncourse") faqData = [...mernFAQs, ...generalFAQs];
  else if (path === "/datascience") faqData = [...dataScienceFAQs, ...generalFAQs];
  else if (path === "/dataanalytics") faqData = [...dataAnalyticsFAQs, ...generalFAQs];
  else if (path === "/devops") faqData = [...devopsFAQs, ...generalFAQs];
  else faqData = generalFAQs; // fallback

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* ---------------------- RENDER ---------------------- */
  return (
    <>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content="FAQ, DigitalEdify, Course Questions, MERN Stack, DevOps, Data Science, Data Analytics, Placement Support, Certifications"
        />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.yourdomain.com${path}`} />
        <meta property="og:image" content="https://www.yourdomain.com/faq-preview.jpg" />
        <meta
          name="google-site-verification"
          content="j4ORLKZP8m5CDbROLwqodTxsLkdw2gpTAZQF_gz0Xgs"
        />
        <link rel="canonical" href={`https://www.yourdomain.com${path}`} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="font-semibold text-sm uppercase tracking-wide">Got Questions?</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {path === "/"
                ? "Find answers to general queries about our programs, admissions, and placements."
                : `Find answers related to our ${path.replace("/", "")} course and common questions.`}
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">{faq.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  </div>
                  <div
                    className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 transition-all duration-300">
                    <div className="pl-12">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
