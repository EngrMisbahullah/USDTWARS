"use client";
import React, { useState } from "react";

export default function ResetPassword() {
  const [isHidden, setIsHidden] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [invalidPasswordLength, setInvalidPasswordLength] = useState(false); // State to track invalid password length

  const handlePasswordChange = (event:any) => {
    // Check if password is at least 8 characters long
    const password = event.target.value;
    if (password.length < 8) {
      setInvalidPasswordLength(true);
    } else {
      setInvalidPasswordLength(false);
    }
  };

  const handleClose = () => {
    setIsHidden(true);
  };

  if (isHidden) {
    return null; // This will render nothing if isHidden is true
  }

  return (
    <div className="flex justify-center pt-8">
      <div className="w-80 h-full lg:w-[500px] pb-2 bg-[#203744] rounded-[5px]">
        <div className="flex justify-between p-2">
          <h1 className="text-white text-[18px] font-bold">Reset Password</h1>
          <button onClick={handleClose}>
            <img
              alt="Close"
              className="w-[23px] h-[23px] lg:w-[30px] lg:h-[30px]"
              src="/wallet/X.png"
            />
          </button>
        </div>

        <div className="p-4 ">
          <div className="flex items-start gap-x-1 pt-4 pl-2 lg:pl-3">
            <h1 className="text-zinc-100 text-[15px] lg:text-[20px] font-bold font-['Arial']">
              New Password
            </h1>
            <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-rose-500 rounded-full"></div>
          </div>
          <div className="relative">
            <div className="flex items-center justify-between lg:pl-2">
              <input
                id="password"
                minLength={5}
                type={showPassword ? "text" : "password"}
                className="w-[290px] h-[30px] lg:w-[450px] lg:h-[35px] text-white pl-2 pr-10 bg-[#092637] rounded-[5px] border-[2px] border-[#D9D9D9] border-opacity-50"
                onChange={handlePasswordChange}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-2"
              >
                <img
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  src="/wallet/eye.png"
                  alt={showPassword ? "Hide Password" : "Show Password"}
                />
              </button>
            </div>
            {invalidPasswordLength && (
              <p className="text-red-500 text-sm">Your password must be at least 8 characters long</p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button className="w-[290px] h-[33px] lg:w-[450px] lg:h-[50px]  flex justify-center items-center bg-[#02FF68] rounded-[3px]">
            <h1 className="text-black text-xs lg:text-[20px] font-bold font-['Arial']">Continue</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
