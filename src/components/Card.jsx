import quantum from "../assets/skill/quantum.jpg";
import reactjs from "../assets/skill/reactjs.jpg";
import computernetwork from "../assets/skill/computernetwork.jpg";
import { Link } from "react-router-dom";

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
  return (
    <>
      <section className="bg-slate-200 h-[105vh]">
        <h1 className="text-4xl p-3 m-3">My Skills</h1>
        <div className="min-[320px]:grid min-[320px]:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 m-3 p-3 gap-4 rounded-md dark:bg-gray-900 dark:text-gray-100">
          {skills.map((skill, index) => (
            <Link
              to={`${skill.path}`}
              key={index}
              className="flex flex-wrap border rounded-md shadow-md hover:scale-105 bg-white"
              style={{
                transition: "all 0.2s ease",
              }}
            >
              <div>
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="object-cover object-center w-full rounded-t-md h-44 dark:bg-gray-500"
                />
                <div className="relative flex flex-col justify-between p-6 h-80">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-normal">
                      {skill.title}
                    </h2>
                    <p className="dark:text-gray-100 text-justify">
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
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;
