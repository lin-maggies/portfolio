import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import teamPhotoBrew from '../assets/images/teamPhotoBrew.jpg';
import photoClimb from '../assets/images/photoClimb.jpg';

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="sectionColorContainer row">
        <h1 className="sectionTitle">Coding journey</h1>
        <div className="column">
          <div className="sectionPara">
            <p>
              I had the opportunity to intern at a startup company called
              Brewenstein/Brewers Clan in early 2021, where my learning really
              started to accelerate exponentially. I’ve really enjoyed the
              journey, the problem solving, the constant learning and the
              challenges we face as a team. It’s a lot of fun. Although
              Brewenstein decided to fold their business in the end, I learnt a
              lot about what it’s like to work in a team, how time and money
              really matters in a company's operation, and how that could affect
              decisions on project planning. {''}
              <span className="pMobile">Below </span>
              {''}
              <span className="pDesk">On the right </span> is a photo of me with
              the rest of the Brewenstein team.
            </p>
            <p>
              I started working at another company called Beer Jerk later in the
              year of 2021. We worked for a product called TextBeer. This
              project had a low fidelity design process, so it has been
              interesting to be a very big part of deciding what the end product
              looks like. Also getting the full experience of what it's like to
              have a product that is launched and having real users.
            </p>
            <p>
              While working for Beer Jerk, I've met some other amazing people,
              where I got the opportunity to join another startup, This Local
              Piggy. Although I've only been in the company for a very brief
              time, being in a new team really brings new perspectives of how
              other dev teams could function. I got to be part of learning more
              of being conscious of scalability, proof of concept, exit
              strategies, etc.
            </p>
            <p>
              And in January 2022, I decided to quit my actual full time job
              that’s in the logistic industry, and to fully devote my time and
              energy in web development. As I can really see myself growing this
              career, and really enjoying the coding journey.
            </p>
          </div>
        </div>
        <div className="column">
          <img
            src={teamPhotoBrew}
            alt="Brewenstein team"
            className="photoLand"
          />
        </div>
      </div>
      <div className="sectionContainer row">
        <div className="column">
          <h1 className="sectionTitle">!Coding journey</h1>
          <div className="sectionPara">
            {' '}
            <p>
              My biggest passion right now is rock climbing. If I'm not sitting
              in front of a computer coding, there is 90% chance you'll be able
              to find me either at a climbing gym or at a crag somewhere.
            </p>
            <p>
              {''}
              <span className="pMobile">Below </span>
              {''}
              <span className="pDesk">On the right </span> is a photo of me
              trying really hard to stay on a rock wall.
            </p>
          </div>
        </div>
        <div className="column">
          <img src={photoClimb} alt="Maggie rock climbing" className="photo" />
        </div>
      </div>
    </div>
  );
}
