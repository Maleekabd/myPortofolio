import "./Card.css";
import Aos from "aos";
import "aos/dist/aos.css";
import quantum from "../assets/skill/quantum.jpg";
import reactjs from "../assets/skill/reactjs.jpg";
import computernetwork from "../assets/skill/computernetwork.jpg";
import Stats from "./stats";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SkillsBar } from "../utils/DOMFunc";

const NewSkillsBar = [
  { name: "Javascript", percentage: "70%" },
  { name: "HTML", percentage: "60%" },
  { name: "CSS", percentage: "60%" },
  { name: "ReactJS", percentage: "75%" },
  { name: "TailwindCSS", percentage: "70%" },
  { name: "MongoDB", percentage: "45%" },
  { name: "MySQL", percentage: "60%" },
  { name: "ExpressJS", percentage: "50%" },
  { name: "Python", percentage: "60%" },
  { name: "Redux", percentage: "50%" },
  { name: "Cisco", percentage: "70%" },
  { name: "Mikrotik", percentage: "60%" },
  { name: "Linux", percentage: "50%" },
  { name: "Qiskit", percentage: "50%" },
  { name: "Cryptography", percentage: "80%" },
  // { name: "C#", percentage: "40%" },
  // { name: "Cybersecurity NetDef", percentage: "50%" },
];

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
      <div className="min-[320px]:pt-5 sm:p-6 md:p-10 lg:p-10 flex flex-col items-center justify-around h-auto">
        <h1 className="min-[320px]:text-2xl min-[320px]:font-bold md:text-8xl md:font-normal lg:text-8xl lg:font-normal">
          Status
        </h1>
        <div className="min-[320px]:py-3 min-[320px]:px-2 sm:py-3 md:py-6 lg:py-6 w-full flex min-[320px]:flex-col sm:flex-col md:flex-row lg:flex-row sm:items-stretch md:items-stretch lg:items-stretch lg:justify-between">
          <div className=" w-full h-auto p-5">
            {NewSkillsBar.map((item, index) => (
              <section className="" key={index}>
                <SkillsBar skillName={item.name} percentage={item.percentage} />
              </section>
            ))}
          </div>
          <div className="flex flex-col justify-between h-full w-full">
            <div className="container mx-2 py-4">
              <div>
                <div className="relative col-span-12 px-2 space-y-6 sm:col-span-9">
                  <div className="col-span-12 space-y-12 relative  sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                      <h3 className="text-xl font-semibold tracking-wide">
                        Communication Skills
                      </h3>
                      <p className="min-[320px]:p-1 sm:p-2 md:p-2 lg:p-2">
                        Effective communication is essential to build strong
                        relationships with colleagues, clients and stakeholders.
                        Not only does this involve the ability to convey
                        messages in a clear and compelling way, but also the
                        ability to understand the needs of others and respond to
                        feedback.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                      <h3 className="text-xl font-semibold tracking-wide">
                        Leadership
                      </h3>
                      <p className="min-[320px]:p-1 sm:p-2 md:p-2 lg:p-2">
                        A good leader has the ability to inspire their team to
                        achieve greatness. They are able to set a clear vision,
                        communicate it effectively and create a culture of
                        accountability and excellence.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                      <h3 className="text-xl font-semibold tracking-wide">
                        Teamwork
                      </h3>
                      <p className="min-[320px]:p-1 sm:p-2 md:p-2 lg:p-2">
                        Teamwork involves the ability to work with others toward
                        a shared goal. It requires communication, collaboration
                        and a shared commitment to work in a group.{" "}
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                      <h3 className="text-xl font-semibold tracking-wide">
                        Problem Solving
                      </h3>
                      <p className="min-[320px]:p-1 sm:p-2 md:p-2 lg:p-2">
                        Problem-solving involves the ability to come up with
                        alternative solutions. This skill is crucial to
                        identifying and addressing complex challenges and
                        opportunities in a variety of contexts.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                      <h3 className="text-xl font-semibold tracking-wide">
                        Work Ethic
                      </h3>
                      <p className="min-[320px]:p-1 sm:p-2 md:p-2 lg:p-2">
                        Work ethic demonstrates an individual’s commitment to
                        their job. Having a strong work ethic makes you seem
                        more reliable and dependable, which improves your
                        credibility in the workplace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="projects" className=" h-auto">
        <div className="flex flex-col">
          <span
            data-aos="fade-right"
            className="min-[320px]:text-[4em] -leading-5 text-left min-[320px]:pl-5 lg:pl-5 md:text-[13em] lg:text-[13em]  italic text-yellow-500 flex items-center justify-between"
          >
            Projects{" "}
            <MdKeyboardDoubleArrowLeft className="animation-to-left text-black" />
          </span>
          <span className="z-10 min-[320px]:text-[4em] min-[320px]:pl-0 lg:pl-5 leading-5 text-center md:text-[13em] lg:text-[13em] text-black italic">
            Projects
          </span>
          <span
            data-aos="fade-right"
            className="min-[320px]:text-[4em] min-[320px]:pr-5 lg:pr-5 -leading-5 text-end md:text-[13em] lg:text-[13em] italic text-yellow-500 flex items-center justify-between"
          >
            <MdKeyboardDoubleArrowRight className="animation-to-right text-black" />{" "}
            Projects
          </span>
        </div>
        <div className="min-[320px]:grid min-[320px]:grid-cols-1 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between px-6 gap-4 rounded-md dark:bg-gray-900 dark:text-gray-100">
          <div className=" md:m-5 lg:m-5 md:p-5 lg:p-5 min-[320px]:w-full md:w-3/6 lg:w-3/6 flex items-center min-[320px]:flex-col md:flex-row lg:flex-row">
            <h2 className="min-[320px]:text-xl md:text-7xl lg:text-7xl">
              Hi, Here you can see the various projects{" "}
              <span className="text-rose-400">I have worked on</span>.
              let&apos;s check it out!
            </h2>
          </div>
          <div className="parent-skills min-[320px]:w-full md:w-3/6 lg:w-3/6  md:m-5 lg:m-5 md:p-5 lg:p-5">
            <a data-aos="fade-up" href="/frontend-react-projects">
              <div className="bg-image-fe bg-lime-400 p-2">
                <h1 className="min-[320px]:text-lg md:text-6xl lg:text-4xl">
                  Frontend Web Engineer
                </h1>
              </div>
            </a>
            <a data-aos="fade-up" href="/quantum-software-engineer-projects">
              <div className="bg-image-qsf bg-lime-400 p-2">
                <h1 className="min-[320px]:text-lg md:text-6xl lg:text-4xl">
                  Quantum Software Engineer
                </h1>
              </div>
            </a>
            <a data-aos="fade-up" href="/computer-network-projects">
              <div className="bg-image-ne bg-lime-400 p-2">
                <h1 className="min-[320px]:text-lg md:text-6xl lg:text-4xl">
                  Network Engineering
                </h1>
              </div>
            </a>
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
