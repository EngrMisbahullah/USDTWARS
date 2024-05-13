"use client";
import React, { useState } from "react";
import ResetPassword from "./ResetPassword";

export default function ForgetPassword() {
  const [isHidden, setIsHidden] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
  };

  const handleContinue = () => {
    setShowResetPassword(true);
  };

  if (isHidden) {
    return null; // This will render nothing if isHidden is true
  }
  
  return (
    <div className="flex justify-center pt-8">
      {!showResetPassword && (
        <div className="w-80 h-full lg:w-[500px] pb-2 bg-[#203744] rounded-[5px]">
          <div className="flex justify-between p-2">
            <div className="flex flex-row items-center">
              <h1 className="text-white text-[18px] font-bold ">
                Forget Password
              </h1>
            </div>
            <button onClick={handleClose}>
              <img
                alt="Image"
                className="w-[23px] h-[23px] lg:w-[30px] lg:h-[30px]"
                src="/wallet/X.png"
              />
            </button>
          </div>
          <div className="p-4 flex-col">
            <div className="flex lg:pl-2 pl-1 items-start gap-x-1">
              <h1 className="text-start flex text-zinc-100 text-[15px] lg:text-[20px] font-bold font-['Arial']">
                Email
              </h1>
              <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-rose-500 rounded-full"></div>
            </div>
            <div className="flex justify-center items-center">
              <input
                id="email"
                type="email"
                className="w-[290px] h-[30px] lg:w-[450px] lg:h-[35px]  bg-[#092637] rounded-[5px] border-2 border-zinc-300 border-opacity-50 pl-2 text-white"
              ></input>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="w-[290px] h-[33px] lg:w-[450px] lg:h-[50px]  flex justify-center items-center  bg-[#02FF68] rounded-[3px]"
              onClick={handleContinue}
            >
              <h1 className="text-black text-xs lg:text-[20px] font-bold font-['Arial']">
                Continue
              </h1>
            </button>
          </div>
        </div>
      )}
      {showResetPassword && <ResetPassword />}
    </div>
  );
}

