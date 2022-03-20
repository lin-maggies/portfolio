import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box, Link } from "@chakra-ui/react";
import "../App.css";
import Navbar from "../Components/Navbar";
import awsLogo from "../assets/images/aws.svg";
import cssLogo from "../assets/images/css.svg";
import gitLogo from "../assets/images/git.svg";
import htmlLogo from "../assets/images/html.svg";
import jsLogo from "../assets/images/javascript.svg";
import reactLogo from "../assets/images/react.svg";

export default function MySkills() {
  return (
    <div>
      <Navbar />
      <div className="sectionColorContainer">
        <h1 className="sectionTitle">What I can do</h1>
        <p>
          My main expertise is in front-end development building responsive web
          apps using React, Javascript, HTML and CSS. However, I’m also familiar
          with AWS' services for back-end and website hosting. This includes
          using their Lambda, API Gateway, SES, Cognito, S3 etc. I am
          comfortable building Lambda functions, creating API endpoints in API
          Gateway, using SES to set up emails etc.
        </p>
        <p>
          I have also used a lot of third party APIs. I’ve used Stripe for
          online payment processing, Clicksend for SMS gateway and Foxycart’s
          shopping cart integration. All my projects have been done with either
          GitHub or GitLab for source control.
        </p>
        <p>
          I’ve worked in two projects that practices Agile/Scrum methodology,
          and have been working in a team environment solving real life
          problems.
        </p>

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
