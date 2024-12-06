import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGetUsersQuery } from "../../redux/apiSlice";
import img from "/avatar.svg";

const Users = () => {
  const { data: users, isLoading: userLoad } = useGetUsersQuery();
  return (
    <main className="bg-gray-200 mt-6 rounded-lg p-5">
      <section className="space-y-3">
        <h3 className="text-2xl text-primary font-semibold font-inter">
          Users
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
              to="/users"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                } `
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="bg-white mt-6 p-5 rounded">
        <h3 className="text-xl text-primary font-semibold font-inter ">
          All Users
        </h3>
        <p className="text-sm text-text font-normal font-inter pt-2">
          Total Users: {users?.data?.length}
        </p>
        <section>
          <ul className="pt-4 w-full flex flex-col">
            {!userLoad &&
              users.data.map((user) => (
                <div
                  key={user?._id}
                  className="flex items-center justify-between py-3 gap-x-2"
                >
                  <li className="w-[10%]">
                    <img
                      src={user?.profileImage || img}
                      alt=""
                      className="bg-gray-200 w-[45px] h-[45px] rounded-full p-2"
                    />
                  </li>
                  <li className="text-base text-primary font-normal font-inter w-[30%] capitalize">
                    {user.fullName}
                  </li>
                  <li className="text-base text-primary font-normal font-inter w-[40%]">
                    {user.email}
                  </li>
                  <li className="text-base text-primary font-normal font-inter w-[20%]">
                    {user.phoneNumber}
                  </li>
                  <li className="text-base text-primary font-normal font-inter w-[20%]">
                    <span
                      className={`${
                        user.role === "user"
                          ? "bg-blue-400 text-white"
                          : "bg-secondary text-white"
                      } px-3 py-1   rounded-badge`}
                    >
                      {user.role === "user" ? "User" : "Admin"}
                    </span>
                  </li>
                  <li className="text-base text-primary font-normal font-inter w-[20%]">
                    <span
                      className={`${
                        user.emailVerified
                          ? "bg-[#92E3B8] text-primary"
                          : "bg-violet-400 text-white"
                      } px-3 py-1  rounded-badge font-medium`}
                    >
                      {user?.emailVerified ? "Verified" : "Unverified"}
                    </span>
                  </li>
                </div>
              ))}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Users;
