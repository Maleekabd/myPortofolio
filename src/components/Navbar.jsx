import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import LOGO from "../assets/logo-no-background.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const [Path, setPath] = useState(null);

  // handler path
  useEffect(() => {
    const Path = document.location.pathname;
    setPath(Path);
  }, []);

  // handler scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(prevScroll > currentScroll || currentScroll === 0);
      setPrevScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  const scrollToTimeline = (e) => {
    const target = document.getElementById("timeline");
    target.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMySkill = (e) => {
    const target = document.getElementById("myskills");
    target.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = (e) => {
    const target = document.getElementById("target");
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-between fixed h-20 w-full">
      <div className="ml-16 m-2 p-2">
        <img className="w-24" src={LOGO} alt="" />
      </div>
      <ul className="flex justify-between cursor-pointer m-2 mr-16 p-2 gap-16">
        <li className="nav">Home</li>
        <li className="nav">Timeline</li>
        <li className="nav">Skills</li>
        <li id="#target">About</li>
      </ul>
    </div>
  );
};

export default Navbar;
