import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../../components/Image";
import { authSlice } from "../../redux/authSlice";
import avatar from "/avatar.svg";
import { useSelector } from "react-redux";

const Profile = () => {
  const auth = useSelector((state) => state.authSlice.user);
  return (
    <main className="bg-gray-200 mt-6 rounded-lg p-5">
      <section className="space-y-3">
        <h3 className="text-2xl text-primary font-semibold font-inter ">
          Edit Profile
        </h3>
        <ul className="flex items-center gap-x-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                }  `
              }
            >
              Home
            </NavLink>
          </li>
          <li>/</li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                } `
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="flex items-center justify-between gap-x-4">
        <section className="space-y-3 w-[50%] flex items-center justify-center flex-col">
          <div className="w-[400px] h-[400px] text-center">
            <Image imgSrc={auth?.profileImage || avatar} imgAlt="Not found" />
          </div>
          <div>
            <button className="p-3 bg-secondary hover:bg-primary text-white w-full rounded-lg font-inter font-normal text-base hover:transition-all hover:duration-500 hover:ease-in-out">
              Update Avatar
            </button>
          </div>
        </section>
        <section className="space-y-3 w-[50%]">
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor=""
              className="text-primary text-base font-medium font-inter"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full outline-none border border-borderColor p-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor=""
              className="text-primary text-base font-medium font-inter"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full outline-none border border-borderColor p-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor=""
              className="text-primary text-base font-medium font-inter"
            >
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="w-full outline-none border border-borderColor p-3 rounded-lg"
            />
          </div>
          <div>
            <button className="p-3 bg-secondary hover:bg-primary text-white w-full rounded-lg font-inter font-normal text-base hover:transition-all hover:duration-500 hover:ease-in-out">
              Update User Information
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Profile;
