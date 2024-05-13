import React from "react";

export default function CancellOption() {
  return (
    <div className=" flex justify-center items-center pt-10 ">
      <div className=" w-[328px] h-[244px] lg:space-y-28 lg:w-[780px]  lg:h-[444px] space-y-10 flex justify-center flex-col  bg-[#071D2A]">
        <div className=" items-center flex justify-center lg:pt-20">
          <h1 className=" text-2xl lg:text-[60px] lg:leading-[60px] lg: lg:pl-10 lg:pr-10 text-white font-bold text-center">
          Are you sure you want to leave?
          </h1>
        </div>

        <div className=" flex flex-row p-2 space-x-5 lg:space-x-9 justify-center  ">
          <button className=" w-[128px] h-[62px] lg:w-[318px] lg:h-[100px] bg-[#213743] rounded-[5px] flex justify-center items-center ">
            <h1 className="  text-white font-bold text-[25px] lg:text-[58px] ">
              YES
            </h1>
          </button>
          <button className=" w-[128px] h-[62px] lg:w-[318px] lg:h-[100px] bg-[#213743] rounded-[5px] flex justify-center items-center ">
            <h1 className="  text-white font-bold text-[25px] lg:text-[58px] ">
              NO
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}
