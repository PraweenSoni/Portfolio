import { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import { HiOutlineHome } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = ({ setActiveSection }) => {
  const [isSettingVisible, setIsSettingVisible] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [theme, setTheme] = useState(0);
  const settingRef = useRef(null);
  const buttonRef = useRef(null);

  // Theme-related functions
  const applyTheme = (mode) => {
    if(mode === 'auto'){
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
        document.querySelector("body").setAttribute("theme", systemTheme);
    }else{
      document.querySelector("body").setAttribute("theme", mode);
    }
    localStorage.setItem("theme", mode);
  };

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      applyTheme(savedTheme);
      setTheme(savedTheme === "dark" ? 1 : savedTheme === "light" ? 2 : 0);
    } else {
      // Fallback to system theme
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      applyTheme(systemTheme);
      setTheme(systemTheme === "dark" ? 1 : 2);
    }
  };
  
  useEffect(() => {
    initializeTheme();
  }, []);
  

  const handleThemeChange = (mode, themeIndex) => {
    applyTheme(mode);
    setTheme(themeIndex);
  };

  // Handle setting visibility toggle
  const toggleSettingVisibility = (e) => {
    e.stopPropagation();
    setIsSettingVisible((prev) => !prev);
  };

  // Close settings if clicked outside
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
        {["Home", "Skills", "Projects"].map((section) => (
          <button
            key={section}
            className={`h-10 ${activeNav === section ? "active" : ""}`}
            onClick={() => handleNavClick(section)}
          >
            <li className="flex items-center">
              {section === "Home" && <HiOutlineHome />}
              {section === "Skills" && <FiTool />}
              {section === "Projects" && <FaRegFolderClosed />}
              <span>{section}</span>
            </li>
          </button>
        ))}


        <button
          ref={buttonRef}
          className={activeNav === "Settings" ? "active" : ""}
          onClick={toggleSettingVisibility}
        >
          <li>
            <IoSettingsOutline />
          </li>
          {isSettingVisible && (
            <div className="setting" ref={settingRef}>
              <div className="sbox">
                <div className="stheme">
                  <p>Theme</p>
                  {[
                    { label: "System Default", mode: "auto", index: 0 },
                    { label: "Dark Mode", mode: "dark", index: 1 },
                    { label: "Light Mode", mode: "light", index: 2 },
                  ].map(({ label, mode, index }) => (
                    <div
                      key={mode}
                      onClick={() => handleThemeChange(mode, index)}
                      className={theme === index ? "TActive" : ""}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
