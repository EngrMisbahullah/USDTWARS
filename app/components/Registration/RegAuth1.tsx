"use client";
import React, { useState } from "react";
import New_Terms from "@/app/components/Registration/New_Terms" // Assuming you have this component

export default function RegAuth1() {
  const [isHidden, setIsHidden] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false); // New state for New_Auth component

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
        
   
      <div className="w-80 h-full lg:w-[500px] bg-[#203744] rounded-[5px]">
        <div className="flex justify-between p-2">
          <div className="flex flex-row items-center">
            <h1 className="text-white text-[13px] font-bold font-['Proxima Nova']">
              Register OAuth
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

        <div>
          <h1 className="text-center lg:text-[17px] text-zinc-100 text-[13px] font-bold font-['Arial']">
            Step 1/2: Fill out your details
          </h1>
        </div>

        <div className="pl-3 p-1 pt-4 ">
          <h1 className="text-white text-sm lg:text-[17px] font-bold font-['Arial'] pl-3">
            Please choose a display name
          </h1>
        </div>

        <div className="flex justify-center items-center flex-col">
          <input
            id="name"
            type="text"
            className="w-[290px] h-[30px] lg:w-[450px] lg:h-[35px] bg-[#092637] rounded-[5px] border-2 border-zinc-300 border-opacity-50 text-white"
          ></input>
        </div>

        <div className="flex justify-center p-2">
          <button
            className="w-[290px] h-[33px] mt-2 lg:w-[450px] lg:h-[40px] flex justify-center items-center bg-[#02FF68] rounded-[3px]"
            onClick={handleContinue}
          >
            <h1 className="text-black text-xs lg:text-[17px] font-bold font-['Arial']">
              Continue
            </h1>
          </button>
        </div>
      </div>
   )}
      {showResetPassword && <New_Terms/>}
    </div>
  );
}
