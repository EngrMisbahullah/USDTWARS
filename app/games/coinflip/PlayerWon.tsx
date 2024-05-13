import React from "react";

const price = "$250,000.00";

export default function PlayerWon() {
  return (
    <div className=" flex justify-center items-center pt-10">
      <div className=" w-[280px] h-[268px] border-b-8 border-[#02FF68] flex space-y-8 justify-center items-center content-center flex-col bg-[#0F212E] rounded-[5px]">
        <h1 className=" text-[#02FF68] pt-5 text-3xl font-bold">You Won</h1>

        <h1 className=" w-16 h-[4px] bg-[#203744] text-white"></h1>

        <div className=" flex justify-center flex-row items-center  ">
          <h1 className=" text-xl font-semibold text-[#02FF68] ">{price}</h1>
          <img src="/wallet/usdt.png" alt="" className=" w-[53px] h-[53px] " />
        </div>
      </div>
    </div>
  );
}
