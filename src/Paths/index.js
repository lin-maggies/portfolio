import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Containers/home";
import AboutMe from "../Containers/aboutMe";
import ContactMe from "../Containers/contactMe";
import MyProjects from "../Containers/myProjects";
import MySkills from "../Containers/mySkills";

function Paths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<AboutMe />}></Route>
        <Route path="/contact" exact element={<ContactMe />} />
        <Route path="/projects" exact element={<MyProjects />} />
        <Route path="/skills" exact element={<MySkills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Paths;
