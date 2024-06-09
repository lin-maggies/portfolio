import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import {
  awsLogo,
  cssLogo,
  gitLogo,
  htmlLogo,
  jsLogo,
  reactLogo,
  phpLogo,
  sqlLogo,
} from '../assets/images';

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
              My main expertise now is PHP and SQL. Mainly to use SQL to query
              the database, then to use PHP to present the query results on our
              LAMP website for users.
            </p>
            <p>
              I am also familiar with using React, Javascript, HTML and CSS to
              build responsive web apps. Hosting the websites on AWS’ cloud
              services, where I utilise AWS’ Lambda, API Gateway, SES, Cognito,
              S3 etc.
            </p>
            <p>
              I’ve also been involved in converting third party XML files to
              input the data to our database. Utilised multiple third party APIs
              for various processes. I’ve used Xero’s API to retrieve/update
              data, Stripe for online payment processing, Clicksend for SMS
              gateway and Foxycart’s shopping cart integration.
            </p>
            <p>
              I’ve had a few projects that practiced Agile/Scrum methodology. I
              am also experienced in problem management and time management from
              all my previous projects. I’m used to going through the tasks at
              hand for the coming week or two, and try to give a realistic
              estimate on the amount of time it will take to complete the tasks.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="flexContainer">
            <img src={phpLogo} alt="PHP logo" className="skillLogo" />
            <img src={sqlLogo} alt="SQL logo" className="skillLogo" />
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
