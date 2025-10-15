import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import FloatingLabelInput from "./components/FloatingLabelInput";
import StepsToSuccess from "./components/StepsToSuccess";
import MernCourse from "./components/MernCourse";
import DataAnalytics from "./components/DataAnalytics";
import Devops from "./components/Devops";
import CareerSteps from "./components/CareerSteps";
import FAQ from "./components/FAQ";
import { Routes, Route, Outlet } from "react-router-dom";
import {} from "lucide-react";
import Instructions from "./components/InstitutionsPage";
import TermsAndConditions from "./components/TermaANdConditions";
import { ToastContainer } from "react-toastify";
// import { sendEmail } from "./nodeMailerServer"; // ⚠️ Don't import server code into React

const MainComponent = () => {
  return (
    <>
      {/* <FloatingLabelInput></FloatingLabelInput> */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  useEffect(() => {
    // sendEmail(); // ❌ You can’t run backend functions in frontend
  }, []);

  return (
    <>
    <Routes>
      {/* <Rout /> */}
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
        <Route path="devops" element={<Devops />} />
        <Route path="dataanalytics" element={<DataAnalytics />} />
        <Route path="institutions" element={<Instructions />} />
        <Route path="termsandconditions" element={<TermsAndConditions  />} />
      </Route>
    </Routes>
     <ToastContainer
        position="top-right"
        autoClose={5000}
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
