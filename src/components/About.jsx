import { motion } from "framer-motion";
import { Users, Rocket, Lightbulb, Code, Briefcase, Heart } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-800">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Welcome to Nomad Skills!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed"
        >
          At <span className="font-semibold text-blue-600">Nomad Skills</span>, we
          strive to bridge the gap between academia and the industry — providing
          skill education and training on cutting-edge technologies.
        </motion.p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-blue-100 p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Our mission is to impart affordable and top-notch skill camps and
            courses, both offline and online, cultivating academic excellence and
            essential practical skills for your journey to success. We are not
            just an ed-tech company — we are{" "}
            <span className="font-semibold text-blue-600">
              the hub of innovation in education!
            </span>
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Why Choose Nomad Skills?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Craft Your Dream Skill Set",
              desc: "Shape your career path thoughtfully — brick by brick, brushstroke by brushstroke, and code by code.",
              icon: Code,
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "Learn from Masters",
              desc: "Gain insights from real-world heroes — our instructors — who share practical knowledge and inspiring stories.",
              icon: Lightbulb,
              color: "from-yellow-400 to-orange-500",
            },
            {
              title: "Master Hands-on Skills",
              desc: "Immerse yourself in challenges mirroring the real world, ensuring you're well-prepared for any professional field.",
              icon: Briefcase,
              color: "from-green-500 to-emerald-500",
            },
            {
              title: "Collaborative Hub",
              desc: "Connect, share ideas, and collaborate with a community of passionate skill explorers.",
              icon: Users,
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "Launch Your Career Rocket",
              desc: "Fuel your take-off with career guidance, interview preparation, and connections to potential employers.",
              icon: Rocket,
              color: "from-red-500 to-orange-600",
            },
            {
              title: "Driven by Passion",
              desc: "Every course, mentor, and community event at Nomad Skills is fueled by our passion to see you succeed.",
              icon: Heart,
              color: "from-pink-500 to-rose-500",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/90 backdrop-blur-lg border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="bg-gradient-to-r from-blue-300 to-cyan-400 text-white text-center py-16 mt-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Join the Nomad Skills Revolution
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-white/90 mb-8"
        >
          Step into a world where learning meets innovation. Let’s build the
          future of skills — together.
        </motion.p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition"
        >
          Explore Courses
        </motion.a>
      </div>
    </section>
  );
}
