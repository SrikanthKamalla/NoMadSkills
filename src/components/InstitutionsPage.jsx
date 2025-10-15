import React from "react";
import { CheckCircle, Clock, BookOpen, Users, Award, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  const navigate = useNavigate();
  const steps = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Course Registration",
      description:
        "Choose your desired course and complete the registration process by filling out the enrollment form.",
      steps: [
        "Select your preferred course from the courses page",
        "Click on 'Enroll Now' button",
        "Fill in your personal details and educational background",
        "Submit the enrollment form",
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Admission Process",
      description: "Complete the admission formalities and get your student ID.",
      steps: [
        "Wait for confirmation email (within 24 hours)",
        "Complete the initial assessment test if required",
        "Submit necessary documents (ID proof, educational certificates)",
        "Receive your student credentials",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Orientation & Onboarding",
      description: "Get familiar with the learning platform and meet your instructors.",
      steps: [
        "Attend the orientation session (online)",
        "Access the learning management system",
        "Meet your mentor and batch mates",
        "Set up your development environment",
      ],
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Learning Journey",
      description: "Follow the structured curriculum and complete assignments.",
      steps: [
        "Attend live classes and recorded sessions",
        "Complete weekly assignments and projects",
        "Participate in coding challenges",
        "Get regular feedback from mentors",
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Certification & Placement",
      description: "Complete the course and get certified with placement assistance.",
      steps: [
        "Complete final capstone project",
        "Take the certification exam",
        "Receive course completion certificate",
        "Get placement assistance and interview preparation",
      ],
    },
  ];

  const requirements = [
    "Basic computer knowledge",
    "Stable internet connection",
    "Dedication to learn and practice",
    "Minimum 4-6 hours per week for study",
    "Laptop/Computer with minimum 4GB RAM",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Course Instructions & Guidelines
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow these steps to successfully enroll and complete your learning journey with
            NomadSkills
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Steps Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                Step-by-Step Process
              </h2>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.steps.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Requirements & Important Notes */}
          <div className="space-y-6">
            {/* Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Requirements</h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Important Notes</h3>
              <ul className="space-y-3 text-yellow-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold">• Attendance:</span>
                  <span>Minimum 80% attendance required for certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">• Assignments:</span>
                  <span>All assignments must be submitted before deadlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">• Support:</span>
                  <span>24/7 doubt support available through our platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">• Refund:</span>
                  <span>7-day money back guarantee from date of enrollment</span>
                </li>
              </ul>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="mb-4 opacity-90">Our support team is here to help you</p>
              <div className="space-y-2 text-sm">
                <p>📧 support@nomadskills.com</p>
                <p>📞 +91 98765 43210</p>
                <p>🕒 Mon-Sun: 9AM - 9PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Learning Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
