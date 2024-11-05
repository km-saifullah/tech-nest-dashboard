import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [inputFields, setInputFields] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  // handle input fileds
  const handleInput = (e) => {
    const inputFieldsInfo = { ...inputFields };
    inputFieldsInfo[e.target.name] = e.target.value;
    setInputFields(inputFieldsInfo);
    e.preventDefault();
  };

  // handle sign up
  const handleSignUp = (e) => {
    console.log(inputFields);
    e.preventDefault();
  };
  return (
    <main className="">
      <section>
        <h1>Sign Up</h1>
        <p>Please sign up your Admin Control Panel</p>
      </section>
      <section>
        <form action="">
          <div>
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              name="fullName"
              value={inputFields?.fullName}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              name="phoneNumber"
              value={inputFields?.phoneNumber}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={inputFields?.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={inputFields?.password}
              onChange={handleInput}
            />
          </div>
          <div>
            <Link to="/">Forgot Pasword</Link>
          </div>
          <div>
            <button onClick={handleSignUp}>Log In</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Signup;
