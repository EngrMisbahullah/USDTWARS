import React from "react";

export default function JoiningTimer() {
  return (
    <div className=" flex justify-center items-center pt-16">
      <div className=" flex justify-center w-[328px] h-[244px]  lg:w-[780px] lg:h-[444px]  bg-[#071D2A] ">
        <div className="flex-col items-center flex  lg:space-y-3 lg:mt-5  ">
          <h1 className=" text-xl  text-white font-black pt-5 lg:text-[45px] ">
            Player join to game you created
          </h1>
          <h1 className="text-white font-light text-[22px] lg:text-[40px]">Time Left:</h1>
          <div className=" w-[179px] flex justify-center items-center  h-[97px]  rounded-md lg:w-[280px] lg:h-[124px] bg-[#1A2C38] ">
            <h1 className=" text-white  text-[90px] font-normal lg:text-[110px]">
              3:00
            </h1>
          </div>

          <div>
            <button className=" w-[228px]  h-[44px] rounded-[5px] mt-[5px] lg:w-[444px] lg:h-[80px] lg:mt-[15px]  bg-[#1475E1] ">
              <h1 className=" text-xl font-bold text-white rounded-[10px] lg:text-[30px] lg:font-black ">
                GO TO
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
