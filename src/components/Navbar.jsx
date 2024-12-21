import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { HiOutlineHome } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";


const Navbar = ({ setActiveSection }) => {

  const [isSettingVisible, setIsSettingVisible] = useState(false);
  const settingRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleSettingVisibility = (e) => {
    // Prevent the outside click handler from closing the dropdown when clicking the button
    e.stopPropagation();
    setIsSettingVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    // Close the dropdown if the click is outside the button and the settings menu
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

  return (
    <nav>
      <ul>
        <button onClick={() => setActiveSection("Home")}><li><HiOutlineHome />Home</li></button>
        <button onClick={() => setActiveSection("Skills")}><li><FiTool />Skills</li></button>
        <button onClick={() => setActiveSection("Projects")}><li><FaRegFolderClosed />Projects</li></button>
        <button ref={buttonRef} onClick={toggleSettingVisibility}><li><IoSettingsOutline /></li></button>
      </ul>
      <div className="setting" ref={settingRef} style={{ display: isSettingVisible ? "block" : "none", }}>
        <div className="sbox">
          <div className="stheme">
            <p>Theme</p>
            <button>System Default</button>
            <button>Dark Mode</button>
            <button>Light Mode</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;