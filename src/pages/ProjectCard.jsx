import { FaGithub } from "react-icons/fa";
import "../styles/ProjectCard.css";

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
          <button className="project-btn"><a href={props.projectDetails.lLink} target="_blank"><FaGithub />Website</a></button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;