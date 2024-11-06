import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const SideLink = ({ icon: Icon, path, title }) => {
  return (
    <section className="flex items-center justify-between mt-6 group hover:bg-secondary hover:text-white p-3 rounded-lg transition-all duration-300 ease-linear">
      <section className="flex items-center gap-x-3">
        <div>
          <Icon className="text-text group-hover:text-white text-2xl" />
        </div>
        <h3 className="text-primary group-hover:text-white text-base font-inter font-medium ">
          <Link to={path}>{title}</Link>
        </h3>
      </section>
      <section>
        <IoIosArrowForward className="text-text group-hover:text-white text-2xl cursor-pointer" />
      </section>
    </section>
  );
};

export default SideLink;
