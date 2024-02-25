import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="card">
      {isOpen && <Avatar />}
      <div className="data">
        <Intro />
        <SkillList />
        <br />
        <FooterButton onButtonPress={setIsOpen} isOpen={isOpen} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://media.licdn.com/dms/image/D4D03AQF9jFNXiYbkCg/profile-displayphoto-shrink_800_800/0/1689098707154?e=2147483647&v=beta&t=B-EeAtk6UxIrlEdZMD7b6i3P2FZvVpkLmgdPuaIkmHg"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Shouvik Kumar Chakraborty</h1>
      <p>Developer aspiring to be a good one</p>
    </div>
  );
}

function SkillList() {
  const [skills, setSkills] = useState(["HTML", "CSS", "JS"]);
  let [textValue, setTextValue] = useState("");

  function handleDeleteSkill(skillDeleted) {
    setSkills((skills) => skills.filter((skill) => skill != skillDeleted));
  }
  return (
    <>
      <input
        value={textValue}
        type="text"
        onChange={(e) => setTextValue(e.target.value)}
      />
      <br />
      <br />
      <button
        className="skill"
        style={{
          backgroundColor: "lightgreen",
        }}
        onClick={() => {
          setSkills((s) => [...s, textValue]);
          setTextValue("");
        }}
      >
        <b>ADD SKILL</b>
      </button>
      <div className="skill-list">
        {skills.map((skill) => (
          <Skill
            skillName={skill}
            key={skill}
            handleDeleteSkill={handleDeleteSkill}
          />
        ))}
      </div>
      <br />
      <button
        className="deleteAllSkill"
        style={{
          backgroundColor: "maroon",
        }}
        onClick={() => {
          if (window.confirm("Sure you want to delete it?"))
            setSkills((skills) => []);
        }}
      >
        <b>DELETE ALL SKILLS</b>
      </button>
    </>
  );
}

function Skill({ skillName, handleDeleteSkill }) {
  return (
    <div className="skill" style={{ backgroundColor: "black" }}>
      {skillName}
      <DeleteSkillButton
        handleDeleteSkill={handleDeleteSkill}
        skillName={skillName}
      />
    </div>
  );
}

function DeleteSkillButton({ handleDeleteSkill, skillName }) {
  return (
    <div>
      <button
        style={{ backgroundColor: "white" }}
        onClick={() => {
          handleDeleteSkill(skillName);
        }}
      >
        ❌
      </button>
    </div>
  );
}

function FooterButton({ isOpen, onButtonPress }) {
  return (
    <button
      style={{
        backgroundColor: isOpen ? "red" : "green",
      }}
      className="skill"
      onClick={() => {
        onButtonPress((s) => !s);
      }}
    >
      <b>{isOpen ? "Hide🔒" : "Show🔓"}</b>
    </button>
  );
}
export default App;
