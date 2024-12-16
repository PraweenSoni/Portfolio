import React from "react";
import "./SkillsCategory.css";

const SkillsCategory = ({ title, skills }) => {
  return (
    <div className="skills-category">
      <h4>{title}</h4>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCategory;
