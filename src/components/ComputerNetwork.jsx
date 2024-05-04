import React from "react";
import BackButton from "../elements/BackButton";
import QAOA from "../assets/logoxx.png";
import { Link } from "react-router-dom";

export const materi = [
  {
    id: 1,
    name: "Apa itu jaringan komputer",
    path: "apa-itu-jaringan-komputer",
  },
  {
    id: 2,
    name: "OSI Layer dan TCP/IP Layer",
    path: "osi-layer-dan-tcpip-layer",
  },
  {
    id: 3,
    name: "Komponen dalam Jaringan",
    path: "komponen-dalam-jaringan",
  },
  {
    id: 4,
    name: "Topologi Jaringan",
    path: "topologi-jaringan",
  },
  {
    id: 5,
    name: "Perangkat Jaringan dan Fungsi nya",
    path: "perangkat-jaringan-dan-fungsi-nya",
  },
];

const ComputerNetwork = () => {
  return (
    <section>
      <BackButton />
      <div className="m-2 p-2">
        <div className="mb-4">
          <h1 className="text-xl underline underline-offset-2 italic">
            Computer Network
          </h1>
        </div>
        <div className="grid grid-cols-8 h-48 gap-2">
          {materi.map((konten) => (
            <Link
              to={konten.path}
              key={konten.id}
              className="hover:text-violet-400 border rounded-md hover:scale-105"
              style={{
                transition: "all 0.2s ease-in-out",
              }}
            >
              <img src={QAOA} alt="QAOA" className="rounded-md" />
              <p className=" p-1">{konten.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComputerNetwork;
