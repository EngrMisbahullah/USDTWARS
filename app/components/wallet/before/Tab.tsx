"use client";
import React, { useState, useEffect } from "react";
import button_box from "@/app/games/custom/button_box";
export default function Tab() {


  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
  };

  if (isHidden) {
    return null; // This will render nothing if isHidden is true
  }
  
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="w-[300px] h-[42px] bg-[#092637] rounded-[50px] mt-[40px] ml-[10px] flex justify-evenly items-center">
        <div className="  space-x-2 justify-center items-center flex" role="group">
          <button
            type="button"
            className="   w-[67px] h-[35px] text-xs font-bold      rounded-[50px]  text-white     focus:bg-[#2E4452] focus:text-white    "
          >
            Deposit
          </button>
          <button
            type="button"
            className="   w-[70px] h-[35px] text-xs font-bold      rounded-[50px]  text-white     focus:bg-[#2E4452] focus:text-white    "
          >
            Withdraw
          </button>
          <button
            type="button"
            className="   w-[75px] h-[35px] text-xs font-bold      rounded-[50px]  text-white     focus:bg-[#2E4452] focus:text-white    "
          >
            Buy Crypto
          </button>
          <button
            type="button"
            className="   w-[55px] h-[35px] text-xs font-bold      rounded-[50px]  text-white     focus:bg-[#2E4452] focus:text-white    "
          >
            Tip
          </button>
        </div>
      </div>
    </div>
  );
}
