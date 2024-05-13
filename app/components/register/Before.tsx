"use client";
import React, { useState } from "react";
import New_Terms from "../Registration/New_Terms";
import SignIn from "../Registration/SignIn";
import RegAuth1 from "../Registration/RegAuth1";
export default function Before() {
  const [showPassword, setShowPassword] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false); // State to track invalid username
  const [invalidPasswordLength, setInvalidPasswordLength] = useState(false); // State to track invalid password length
  const [showNewTerms, setShowNewTerms] = useState(false); // State to track visibility of New_Terms component
  const [showBefore, setShowBefore] = useState(true)
  const [showSignIn, setShowSignIn] = useState(false); // State to control SignIn component visibility

  const handleSignInClick = () => {
    setShowBefore(false); // Hide Before component
    setShowSignIn(true); // Show SignIn component
  };
  const handleContinue = () => {
    setShowNewTerms(true); // Show New_Terms component when Continue button is clicked
    setShowBefore(false);
  };

  

  const handleClose = () => {
    setIsHidden(true);
  };

  if (isHidden) {
    return null; // This will render nothing if isHidden is true
  }

  const handleEmailChange = (event: any) => {
    // Check if email is already in use (e.g., make an API call)
    const email = event.target.value;
    if (email === "example@example.com") {
      // Replace with actual logic to check email availability
      setEmailInUse(true);
    } else {
      setEmailInUse(false);
    }
  };

  const handlePasswordChange = (event: any) => {
    // Check if password is at least 8 characters long
    const password = event.target.value;
    if (password.length < 8) {
      setInvalidPasswordLength(true);
    } else {
      setInvalidPasswordLength(false);
    }
  };

  const handleUsernameChange = (event: any) => {
    // Check if username contains invalid characters
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
 
        
      {showBefore && (
        
     
      <div className="w-80 h-full lg:w-[500px] bg-[#203744] rounded-[10px] flex flex-col">
        <div className="flex flex-row justify-between lg:space-x-24">
          <div className="flex flex-col pt-[14px]  lg:pl-28 pl-10 space-y-2">
            <h1 className="text-center text-white text-[19px] font-normal flex justify-center font-['Archivo Black']">
              Create an Account
            </h1>
            <h1 className="text-center text-[#ABB5CD] text-[17px] font-bold font-['Arial']">
              Step 1/2: Fill out your details
            </h1>
          </div>

          <div className="p-2">
            <button onClick={handleClose}>
              <img
                className="w-[23px] lg:w-[30px] lg:h-[30px]"
                src="/wallet/X.png"
                alt="Close"
              />
            </button>
          </div>
        </div>
        {/* Email */}
        <div className="flex-col flex pl-3 pt-6">
          <div className="flex items-start gap-x-1">
            <h1 className="text-start text-zinc-100 text-[15px] lg:text-[20px] font-bold font-['Arial']">
              Email
            </h1>
            <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-rose-500 rounded-full"></div>
          </div>
          <div>
            <input
              type="email"
              id="email"
              className="text-white pl-2 w-[300px] h-[30px] lg:w-[470px] lg:h-[35px] bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"
              onChange={handleEmailChange} // Add onChange event handler
            />
            {emailInUse && ( // Conditional rendering for email in use error message
              <p className="text-red-500 text-sm">Email already in use</p>
            )}
          </div>
        </div>
        {/* Username */}
        <div className="flex-col flex pl-3 pt-4">
          <div className="flex items-start gap-x-1">
            <div className="text-start text-zinc-100 text-[15px] lg:text-[20px] font-bold font-['Arial']">
              Username
            </div>
            <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-rose-500 rounded-full"></div>
          </div>
          <div>
            <input
              type="text"
              id="username"
              className="text-white pl-2 w-[300px] h-[30px] lg:w-[470px] lg:h-[35px] bg-[#092637] rounded-[5px] border-[1.5px] border-[#D9D9D9] border-opacity-50"
              onChange={handleUsernameChange} // Add onChange event handler
            />
            {invalidUsername && ( // Conditional rendering for invalid username error message
              <p className="text-red-500 text-sm">
                Username contains invalid characters
              </p>
            )}
          </div>
        </div>
        {/* Password */}
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
              onChange={handlePasswordChange} // Add onChange event handler
            />
            <button>
              <img
                className="w-5 h-5 lg:w-6 lg:h-6 left-[269px] lg:left-[440px] top-[5px] absolute"
                src="/wallet/eye.png"
                alt={showPassword ? "Hide Password" : "Show Password"}
              />
            </button>
            {/* {invalidPasswordLength && ( // Conditional rendering for invalid password length error message
              <p className="text-red-500  text-sm">Your password must be at least 8 characters long</p>
            )} */}
          </div>
        </div>

        {/* Date of Birth */}
        <div className="flex-col flex pl-3 pt-4">
          <div className="flex items-start gap-x-1">
            <div className="text-start text-zinc-100 text-[15px] lg:text-[20px] font-bold font-['Arial']">
              Date of Birth
            </div>
            <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-rose-500 rounded-full"></div>
          </div>
          <div className="w-[300px] h-[30px] relative">
            <input
              id="date"
              minLength={5}
              type="date"
              className="w-[300px] h-[30px] lg:w-[470px] lg:h-[35px] left-0 top-0 absolute text-white pl-2 pr-2 bg-[#092637] rounded-[5px] border-[2px] border-[#D9D9D9] border-opacity-50"
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center pt-[16px]">
          <button
        onClick={handleContinue}
          className="w-[300px] h-[38px] lg:w-[470px] lg:h-[40px] bg-[#02FF67] rounded-[5px] flex justify-center items-center">
            <h1 className="text-center text-slate-900 text-lg font-bold font-['Arial']">
              Continue
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
          <button className="w-[300px] h-10 lg:w-[470px] lg:h-[35px] bg-slate-600 rounded-[5px] flex justify-center items-center">
            <img
              className="w-[55px] h-[55px]"
              src="/wallet/google.png"
              alt="Google"
            />
          </button>
        </div>

        {/* Sign In */}
        <div className="flex justify-center">
        <div className="flex flex-row items-center pt-1 space-x-1">
          
              <h1 className="text-center text-[#ABB5CD] text-[15px] font-normal font-['Arial']">
                Already have an account?
              </h1>
            
            <button
            onClick={handleSignInClick}
            >
              <h1 className="text-center text-[#EEEEEE] text-[18px] font-black font-['Arial']">
                Sign In
              </h1>
            </button>
          </div>
        </div>
      </div>
       )}
      {showNewTerms && <RegAuth1 />}
      {showSignIn && <SignIn />}
    </div>
  );
}
