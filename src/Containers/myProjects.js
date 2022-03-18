import React, { useState, useEffect, useContext } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import "../App.css";
import Navbar from "../Components/Navbar";

export default function MyProjects() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="sectionColorContainer">
        <h1 className="sectionTitle">Beer Jerk/TextBeer</h1>
        <div className="sectionPara">
          <p>Tools: React, Javascript, AWS, CSS, HTML</p>
          <p>Sep 2021 - Present</p>
          <p>
            In this project, we used third party API's such as Stripe for
            payments, and Clicksend for SMS services. We used AWS to host our
            website on Amplify, and used Lambda and API gateway for our back-end
            environment. I also did the flow of setting up email services using
            AWS SES, including setting up the email templates in JSON as well.
          </p>
          <a href="https://www.textbeer.co.nz/">
            {""}
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
      <div className="sectionContainer">
        <h1 className="sectionTitle">Brewenstein</h1>
        <div className="sectionPara">
          <p>Tools: React, Typescript, CSS, HTML</p>
          <p>Mar 2021 - Sep 2021</p>
          <p>
            First time working in a development team with product owners and
            other senior developers, also first time to be in an agile/scrum
            project. This is when I first started to see what it is like to work
            on a real life project in the web development industry. Also the
            first time when a single page waitlist page I coded was actually
            live on the internet, and being used to collect valuable data for
            the company.
          </p>
        </div>
      </div>
      <div className="sectionColorContainer">
        <h1 className="sectionTitle">Maggie's Portfolio</h1>
        <div className="sectionPara">
          <p>Tools: React, Javascript, AWS, CSS, HTML</p>
          <p>Mar 2022</p>
          <p>
            The biggest lesson here is suddenly realising how hard UI designers'
            jobs are. Choosing colors and figuring out how to best present the
            website is definitely not as simple as it seems. But I also really
            enjoyed just playing around with this website, trying things out.
            This is the first time I’ve set up a contact me form, and the moment
            when it started working was just amazing.
          </p>
          <a href="https://www.lin-maggies.com/projects">
            {""}
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
      <div className="sectionContainer">
        <h1 className="sectionTitle">This Local Piggy</h1>
        <div className="sectionPara">
          <p>Tools: React, Typescript</p>
          <p>Feb 2022 - Mar 2022</p>
          <p>
            I only participated in this project for a brief time, but learnt
            alot about testing api with Postman and writing code to incorporate
            token-based authentiaction. We were integrating a shopping cart to
            an existing Webflow grocery shop. I was building the part where,
            with a hard coded product and customer detail already in the code,
            to have the ability to populate the cart and proceed to checkout
            using Foxycart's APIs.
          </p>
        </div>
      </div>
    </div>
  );
}
