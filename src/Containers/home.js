import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div>
        <div className="section">
          <h1 className="pageTitle">Hi, I'm Maggie Lin.</h1>
          <div className="pagePara">
            <p1>I'm a web developer.</p1>
          </div>
        </div>
        <h1 className="pageTitle">My projects</h1>
        <div className="pagePara">
          <Link to="/projects">Click here to see more</Link>
        </div>
        <div className="section">
          <h1 className="pageTitle">My skills</h1>
          <div className="pagePara">
            <Link to="/skills">Click here to see more</Link>
          </div>
        </div>

        <h1 className="pageTitle">Contact me</h1>
        <ContactForm />
      </div>
    </div>
  );
}
