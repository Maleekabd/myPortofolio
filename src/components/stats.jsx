import "./stats.css";
import Javascript from "../assets/skill/JavaScript-Logo.svg";
import Css from "../assets/skill/css3.png";
import Tailwind from "../assets/skill/tailwind-Photoroom.svg";
import React from "../assets/skill/react_logo_2-Photoroom.svg";
import Html from "../assets/skill/html-rm-bg.svg";
import MongoDB from "../assets/skill/MongoDB.svg";
import NodeJS from "../assets/skill/Nodejs.svg";
import Linux from "../assets/skill/linux.svg";
// import SnortTM from "../assets/skill/SnortTM.png";
// import Suricata from "../assets/skill/suricata.png";
// import Splunk from "../assets/skill/splunk.png";
// import WireShark from "../assets/skill/wireshark.png";
// import Qiskit from "../assets/skill/qiskit.png";
// import Mikrotik from "../assets/skill/MikroTik-logo.png";
import Cisco from "../assets/skill/cisco.svg";
import Python from "../assets/skill/python.svg";
// import Netmiko from "../assets/skill/netmiko.svg";
// import GNURadio from "../assets/skill/gnu.png";
import Redux from "../assets/skill/redux-logo.svg";

const Stats = () => {
  const image = [
    Javascript,
    Css,
    Tailwind,
    React,
    Html,
    MongoDB,
    NodeJS,
    Linux,
    // SnortTM,
    // Suricata,
    // Splunk,
    // WireShark,
    // Qiskit,
    // Mikrotik,
    Cisco,
    Python,
    // Netmiko,
    // GNURadio,
    Redux,
  ];

  return (
    <section id="skills" className="h-auto dark:bg-gray-100 dark:text-gray-800">
      <div className="space-y-6 text-center lg:space-y-8 ">
        <h1 className=" min-[320px]:text-4xl min-[320px]:font-bold min-[320px]:p-2 md:text-[8em] lg:text-8xl lg:font-normal">
          Skills
        </h1>
        <p className="min-[320px]:text-lg min-[320px]:px-5 text-center md:text-6xl lg:text-6xl">
          Hi There. nice to meet you on my portfolio!{" "}
          <span className="text-rose-400">
            I am a developer passionate about technology
          </span>
          . Throughout my career, I have mastered various tech stacks that
          enable me to build innovative and efficient applications.
        </p>
        <div className="min-[320px]:h-28 sm:h-44 md:h-44 lg:h-44  logos bg-yellow-400">
          <div className="logos-slide">
            {image.map((item, index) => (
              <img
                loading="lazy"
                key={index}
                className="min-[320px]:h-16 md:h-24 lg:h-24"
                src={item}
                alt=""
              />
            ))}
            {image.map((item, index) => (
              <img
                className="min-[320px]:h-16 md:h-24 lg:h-24"
                loading="lazy"
                key={`duplicate-${index}`}
                src={item}
                alt={`Logo ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
