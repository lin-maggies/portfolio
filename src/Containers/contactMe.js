import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";

export default function ContactMe() {
  return (
    <div>
      <Navbar />
      <div className="sectionColorContainer">
        <h1 className="sectionTitle">Send me a message</h1>
        <ContactForm />
        <p className="sectionPara">
          Or send me an email at {""}
          <a href="mailto:lin.maggies@gmail.com">lin.maggies@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
