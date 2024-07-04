import Navbar from "./Navbar";
import NoBg from "../assets/no-bg.png";
import DB from "../assets/db.mp4";

const landingpage = () => {
  return (
    <>
      <Navbar />
      <section className="min-[320px]:justify-evenly min-[320px]:flex-col flex lg:flex-row h-screen  md:justify-between lg:justify-between">
        <div className="relative w-full flex items-center">
          <video
            className="-z-10 absolute top-0 left-0 w-full h-full object-cover opacity-15"
            loop
            muted
            autoPlay
          >
            <source src={DB} />
          </video>
          <div className="min-[320px]:flex min-[320px]:justify-center min-[320px]:flex-col p-8 min-[320px]:h-screen md-w-3/6 lg:w-3/6">
            <h3 className="">hi. i am Malik Abdurrasyid</h3>
            <h1 className=" min-[320px]:text-[28px] md:text-[6em] lg:text-[6em]">
              Frontend Web Engineer
            </h1>
            <p className="min-[320px]:block lg:block">
              Hello! I am Malik Abdurrasyid, a graduate in Electrical
              Engineering - majoring in multimedia Telecommunication with a
              special interest in Cybersecurity, Computer Network, Quantum
              Software Development, and Frontend Web using React
            </p>
          </div>
        </div>
        {/* <div className="relative w-5/6 flex items-center justify-center">
          <img
            className=" min-[320px]:w-60 min-[320px]:rounded-full md:rounded-none lg:w-full lg:rounded-none md:h-screen lg:h-screen"
            src={NoBg}
            alt=""
          />
        </div> */}
      </section>
    </>
  );
};

export default landingpage;
