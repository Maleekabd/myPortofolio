import { scrollToTarget } from "../utils/func";
const Softskills = () => {
  return (
    <section className="min-[320px]:h-[70vh] md:h-[100vh] lg:h-[100vh] relative flex items-center justify-evenly">
      <h1 className="min-[320px]:text-xl absolute top-10 md:text-6xl lg:text-6xl">
        hmm, let&apos;s check my journey so far
      </h1>
      <div className="bg-lime-200 min-[320px]:top-48 min-[320px]:h-60 min-[320px]:w-72 md:h-96 md:w-80 lg:h-96 lg:top-28 lg:w-80 absolute lg:left-40 -z-30">
        {/* <p className="bg-lime-200">what is my softskills ?</p> */}
      </div>
      <div className="">
        <img
          src="https://wallpapercave.com/wp/wp1815113.jpg"
          alt=""
          className=" min-[320px]:w-[350px] md:w-[500px] lg:w-[500px] rounded"
        />
      </div>
      <div className="bg-lime-200 min-[320px]:bottom-48 min-[320px]:h-60 min-[320px]:w-72 md:h-96 md:w-80 lg:h-96 lg:w-80 lg:top-28 absolute lg:right-40 -z-30">
        {/* <p className="bg-lime-200">what is my softskills ?</p> */}
      </div>
      <button
        onClick={scrollToTarget}
        className="rounded border border-gray-400 p-3 hover:bg-lime-200 hover:border-none absolute bottom-5 md:text-4xl lg:text-4xl"
      >
        let&apos;s check it out!
      </button>
    </section>
  );
};

export default Softskills;
