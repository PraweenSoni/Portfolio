import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <>
      <Navbar setActiveSection={setActiveSection} />
      <div className="sectionContainer">
        <Sections
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Footer />
      </div>
    </>
  );
}

// const intro = document.getElementById("intro");
// let lines = [
//   "Programmer.",
//   "Web Developer.",
//   "Bsc.CA Student",
//   "Open source contributor",
// ];
// //computer science engineering
// //software developer
// let i = 0, j = 0, wait = 6;
// setInterval(() => {
//   if (wait-- > 0) return;
//   if (wait == -1) intro.innerHTML = "";
//   if (i < lines.length)
//     if (j < lines[i].length) intro.innerHTML += lines[i][j++];
//     else (wait = 8), (j = 0), i++;
//   else (wait = 8), (i = j = 0);
// }, 50);

export default App;
