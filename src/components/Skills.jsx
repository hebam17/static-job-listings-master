import React from "react";
import Chip from "./Chip";

const Skills = ({ card }) => {
  const { role, level, languages, tools } = card;
  return (
    <div className="skills">
      <Chip myClass="skill" data={role} />
      <Chip myClass="skill" data={level} />
      {languages.map((lang) => (
        <Chip myClass="skill" key={lang} data={lang} />
      ))}
      {tools.map((tool) => (
        <Chip myClass="skill" key={tool} data={tool} />
      ))}
    </div>
  );
};

export default Skills;
