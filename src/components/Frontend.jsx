import { Link } from "react-router-dom";
import BackButton from "../elements/BackButton";
import QuoteGen from "../assets/skill_img/QuoteGen.jpeg";
import ShopBayy from "../assets/skill_img/shopbay.jpeg";
import VegetableBox from "../assets/skill_img/vegetable_box.jpeg";
import MusicSpot from "../assets/skill_img/musicspot.jpeg";
import Login from "../assets/skill_img/Login.jpeg";
import Markdown from "../assets/skill_img/Markdown.jpeg";
import WebApp from "../assets/skill_img/webapp.png";
import Portof from "../assets/skill_img/portof.png";

const FrontendProjects = [
  {
    id: 1,
    title: "ShopBayy : E-Commerce",
    image: ShopBayy,
    Path: "https://shopbayy.netlify.app/",
  },
  {
    id: 2,
    title: "MusicSpot : Explore your favorite music",
    image: MusicSpot,
    Path: "https://new-music-spot.vercel.app",
  },
  {
    id: 3,
    title: "Login Page",
    image: Login,
    Path: "https://login-page-malik.vercel.app/",
  },
  {
    id: 4,
    title: "Markdown Previewer",
    image: Markdown,
    Path: "",
  },
  {
    id: 5,
    title: "Quote Generator",
    image: QuoteGen,
    Path: "https://quote-generator-ten-psi.vercel.app/",
  },
  {
    id: 6,
    title: "Web Laboratory Multimedia Communication B-304",
  },
  {
    id: 7,
    title: "Vegetable Box : Get Fresh Vegetable from local farmer",
    image: VegetableBox,
    Path: "",
  },
  {
    id: 8,
    title: "Web Portofolio",
    image: Portof,
    Path: "https://malikabdurrasyid.vercel.app/",
  },
  {
    id: 9,
    title: "Web App Notes",
    image: WebApp,
    Path: "https://web-app-notes.vercel.app/",
  },
];

const Frontend = () => {
  return (
    <section>
      <BackButton />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 m-2 p-2 dark:bg-gray-900 dark:text-gray-100">
        {FrontendProjects.map((skill) => (
          <div
            key={skill.id}
            style={{ transition: "all 0.2s ease" }}
            className="hover:scale-[1.02] border rounded-md relative h-96"
          >
            <img
              src={skill.image}
              alt={skill.title}
              className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-3 space-y-8">
              <div className="space-y-2">
                <h2 className="text-md font-semibold tracking-wide">
                  {skill.title}
                </h2>
                {/* <p className="dark:text-gray-100">{skill.}</p> */}
              </div>
              <Link to={`${skill.Path}`} target="_blank">
                <button
                  type="button"
                  className="absolute bottom-0 left-0 bg-violet-400 rounded flex items-center justify-center w-full p-2 font-semibold dark:bg-violet-400 dark:text-gray-900 text-sm hover:bg-violet-200 hover:text-opacity-45"
                >
                  Visit
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Frontend;
