import "./Navbar.css";
import { HiOutlineHome } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";


const Navbar = ({setActiveSection }) => {
  return (
    <nav>
      <ul>
        <button onClick={() => setActiveSection("Home")}><li><HiOutlineHome />Home</li></button>
        <button onClick={() => setActiveSection("Skills")}><li><FiTool />Skills</li></button>
        <button onClick={() => setActiveSection("Projects")}><li><FaRegFolderClosed />Projects</li></button>
      </ul>
    </nav>
  );
};

export default Navbar;