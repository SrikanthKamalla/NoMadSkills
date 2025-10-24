import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Rocket, X } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendEmail } from "../nodeMailerServer";
import { Helmet } from "react-helmet";

// ⚠️ Import your email sending function from the backend
// import { sendEmail } from "../nodeMailerServer";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    info: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      // Call your backend email function here
      // await sendEmail(formData);

      // Simulate API delay for demo
      const { name, phone, info } = formData;
      await sendEmail({ name, phone, message: info, title: "Query or Contact Request" });
      setIsModalOpen(false);
      setFormData({ name: "", phone: "", info: "" });
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | NomadSkills - Learn, Collaborate & Grow</title>
        <meta
          name="description"
          content="Get in touch with NomadSkills for course inquiries, partnerships, or support. Reach out via email, phone, or visit our Hyderabad office."
        />
        <meta
          name="keywords"
          content="NomadSkills contact, NomadSkills Hyderabad, NomadSkills phone number, NomadSkills email, Laxion Pvt Ltd, skill training, edtech India"
        />
        <meta name="author" content="NomadSkills" />
        <meta name="robots" content="index, follow" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="j4ORLKZP8m5CDbROLwqodTxsLkdw2gpTAZQF_gz0Xgs"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.nomadskills.in/contact" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Contact NomadSkills - Learn, Collaborate & Grow" />
        <meta
          property="og:description"
          content="Reach out to NomadSkills for collaborations, skill training, or inquiries. Let’s build the future of skills together."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nomadskills.in/contact" />
        <meta
          property="og:image"
          content="https://www.nomadskills.in/assets/contact-og-image.webp"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact NomadSkills - Learn, Collaborate & Grow" />
        <meta
          name="twitter:description"
          content="Contact NomadSkills for course details, partnerships, and collaboration opportunities."
        />
        <meta
          name="twitter:image"
          content="https://www.nomadskills.in/assets/contact-og-image.webp"
        />

        {/* Structured Data (JSON-LD for SEO) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact NomadSkills",
      "url": "https://www.nomadskills.in/contact",
      "description": "Get in touch with NomadSkills for inquiries, support, and partnerships.",
      "publisher": {
        "@type": "Organization",
        "name": "NomadSkills",
        "url": "https://www.nomadskills.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nomadskills.in/assets/logo.png"
        }
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6301604347",
        "contactType": "Customer Support",
        "email": "contact@nomadskills.in",
        "areaServed": "IN",
        "availableLanguage": "English"
      }
    }
    `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-transparent pb-1 bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4"
            >
              Ready to Explore?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We’d love to hear from you. Reach out to us for inquiries, collaborations, or to
              explore skill-building opportunities with NomadSkills.
            </motion.p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-purple-100"
            >
              <Phone className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-700">+91-6301604347</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-purple-100"
            >
              <Mail className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-700 break-all">contact@nomadskills.in</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-purple-100"
            >
              <MapPin className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Office Address</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                H.No: 5-30, Sri Rama Towers, Opp New Govt Jr College, <br />
                Landmark: Pillar No: 830 (Towards Y Junction), <br />
                Beside Metro Cash & Carry, Sangeet Nagar, Kukatpally, <br />
                Hyderabad, Telangana – 500072.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-20"
          >
            <Rocket className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Let’s Build the Future of Skills Together!
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out now and join the NomadSkills journey — where learning meets innovation.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Contact Form Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative border border-purple-100"
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
                  We will get back to you soon!
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Message</label>
                    <textarea
                      name="info"
                      rows="4"
                      value={formData.info}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full text-white py-3 rounded-lg font-semibold transition-all duration-300 ${
                      loading
                        ? "bg-gradient-to-r from-purple-300 to-blue-300 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    }`}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Contact;
