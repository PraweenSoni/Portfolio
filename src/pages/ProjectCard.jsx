import "../styles/ProjectCard.css";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <figure>
        <img
          src={props.projectDetails.img}
          alt="Project Image"
        />
      </figure>
      <div className="project-card-body">
        <h2 className="project-card-title">{props.projectDetails.title} !</h2>
        <p>{props.projectDetails.desc}</p>
        <div className="project-card-actions">
          <button className="project-btn"><a href={props.projectDetails.gLink} target="_blank"><FaGithub />Github</a></button>
          <button className="project-btn"><a href={props.projectDetails.lLink} target="_blank"><FaArrowUpRightFromSquare />Website</a></button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;