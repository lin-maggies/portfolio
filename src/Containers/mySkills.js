import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "../App.css";
import Navbar from "../Components/Navbar";
import awsLogo from "../assets/images/aws.svg";
import cssLogo from "../assets/images/css.svg";
import gitLogo from "../assets/images/git.svg";
import htmlLogo from "../assets/images/html.svg";
import jsLogo from "../assets/images/javascript.svg";
import reactLogo from "../assets/images/react.svg";

export default function MySkills() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="sectionColorContainer">
        <h1 className="sectionTitle">What I can do</h1>
        <div className="logoContainer">
          <img src={htmlLogo} alt="HTML logo" className="skillLogo" />
          <img src={jsLogo} alt="Javascript logo" className="skillLogo" />
          <img src={cssLogo} alt="CSS logo" className="skillLogo" />
          <img src={awsLogo} alt="AWS logo" className="skillLogo" />
          <img src={gitLogo} alt="Git logo" className="skillLogo" />
          <img src={reactLogo} alt="React logo" className="skillLogo" />
        </div>
      </div>
    </div>
  );
}
