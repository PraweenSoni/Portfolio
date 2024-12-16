import ProjectCard from "./ProjectCard";
import todoimg from "../assets/todoimg.png";

const Projects = () => {
  const projectInfo = {
    img: todoimg,
    title: "To-Do List",
    desc: "Simple To-Do List web App hei ,f dsf name is praweens oni i built website and applications also guys",
    gLink: "",
  };
  return (
    <>
      <div className="project-card-container">
        <ProjectCard projectDetails={projectInfo} />
        <ProjectCard projectDetails={projectInfo} />
      </div>
    </>
  );
};

export default Projects;
