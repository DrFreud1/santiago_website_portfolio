import React from "react";
import about from "../img/about.png";

const handleClick = () => {
  window.open(
    "https://drive.google.com/file/d/12JNj-9BEPsyM1jY-fpaxikfopBfd16f7/view?usp=sharing"
  );
};

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          Welcome! my name is<span> Santiago! {"\u2827"}</span>
        </h4>
        <p className="about-text">
          As a Software Engineer with over 3 years of experience, I've successfully contributed to projects spanning ERP migrations, web applications, and machine learning solutions. I've led teams and worked closely with stakeholders to design and implement high-impact solutions that improved operational efficiency, increased revenue, and enhanced customer satisfaction. My technical expertise includes Python, JavaScript/TypeScript, SQL, and C++, along with frameworks such as React.js, Flask, and Django. I have a strong focus on delivering scalable, user-centric applications and have hands-on experience with AWS, Git, and machine learning models, including LLMs and OpenAI technologies.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Location</p>
            <p>Languages</p>
          </div>
          <div className="right-section">
            <p>: Santiago Pozo Ruiz</p>
            <p>: Ecuador</p>
            <p>: Native Spanish, Advanced English, Basic German</p>
          </div>
        </div>
        <button className="btn" onClick={handleClick}>
          Watch CV
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
