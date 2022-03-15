import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="body">
      <Navbar />
      <h1 className="pageTitle">Home</h1>
    </div>
  );
}
