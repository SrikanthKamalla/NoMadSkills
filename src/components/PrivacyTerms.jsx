import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Mail,
  Globe,
  User,
  AlertTriangle,
  Book,
  GraduationCap,
  Users,
} from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";


export default function PrivacyTerms() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | NomadSkills - Student & Institution Data Protection</title>
        <meta
          name="description"
          content="Read NomadSkills' privacy policy to understand how we protect, use, and manage student, educator, and institutional data across Skillcamp and Skillarena programs."
        />
        <meta
          name="keywords"
          content="NomadSkills privacy policy, data protection, student privacy, school data security, Laxion Pvt Ltd, education privacy, institutional data, edtech India"
        />
        <meta name="author" content="NomadSkills" />
        <meta name="robots" content="index, follow" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="j4ORLKZP8m5CDbROLwqodTxsLkdw2gpTAZQF_gz0Xgs"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.nomadskills.in/privacy" />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Privacy Policy | NomadSkills - Student & Institution Data Protection"
        />
        <meta
          property="og:description"
          content="NomadSkills protects the privacy of students, educators, and institutions through transparent data handling and security policies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nomadskills.in/privacy" />
        <meta
          property="og:image"
          content="https://www.nomadskills.in/assets/privacy-og-image.webp"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Privacy Policy | NomadSkills - Student & Institution Data Protection"
        />
        <meta
          name="twitter:description"
          content="Learn how NomadSkills ensures secure and transparent handling of educational data."
        />
        <meta
          name="twitter:image"
          content="https://www.nomadskills.in/assets/privacy-og-image.webp"
        />

        {/* Structured Data for SEO (JSON-LD) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - NomadSkills",
      "url": "https://www.nomadskills.in/privacy",
      "description": "NomadSkills ensures privacy and protection of student and institutional data across Skillcamp and Skillarena educational programs.",
      "publisher": {
        "@type": "Organization",
        "name": "NomadSkills",
        "url": "https://www.nomadskills.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nomadskills.in/assets/logo.png"
        }
      }
    }
    `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center py-20">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text p-2 text-transparent"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed"
            >
              At Nomadskills @ Schools & Colleges, we are committed to protecting the privacy and
              security of students, educators, and institutional data.
            </motion.p>
          </div>

          {/* Policy Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-blue-100 p-6 md:p-8 lg:p-12 mb-10"
          >
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <User className="w-6 h-6 text-blue-600" />
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We are <strong>Laxion Pvt. Ltd.</strong>, doing business as{" "}
                  <span className="font-semibold text-blue-600">
                    Nomadskills @ Schools & Colleges
                  </span>{" "}
                  ("Company," "we," "us," or "our"). This Privacy Policy describes how we collect,
                  use, and disclose personal information when educational institutions, students,
                  and educators use our comprehensive educational packages including Skillcamp
                  Courses and Skillarena Competitions.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <Book className="w-6 h-6 text-blue-600" />
                  Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We collect information to provide and improve our educational services:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Institutional Information:</strong> School/college details, contact
                    information, and administrative data.
                  </li>
                  <li>
                    <strong>Student Data:</strong> Name, grade level, course progress, competition
                    performance, and skill assessment results.
                  </li>
                  <li>
                    <strong>Educational Data:</strong> Course completion rates, skill development
                    metrics, and competition rankings.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> Platform usage patterns, device information,
                    and interaction data from hands-on sessions.
                  </li>
                  <li>
                    <strong>Mentoring Data:</strong> Records from one-on-one mentoring sessions and
                    personalized feedback.
                  </li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  How We Use Your Information
                </h2>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Deliver customized Skillcamp Courses and Skillarena Competitions</li>
                  <li>Provide hands-on interactive learning experiences</li>
                  <li>Facilitate one-on-one mentoring sessions</li>
                  <li>Generate certificates and performance reports for students</li>
                  <li>Customize courses to match institutional curriculum needs</li>
                  <li>Administer prizes and recognition for top performers</li>
                  <li>Enable industry collaboration and real-world skill application</li>
                  <li>Track progress beyond traditional classroom learning</li>
                </ul>
              </section>

              {/* Data Sharing with Institutions */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <Users className="w-6 h-6 text-blue-600" />
                  Data Sharing with Educational Institutions
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We share educational data with participating schools and colleges to:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Provide comprehensive student progress reports</li>
                  <li>Support institutional assessment and accreditation</li>
                  <li>Enable curriculum integration and customization</li>
                  <li>Facilitate industry collaboration opportunities</li>
                  <li>Coordinate offline in-person sessions and events</li>
                </ul>
              </section>

              {/* Student Privacy */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Student Privacy Protection
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement enhanced privacy measures for student data, including:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700 mt-2">
                  <li>Strict access controls for student information</li>
                  <li>Parental consent mechanisms for minors</li>
                  <li>Limited data retention periods aligned with educational purposes</li>
                  <li>Secure handling of competition results and performance data</li>
                  <li>Anonymized analytics for institutional reporting</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <Lock className="w-6 h-6 text-blue-600" />
                  Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We employ robust security measures to protect educational data, including
                  encryption of live session recordings, secure storage of hands-on project data,
                  and protected access to mentoring communications. All offline in-person sessions
                  follow strict data handling protocols.
                </p>
              </section>

              {/* Parental Rights */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <User className="w-6 h-6 text-blue-600" />
                  Parental Rights & Controls
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Parents and guardians have the right to:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700 mt-2">
                  <li>Review their child's educational data and progress</li>
                  <li>Request modifications to personal information</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Access certificates and competition results</li>
                  <li>Communicate with mentors and instructors</li>
                </ul>
              </section>

              {/* Institutional Controls */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  Institutional Data Management
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Educational institutions can manage their data through dedicated admin portals,
                  including course customization settings, student progress monitoring, and
                  competition management tools for Skillarena events.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                  Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For students under 18, we require verifiable parental consent before collecting
                  personal information. Our platform is designed with age-appropriate privacy
                  settings and we work closely with schools and parents to ensure compliant data
                  handling for all age groups.
                </p>
              </section>

              {/* Industry Collaboration */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <Globe className="w-6 h-6 text-blue-600" />
                  Industry Collaboration Data
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When facilitating industry collaboration, we share only anonymized or aggregated
                  student performance data unless explicit consent is obtained for specific
                  internship or mentorship opportunities.
                </p>
              </section>

              {/* Changes to Policy */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this policy to reflect changes in our educational services.
                  Institutions will be notified of significant changes and provided with updated
                  documentation for their records.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                  <Mail className="w-6 h-6 text-blue-600" />
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about this Privacy Policy or our educational data practices, please
                  contact our Educational Data Protection Officer at{" "}
                  <a
                    href="mailto:privacy@nomadskills.in"
                    className="text-blue-600 underline hover:text-blue-700"
                  >
                    privacy@nomadskills.in
                  </a>{" "}
                  or reach out to our institutional support team.
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Laxion Pvt. Ltd.</strong>
                    <br />
                    Nomadskills @ Schools & Colleges Division
                    <br />
                    Skillcamp & Skillarena Programs
                    <br />
                    <a href="mailto:contact@nomadskills.in" className="text-blue-600 underline">
                      contact@nomadskills.in
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
