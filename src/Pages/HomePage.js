import React from "react";
import { SocialIcon } from "react-social-icons";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Santiago! {"\u2827"} </span>
          Nice to meet you
        </h1>
        <p className="h-sub-text">
          Interested in software development, machine learning and data enginering. Do you have an interesting project? Reach me!{" "}
          {"\u2728"}
        </p>
        <div className="icons">
          <SocialIcon
            className="icon-holder"
            target="_blank"
            fgColor="#fff"
            url="https://github.com/bytesantiago"
          />
          <SocialIcon
            className="icon-holder"
            target="_blank"
            fgColor="#fff"
            url="https://www.linkedin.com/in/santiago-pozo-ruiz"
          />
          <SocialIcon
            className="icon-holder"
            target="_blank"
            fgColor="#fff"
            url="https://twitter.com/bytesantiago"
          />
        </div>
      </header>
    </div>
  );
}

export default HomePage;
