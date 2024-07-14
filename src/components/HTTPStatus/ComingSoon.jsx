import UnderContruc from "./work-in-progress.png";
import BackButton from "../../elements/BackButton";

const ComingSoon = () => {
  return (
    <>
      <BackButton />
      <section className="bg-white h-auto flex items-center justify-center flex-col p-5">
        <img className="h-[25em]" src={UnderContruc} alt="" />
        <h1 className=" min-[320px]:text-4xl sm:text-3xl md:text-6xl lg:text-7xl">Under Constructions</h1>
      </section>
    </>
  );
};

export default ComingSoon;
