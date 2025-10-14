import React, { useEffect } from "react";
import MernCourse from "./components/MernCourse";
import DataAnalytics from "./components/DataAnalytics";
import Devops from "./components/Devops";
import Courses from "./components/Courses";
import { sendEmail } from "./nodeMailerServer";
import CareerSteps from "./components/CareerSteps";
import { Routes, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    // sendEmail();
  }, []);
  return (
    <div>
      <MernCourse />

      <DataAnalytics />
      <Devops />

      <Courses />
      <CareerSteps />
    </div>
  );
};

export default App;
