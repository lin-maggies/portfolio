import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import "../App.css";
import Navbar from "../Components/Navbar";

export default function ContactMe() {
  const navigate = useNavigate();

  // const form = document.querySelector("form");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const endpoint =
      "https://1gmprjswn1.execute-api.ap-southeast-2.amazonaws.com/default/sendContactEmail";

    const body = JSON.stringify({
      senderName: name,
      senderEmail: email,
      message: message,
    });

    const requestOptions = {
      method: "POST",
      body,
    };

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <h1>Contact me</h1>
      <p>blahhhhh</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={email}
            required
          />
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleNameChange}
            value={name}
            required
          />
          <label>Message</label>
          <input
            type="text"
            name="message"
            placeholder="Enter message"
            onChange={handleMessageChange}
            value={message}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
