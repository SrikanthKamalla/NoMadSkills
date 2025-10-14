import React, { useEffect } from "react";
import MernCourse from "./components/MernCourse";
import Courses from "./components/Courses";
import { sendEmail } from "./nodeMailerServer";
import CareerSteps from "./components/CareerSteps";

const App = () => {
  useEffect(()=>{
    // sendEmail();
  },[])
  return (
    <div>
      <MernCourse />
      <Courses/>
      <CareerSteps/>
    </div> 
  );
};

export default App;
