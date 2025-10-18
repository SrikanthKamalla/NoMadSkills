import React from "react";
import { Shield, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const sections = [
    {
      title: "Enrollment & Registration",
      content: [
        "By enrolling in any course, you agree to provide accurate and complete information during registration.",
        "NomadSkills reserves the right to reject any enrollment without providing a reason.",
        "Students must be at least 16 years old to enroll in our courses.",
        "Registration is complete only after payment confirmation and document verification.",
      ],
    },
    {
      title: "Payment & Refunds",
      content: [
        "All course fees must be paid in full before course commencement unless an installment plan is approved.",
        "We offer a 7-day money-back guarantee from the date of enrollment if no classes have been attended.",
        "Once classes have commenced, no refunds will be provided except under exceptional circumstances.",
        "Installment payments must be made on or before the due dates to avoid course suspension.",
      ],
    },
    {
      title: "Course Access & Materials",
      content: [
        "Course materials are provided for personal educational use only and may not be distributed or shared.",
        "Access to the learning platform is granted for the duration of the course plus 30 days after completion.",
        "Sharing login credentials is strictly prohibited and may result in immediate account termination.",
        "NomadSkills reserves the right to update course content without prior notice.",
      ],
    },
    {
      title: "Student Conduct",
      content: [
        "Students must maintain professional and respectful behavior in all interactions.",
        "Any form of harassment, plagiarism, or unethical behavior will result in immediate dismissal.",
        "Recordings of live sessions are for personal use only and may not be distributed.",
        "Students must complete assignments independently unless specified as group projects.",
      ],
    },
    {
      title: "Certification",
      content: [
        "Certificates are awarded upon successful completion of all course requirements.",
        "Minimum 80% attendance and passing grades in all assessments are required for certification.",
        "Certificates are issued digitally and can be verified through our online verification system.",
        "NomadSkills reserves the right to revoke certificates in case of misconduct or violation of terms.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All course content, materials, and curriculum are intellectual property of NomadSkills.",
        "Students may not record, reproduce, or distribute course materials without written permission.",
        "Projects and assignments created during the course remain the intellectual property of the student.",
        "NomadSkills may feature student projects in our portfolio with proper attribution.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "NomadSkills is not responsible for employment outcomes after course completion.",
        "We do not guarantee job placement but provide placement assistance and career support.",
        "Technical issues beyond our control (internet outages, etc.) are not our responsibility.",
        "Course fees are for educational services only and do not include any job guarantees.",
      ],
    },
    {
      title: "Privacy & Data Protection",
      content: [
        "We collect and process personal data in accordance with our Privacy Policy.",
        "Student information is never shared with third parties without explicit consent.",
        "We use cookies and similar technologies to enhance the learning experience.",
        "Students can request data deletion after course completion, subject to legal requirements.",
      ],
    },
  ];

  const importantPoints = [
    "These terms are subject to change without prior notice",
    "Continued use of our services constitutes acceptance of updated terms",
    "Disputes will be subject to the jurisdiction of Hyderabad courts",
    "Force majeure events may affect service delivery",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1
            onClick={() => navigate("/termsandconditions")}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Notice</h3>
              <p className="text-blue-700">
                Please read these terms and conditions carefully before using our services. By
                accessing or using NomadSkills platform, you agree to be bound by these terms.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <section
                key={index}
                className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-purple-500" />
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        {/* Important Points */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Important Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {importantPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Support */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h3>
          <p className="text-gray-600 mb-6">
            If you have any questions about these terms and conditions, please contact us:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-700">
            <div className="flex items-center justify-center gap-2">
              <span>📧</span>
              <span>legal@nomadskills.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>📞</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>🏢</span>
              <span>KPHB, Hyderabad, 500072</span>
            </div>
          </div>
        </div>

        {/* Acceptance */}
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white">
          <p className="font-semibold">
            By using our services, you acknowledge that you have read, understood, and agree to be
            bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
