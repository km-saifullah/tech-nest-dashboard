import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "../../components/Image";
import avatar from "/avatar.svg";
import axios from "axios";
import { baseUrl } from "../../config/config";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = ({ setIsOpen, isOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const navigate = useNavigate();
  const auth = useSelector((state) => state.authSlice.user);

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
        <div
          className="relative h-[50px] w-[50px] bg-navIconBg rounded-full flex items-center justify-center p-3 cursor-pointer group"
          onClick={toggleDropdown}
        >
          <Image
            imgSrc={auth.profileImage || avatar}
            imgAlt="avatar image not found"
          />
          {isDropdownVisible && (
            <div className="absolute top-14 left-0 w-[120px] bg-navIconBg p-3 rounded-md shadow-md">
              <ul>
                <li>
                  <Link to="/profile" className="cursor-pointer">
                    See Profile
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-x-3">
          <h4 className="text-primary text-base font-inter font-medium">
            {auth?.fullName}
          </h4>
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
