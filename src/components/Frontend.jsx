import "./Frontend.css";
import QuoteGen from "../assets/skill_img/QuoteGen.jpeg";
import ShopBayy from "../assets/skill_img/shopbay.jpeg";
import VegetableBox from "../assets/skill_img/vegetable_box.jpeg";
import MusicSpot from "../assets/skill_img/musicspot.jpeg";
import Login from "../assets/skill_img/Login.jpeg";
import WebApp from "../assets/skill_img/webapp.png";
import Portof from "../assets/skill_img/portof.png";
import Layout from "./Layout/Layout";
import BackButton from "../elements/BackButton";

const FrontendProjects = [
  {
    id: 1,
    title: "ShopBayy : E-Commerce",
    image: ShopBayy,
    Path: "https://shopbayy.netlify.app/",
    name: ["NextJS", "Redux", "Firebase", "Cloudinary", "TailwindCSS"],
  },
  {
    id: 2,
    title: "MusicSpot : Explore your favorite music",
    image: MusicSpot,
    Path: "https://new-music-spot.vercel.app",
    name: ["reactJS", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Login Page",
    image: Login,
    Path: "https://login-page-malik.vercel.app/",
    name: ["ReactJS", "React Context", "TailwindCSS"],
  },
  {
    id: 5,
    title: "Quote Generator",
    image: QuoteGen,
    Path: "https://quote-generator-ten-psi.vercel.app/",
    name: ["HTML", "CSS", "JS"],
  },
  {
    id: 7,
    title: "Grocery Shop",
    image: VegetableBox,
    Path: "https://grocerybymalik.vercel.app",
    name: ["ReactJS", "TailwindCSS"],
  },
  {
    id: 8,
    title: "Web Portofolio",
    image: Portof,
    Path: "https://malikabdurrasyid.vercel.app/",
    name: ["ReactJS", "TailwindCSS"],
  },
  {
    id: 9,
    title: "Web App Notes",
    image: WebApp,
    Path: "https://web-app-notes.vercel.app/",
    name: ["ReactJS", "TailwindCSS"],
  },
  {
    id: 10,
    title: "Weather App",
    image:
      "https://staging.deltaliquidenergy.com/wp-content/uploads/2019/11/Safety_Extreme-Weather_Thunderstorm.jpg",
    Path: "https://maleekabd.github.io/weatherapp/",
    name: ["HTML", "CSS", "JS"],
  },
  {
    id: 11,
    title: "Elliptic Shop",
    image:
      "http://media.architecturaldigest.com/photos/56c647cf5ef3a2f746a41ebf/master/pass/Paris-Fashion-Shops-03.jpg",
    Path: "https://elliptic-shop.vercel.app",
    name: ["ReactJS", "Redux", "TailwindCSS"],
  },
];

const Frontend = () => {
  return (
    <section>
      <BackButton />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 m-2 p-2 dark:bg-gray-900 dark:text-gray-100">
        {FrontendProjects.map((project) => (
          <Layout key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Frontend;
