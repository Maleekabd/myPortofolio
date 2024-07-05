import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import LOGO from "../assets/logo-no-background.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { scrollToTarget } from "../utils/func";
import HamburgerMenu from "../elements/HamburgerMenu";
import { scrollToLandingPage } from "../utils/func";
import { scrollToMySkills } from "../utils/func";

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

  return (
    <>
      {/* md large screen */}
      <div className="min-[320px]:hidden sm:hidden md:block lg:flex lg:items-center lg:justify-between fixed top-0 h-16 w-full z-10">
        <div className="ml-16 m-2 p-2">
          <img className="w-24" src={LOGO} alt="" />
        </div>
        <ul className="flex justify-between cursor-pointer m-2 mr-16 p-2 gap-16">
          <li className="nav">
            <button onClick={scrollToLandingPage}>Home</button>
          </li>
          <li className="nav">
            <button onClick={scrollToTarget}>Timeline</button>
          </li>
          <li className="nav">
            <button onClick={scrollToMySkills}>Skills</button>
          </li>
          <li className="nav">
            <button onClick={scrollToMySkills}>Projects</button>
          </li>
          <li className="nav">
            <button>Contact</button>
          </li>
          <li className="nav">
            <button>About</button>
          </li>
        </ul>
      </div>

      {/* min-320px, sm screen */}
      <div className="">
        <HamburgerMenu />
      </div>
    </>
  );
};

export default Navbar;
