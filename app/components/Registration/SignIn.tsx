"use client";
import React, { useState } from "react";
import ForgetPassword from "./ForgetPassword";
import Before from "../register/Before";
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidPasswordLength, setInvalidPasswordLength] = useState(false);
  const [showNewTerms, setShowNewTerms] = useState(false);
  const [showBefore, setShowBefore] = useState(true);
  const [showSignIn, setShowSignIn] = useState(true);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleForgetPasswordClick = () => {
    setShowSignIn(false);
    setShowForgetPassword(true);
  };

  const handleRegisterClick = () => {
    setShowSignIn(false);
    setShowRegister(true);
  };

  const handleSignIn = () => {
    // Logic for signing in...
  };
  
  const handleContinue = () => {
    setShowNewTerms(true);
    setShowBefore(false);
  };

  const handleClose = () => {
    setIsHidden(true);
  };

  const handleEmailChange = (event:any) => {
    const email = event.target.value;
    if (email === "example@example.com") {
      setEmailInUse(true);
    } else {
      setEmailInUse(false);
    }
  };

  const handlePasswordChange = (event:any) => {
    const password = event.target.value;
    if (password.length < 8) {
      setInvalidPasswordLength(true);
    } else {
      setInvalidPasswordLength(false);
    }
  };

  const handleUsernameChange = (event:any) => {
    const username = event.target.value;
    const invalidCharsRegex = /[^a-zA-Z0-9_]/;
    if (invalidCharsRegex.test(username)) {
      setInvalidUsername(true);
    } else {
      setInvalidUsername(false);
    }
  };

  return (
    <div className="flex justify-center mt-[12px]">
        {showSignIn && (
            
        
      <div className="w-80 h-full lg:w-[500px] bg-[#203744] rounded-[10px] flex flex-col">
        <div className=" flex justify-end  p-1">
          <button onClick={handleClose}>
            <img
              className="w-[23px] lg:w-[30px] lg:h-[30px]"
              src="/wallet/X.png"
              alt="Close"
            />
          </button>
        </div>

        <div className="flex justify-center">
          <h1 className="text-center text-white text-[25px] flex justify-center font-bold">
            Sign In
          </h1>
        </div>

        {/* Email */}
        <div className="flex-col flex pl-3 pt-6">
          <div className="flex items-start gap-x-1">
            <h1 className="text-start text-zinc-100 text-[15px] lg:text-[20px] font-bold font-['Arial']">
              Email or Username
            </h1>
            <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-rose-500 rounded-full"></div>
          </div>
          <div>
            <input
              type="email"
              id="email"
              className="text-white pl-2 w-[300px] h-[30px] lg:w-[470px] lg:h-[35px] bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"
              onChange={handleEmailChange}
            />
            {emailInUse && (
              <p className="text-red-500 text-sm">Email already in use</p>
            )}
          </div>
        </div>

        {/* Password */}
        <div className="flex-col flex pl-3 pt-4">
          <div className="flex items-start gap-x-1">
            <div className="text-start text-zinc-100 text-[15px] lg:text-[20px] font-bold font-['Arial']">
              Password
            </div>
            <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-rose-500 rounded-full"></div>
          </div>
          <div className="w-[300px] h-[30px] relative">
            <input
              id="password"
              minLength={5}
              type={showPassword ? "text" : "password"}
              className="w-[300px] h-[30px] lg:w-[470px] lg:h-[35px] left-0 top-0 absolute text-white pl-2 bg-[#092637] rounded-[5px] border-[2px] border-[#D9D9D9] border-opacity-50"
              onChange={handlePasswordChange}
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              <img
                className="w-5 h-5 lg:w-6 lg:h-6 left-[269px] lg:left-[440px] top-[5px] absolute"
                src="/wallet/eye.png"
                alt={showPassword ? "Hide Password" : "Show Password"}
              />
            </button>
            {invalidPasswordLength && (
              <p className="text-red-500  text-sm ">
                Your password must be at least 8 characters long
              </p>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center pt-[16px]">
          <button
            onClick={handleContinue}
            className="w-[300px] h-[38px] lg:w-[470px] lg:h-[45px] pt-1 bg-[#02FF67] rounded-[5px] flex justify-center items-center"
          >
            <h1 className="text-center text-slate-900 text-lg font-bold ">
              Sign In
            </h1>
          </button>
        </div>

        {/* OR */}
        <div className="flex justify-center pt-[8px] pb-[3px]">
          <div className="text-white text-[15px] font-bold font-['Arial']">
            OR
          </div>
        </div>

        {/* Google Sign In */}
        <div className="flex justify-center">
          <button className="w-[200px] h-8 lg:w-[300px] p-2 lg:h-[40px] bg-slate-600 rounded-[5px] flex justify-center items-center">
            <img
              className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px]"
              src="/wallet/google.png"
              alt="Google"
            />
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleForgetPasswordClick}
          className="text-center text-white text-[15px] font-bold pt-1">
            Forget Password
          </button>
        </div>

        {/* Sign In */}
        <div className="flex justify-center">
          <div className="flex flex-row items-center pt-1 pb-1 space-x-1">
            <h1 className="text-center text-[#ABB5CD] text-[13px] lg:text-[15px] font-normal font-['Arial']">
              Don not have an account?
            </h1>

            <button
            onClick={handleRegisterClick}
            >
              <h1 className="text-center text-[#EEEEEE] text-[13px] lg:text-[15px] font-black font-['Arial']">
                Register an account
              </h1>
            </button>
          </div>
        </div>
      </div>
      )}
   {showForgetPassword && <ForgetPassword />}
      {showRegister && <Before />}

    </div>
  );
}
