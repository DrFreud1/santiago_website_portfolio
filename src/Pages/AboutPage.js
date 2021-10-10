import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle
        title={"Machine Learning &  Data Science"}
        span={"Machine Learning &  Data Science"}
      />
      <div className="skillsContainer">
        <SkillsSection
          skill={"Python core"}
          progress={"90%"}
          width={"90%"}
        />
        <SkillsSection skill={"numPy"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Pandas"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"scikit-learn"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"TensorFlow"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Selenium"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"MATLAB"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"R"} progress={"80%"} width={"80%"} />
      </div>

      <Tittle
        title={"Software Development Skills"}
        span={"Software Development Skills"}
      />
      <div className="skillsContainer">
        <SkillsSection skill={"Python"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"Javascript"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Typescript"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"React Js"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Angular"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Node Js"} progress={"60%"} width={"60%"} />
      </div>

      {/* <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div> */}
    </div>
  );
}

export default AboutPage;
