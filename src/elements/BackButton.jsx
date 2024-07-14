import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  return (
    <div className="bg-white p-5">
      <NavLink
        to={"/"}
        className=" flex items-center gap-3 flex-wrap hover:underline hover:text-violet-400"
      >
        <FaArrowLeft size={18} />
        <h1>Back to Homepage</h1>
      </NavLink>
    </div>
  );
};

export default BackButton;
