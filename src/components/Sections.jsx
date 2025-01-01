import Navbar from "./Navbar";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import "../styles/Sections.css";


const Sections = ({ activeSection, setActiveSection }) => {
  return (
    <>
      <header>
        <Navbar setActiveSection={setActiveSection} />
      </header>
      <main>
        <h3>{activeSection}</h3>
        {activeSection === "Home" && <Home />}
        {activeSection === "Projects" && <Projects />}
        {activeSection === "Skills" && <Skills />}
      </main>
    </>
  );
};

export default Sections;
