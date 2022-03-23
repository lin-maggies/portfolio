import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";
import ButtonCust from "../Components/pageElements/ButtonCust.js";
import {
  text1,
  textMore,
  brew1,
  brewMore,
  port1,
  portMore,
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
                I studied mechanical engineering in university, but have always
                been very fond of programming. In 2020, I decided that it is
                time to make changes to my life. 2020 is the time I started my
                coding journey.
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
            <a href="/projects#beerjerk" className="photoBox">
              <img
                src={text1}
                alt="Screenshot of TextBeer website"
                className="photoProj"
              />
              <img
                src={textMore}
                alt="Screenshot of TextBeer website"
                className="photoProjMore"
              />
            </a>
            <a href="/projects#brewenstein" className="photoBox">
              <img
                src={brew1}
                alt="Screenshot of Brewenstein website"
                className="photoProj"
              />
              <img
                src={brewMore}
                alt="Screenshot of Brewenstein website"
                className="photoProjMore"
              />
            </a>
            <a href="/projects#portfolio" className="photoBox">
              <img
                src={port1}
                alt="Screenshot of portfolio website"
                className="photoProj"
              />
              <img
                src={portMore}
                alt="Screenshot of portfolio website"
                className="photoProjMore"
              />
            </a>
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
