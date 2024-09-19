import { Link } from "react-router-dom";
import Tag from "../../elements/Tag";

// eslint-disable-next-line react/prop-types
const Layout = ({ id, Path, image, title, name }) => {
  return (
        <div
          key={id}
          style={{ transition: "all 0.2s ease" }}
          className="card hover:scale-[1.02] rounded-md h-[25em]"
        >
          <Link to={`${Path}`} target="_blank">
            <img
              loading="lazy"
              src={image}
              alt={title}
              className="object-cover object-center w-full h-60 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-3 space-y-8">
              <div className="space-y-2">
                <h2 className="line-clamp-1 text-md font-semibold tracking-wide">
                  {title}
                </h2>
                <div className="">
                  {name.map((tag) => (
                    <>
                      <Tag name={tag} />
                    </>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="absolute bottom-0 left-0 bg-violet-400 rounded flex items-center justify-center w-full p-2 font-semibold dark:bg-violet-400 dark:text-gray-900 text-sm hover:bg-violet-200 hover:text-opacity-45"
              >
                Preview
              </button>
            </div>
          </Link>
        </div>
  );
};

export default Layout;
