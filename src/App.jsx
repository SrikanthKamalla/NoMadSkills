import React, { useEffect } from "react";
import MernCourse from "./components/MernCourse";
import Courses from "./components/Courses";
import { sendEmail } from "./nodeMailerServer";

const App = () => {
  useEffect(()=>{
    // sendEmail();
  },[])
  return (
    <div>
      <MernCourse />
      <Courses/>
    </div> 
  );
};

export default App;
