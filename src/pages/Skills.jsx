import React from "react";
import SkillsCategory from "../components/SkillsCategory";
import "../styles/Skills.css";
import { IoDiamondOutline } from "react-icons/io5";

const Skills = () => {
  const topSkills = [
    "JavaScript",
    "Java",
    "Python"
  ];
  const programmingLanguages = [
    "JavaScript",
    "Java",
    "Python",
    "SQL",
    "C/C++",
    "PHP",
  ];

  const technologiesFrameworks = [
    "React.js",
    "React Native",
    "Node.js/Express.js",
    "Django",
    "WordPress",
    "MongoDB",
    "Xampp",
    "Bootstrap",
    "Tailwind CSS",
  ];

  const developerTools = [
    "Git",
    "GitHub",
    "Android Studio",
    "Postman",
  ];
  const shoftSkills = [
    "Communication",
    "Analytical Thinking",
    "Teamwork",
  ];

  const IOT = [
    "Ardunino IDE",
    "Ardunino Nano",
    "Esp32",
    "Esp8266",
  ];
  const platforms = [
    "Windows",
    "Linux",
  ];

  return (
    <section className="skills-section">
      <SkillsCategory title="Top Skills" skills={topSkills} />
      <SkillsCategory title="Programming Languages" skills={programmingLanguages} />
      <SkillsCategory title="Technologies/Frameworks" skills={technologiesFrameworks} />
      <SkillsCategory title="Developer Tools" skills={developerTools} />
      <SkillsCategory title="Soft Skills" skills={shoftSkills} />
      <SkillsCategory title="IOT" skills={IOT} />
      <SkillsCategory title="Platforms" skills={platforms} />
    </section>
  );
};

export default Skills;
