import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box, Link } from "@chakra-ui/react";
import "../App.css";
import Navbar from "../Components/Navbar";
import teamPhotoBrew from "../assets/images/teamPhotoBrew.png";
import photoClimb from "../assets/images/photoClimb.jpg";

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="sectionColorContainer row">
        <div className="column">
          <h1 className="sectionTitle">Coding journey</h1>
          <p>
            I started my coding journey in 2020. I've always been very fond of
            the whole programming world. I had the opportunity to do a computer
            science 101 course back in university, which I thought was
            fascinating, but I never took the plunge to dive into the coding
            world back then. Then I finally decided 2020 is the time to start
            making changes to my life.
          </p>
          <p>
            I had the opportunity to intern at a company called
            Brewenstein/Brewers Clan in early 2021, where the learning really
            accelerated exponentially once I started interning. I’ve really
            enjoyed the journey, the problem solving, the constant learning and
            challenges we face as a team. It’s a lot of fun. Although
            Brewenstein decided to fold their business in the end, I learnt a
            lot about what it’s like to work in a team, having real life
            problems to solve. On the right is a photo of me with the rest of
            the Brewenstein team.
          </p>
          <p>
            I started working at another company called Beer Jerk later in the
            year of 2021. We worked for a product called TextBeer. This project
            had a low fidelity design process, so it has been interesting to be
            a very big part of deciding what the end product looks like. Also
            getting the full experience of what it's like to have a live
            product.
          </p>
          <p>
            While working for Beer Jerk, I've met some other amazing people,
            where I got the opportunity to join their startup, This Local Piggy.
            Although I've only been in the company for a very brief time, being
            in a new team just brings new perspectives of how other dev teams
            could function. I got to be part of learning more of being conscious
            of scalability, proof of concept, exit strategies, etc.
          </p>
          <p>
            And in January 2022, I decided to quit my other full time job that’s
            in the logistic industry, and to fully devote my time and energy in
            web development. As I can really see myself growing this career, and
            really enjoying the journey.
          </p>
        </div>
        <div className="column">
          <img
            src={teamPhotoBrew}
            alt="Brewenstein team photo"
            className="photo"
          />
        </div>
      </div>
      <div className="sectionContainer row">
        <div className="column">
          <h1 className="sectionTitle">!Coding journey</h1>
          <p>
            My biggest passion right now is rock climbing. If I'm not sitting in
            front of a computer coding, there is 90% chance you'll be able to
            find me either at a climbing gym or at a crag somewhere.
          </p>
          <p>Below is a photo of me trying really hard to hug a rock wall.</p>
        </div>
        <div className="column">
          <img
            src={photoClimb}
            alt="Maggie's climbing photo"
            className="photo"
          />
        </div>
      </div>
    </div>
  );
}
