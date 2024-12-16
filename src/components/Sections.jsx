import Navbar from "./Navbar";
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
        {activeSection === "Home" && <div>Welcome to Home Section</div>}
        {activeSection === "Projects" && <Projects />}
        {activeSection === "Skills" && <Skills />}
      </main>
    </>
  );
};

export default Sections;
