import React, { useEffect } from "react";
import { Shield, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Introduction",
      content: [
        "We are MSS Education Technology Pvt. Ltd., doing business as Nomadskills ('Company,' 'we,' 'us,' 'our').",
        "We operate a website (URL: https://www.nomadskills.in/) and mobile/tablet application (together called the 'Platform').",
        "The Platform provides online tutoring services for various subjects to children and adults.",
      ],
    },
    {
      title: "User Agreement",
      content: [
        "These Terms and Conditions ('Terms') govern your access to and use of the Platform.",
        "By accessing or using the Platform, you agree to be bound by these Terms.",
        "If you disagree with any part of these Terms, then you may not access or use the Platform.",
      ],
    },
    {
      title: "Use of Platform",
      content: [
        "You must be at least 18 years old to use the Platform. If you are under 18, you may only use the Platform with the supervision of a parent or guardian.",
        "You are responsible for maintaining the confidentiality of your account information and password.",
        "You are responsible for all activity that occurs under your account.",
        "You agree to use the Platform for lawful purposes only and in accordance with these Terms.",
        "You agree not to use the Platform to: Upload, post, or transmit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, hateful, or racially or ethnically offensive; Interfere with or disrupt the Platform or servers or networks connected to the Platform; Violate any applicable laws or regulations.",
      ],
    },
    {
      title: "Services",
      content: [
        "The Company facilitates online and offline education services to children and adults in various subjects.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "The Platform and its content, including but not limited to text, graphics, logos, images, and software, are the property of the Company or its licensors.",
        "All content is protected by copyright, trademark, and other intellectual property laws.",
      ],
    },
    {
      title: "Disclaimer",
      content: [
        "The Platform is provided 'as is' and without warranties of any kind, express or implied.",
        "The Company disclaims all warranties, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement.",
        "The Company does not warrant that the Platform will be uninterrupted or error-free, that defects will be corrected, or that the Platform or the server that makes it available are free of viruses or other harmful components.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "The Company will not be liable for any damages arising out of or related to your use of the Platform.",
        "This includes but is not limited to direct, indirect, incidental, consequential, or punitive damages.",
      ],
    },
    {
      title: "Termination",
      content: [
        "The Company may terminate your access to the Platform at any time, for any reason, without notice.",
      ],
    },
    {
      title: "Governing Law",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of India.",
      ],
    },
    {
      title: "Dispute Resolution",
      content: [
        "Any dispute arising out of or related to these Terms will be settled by arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
        "The arbitration shall be conducted in Hyderabad, India.",
      ],
    },
    {
      title: "Entire Agreement",
      content: [
        "These Terms constitute the entire agreement between you and the Company regarding the use of the Platform.",
      ],
    },
    {
      title: "Amendment",
      content: [
        "The Company may amend these Terms at any time by posting the amended Terms on the Platform.",
        "You are responsible for checking the Terms periodically for updates.",
        "Your continued use of the Platform following the posting of amended Terms constitutes your acceptance of the amended Terms.",
      ],
    },
  ];

  const importantPoints = [
    "You must be at least 18 years old to use the Platform independently",
    "All platform content is protected by intellectual property laws",
    "The Platform is provided 'as is' without any warranties",
    "Disputes will be resolved through arbitration in Hyderabad",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
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
                Please read the following terms and conditions carefully. By using this website and/or platform you agree to be bound by all of them.
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
                  <FileText className="w-6 h-6 text-blue-500" />
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
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
          <h3 className="text-xl font-bold text-gray-900 mb-6">Key Points to Remember</h3>
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
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-700">
            <div className="flex items-center justify-center gap-2">
              <span>📧</span>
              <span>contact@nomadskills.in</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>🏢</span>
              <span>MSS Education Technology Pvt. Ltd.</span>
            </div>
          </div>
        </div>

        {/* Acceptance */}
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white">
          <p className="font-semibold">
            By using our Platform, you acknowledge that you have read, understood, and agree to be
            bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;