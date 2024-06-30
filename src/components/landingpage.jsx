import Navbar from "./Navbar";
import NoBg from "../assets/no-bg.png";
import DB from "../assets/db.mp4";

const landingpage = () => {
  return (
    <div>
      <Navbar />
      <section className="flex h-screen justify-between">
        <div className="w-full p-5 flex items-center">
          <div className="">
            <h3 className="">hi. i am Malik Abdurrasyid</h3>
            <h1 className="text-[6em]">Frontend Web Engineer</h1>
            <p className="">
              Hello! I am Malik Abdurrasyid, a graduate in Electrical
              Engineering - majoring in multimedia Telecommunication with a
              special interest in Cybersecurity, Computer Network, Quantum
              Software Development, and Frontend Web using React
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img className=" h-screen" src={NoBg} alt="" />
        </div>
        <video
          className="absolute -z-10 w-full opacity-10 h-full object-cover"
          loop
          muted
          autoPlay
        >
          <source src={DB} />
        </video>
      </section>
    </div>
  );
};

export default landingpage;
