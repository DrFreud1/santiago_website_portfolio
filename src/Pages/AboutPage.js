import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"Skills"} span={"Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Python"} />
        <SkillsSection skill={"Flask"}/>
        <SkillsSection skill={"FastAPI"}/>
        <SkillsSection skill={"Django"}/>
        <SkillsSection skill={"Javascript/Typescript"}/>
        <SkillsSection skill={"Typescript"} />
        <SkillsSection skill={"ReactJS"}/>
        <SkillsSection skill={"numPy"}/>
        <SkillsSection skill={"Pandas"}/>
        <SkillsSection skill={"scikit-learn"}/>
        <SkillsSection skill={"TensorFlow"}/>
        <SkillsSection skill={"MATLAB"}/>
        <SkillsSection skill={"R"}/>
        <SkillsSection skill={"AWS S3, Lambda, Amplify, Sagemaker, ECS"}/>
      </div>
    </div>
  );
}

export default AboutPage;
