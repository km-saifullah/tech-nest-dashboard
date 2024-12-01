import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import avatar from "/avatar.svg";
import { GrUploadOption } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";
import { useUpdateProfileMutation } from "../../redux/apiSlice";

const Profile = () => {
  const [isLoading, setIsLodaing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const [updateProfile, { isLoading: profileLoading, data: profileData }] =
    useUpdateProfileMutation();

  // handle update user profile image
  const handleUpdateAvatar = async () => {
    if (!profileImage) {
      toast.warn("Please select a profile image first!", {
        position: "top-right",
        autoClose: 2500,
        theme: "dark",
      });
      return;
    }
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    try {
      const response = await updateProfile(formData).unwrap();
      toast.success("Profile image updated!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    } catch (error) {
      toast.error(error.data?.message || "Failed to update profile", {
        position: "top-right",
        autoClose: 2500,
        theme: "dark",
      });
    }
    setProfileImage(null);
  };

  // useEffect(() => {
  //   console.log(profileLoading, profileData);
  // }, [profileLoading, profileData]);

  return (
    <main className="bg-gray-200 mt-6 rounded-lg p-5">
      <ToastContainer />
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
          <div className="w-[400px] h-[400px] rounded-full bg-gray-200 flex justify-center items-center">
            <img
              src={avatar}
              alt="Not found"
              className="w-[200px] h-[200px] rounded-full object-cover"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-center font-sans">
              <label className="flex items-center gap-3 px-6 py-2 border-2 border-primary rounded-lg cursor-pointer text-heading hover:bg-indigo-50 transition-all">
                <GrUploadOption />
                <p>upload avatar</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProfileImage(e.target.files[0])}
                  className="hidden"
                />
              </label>
              {profileImage && <p>{profileImage.name}</p>}
            </div>
            <div>
              <button
                className="p-3 bg-secondary hover:bg-primary text-white w-full rounded-xl font-inter font-normal text-base hover:transition-all hover:duration-500 hover:ease-in-out"
                onClick={handleUpdateAvatar}
              >
                {profileLoading ? "Uploading..." : "Update Avatar"}
              </button>
            </div>
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
              Update Profile
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Profile;
