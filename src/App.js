import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import React from "react";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import HomeTR from "./components/HomeTR/HomeTR";
function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects"element={<Projects />} />
        <Route exact path="/skills"element={<Skills />} />
        <Route exact path="/contact"element={<Contact />} />
        <Route exact path="/hometr"element={<HomeTR />} />
        
      </Routes>
      
    </>
  );
}

export default App;
