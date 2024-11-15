import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { baseUrl } from "../../config/config";
import { ThreeDots } from "react-loader-spinner";

const Signup = () => {
  const [inputFields, setInputFields] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLodaing] = useState(false);

  // handle input fields
  const handleInput = (e) => {
    const inputFieldsInfo = { ...inputFields };
    inputFieldsInfo[e.target.name] = e.target.value;
    setInputFields(inputFieldsInfo);
  };

  // handle sign up
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setIsLodaing(true);
      const { fullName, email, password } = inputFields;
      if (!fullName || !email || !password) {
        setIsLodaing(false);
        toast.warn("Please fill in all required fields!", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
        });
        return;
      }

      // create user
      const res = await axios.post(`${baseUrl}/users`, inputFields, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Sign up successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // console.error("Error:", error.response.data.message);
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
        });
      } else {
        // console.error("An unexpected error occurred:", error.message);
        toast.error("Something went wrong!");
      }
    }
    setIsLodaing(false);
    setInputFields({
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
    });
  };
  return (
    <main>
      <ToastContainer />
      <section className="container">
        <section className="w-full h-[100vh] flex items-center justify-center">
          <section className="w-[560px] h-[760px] py-12 px-7 rounded shadow-md">
            <section className="space-y-3 pb-5">
              <h1 className="text-4xl font-inter font-bold text-heading">
                Sign Up
              </h1>
              <p className="text-text font-inter font-normal text-base">
                Please sign up your Admin Control Panel
              </p>
            </section>
            <section>
              <form action="">
                <div className="flex flex-col space-y-2 pb-6">
                  <label
                    htmlFor=""
                    className="text-primary font-inter font-normal text-base"
                  >
                    Full Name{" "}
                    <sup className="text-secondary font-semibold">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your fullname"
                    name="fullName"
                    value={inputFields.fullName}
                    onChange={handleInput}
                    className="w-full h-[60px] rounded border border-borderColor p-3 text-text text-base font-medium font-inter outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-2 pb-6">
                  <label
                    htmlFor=""
                    className="text-primary font-inter font-normal text-base"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={inputFields.phoneNumber}
                    onChange={handleInput}
                    className="w-full h-[60px] rounded border border-borderColor p-3 text-text text-base font-medium font-inter outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-2 pb-6">
                  <label
                    htmlFor=""
                    className="text-primary font-inter font-normal text-base"
                  >
                    Email Address{" "}
                    <sup className="text-secondary font-semibold">*</sup>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={inputFields.email}
                    onChange={handleInput}
                    className="w-full h-[60px] rounded border border-borderColor p-3 text-text text-base font-medium font-inter outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-2 pb-6">
                  <label
                    htmlFor=""
                    className="text-primary font-inter font-normal text-base"
                  >
                    Password{" "}
                    <sup className="text-secondary font-semibold">*</sup>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={inputFields.password}
                    onChange={handleInput}
                    className="w-full h-[60px] rounded border border-borderColor p-3 text-text text-base font-medium font-inter outline-none"
                  />
                </div>
                <div className="py-3">
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#db4444"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </div>
                  ) : (
                    <button
                      onClick={handleSignUp}
                      className="bg-secondary w-full h-[60px] text-center text-white font-inter font-normal rounded-lg cursor-pointer transition-all duration-300 ease-linear hover:bg-primary hover:text-white"
                    >
                      Sign Up
                    </button>
                  )}
                </div>
              </form>
              <div>
                <p className="text-center text-text font-inter font-normal text-base">
                  Already have and account?{" "}
                  <Link to="/login" className="text-primary">
                    Sign In
                  </Link>
                </p>
              </div>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Signup;
