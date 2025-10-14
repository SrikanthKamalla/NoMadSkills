import React from "react";
import Navbar from "./components/NAvbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
