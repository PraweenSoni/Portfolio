import { useState } from "react";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

//     setYear = new Date();
//    console.log(currentDate); // Output: Current date and time
    return (
        <footer >
            Copyright &copy; {year} Praween Soni.
        </footer>
    );
};

export default Footer;