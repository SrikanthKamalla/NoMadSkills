import React, { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import MernCourse from "./components/MernCourse";
import DataAnalytics from "./components/DataAnalytics";
import Devops from "./components/Devops";
import CareerSteps from "./components/CareerSteps";
import FAQ from "./components/FAQ";
import Instructions from "./components/InstitutionsPage";
import TermsAndConditions from "./components/TermaANdConditions";
import DataScience from "./components/DataScience";
import AboutUs from "./components/About";
import PrivacyTerms from "./components/PrivacyTerms";
import Contact from "./components/Contact";
import FixedWhatsappButton from "./components/FixedWhatsAppIcon";
import MedicalCourse from "./components/MedicalCourse";

const MainComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ Global Helmet for verification + brand meta */}
      <Helmet>
        {/* 🔍 Google Verification */}
        <meta
          name="google-site-verification"
          content="j4ORLKZP8m5CDbROLwqodTxsLkdw2gpTAZQF_gz0Xgs"
        />

        {/* 🧭 Global SEO Metadata */}
        <title>NomadSkills | Learn, Build & Launch Your Career</title>
        <meta
          name="description"
          content="NomadSkills empowers learners with real-world training in Full Stack Development, DevOps, and Data Analytics. Join industry experts to master the skills for tomorrow's world."
        />
        <meta
          name="keywords"
          content="NomadSkills, skill training, edtech, full stack development, devops, data analytics, online courses, Hyderabad, upskilling"
        />
        <meta name="author" content="NomadSkills Edutech Pvt Ltd" />
        <link rel="canonical" href="https://www.nomadskills.in/" />

        {/* 🌐 Open Graph for Social Sharing */}
        <meta property="og:title" content="NomadSkills | Learn, Build & Launch" />
        <meta
          property="og:description"
          content="Join NomadSkills to learn in-demand skills, guided by experts. Real-world projects, certifications, and career growth await."
        />
        <meta property="og:image" content="https://www.nomadskills.in/assets/logo.webp" />
        <meta property="og:url" content="https://www.nomadskills.in/" />
        <meta property="og:type" content="website" />

        {/* 🐦 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NomadSkills | Learn, Build & Launch" />
        <meta
          name="twitter:description"
          content="Skill up with NomadSkills — hands-on learning, projects, and certifications designed to boost your career."
        />
        <meta name="twitter:image" content="https://www.nomadskills.in/assets/logo.webp" />
      </Helmet>

      {/* ✅ Layout */}
      <Navbar />
      <main className="pt-13">
        <Outlet />
      </main>
      <FixedWhatsappButton />
      <Footer />
    </>
  );
};

const App = () => {
  useEffect(() => {
    // any initialization if needed
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainComponent />}>
          <Route
            index
            element={
              <>
                <Hero className="mt-5" />
                <Courses />
                <CareerSteps />
                <FAQ />
              </>
            }
          />
          <Route path="merncourse" element={<MernCourse />} />
          <Route path="medicalcoding" element={<MedicalCourse />} />
          <Route path="devops" element={<Devops />} />
          <Route path="dataanalytics" element={<DataAnalytics />} />
          <Route path="datascience" element={<DataScience />} />
          <Route path="institutions" element={<Instructions />} />
          <Route path="termsandconditions" element={<TermsAndConditions />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="privacy" element={<PrivacyTerms />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
