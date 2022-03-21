import React, { useEffect } from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import {
  awsLogo,
  cssLogo,
  gitLogo,
  htmlLogo,
  jsLogo,
  reactLogo,
} from "../assets/images";

export default function MySkills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="sectionColorContainer row">
        <h1 className="sectionTitle">What I can do</h1>
        <div className="column">
          <div className="sectionPara">
            <p>
              My main expertise is in front-end development building responsive
              web apps using React, Javascript, HTML and CSS. However, I’m also
              familiar with AWS' services for back-end and website hosting. This
              includes using their Lambda, API Gateway, SES, Cognito, S3 etc. I
              am comfortable building Lambda functions, creating API endpoints
              in API Gateway, using SES to set up emails etc.
            </p>
            <p>
              I have also used a lot of third party APIs. I’ve used Stripe for
              online payment processing, Clicksend for SMS gateway and
              Foxycart’s shopping cart integration. All my projects have been
              done with either GitHub or GitLab for source control.
            </p>
            <p>
              I’ve worked in two projects that practices Agile/Scrum
              methodology, and have been working in a team environment solving
              real life problems.
            </p>
          </div>
        </div>
        <div className="column">
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
    </div>
  );
}
