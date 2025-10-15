import React from "react";
import heroPic from "../assets/OIP.webp";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-16 text-white pt-24 lg:pt-0">
      <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
          Empower Your <span className="text-purple-400">Career</span> with
          <br className="hidden sm:block" /> Expert-Led{" "}
          <span className="text-purple-300">Training</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Learn in-demand tech skills and get placed in top companies. We guide you from learning to
          landing your dream job.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button
            onClick={() => {
              document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Courses
          </button>
          <button className="border border-white hover:bg-white hover:text-purple-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Talk to Expert
          </button>
        </div>
      </div>

      <div className="flex-1 mt-10 lg:mt-0 flex justify-center lg:justify-end">
        <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-purple-800/30 rounded-full flex items-center justify-center animate-float overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={heroPic} 
              alt="Training Illustration" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;