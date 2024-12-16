import React, { useState } from "react";
// import reactLogo from './assets/react.svg'
import myPic from "/pic.png";
import Sections from "./components/sections";
import "./App.css";

// Icons
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdMailUnread } from "react-icons/io";
import { TbFileDownload } from "react-icons/tb";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <>
      <ProfileCard />
      <div>
        <Sections activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </>
  );
}

const ProfileCard = () => {
  return (
    <div className="profilecard">
      <div className="profile">
        <img src={myPic} className="MyPic" alt="My Picture" />
        <div>
          <h2>Praween Soni</h2>
          <h4>Web Developer</h4>
          <div className="icons">
            <a
              title="Instagram"
              aria-label="Instagram"
              href="https://www.instagram.com/praween_123_pks/"
              target="_blank"
              className="insta"
            >
              <FaInstagram />
            </a>
            <a
              title="Linkedin"
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/praweensoni/"
              target="_blank"
              className="linkdin"
            >
              <FaLinkedin />
            </a>
            <a
              title="Github"
              aria-label="Github"
              href="https://github.com/PraweenSoni"
              target="_blank"
              className="github"
            >
              <FaGithub />
            </a>
            <a
              title="Leetcode"
              aria-label="Leetcode"
              href="https://leetcode.com/u/praweensoni/"
              target="_blank"
              className="leetcode"
            >
              <SiLeetcode />
            </a>
            <a
              title="Mail"
              aria-label="Mail"
              href="mailto:ask.psoni@gmail.com"
              className="mail"
            >
              <IoMdMailUnread />
            </a>
          </div>
        </div>
      </div>
      <div className="otherDetails">
        <div className="other">
          <div>
            <span>Student :</span>
            <p>Final Year</p>
          </div>
          <div>
            <span>Language :</span>
            <p>Hindi/English</p>
          </div>
        </div>
        <div className="resumeBtn">
          <span>
            <a
              href="Praween resume.pdf"
              download="Praween Resume"
              className="btn"
            >
              <span className="text-1 center">MY RESUME</span>
              <span className="text-2 center">
                <TbFileDownload />
                Size (170 KB)
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
