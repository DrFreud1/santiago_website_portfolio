import React from "react";
import ContactItem from "../Components/ContactItem";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"Where can you reach me?"} span={"Contact Me!"} />
      </div>
      <div className="ContactPage">
        <div className="contact-sect">
          <ContactItem
            icon={email}
            text1={"santiagopozoruiz@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Quito, Ecuador"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
