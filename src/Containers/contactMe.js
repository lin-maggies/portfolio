import React, { useState } from 'react';
import { Text, Button, Box, Link } from '@chakra-ui/react';
import '../App.css';
import Navbar from '../Components/Navbar';

export default function ContactMe() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const endpoint =
      'https://1gmprjswn1.execute-api.ap-southeast-2.amazonaws.com/default/sendContactEmail';

    const body = JSON.stringify({
      senderName: name,
      senderEmail: email,
      message: message,
    });

    const requestOptions = {
      method: 'POST',
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
      <div className="body">
        <h1 className="pageTitle">Send me a message</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <label>Message</label>
          <input
            type="text"
            name="message"
            placeholder="Enter message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p1>
          Or send me an email at {''}
          <a href="mailto:lin.maggies@gmail.com">lin.maggies@gmail.com</a>
        </p1>
      </div>
    </div>
  );
}
