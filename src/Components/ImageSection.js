import React from "react";
import about from "../img/about.png";

const handleClick = () => {
  window.open(
    "https://drive.google.com/file/d/1bTu7o5UUhyPJFDm_x68iFfZYf80Rho7d/view?usp=sharing"
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
        I am a Software Engineer, and I am also passionate about Machine Learning. I have more than two years of experience with software development using best practices such as SOLID, Clean Code, TDD. Besides, I have research and industry experience developing machine learning models, and their corresponding deployment into production environments. Most of my experience comes from working with Python and JavaScript programming languages.
        My motivation is to provide software solutions to make people’s lives better. I am eager to continue learning from new experiences and contributing to more interesting projects. {"\u2727"}
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
