import React, { useState } from "react";
import ButtonCust from "../Components/pageElements/ButtonCust.js";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

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
      .then((response) => {
        if (response.ok) {
          setEmail("");
          setName("");
          setMessage("");
          onOpen(true);
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contactFormContainer">
      <form onSubmit={handleSubmit} className="contactForm">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          placeholder="John.doe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label>Message</label>
        <input
          type="text"
          name="message"
          placeholder="Today's weather is great"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />
        <div>
          <ButtonCust
            type="submit"
            children="Send message"
            border="1px"
            borderColor="#1a27c9"
          />
        </div>
      </form>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mr="auto" ml="auto">
            Thank you for your message!
          </ModalHeader>
        </ModalContent>
      </Modal>
    </div>
  );
}
