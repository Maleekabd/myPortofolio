import "./stats.css";
import Javascript from "../assets/skill/JavaScript-Logo.svg";
import Css from "../assets/skill/css3.png";
import Tailwind from "../assets/skill/tailwind-Photoroom.svg";
import React from "../assets/skill/react_logo_2-Photoroom.svg";
import Html from "../assets/skill/html-rm-bg.svg";
import MongoDB from "../assets/skill/MongoDB.svg";
import NodeJs from "../assets/skill/Nodejs.svg";
import Linux from "../assets/skill/linux.svg";
import SnortTM from "../assets/skill/SnortTM.png";
import Suricata from "../assets/skill/suricata.png";
import Splunk from "../assets/skill/splunk.png";
import WireShark from "../assets/skill/wireshark.png";
import Qiskit from "../assets/skill/qiskit.png";
import Mikrotik from "../assets/skill/MikroTik-logo.png";
import Cisco from "../assets/skill/cisco.svg";
import Python from "../assets/skill/python.svg";
import Netmiko from "../assets/skill/netmiko.svg";
import GNURadio from "../assets/skill/gnu.png";
import Redux from "../assets/skill/redux-logo.svg";

const Stats = () => {
  const image = [
    Javascript,
    Css,
    Tailwind,
    React,
    Html,
    MongoDB,
    NodeJs,
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
    <section className="h-auto bg-yellow-300 dark:bg-gray-100 dark:text-gray-800">
      <div className="space-y-6 text-center lg:p-8 lg:space-y-8 ">
        <h1 className="text-[8em] italic">Tech Stacks</h1>
        <p className="text-center text-6xl">
          Hi There. nice to meet you on my portfolio!{" "}
          <span className="text-rose-400">
            I am a developer passionate about technology
          </span>
          . Throughout my career, I have mastered various tech stacks that
          enable me to build innovative and efficient applications.
        </p>
        <div className="logos">
          <div className="logos-slide">
            {image.map((item, index) => (
              <img key={index} className="" src={item} alt="" />
            ))}
            {image.map((item, index) => (
              <img
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
