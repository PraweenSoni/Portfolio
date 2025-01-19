import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import { HiOutlineHome } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = ({ setActiveSection }) => {
  const [isSettingVisible, setIsSettingVisible] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const settingRef = useRef(null);
  const buttonRef = useRef(null);
  // Theme Code
  const setDarkMode = () => {
    document.querySelector("body").setAttribute('theme', 'dark');
    localStorage.setItem("theme", "dark");
  }
  const setLightMode = () => {
    document.querySelector("body").setAttribute('theme', 'light')
    localStorage.setItem("theme", "light");
  }
  const selectedTheme = localStorage.getItem("theme");
  if(selectedTheme === "light"){
    setLightMode();
  }
  const autoMode = (e) => {
    if(e.target.onClick) setLightMode();
    else setDarkMode();
  }

  // Theme code end
  const toggleSettingVisibility = (e) => {
    e.stopPropagation();
    setIsSettingVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      settingRef.current &&
      !settingRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsSettingVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveNav(section);
    setActiveSection(section);
  };

  return (
    <nav>
      <ul>
        <button
          className={activeNav === "Home" ? "active" : ""}
          onClick={() => handleNavClick("Home")}
        >
          <li>
            <HiOutlineHome />
            Home
          </li>
        </button>
        <button
          className={activeNav === "Skills" ? "active" : ""}
          onClick={() => handleNavClick("Skills")}
        >
          <li>
            <FiTool />
            Skills
          </li>
        </button>
        <button
          className={activeNav === "Projects" ? "active" : ""}
          onClick={() => handleNavClick("Projects")}
        >
          <li>
            <FaRegFolderClosed />
            Projects
          </li>
        </button>
        <button
          ref={buttonRef}
          className={activeNav === "Settings" ? "active" : ""}
          onClick={toggleSettingVisibility}
        >
          <li>
            <IoSettingsOutline />
          </li>
          <div
            className="setting"
            ref={settingRef}
            style={{ display: isSettingVisible ? "block" : "none" }}
          >
            <div className="sbox">
              <div className="stheme">
                <p>Theme</p>
                <div onClick={autoMode}>System Default</div>
                <div onClick={setDarkMode} className="TActive">Dark Mode</div>
                <div onClick={setLightMode}>Light Mode</div>
              </div>
            </div>
          </div>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
