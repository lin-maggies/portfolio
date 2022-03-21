import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";
import ButtonCust from "../Components/pageElements/ButtonCust.js";
import {
  text1,
  brew1,
  port1,
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
            <img src={selfie} alt="Maggie" className="photoYellowbg" />
          </div>
        </div>
        <div className="sectionContainer">
          <Link className="sectionTitle" to="/projects">
            My projects
          </Link>
          <div className="flexContainer">
            <Link to="/projects">
              <img
                src={text1}
                alt="Screenshot of TextBeer website"
                className="photo"
              />
            </Link>
            <Link to="/projects">
              <img
                src={brew1}
                alt="Screenshot of Brewenstein website"
                className="photo"
              />
            </Link>
            <Link to="/projects">
              <img
                src={port1}
                alt="Screenshot of portfolio website"
                className="photo"
              />
            </Link>
          </div>

          <div className="sectionPara">
            <Link to="/projects">
              <ButtonCust
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
              <ButtonCust
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
