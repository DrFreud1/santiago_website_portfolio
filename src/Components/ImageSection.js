import React from "react";
import about from "../img/about.png";

const handleClick = () => {
  window.open(
    "https://drive.google.com/file/d/1FhnUaRV6UMyCDi4fxEffMcU12OMzJ3e7/view?usp=sharing"
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
          I am<span> Santiago! {'\u2827'}</span>
        </h4>
        <p className="about-text">
          Software developer, machine learning and data
          science enthusiast. Skilled in several programming languages and machine
          learning, and data science tools. Contact me if you have an
          interesting project to collaborate with! {"\u2727"}
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
          </div>
          <div className="right-section">
            <p>: Santiago Pozo Ruiz</p>
            <p>: 24</p>
            <p>: Ecuadorian</p>
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
