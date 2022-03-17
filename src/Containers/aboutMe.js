import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "../App.css";
import Navbar from "../Components/Navbar";

export default function AboutMe() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="section">
        <h1 className="pageTitle">When coding</h1>
        <p1>
          I am based in New Zealand. I started learning coding in 2020, by March
          2021 I started working as an intern in a company called Brewenstein
        </p1>
      </div>
      <div>
        <h1 className="pageTitle">When not coding</h1>
        <p1>
          My biggest passion right now is to go rock climbing every week.
          Mountain biking is also on the list of hobbies.
        </p1>
      </div>
    </div>
  );
}
