import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = ({ className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className={`min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-14 ${className}`}
    >
      {/* Added pt-24 for top padding to account for fixed navbar */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#008cff] mb-6"
        >
          Build Your Future-Ready Skills
        </motion.h1>

        {/* Subheading */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-12"
        >
          <motion.span className="inline-block mr-4" whileHover={{ scale: 1.05 }}>
            Learn.
          </motion.span>
          <motion.span className="inline-block mr-4" whileHover={{ scale: 1.05 }}>
            Build.
          </motion.span>
          <motion.span className="inline-block" whileHover={{ scale: 1.05 }}>
            Get Hired.
          </motion.span>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Feature 1 */}
          <motion.div
            variants={featureVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Master through Projects</h3>
            <p className="text-gray-600 text-sm">
              Hands-on learning with real-world projects that build your portfolio
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            variants={featureVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Connected Mentors</h3>
            <p className="text-gray-600 text-sm">
              Learn from professionals working at top tech companies
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            variants={featureVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Career-focused Skill Exploration
            </h3>
            <p className="text-gray-600 text-sm">
              Discover and develop skills that employers are looking for
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          onClick={() => {
            document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started For Free
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div variants={itemVariants} className="mt-16">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
