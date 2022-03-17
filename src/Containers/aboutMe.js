import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "../App.css";
import Navbar from "../Components/Navbar";
import teamPhotoBrew from "../assets/images/teamPhotoBrew.png";

export default function AboutMe() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="sectionColorContainer">
        <h1 className="sectionTitle">When coding</h1>
        <p1>
          I am based in New Zealand. I started learning coding in 2020, by March
          2021 I started working as an intern in a company called Brewenstein
        </p1>
        <img src={teamPhotoBrew} alt="Brewenstein team photo" />
      </div>
      <div className="sectionContainer">
        <h1 className="sectionTitle">When not coding</h1>
        <p1>
          My biggest passion right now is to go rock climbing every week.
          Mountain biking is also on the list of hobbies.
        </p1>
      </div>
    </div>
  );
}
