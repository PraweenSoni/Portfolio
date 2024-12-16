import React from "react";
import SkillsCategory from "./SkillsCategory";
import "./Skills.css";

const Skills = () => {
  const programmingLanguages = [
    "JavaScript",
    "Java",
    "Python",
    "C/C++",
    "PHP",
    "SQL",
  ];

  const technologiesFrameworks = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
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

  const platforms = [
    "Windows",
    "Linux",
  ];

  return (
    <section className="skills-section">
      <SkillsCategory title="Programming Languages" skills={programmingLanguages} />
      <SkillsCategory title="Technologies/Frameworks" skills={technologiesFrameworks} />
      <SkillsCategory title="Developer Tools" skills={developerTools} />
      <SkillsCategory title="Soft Skills" skills={shoftSkills} />
      <SkillsCategory title="Platforms" skills={platforms} />
    </section>
  );
};

export default Skills;
