import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "../App.css";
import Navbar from "../Components/Navbar";
import router from "../routes/router.js";

export default function ContactMe() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <h1>Contact me</h1>
      <p>blahhhhh</p>
      <form action="" onSubmit={router}>
        <div>
          <p>Email</p>
          <input type="text" name="emailTo" required />
          <p>Name</p>
          <input type="text" name="name" required />
          <p>message</p>
          <input type="text" name="message" required />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
