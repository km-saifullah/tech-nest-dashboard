import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward, IoMdNotificationsOutline } from "react-icons/io";
import Image from "../../components/Image";
import avatar from "/vite.svg";

const Navbar = ({ setIsOpen, isOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="py-4 flex items-center justify-between">
      <section className="flex items-center gap-x-7">
        <div onClick={toggleSidebar}>
          <HiOutlineBars3CenterLeft className="w-[35px] h-[35px] text-primary cursor-pointer" />
        </div>
        <div className="flex items-center justify-between w-[300px] h-[52px] rounded-lg border border-borderColor p-4">
          <input
            type="text"
            className="outline-none text-text text-base font-normal font-inter"
            placeholder="Search.."
          />
          <IoSearchOutline className="w-[35px] h-[35px] text-text cursor-pointer" />
        </div>
      </section>
      <section className="flex items-center gap-x-3">
        <div className="h-[50px] w-[50px] bg-navIconBg rounded-full flex items-center justify-center p-3 cursor-pointer">
          <IoSettingsOutline className="text-primary text-2xl" />
        </div>
        <div className="h-[50px] w-[50px] bg-navIconBg rounded-full flex items-center justify-center p-3 cursor-pointer">
          <IoMdNotificationsOutline className="text-primary text-2xl" />
        </div>
        <div className="h-[50px] w-[50px] bg-navIconBg rounded-full flex items-center justify-center p-3 cursor-pointer">
          <Image imgSrc={avatar} imgAlt="avatar image not found" />
        </div>
        <div className="flex items-center justify-between">
          <h4>John Doe</h4>
          <IoIosArrowForward className="text-primary group-hover:text-white text-2xl cursor-pointer" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
