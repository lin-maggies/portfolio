import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "../App.css";
import Navbar from "../Components/Navbar";

export default function MyProjects() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <h1>My projects</h1>
      <p>blahhhhh</p>
    </div>
  );
}
