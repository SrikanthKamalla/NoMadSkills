import React from "react";
import { School, GraduationCap, Users, Award, Layers, BookOpen, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Institutions = () => {
  const navigate = useNavigate();

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
            Our <strong>Skillcamp Courses</strong> together with <strong>Skillarena Competitions </strong> 
            augment traditional classroom teaching and provide an impetus to go beyond.
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

        {/* Schools Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <School className="w-6 h-6 text-purple-600" />
              For Schools
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Empower Your Students with Essential, Real-world Skills</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Equip your students with the adaptability and expertise they need to thrive in a rapidly 
              changing world. Our customizable skill camps and courses cover in-demand skills like coding, 
              communication, design thinking, and more — delivered in an engaging, project-based format.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Watch their confidence soar as they tackle real-world challenges and prepare for successful 
              futures, wherever their journeys take them.
            </p>
          </div>

          {/* Colleges Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-green-600" />
              For Colleges
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Bridge the Gap: From Theory to Real-World Tech Expertise</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Give your students an edge in the competitive job market with specialized Skill Camps and 
              courses created in collaboration with industry experts. We offer flexible solutions that 
              integrate seamlessly into your existing curriculum.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Our programs foster practical application of knowledge and real-world skill development — 
              empowering your graduates with in-demand skills to hit the ground running and become 
              sought-after talent.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Nomadskills</h2>
          <p className="text-lg mb-6 opacity-90">
            Join us in shaping the future as we guide students on a path of skill acquisition that goes 
            beyond textbooks, preparing them for success in an ever-evolving world.
          </p>
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us to Collaborate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Institutions;
