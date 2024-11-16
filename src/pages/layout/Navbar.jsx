import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward, IoMdNotificationsOutline } from "react-icons/io";
import Image from "../../components/Image";
import avatar from "/vite.svg";
import axios from "axios";
import { baseUrl } from "../../config/config";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setIsOpen, isOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  // handle logout
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseUrl}/users/logout`,
        {},
        {
          headers: {
            Authorization: Cookies.get("accessToken"),
          },
        }
      );

      if (res.data.statusCode === 200) {
        Cookies.remove("accessToken");
        navigate("/login");
      }
    } catch (error) {}
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
        <div className="flex items-center justify-between gap-x-3">
          <h4>John Doe</h4>
          {/* <IoIosArrowForward className="text-primary group-hover:text-white text-2xl cursor-pointer" /> */}
          <button
            className="bg-secondary px-4 py-2 text-white rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
