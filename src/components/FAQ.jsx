import React, { useState } from "react";
import {
  HelpCircle,
  MessageCircle,
  BookOpen,
  Users,
  CreditCard,
  Clock,
  ChevronDown,
} from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is the duration of the MERN Stack course?",
      answer:
        "The complete MERN Stack program is 29 weeks long, divided into 6 comprehensive modules. This includes 4 weeks of frontend foundation, 6 weeks of React, 5 weeks of backend with Node.js, 4 weeks of MongoDB, 4 weeks of full-stack integration, and 6 weeks of Data Structures & Algorithms.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      question: "Do I need any prior coding experience to join this course?",
      answer:
        "No prior coding experience is required! Our course is designed for absolute beginners. We start with the fundamentals of HTML, CSS, and JavaScript before moving to advanced topics. However, basic computer knowledge is recommended.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      question: "What kind of projects will I work on during the course?",
      answer:
        "You'll build 15+ real-world projects including a Portfolio Website, E-commerce Platform, Social Media App, REST API Server, Chat Application, and a complete MERN Stack Application. These projects will help you build a strong portfolio for job interviews.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      question: "Is there any placement assistance after course completion?",
      answer:
        "Yes! We provide comprehensive placement support including resume building, 20+ mock interviews, interview preparation sessions, and direct referrals to our 200+ hiring partners. Our average placement rate is 95% with an average package of 7.4 LPA.",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      question: "What is the course fee and are there any EMI options?",
      answer:
        "We offer flexible payment options including EMI facilities with zero cost. The total course fee is ₹85,000 with multiple payment plans available. We also provide scholarships for meritorious students and early bird discounts.",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      question: "Will I get certificate after course completion?",
      answer:
        "Yes, you'll receive a certificate of completion that is recognized by our 200+ hiring partners. The certificate demonstrates your proficiency in MERN Stack development and Data Structures & Algorithms.",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      question: "How much time should I dedicate daily for this course?",
      answer:
        "We recommend dedicating 2-3 hours daily for learning and practice. The course includes live classes, self-paced content, assignments, and project work. Consistent daily practice is key to success in this program.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      question: "What if I miss a live class?",
      answer:
        "All live classes are recorded and available in your student dashboard. You can access them anytime and watch at your convenience. Additionally, you can clear doubts in the next class or through our 1-on-1 mentorship sessions.",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
            Find answers to common questions about our MERN Stack course, admissions process, and
            career opportunities.
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
  );
};

export default FAQ;
