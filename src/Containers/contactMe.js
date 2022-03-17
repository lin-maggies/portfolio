import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";

export default function ContactMe() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <h1 className="pageTitle">Send me a message</h1>
        <ContactForm />
        <p1>
          Or send me an email at {""}
          <a href="mailto:lin.maggies@gmail.com">lin.maggies@gmail.com</a>
        </p1>
      </div>
    </div>
  );
}
