import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../config/config";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";

const Login = () => {
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLodaing] = useState(false);

  // handle input fileds
  const handleLoginInput = (e) => {
    const loginInfo = { ...loginFields };
    loginInfo[e.target.name] = e.target.value;
    setLoginFields(loginInfo);
  };

  // handle sign in
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setIsLodaing(true);
      const { email, password } = loginFields;
      if (!email || !password) {
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
      const res = await axios.post(`${baseUrl}/users/login`, loginFields);
      if (res.data.statusCode === 200 && res.data.data.user.role === "admin") {
        Cookies.set("accessToken", res.data.data.token.accessToken, {
          expires: 1,
        });
        // dispatch(setAuth(res.data.data.user));
        toast.success("Sign In successful!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/");
        }, 1200);
      } else {
        toast.error("Unauthorized access", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
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
        toast.error("Something went wrong!");
      }
    }
    setIsLodaing(false);
    setLoginFields({
      email: "",
      password: "",
    });
  };
  return (
    <main>
      <ToastContainer />
      <section className="container">
        <section className="w-full h-[100vh] flex items-center justify-center">
          <section className="w-[560px] h-[560px] py-12 px-7 rounded shadow-md">
            <section className="space-y-3 pb-5">
              <h1 className="text-4xl font-inter font-bold text-heading">
                Login your account
              </h1>
              <p className="text-text font-inter font-normal text-base">
                Welcome back! Please enter Admin Panel details
              </p>
            </section>
            <section>
              <form action="">
                <div className="flex flex-col space-y-2 pb-6">
                  <label
                    htmlFor=""
                    className="text-primary font-inter font-normal text-base"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={loginFields?.email}
                    onChange={handleLoginInput}
                    className="w-full h-[60px] rounded border border-borderColor p-3 text-text text-base font-medium font-inter outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-2 pb-6">
                  <label
                    htmlFor=""
                    className="text-primary font-inter font-normal text-base"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={loginFields?.password}
                    onChange={handleLoginInput}
                    className="w-full h-[60px] rounded border border-borderColor p-3  text-text text-base font-medium font-inter outline-none"
                  />
                </div>
                <div className="flex items-center justify-end text-base text-primary font-inter font-normal">
                  <Link to="/">Forgot Pasword?</Link>
                </div>
                <div className="py-3">
                  <button
                    onClick={handleSignIn}
                    className="bg-secondary w-full h-[60px] text-center text-white font-inter font-normal rounded-lg cursor-pointer transition-all duration-300 ease-linear hover:bg-primary hover:text-white"
                  >
                    Log In
                  </button>
                </div>
              </form>
              <div>
                <p className="text-center text-text font-inter font-normal text-base">
                  Not registered?{" "}
                  <Link to="/signup" className="text-primary">
                    Create an Account
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

export default Login;
