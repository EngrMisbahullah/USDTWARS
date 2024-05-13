"use client";
import React, { useState } from "react";
import Select_button from "../before/button";

// import { NavigationMenuDemo } from "../custom/Navigation";
export default function Buy_Crypto() {


  return (
    <div className="  flex justify-center  ">
      <div className=" bg-[#203744] rounded-[5px]">
        {/* {Button Group end} */}

        {/* {USDT ADDRESS} */}

        <div className=" ml-2 lg:mt-6  pt-4 ">
          <div className=" h-[50px] relative">
            <h1 className="  ">
              <span className=" text-slate-300   pl-1 text-xs lg:text-[20px] font-bold font-['Proxima Nova']">
                Buy
              </span>
              <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                *
              </span>
            </h1>
            <div className="w-[253px] lg:w-[420px] lg:h-[35px] h-8 left-[43px] top-[22px] absolute  bg-slate-700 rounded-[5px] border-zinc-300 border-opacity-50"></div>
            <h1 className="left-[250px] top-[29px] lg:left-[415px] pl-[2px] absolute text-center text-white text-[13px] font-bold font-['Arial']">
              USDT
            </h1>
            <input type="text" id="text" className="w-[225px] lg:w-[385px]  lg:h-[35px] h-8 left-0 top-[22px]  absolute bg-[#092637] rounded-[5px] border-2 border-zinc-300 border-opacity-50" />
            <img
            alt='Image'
            className="w-[26px] h-[26px] left-[228px] lg:left-[390px] top-[25px]  absolute"
              src="/wallet/USDT2.png"
            />
          </div>
        </div>

        {/* {USDT ADDRES END} */}

        {/* {USDT ADDRESS} */}

        <div className=" ml-2 lg:pt-8 pt-5 ">
          <div className=" h-[50px] relative">
            <h1 className="  ">
              <span className=" text-slate-300   pl-1 text-xs lg:text-[20px] font-bold font-['Proxima Nova']">
                Pay with USD
              </span>
              <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                *
              </span>
            </h1>
            <div className="w-[253px] lg:w-[420px] lg:h-[35px] h-8 left-[43px] top-[22px] absolute  bg-slate-700 rounded-[5px] border-zinc-300 border-opacity-50"></div>
            <h1 className="left-[250px] top-[29px] lg:left-[415px] pl-[2px] absolute text-center text-white text-[13px] font-bold font-['Arial']">
              USDT
            </h1>
            <input alt='Image' className="w-[225px] lg:w-[385px]  lg:h-[35px] h-8 left-0 top-[22px]  absolute bg-[#092637] rounded-[5px] border-2 border-zinc-300 border-opacity-50" />
            <img
            alt='Image'
            className="w-[26px] h-[26px] left-[228px] lg:left-[390px] top-[25px]  absolute"
              src="/wallet/USDT.png"
            />
          </div>
        </div>

        {/* {USDT ADDRES END} */}

        {/* {Send Button} */}
        <div className=" flex ml-2 pt-6 pb-5 ">
          <button className="w-[296px] h-8 lg:w-[465px] lg:h-[45px] bg-[#02FF67] rounded-[5px] border-zinc-300 border-opacity-50 items-center flex justify-center ">
            <h1 className="text-center text-slate-800 text-[19px] lg:text-[22px] font-bold font-['Proxima Nova']">
              Buy
            </h1>
          </button>
        </div>
        {/* {Send Button Ends} */}

        {/* {TExt} */}
        <div className=" flex justify-center pb-2">
          <div className="text-center text-gray-200 text-[11px] lg:text-[15px] font-bold font-['Proxima Nova']">
            The services doesn’t support right now, coming soon.
          </div>
        </div>
        {/* {TExt end} */}

        <div className="text-center">
          <span className="text-white text-xs font-black font-['Proxima Nova']">
            1 USDT = 1 COIN OF{" "}
          </span>
          <span className="text-green-500 text-xs font-black font-['Proxima Nova']">
            USDT
          </span>
          <span className="text-white text-xs font-black font-['Proxima Nova']">
            WARS
          </span>
        </div>
      </div>
    </div>
  );
}
