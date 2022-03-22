import React, { useEffect } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import "../App.css";
import Navbar from "../Components/Navbar";
import ProjectModal from "../Components/ProjectModal";
import {
  brew1,
  brew2,
  brew3,
  brew4,
  brew5,
  brew6,
  brew7,
  brew8,
  text1,
  text2,
  text3,
  text4,
  text5,
  port1,
  port2,
  port3,
} from "../assets/images";

export default function MyProjects() {
  const brewImageArray = [
    brew1,
    brew2,
    brew3,
    brew4,
    brew5,
    brew6,
    brew7,
    brew8,
  ];
  const textImageArray = [text1, text2, text3, text4, text5];
  const portImageArray = [port1, port2, port3];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="sectionColorContainer row">
        <h1 className="sectionTitleProject">Beer Jerk - TextBeer</h1>
        <p>Sep 2021 - Present</p>
        <p>Tools: React, Javascript, AWS, CSS, HTML, GitLab</p>
        <div className="column">
          <div className="sectionPara">
            <h2>Project setup:</h2>
            <p>
              In this project, we used third party API's such as Stripe for
              payments, and Clicksend for SMS services. We used AWS to host our
              website on Amplify, and used Lambda and API gateway for our
              back-end environment. I also did the flow of setting up email
              services using AWS SES, including setting up the email templates
              in JSON as well.
            </p>
            <h2>My contribution:</h2>
            <ul className="bullet">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <h2>My learning:</h2>
            <p>
              In this project, we used third party API's such as Stripe for
              payments, and Clicksend for SMS services. We used AWS to host our
              website on Amplify, and used Lambda and API gateway for our
              back-end environment. I also did the flow of setting up email
              services using AWS SES, including setting up the email templates
              in JSON as well.
            </p>
            <a className="projLinks" href="https://www.textbeer.co.nz/">
              https://www.textbeer.co.nz/
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
        <div className="column">
          <ProjectModal
            images={textImageArray}
            title="Beer Jerk - TextBeer"
            children={
              <img
                src={text1}
                alt="TextBeer website"
                className="photoProjYellowBg"
              />
            }
          />
          <div className="buttonSpacing">
            <ProjectModal
              images={textImageArray}
              title="Beer Jerk - TextBeer"
              children="Click to see more images of website"
              border="1px"
              borderColor="#1a27c9"
            />
          </div>
        </div>
      </div>
      <div className="sectionContainer row">
        <h1 className="sectionTitleProject">Brewenstein</h1>
        <p>Mar 2021 - Sep 2021</p>
        <p>Tools: React, Typescript, CSS, HTML, GitLab, Agile/SCRUM</p>
        <div className="column">
          <div className="sectionPara">
            <h2>Project setup:</h2>
            <p>
              A startup company creating a webapp to teach homebrewers how to
              brew beer without fail. The front-end code was in React, back-end
              code was in Java. This was a high fidelity project with a team of
              two front-end web developers, one back-end developer and a product
              owner. We had an Agile/SCRUM project environment where we used
              Jira for project planning.
            </p>
            <h2>My contribution:</h2>
            <ul className="bullet">
              <li>
                Made a single page waitlist page on React that enabled 50 keen
                homebrewers to sign up
              </li>
              <li>General front-end development and design conformance</li>
              <li>Integrated REST API in front-end code</li>
              <li>Created an Email template in HTML</li>
              <li>
                Worked in Agile/SCRUM project environment, familiar with the
                various rituals
              </li>
              <li>Used GitLab for source control</li>
            </ul>
            <h2>My learning:</h2>
            <p>
              I wanted to learn more about what it’s like to work in a web
              development team, and what it is like to work on a real life
              project. Because of that, I decided to intern at this startup
              company, which proved to be a brilliant idea. I learnt not only
              about coding, but also what is practical to achieve or not given
              the time and budget. Just because something can be done is not
              enough, if it blows out project time and budget, then it’s not
              very realistic. I also improved on gauging how long it would take
              me to do tasks. Initially I was very optimistic on goals, then I
              quickly learnt the ninety-ninety rule.
            </p>
          </div>
        </div>
        <div className="column">
          <ProjectModal
            images={brewImageArray}
            title="Brewenstein"
            children={
              <img
                src={brew1}
                alt="Brewenstein website"
                className="photoProj"
              />
            }
          />
          <div className="buttonSpacing">
            <ProjectModal
              images={brewImageArray}
              title="Brewenstein"
              children="Click to see more images of website"
              border="1px"
              borderColor="#1a27c9"
            />
          </div>
        </div>
      </div>
      <div className="sectionColorContainer row">
        <h1 className="sectionTitleProject">Maggie's Portfolio</h1>
        <p>Mar 2022</p>
        <p>Tools: React, Javascript, AWS, CSS, HTML, GitHub</p>
        <div className="column">
          <div className="sectionPara">
            <h2>Project setup:</h2>
            <p>
              This was a solo project. The website is hosted on AWS Amplify. The
              front-end is built in React, the back-end code is built with
              Lambda and API Gateway. Front-end library Chakra-UI was used for
              some of the website components. AWS SES was used to set up Email
              services for the contact form in the website.
            </p>
            <h2>My contribution:</h2>
            <ul className="bullet">
              <li>Bought domain name and hosted it on AWS Amplify </li>
              <li>Created Email template on AWS SES </li>
              <li>Created contact form that uses HTTP API </li>
              <li>
                Made website responsive to different screen size with media
                query
              </li>
              <li>
                Created different routes for the various pages of the website
              </li>
              <li>Used GitHub for source control</li>
              <li>
                Used Chakra-UI's modal component to build a modal photo gallery
                for project photos
              </li>
            </ul>

            <h2>My learning:</h2>
            <p>
              The biggest learning here is definitely realising how hard UI
              designers’ jobs are. Choosing what colors, fonts or layouts to use
              so that the website is effective and aesthetically appealing is
              not easy at all. This is the first website I’ve made entirely by
              myself, I’ve definitely really enjoyed setting this up. Getting
              the contact me page working was very exciting. There’s now a
              website that can send direct messages to my personal email! From
              this project, I’ve learnt how important it is to have the initial
              environment setup right, the rest just naturally falls into place.
            </p>
            <a
              className="projLinks"
              href="https://www.lin-maggies.com/projects"
            >
              https://www.lin-maggies.com/projects
              <ExternalLinkIcon />
            </a>
            <a
              className="projLinks"
              href="https://github.com/lin-maggies/portfolio"
            >
              https://github.com/lin-maggies/portfolio
              <ExternalLinkIcon />
            </a>
          </div>
        </div>

        <div className="column">
          <ProjectModal
            images={portImageArray}
            title="Portfolio"
            children={
              <img
                src={port1}
                alt="Portfolio website"
                className="photoProjYellowBg"
              />
            }
          />
          <div className="buttonSpacing">
            <ProjectModal
              images={portImageArray}
              title="Portfolio"
              children="Click to see more images of website"
              border="1px"
              borderColor="#1a27c9"
            />
          </div>
        </div>
      </div>
      <div className="sectionContainer">
        <h1 className="sectionTitleProject">This Local Piggy</h1>
        <p>Feb 2022 - Mar 2022</p>
        <p>Tools: React, Typescript, GitHub</p>
        <div className="sectionPara">
          <h2>Project setup:</h2>
          <p>
            This Local Piggy's online shop that is set up on Webflow needs to
            migrate their shopping cart to FoxyCart. By using FoxyCart's API to
            build a shopping cart in React, which we can then have it hosted
            statically within Webflow for users to checkout their cart.
          </p>
          <h2>My contribution:</h2>
          <ul className="bullet">
            <li>
              Tested FoxyCart’s configuration settings to see if FoxyCart can be
              customised to match This Local Piggy’s branding
            </li>
            <li>
              Did proof of concept with Postman that FoxyCart’s API can be
              populated with This Local Piggy’s product
            </li>
            <li>Built shopping cart on React with hardcoded product details</li>
            <li>Used GitHub for version control</li>
          </ul>
          <h2>My learning:</h2>
          <p>
            During this time, I got more familiar with Postman, the various
            settings to be able to test APIs, as it was faster more convenient
            to test proof of concept with Postman. This is the first time I had
            to set up token-based authentication that requires the access token
            refreshed every 2 hours. This is also the first time I’ve
            encountered where the API documentation doesn’t come in the
            languages I am familiar with. Learning how to cope with these things
            have definitely been very helpful, I now have a better understanding
            with REST API, Postman, token-based authentication.
          </p>
        </div>
      </div>
    </div>
  );
}
