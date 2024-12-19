import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import "./Sections.css";


const Sections = ({ activeSection, setActiveSection }) => {
  return (
    <>
      <header>
        <Navbar setActiveSection={setActiveSection}/>
      </header>
      <main>
        <h3>{activeSection}</h3>
        {activeSection === "Home" && <Home/>}
        {activeSection === "Projects" && <Projects />}
        {activeSection === "Skills" && <Skills />}
      </main>
    </>
  );
};

export default Sections;
