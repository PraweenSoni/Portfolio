import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import "../styles/Sections.css";
import Footer from "./Footer";
// import { useState, useEffect } from "react";

// Icons
import myPic from "/pic.png";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdMailUnread } from "react-icons/io";
import { TbFileDownload } from "react-icons/tb";

const Sections = ({ activeSection }) => {
  return (
    <>
      <header>
        <ProfileCard />
      </header>
      <main>
        <h3>{activeSection}</h3>
        {activeSection === "Home" && <Home />}
        {activeSection === "Projects" && <Projects />}
        {activeSection === "Skills" && <Skills />}
      </main>
      <Footer />
    </>
  );
};

const ProfileCard = () => {
  return (
    <div className="profilecard">
      <div className="profile">
        <img src={myPic} className="MyPic" alt="My Picture" />
        <div>
          <h2>Praween Soni</h2>
          <h4 id="intro">Web developer</h4>
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
              href="mailto:ask.psoni@gmail.com?subject=Feedback%20from%20portfolio&body=Hi,%0A%0A"
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
            <span>Graduate :</span>
            <p>(2025)</p>
          </div>
          <div>
            <span>Language :</span>
            <p>Hindi/English</p>
          </div>
        </div>
        <div className="resumeBtn">
          <span>
            <a
              href="PRAWEEN SONI RESUME.pdf"
              download="Praween Resume"
              className="btn"
            >
              <span className="text-1 center">MY RESUME</span>
              <span className="text-2 center">
                <TbFileDownload />
                Size (569 KB)
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sections;
