import React, { useEffect } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import '../App.css';
import Navbar from '../Components/Navbar';
import ProjectModal from '../Components/ProjectModal';
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
  seeMore,
} from '../assets/images';

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
      <div className="sectionColorContainer row" id="gxh">
        <h1 className="sectionTitleProject">Green Cross Health</h1>
        <p>April 2022 - March 2024</p>
        <p>
          Tools: PHP, MS SQL, MySQL, Microsoft AX2012, Microsoft D365 F&O,
          PowerBI
        </p>
        <div className="sectionPara">
          <h2>Project setup:</h2>
          <p>
            We have an ERP system we use for the finance department that is then
            connected to different accounting systems, approval systems and our
            own internal LAMP stack websites. Some of the systems are connected
            via API, some are connected directly to the SQL database. All these
            work together to provide financial reports and reconciliation
            reports.
          </p>
          <h2>My contribution:</h2>
          <ul className="bullet">
            <li>
              Supported ERP system migration from Microsoft AX2012 to D365 F&O,
              which involves database migration and rebuilding integration with
              other existing systems
            </li>
            <li>LAMP stack website maintenance and feature adding</li>
            <li>
              Supported third party API integration with internal LAMP stack
              website for financial reports and reconciliations
            </li>
            <li>
              SQL database maintenance, query writing for report and feature
              requests
            </li>
            <li>PowerBI report building/maintaining with MS SQL data source</li>
            <li>
              System configuration and maintenance for third party accounting
              and ERP system
            </li>
          </ul>
          <h2>My learning:</h2>
          <p>
            During my 2 years at Green Cross Health, I have learnt and developed
            a lot of different skills. For soft skills, predominantly people
            skills, time management skills, and the ability to adapt and learn
            things that I’ve never learnt before.
          </p>
          <p>
            As our team constantly interacts with a lot of different
            departments, people skills were a very important part of my role.
            Being able to communicate with other developers, accountants or even
            pharmacists at the pharmacies was something I did on a daily basis.
          </p>
          <p>
            While we were working on the ERP system migration and rebuilding all
            the integration between the new ERP system and all our other
            existing systems, suddenly the ability to time management well was
            extra valuable. As there was so much to do everyday, it was really
            important to be able to try my best at focusing on priorities for
            the project and still fit in all the everyday tasks.
          </p>
          <p>
            There were quite a few different things that I also needed to learn
            from the ground up. Our team supported almost all the finance
            systems the finance department used. In order to communicate with
            the accountants or support officers successfully to fix issues or
            add new features for them, it was important I had a basic
            understanding of how finance works.
          </p>
          <p>
            In terms of hard skills, I have learnt a lot of new things and also
            improved on my coding skills during the 2 years. I was improving a
            lot mostly with PHP and SQL. I also picked up how to create reports
            using PowerBI and was able to maintain and troubleshoot problems for
            the finance team using AX2012 and D365.
          </p>
          <p>
            Our internal websites that the finance team uses for reports and
            some data control are LAMP stack. I was in charge of a lot of the
            feature adding and maintenance of the websites and creating new
            reports for the team. A lot of the time we had to connect to third
            party API’s to retrieve data or convert third party XML files to
            then present to the finance team for reconciliation purposes.{' '}
          </p>
        </div>
      </div>
      <div className="sectionContainer row" id="beerjerk">
        <h1 className="sectionTitleProject">Beer Jerk - TextBeer</h1>
        <p>Sep 2021 - May 2022</p>
        <p>Tools: React, Javascript, AWS, CSS, HTML, GitLab</p>
        <div className="column">
          <div className="sectionPara">
            <h2>Project setup:</h2>
            <p>
              The website was hosted on AWS Amplify. The front-end code was
              built in React. The back-end environment utilises various AWS
              cloud services, such as Lambda, API Gateway, DynamoDB, Cognito,
              SES and S3. Stripe was used for payment processing, ClickSend was
              used for SMS services.
            </p>
            <h2>My contribution:</h2>
            <ul className="bullet">
              <li>
                Set up transactional emails - from HTML email template to
                backend code and SES system setup
              </li>
              <li>Front-end web development on website using React</li>
              <li>
                Back-end web development using AWS Lambda, API Gateway,
                DynamoDB, Cognito and S3
              </li>
              <li>Agile/SCRUM development using ClickUp</li>
              <li>Facilitate multiple sales during beta launch</li>
              <li>Utilise problem management to mitigate issues</li>
            </ul>
            <h2>My learning:</h2>
            <p>
              During this project, the most important thing I’ve learnt was
              problem management. We’ve had small and large scales of problems
              that needed to be solved. Some problems were time sensitive that
              needed to be fixed before a set amount of time. Learning to
              quickly and effectively manage these problems was very important.
              Also finding ways to monitor errors and knowing what to look for
              when errors occur is also an invaluable experience.
            </p>
            <p>
              As our project heavily relied on AWS’ various cloud services, I
              got very familiar with quite a few of the services. I have also
              learnt how to set up an HTML email template, which was a lot more
              difficult and different than I thought it would be.
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
            paddingX="0"
            children={
              <img
                src={text1}
                alt="TextBeer website"
                className="photoProj"
                onMouseOver={(e) => (e.currentTarget.src = seeMore)}
                onMouseOut={(e) => (e.currentTarget.src = text1)}
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
      <div className="sectionColorContainer row" id="brewenstein">
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
            paddingX="0"
            children={
              <img
                src={brew1}
                alt="Brewenstein website"
                className="photoProjYellowBg"
                onMouseOver={(e) => (e.currentTarget.src = seeMore)}
                onMouseOut={(e) => (e.currentTarget.src = brew1)}
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
      <div className="sectionContainer row" id="portfolio">
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
            paddingX="0"
            children={
              <img
                src={port1}
                alt="Portfolio website"
                className="photoProj"
                onMouseOver={(e) => (e.currentTarget.src = seeMore)}
                onMouseOut={(e) => (e.currentTarget.src = port1)}
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
      <div className="sectionColorContainer">
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
