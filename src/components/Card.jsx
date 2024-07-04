import "./Card.css";
import Aos from "aos";
import "aos/dist/aos.css";
import quantum from "../assets/skill/quantum.jpg";
import reactjs from "../assets/skill/reactjs.jpg";
import computernetwork from "../assets/skill/computernetwork.jpg";
import { Link } from "react-router-dom";
import Stats from "./stats";
import Contact from "./Contact";
import Footer from "./Footer";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const skills = [
  {
    title: "Network Engineering",
    description:
      "A Network Engineering is a professional in the field of information technology responsible for designing, implementing, and maintaining the computer network infrastructure of an organization.",
    image: computernetwork,
    path: "computer-network-projects",
  },
  {
    title: "Quantum Software Engineer",
    description:
      "A quantum software engineer is a professional who designs and develops software for quantum computers. They are responsible for creating algorithms and applications that leverage the unique properties of quantum mechanics to solve complex problems more efficiently than classical computers.",
    image: quantum,
    path: "quantum-software-engineer-projects",
  },
  {
    title: "Frontend - React",
    description:
      "A React specializes in developing user interfaces and web applications using the React JavaScript library. They design and implement interactive components, manage state efficiently, and ensure the application's performance and responsiveness.",
    image: reactjs,
    path: "frontend-react-projects",
  },
];
const Card = () => {
  let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <>
      <Stats />
      <section className="bg-yellow-300 h-auto">
        <div className="flex flex-col">
          <span
            data-aos="fade-right"
            className="-leading-5 text-left pl-5 text-[13em]  italic text-yellow-500 flex items-center justify-between"
          >
            Projects{" "}
            <MdKeyboardDoubleArrowLeft className="animation-to-left text-black" />
          </span>
          <span className=" leading-5 text-center text-[13em] text-black italic">
            Projects
          </span>
          <span
            data-aos="fade-right"
            className="-leading-5 text-end text-[13em] pr-5 italic text-yellow-500 flex items-center justify-between"
          >
            <MdKeyboardDoubleArrowRight className="animation-to-right text-black" />{" "}
            Projects
          </span>
        </div>
        <div className="min-[320px]:grid min-[320px]:grid-cols-1 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between px-6 gap-4 rounded-md dark:bg-gray-900 dark:text-gray-100">
          <div className="m-5 p-5 w-3/6 flex items-center">
            <h2 className="text-7xl">
              Hi, I&apos;m <span className="text-rose-500">Malik</span>. Here
              you can see the various projects I have worked on. let&apos;s
              check it out!
            </h2>
          </div>
          <div className="parent-skills w-3/6 m-5 p-5">
            <div className="bg-image-fe bg-lime-400 p-4 bg-i">
              <h1 className="text-6xl">Frontend Web Engineer</h1>
            </div>
            <div className="bg-image-qsf bg-lime-400 mt-2 p-4">
              <h1 className="text-6xl">Quantum Software Engineer</h1>
            </div>
            <div className="bg-image-ne bg-lime-400 mt-2 p-4">
              <h1 className="text-6xl">Network Engineering</h1>
            </div>
            {/* {skills.map((skill, index) => (
                <Link
                  to={`${skill.path}`}
                  key={index}
                  className="bg-white"
                  style={{
                    transition: "all 0.2s ease",
                  }}
                >
                  <div>
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="object-cover w-full h-44 dark:bg-gray-500"
                    />
                    <div className="flex flex-col justify-between p-2 h-80">
                      <div className="space-y-2">
                        <h2 className="text-lg font-semibold tracking-normal">
                          {skill.title}
                        </h2>
                        <p className="dark:text-gray-100 text-justify text-sm">
                          {skill.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="absolute bottom-2 flex items-center justify-center w-auto p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900 bg-violet-400 hover:bg-violet-200"
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </Link>
              ))} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
