import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"Where can you find me"} span={"Contact"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7976688023186!2d-78.48433408516095!3d-0.18434759986548968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a83f581fb43%3A0xec77cdadf8bd4432!2sioet%20Ecuador%20S.A.!5e0!3m2!1sen!2sec!4v1633914105781!5m2!1sen!2sec"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text1={"+593 994449269"} title={"Phone"} />
          <ContactItem
            icon={email}
            text1={"santi_pozoruiz@hotmail.com"}
            text2={"santiago.pozo@ioet.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Edificio Shyris Center, Av. de los Shyris, Quito 170135"}
            text2={"Ecuador"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
