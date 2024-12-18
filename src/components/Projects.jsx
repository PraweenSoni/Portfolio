import ProjectCard from "./ProjectCard";
import todoimg from "../assets/todoimg.png";
import wishcard from "../assets/wishcard.png";
import imgcomp from "../assets/imgcomp.png";
import typingbgimg from "../assets/typingbgimg.jpg";
import urlshortner from "../assets/urlshortner.png";

const Projects = () => {
  const Wishcard = {
    img: wishcard,
    title: "Wish Card",
    desc: "A simple wishcard project where you can create your card and share it.",
    gLink: "https://github.com/PraweenSoni/happy-Birthday-wishes-card-project-",
    lLink: "http://wishcard.free.nf",
  };
  const ToDoList = {
    img: todoimg,
    title: "To-Do List",
    desc: "Simple To-Do List web App, where you manage your tasks.",
    gLink: "https://github.com/PraweenSoni/my-todo-list",
    lLink: "https://praweensoni.github.io/my-todo-list/",
  };
  const ImgComp = {
    img: imgcomp,
    title: "Image Compress & Resize",
    desc: "Reduce your image size & resize your image in simple way.",
    gLink: "https://github.com/PraweenSoni/Image-compressor",
    lLink: "https://praweensoni.github.io/Image-compressor/",
  };
  const TypingSpeed = {
    img: typingbgimg,
    title: "Typing Speed",
    desc: "Check your typing speed.",
    gLink: "https://github.com/PraweenSoni/Typing-speed",
    lLink: "https://praweensoni.github.io/Typing-speed/",
  };
  const urlShort = {
    img: urlshortner,
    title: "Url Shortner",
    desc: "Short Your URL.",
    gLink: "https://github.com/PraweenSoni/urlshortener",
    lLink: "https://shortlinkpro.vercel.app/",
  };

  return (
    <>
      <section className="project-card-container">
        <ProjectCard projectDetails={Wishcard} />
        <ProjectCard projectDetails={ToDoList} />
        <ProjectCard projectDetails={ImgComp} />
        <ProjectCard projectDetails={TypingSpeed} />
        <ProjectCard projectDetails={urlShort} />
      </section>
    </>
  );
};

export default Projects;
