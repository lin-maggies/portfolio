import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";
import awsLogo from "../assets/images/aws.svg";
import cssLogo from "../assets/images/css.svg";
import gitLogo from "../assets/images/git.svg";
import htmlLogo from "../assets/images/html.svg";
import jsLogo from "../assets/images/javascript.svg";
import reactLogo from "../assets/images/react.svg";
import selfie from "../assets/images/selfie.jpg";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div>
        <div className="sectionColorContainer">
          <h1 className="sectionTitle">Hi, I'm Maggie Lin.</h1>
          <div className="sectionPara">
            <p1>I'm a web developer.</p1>
            <img src={selfie} alt="Photo of maggie" className="photo" />
          </div>
        </div>
        <div className="sectionContainer">
          <h1 className="sectionTitle">My projects</h1>
          <div className="sectionPara">
            <Link to="/projects">Click here to see more</Link>
          </div>
        </div>

        <div className="sectionColorContainer">
          <h1 className="sectionTitle">My skills</h1>
          <div className="logoContainer">
            <img src={htmlLogo} alt="HTML logo" className="skillLogo" />
            <img src={jsLogo} alt="Javascript logo" className="skillLogo" />
            <img src={cssLogo} alt="CSS logo" className="skillLogo" />
            <img src={awsLogo} alt="AWS logo" className="skillLogo" />
            <img src={gitLogo} alt="Git logo" className="skillLogo" />
            <img src={reactLogo} alt="React logo" className="skillLogo" />
          </div>
          <div className="sectionPara">
            <Link to="/skills">Click here to see more</Link>
          </div>
        </div>
        <div className="sectionContainer">
          <h1 className="sectionTitle">Contact me</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
