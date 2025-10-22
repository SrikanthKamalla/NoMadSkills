import React, { useState, useEffect } from "react";
import {
  School,
  GraduationCap,
  Users,
  Award,
  Layers,
  BookOpen,
  Briefcase,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../nodeMailerServer"; // your email utility
import { toast } from "react-toastify";

const Institutions = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ Added loading state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institutionName: "",
    designation: "",
    message: "",
  });

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const features = [
    { icon: <Users className="w-5 h-5 text-blue-600" />, text: "Offline in-person sessions" },
    { icon: <BookOpen className="w-5 h-5 text-blue-600" />, text: "Live + recorded classes" },
    { icon: <Layers className="w-5 h-5 text-blue-600" />, text: "Hands-on interactive learning" },
    { icon: <Award className="w-5 h-5 text-blue-600" />, text: "Certificates for students" },
    { icon: <Briefcase className="w-5 h-5 text-blue-600" />, text: "Customizable courses" },
    { icon: <GraduationCap className="w-5 h-5 text-blue-600" />, text: "Beyond classroom approach" },
    { icon: <Users className="w-5 h-5 text-blue-600" />, text: "One-on-one mentoring" },
    { icon: <Award className="w-5 h-5 text-blue-600" />, text: "Prizes for top performers" },
    { icon: <Briefcase className="w-5 h-5 text-blue-600" />, text: "Industry collaboration" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ start loading
    try {
      const { fullName, email, phone, institutionName, designation, message } = formData;

      const result = await sendEmail({
        title: "Institution tried to contact",
        name: fullName,
        email,
        phone,
        institutionName,
        designation,
        message,
      });

      if (result?.success) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          institutionName: "",
          designation: "",
          message: "",
        });
        setIsModalOpen(false);
      } else {
        toast.error("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Something went wrong! Try again later.");
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nomadskills @ Schools & Colleges
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive educational packages customized to the needs of your institution.
            Our <strong>Skillcamp Courses</strong> together with{" "}
            <strong>Skillarena Competitions</strong> augment traditional classroom teaching and
            provide an impetus to go beyond.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-600" />
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-blue-50 rounded-xl p-3 hover:bg-blue-100 transition"
              >
                {item.icon}
                <span className="text-gray-800 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schools + Colleges Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <School className="w-6 h-6 text-purple-600" />
              For Schools
            </h2>
            <p className="text-gray-700 mb-4 font-semibold">
              Empower Your Students with Essential, Real-world Skills
            </p>
            <p className="text-gray-700 leading-relaxed">
              Equip your students with the adaptability and expertise they need to thrive in a
              rapidly changing world. Our customizable skill camps and courses cover in-demand
              skills like coding, communication, design thinking, and more — delivered in an engaging,
              project-based format.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-green-600" />
              For Colleges
            </h2>
            <p className="text-gray-700 mb-4 font-semibold">
              Bridge the Gap: From Theory to Real-World Tech Expertise
            </p>
            <p className="text-gray-700 leading-relaxed">
              Give your students an edge in the competitive job market with specialized Skill Camps
              and courses created in collaboration with industry experts. We offer flexible
              solutions that integrate seamlessly into your existing curriculum.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Nomadskills</h2>
          <p className="text-lg mb-6 opacity-90">
            Join us in shaping the future as we guide students on a path of skill acquisition that
            goes beyond textbooks, preparing them for success in an ever-evolving world.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us to Collaborate
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-80 flex items-center justify-center p-4 z-50 transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "fullName", label: "Full Name *", type: "text", required: true },
                  { id: "email", label: "Email", type: "email" },
                  { id: "phone", label: "Phone *", type: "tel", required: true },
                  { id: "institutionName", label: "Institution Name *", type: "text", required: true },
                  { id: "designation", label: "Designation", type: "text" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder={`Enter your ${field.label.replace(" *", "").toLowerCase()}`}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter your message"
                  />
                </div>

                {/* ✅ Loading button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
                  }`}
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Institutions;
