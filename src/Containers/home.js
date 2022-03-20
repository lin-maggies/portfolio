import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";
import Button from "../Components/pageElements/Button.js";
import {
  text1,
  brew1,
  awsLogo,
  cssLogo,
  gitLogo,
  htmlLogo,
  jsLogo,
  reactLogo,
  selfie,
} from "../assets/images";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div className="sectionColorContainer row">
          <div className="column">
            <h1 className="sectionTitle">Hi, I'm Maggie Lin.</h1>
            <div className="sectionPara">
              <p>I'm a web developer.</p>
            </div>
          </div>
          <div className="column">
            <img src={selfie} alt="Photo of maggie" className="photo" />
          </div>
        </div>
        <div className="sectionContainer">
          <Link className="sectionTitle" to="/projects">
            My projects
          </Link>
          <div className="flexContainer">
            <Link className="sectionTitle" to="/projects">
              <img src={text1} alt="Photo of maggie" className="photo" />
            </Link>
            <Link className="sectionTitle" to="/projects">
              <img src={brew1} alt="Photo of maggie" className="photo" />
            </Link>
            <Link className="sectionTitle" to="/projects">
              <img src={brew1} alt="Photo of maggie" className="photo" />
            </Link>
          </div>

          <div className="sectionPara">
            <Link to="/projects">
              <Button
                children="Click here to see more"
                border="1px"
                borderColor="#1a27c9"
              />
            </Link>
          </div>
        </div>

        <div className="sectionColorContainer">
          <Link className="sectionTitle" to="/skills">
            My Skills
          </Link>
          <div className="flexContainer">
            <img src={htmlLogo} alt="HTML logo" className="skillLogo" />
            <img src={jsLogo} alt="Javascript logo" className="skillLogo" />
            <img src={cssLogo} alt="CSS logo" className="skillLogo" />
            <img src={awsLogo} alt="AWS logo" className="skillLogo" />
            <img src={gitLogo} alt="Git logo" className="skillLogo" />
            <img src={reactLogo} alt="React logo" className="skillLogo" />
          </div>
          <div className="sectionPara">
            <Link to="/skills">
              <Button
                children="Click here to see more"
                border="1px"
                borderColor="#1a27c9"
              />
            </Link>
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
