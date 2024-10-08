import Navbar from "./Navbar";
import NoBg from "../assets/no-bg.png";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section
        id="landing-page"
        className=" min-[320px]:justify-evenly min-[320px]:flex-col flex  lg:flex-row md:h-auto lg:h-screen   lg:justify-between relative h-auto overflow-hidden"
      >
        <div className="w-full flex md:justify-between md:items-center lg:flex-row md:flex-col-reverse lg:justify-evenly lg:items-center">
          {/* <video
            className="min-[320px]:hidden md:block lg:block -z-10 absolute top-0 left-0 w-full h-full object-cover opacity-15"
            loop
            muted
            autoPlay
          >
            <source src={DB} />
          </video> */}
          <div className="relative min-[320px]:flex min-[320px]:justify-evenly min-[320px]:flex-col p-8 min-[320px]:h-screen md-w-3/6 lg:w-full md:block lg:block lg:h-auto space-y-10">
            {/* <span className="sm:hidden md:hidden lg:hidden absolute -top-5 -right-10 w-32 rounded-[100%] bg-teal-200 h-32"></span>
            <span className="sm:hidden md:hidden lg:hidden absolute -z-10 -bottom-5 -left-10 w-32 rounded-[100%] bg-teal-200 h-32"></span> */}
            {/* <h3 className="min-[320px]:text-xl">hi. i am Malik Abdurrasyid</h3> */}
            <h1 className=" min-[320px]:text-[55px] min-[320px]:font-bold lg:font-normal md:text-[6em] lg:text-[6em] leading-[5rem]">
              Software Developer
            </h1>
            <p className="min-[320px]:block lg:block text-lg">
              Hello! I am Malik Abdurrasyid, a graduate in Electrical
              Engineering - majoring in multimedia Telecommunication with a
              special interest in {" "} 
              <span className="text-rose-600">
              Software Development, Cybersecurity, Computer Network, and Quantum
              Software Development. 
              </span>
            </p>
          </div>
          <figure
            className="min-[320px]:hidden sm:hidden md:block lg:block flex 
           md:h-3/6 lg:h-full lg:w-full md:m-10 md:pb-0 md:p-20  md:items-center md:justify-center  lg:items-center lg:justify-center"
          >
            <img
              loading="lazy"
              className="min-[320px]:hidden sm:hidden md:block md:h-64 lg:block lg:h-[25em] rounded-full bg-gradient-to-br from bg-gray-900 to-black "
              src={NoBg}
              alt=""
            />
          </figure>
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

export default LandingPage;
