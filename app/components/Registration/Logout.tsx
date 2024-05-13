"use client";
import React, { useState } from "react";

export default function Logout() {
  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
  };

  if (isHidden) {
    return null; // This will render nothing if isHidden is true
  }

  return (
    <div className="flex justify-center pt-8">
      <div className="w-80 h-[219px] lg:w-[440px]  bg-[#203744] rounded-[5px] flex-col flex">
        <div className="flex justify-between p-2">
          <div className="flex flex-row items-center">
            <img
            alt='Image'
            className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] "
              src="/wallet/logout.png"
            />
            <h1 className="text-white text-[21px] font-bold font-['Proxima Nova']">
              Logout
            </h1>
          </div>

          <button onClick={handleClose}>
            <img
            alt='Image'
            className="w-[23px] h-[23px] lg:w-[30px] lg:h-[30px] "
              src="/wallet/X.png"
            />
          </button>
        </div>

        <div className="flex pl-3 pr-3 pt-8">
          <h1 className="text-white text-[15px] lg:text-[17px] font-normal font-['Proxima Nova']">
            Have a Great day we hope to see you again with our new games coming
            soon!!!
          </h1>
        </div>

        <div className="flex justify-center pt-8">
          <button className="w-[250px] h-[45px] lg:w-[420px] lg:h-[50px]  flex justify-center items-center bg-red-600 rounded-[5px]">
            <h1 className="text-center text-white text-base lg:text-[17px] font-bold font-['Proxima Nova']">
              Logout
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}
