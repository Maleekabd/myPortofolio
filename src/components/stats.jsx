import "./stats.css";
import Javascript from "../assets/skill/JavaScript-Logo.png";
import Css from "../assets/skill/css3.png";
import Tailwind from "../assets/skill/tailwind-Photoroom.png";
import React from "../assets/skill/react_logo_2.png";
import Html from "../assets/skill/html-rm-bg.png";
import MongoDB from "../assets/skill/MongoDB.png";
import NodeJs from "../assets/skill/Nodejs.png";
import Linux from "../assets/skill/linux.png";
import SnortTM from "../assets/skill/SnortTM.png";
import Suricata from "../assets/skill/suricata.png";
import Splunk from "../assets/skill/splunk.png";
import WireShark from "../assets/skill/wireshark.png";
import Qiskit from "../assets/skill/qiskit.png";
import Mikrotik from "../assets/skill/MikroTik-logo.png";
import Cisco from "../assets/skill/cisco.png";
import Python from "../assets/skill/python.png";
import Netmiko from "../assets/skill/netmiko.png";
import GNURadio from "../assets/skill/gnu.png";
import Redux from "../assets/skill/redux-logo.png";

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
    SnortTM,
    Suricata,
    Splunk,
    WireShark,
    Qiskit,
    Mikrotik,
    Cisco,
    Python,
    Netmiko,
    GNURadio,
    Redux,
  ];

  return (
    <section className="bg-gray-400 h-auto dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto space-y-6 text-center lg:p-8 lg:space-y-8 ">
        <h2 className="text-white text-3xl font-bold">Tech Stacks</h2>
        <div className="grid  min-[320px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 place-content-center">
          {image.map((item) => (
            <>
              <img className="h-16 w-auto" src={item} alt="" />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
