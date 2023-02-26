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
          My name<span> Santiago! {"\u2827"}</span>
        </h4>
        <p className="about-text">
          Software Engineer, also interested in Machine Learning Engineering. I
          have experience with software development using best practices such as
          SOLID, Clean Code, TDD. Besides, I have research experience in signal
          processing, image processing and their corresponding applications to
          machine learning. I also have industry experience developing machine
          learning models, and their corresponding deployment into production
          environments. My career goal is to help provide software solutions to
          make people’s life better {"\u2727"}
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
            <p>: 25</p>
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
