import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });

  // handle input fileds
  const handleLoginInput = (e) => {
    const loginInfo = { ...loginFields };
    loginInfo[e.target.name] = e.target.value;
    setLoginFields(loginInfo);
    e.preventDefault();
  };

  // handle sign up
  const handleSignUp = (e) => {
    console.log(loginFields);
    setLoginFields({
      email: "",
      password: "",
    });
    e.preventDefault();
  };
  return (
    <main>
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
                    onClick={handleSignUp}
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
