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
  selfieSmall,
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
          <img src={selfieSmall} alt="Maggie" className="photoHeroSmall" />
          <div className="column">
            <h1 className="landingTitle">Hi, I'm Maggie Lin.</h1>
            <h1 className="landingTitle">I'm a web developer.</h1>
            <div className="landingPara">
              <p>
                I started my coding journey in 2020. I've always been very fond
                of programming. Then I finally decided that 2020 is the time to
                start making changes to my life.
              </p>
              <div className="flexContainer">
                <img src={htmlLogo} alt="HTML logo" className="skillLogo" />
                <img src={jsLogo} alt="Javascript logo" className="skillLogo" />
                <img src={cssLogo} alt="CSS logo" className="skillLogo" />
                <img src={awsLogo} alt="AWS logo" className="skillLogo" />
                <img src={gitLogo} alt="Git logo" className="skillLogo" />
                <img src={reactLogo} alt="React logo" className="skillLogo" />
              </div>
            </div>
          </div>
          <div className="column">
            <img src={selfie} alt="Maggie" className="photoHeroBig" />
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
                className="photoProj"
              />
            </Link>
            <Link to="/projects">
              <img
                src={brew1}
                alt="Screenshot of Brewenstein website"
                className="photoProj"
              />
            </Link>
            <Link to="/projects">
              <img
                src={port1}
                alt="Screenshot of portfolio website"
                className="photoProj"
              />
            </Link>
          </div>

          <div className="sectionPara">
            <Link to="/projects">
              <ButtonCust
                children="See all"
                border="1px"
                borderColor="#1a27c9"
              />
            </Link>
          </div>
        </div>
        <div className="sectionColorContainer">
          <h1 className="sectionTitle">Contact me</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
