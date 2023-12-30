import React from "react";
import CoverComponent from "../../components/coverComponent";
import ContactDetails from "./Components/ContactDetails";
import ContactForm from "./Components/ContactForm";
import FAQ from "./Components/FAQ";
import "./Contact.css";

function ContactScreen() {
  return (
    <div>
      <CoverComponent
        image={"url(images/cover/contact_us.png)"}
        label={["SPEAK", "WITH US"]}
      />
      
      <img src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYSivPKFqfZiv1mJxs6x20BOkYSelu8uAGmWlie91T7-SoSoRTwqI-hxMLvwg-16X7pne6ccLlHiVlR6DEM9SGYL1TvOEg=w3300-h1964" alt="drive image"/>
      <div className="contact-maincontainer">
        <div className="contact-maindesc">
          Feel free to contact us with questions via our form below and we will
          get back to you as soon as possible. Visit our Caesarstone
          Distribution Centers here. For Media Relations inquiries, please click
          here.
        </div>
      </div>
      <ContactForm />
      <ContactDetails />
      <FAQ />
    </div>
  );
}

export default ContactScreen;
