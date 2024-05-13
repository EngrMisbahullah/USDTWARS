"use client";
import React, { useState } from "react";
import Select_button from "../before/button";

import  NavigationMenuDemo  from "@/app/components/Navigation";
export default function S_Withdraw() {

  




  
  return (
    <div className="  flex justify-center">
      <div className=" bg-[#203744] rounded-[5px]">
        
        {/* {Button Group end} */}

        <div className=" flex justify-center pt-2  gap-x-3">
          {/* {Dollar start} */}
          <div className="w-[100px] h-[52px] relative">
            <input className="w-[100px]  text-white   pl-2 h-[37px] left-0 top-[15px] absolute bg-[#092637] rounded-[5px] mt-1" />
            <div className="left-[2px] top-0 absolute text-center text-slate-300 text-xs font-bold font-['Proxima Nova']  ">
              Currency
            </div>
            <img
            alt='Image'
            className="w-[30px]  h-[30px] left-[69px] top-[22px] absolute"
              src="/wallet/USDT2.png"
            />
          </div>
          {/* {Dollar end} */}

          {/* {Dollar start} */}
          <div className="w-[100px] h-[52px] relative">
            <div className=" left-0 top-[19px] absolute">
              <NavigationMenuDemo />
            </div>
            <div className="left-[2px] top-0 absolute text-center text-slate-300 text-xs font-bold font-['Proxima Nova']  ">
              Network
            </div>
          </div>
          {/* {Dollar end} */}
        </div>

        {/* <NavigationMenuDemo/> */}

        {/* {USDT ADDRESS} */}

        <div className=" ml-1 lg:mt-6  pt-4">
          <div className="w-[302px] h-[55px] relative">
            <h1 className=" pl-6">
              <span className="text-center text-slate-300 text-xs lg:text-[20px] font-bold font-['Proxima Nova']">
                USDT Address
              </span>
              <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                *
              </span>
            </h1>
            <img
            alt='Image'
            className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] lg:top-[-6px] left-0 top-0 absolute"
              src="/wallet/USDT2.png"
            />
            <input  className="w-[296px] h-8 left-[3px] lg:w-[460px]  lg:h-[35px] top-[23px] absolute bg-[#092637] rounded-[5px] border-2 border-zinc-300 border-opacity-50" />
            <button>
              <img
              alt='Image'
                className="w-[26px] h-[26px] left-[270px] lg:left-[430px]  top-[25px] absolute"
                src="/wallet/Copy.png"
              />
            </button>
          </div>
        </div>

        {/* {USDT ADDRES END} */}

        {/* {Amount} */}
        <div className=" ml-1 lg:mt-3  pt-4">
          <div className="w-[297px] h-[50px] relative">
            <div className=" ">
              <span className=" text-slate-300  pl-1 text-xs lg:text-[20px] font-bold font-['Proxima Nova']">
                Amount
              </span>
              <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                *
              </span>
            </div>

            <div className="w-[253px] h-8 left-[44px] top-[22px] lg:w-[420px]  lg:h-[35px] absolute bg-slate-700 rounded-[5px] border-zinc-300 border-opacity-50"></div>
            <button className="left-[259px] lg:left-[420px] top-[26px] absolute text-center text-white text-[15px] font-bold font-['Proxima Nova']">
              Max
            </button>
            <input alt='Image' className="w-[250px] h-8 left-[1px] top-[22px] lg:w-[385px]  lg:h-[35px] absolute bg-[#092637] rounded-[5px] border-2 border-zinc-300 border-opacity-50" />
            <img
            alt='Image'
            className="w-[26px] h-[26px] left-[225px] lg:left-[390px]  top-[25px] absolute"
              src="/wallet/USDT2.png"
            />
            <div className="left-[245px] lg:left-[370px] lg:w-[100px] lg:text-[15px] top-[6px] lg:top-[2px] absolute text-center text-[#D9D9D9] text-[10px]  font-bold font-['Proxima Nova']">
              0.00 USDT
            </div>
          </div>
        </div>
        {/* {Amount} */}

        {/* {Send Button} */}
        <div className=" flex lg:ml-[8px] ml-[15px] pt-8 ">
          <button className="w-[292px] lg:w-[460px] lg:h-[40px] h-8  bg-blue-500 rounded-[5px] border-zinc-300 border-opacity-50 flex justify-center items-center">
            <h1 className=" text-center text-white text-[17px] lg:text-[22px] font-bold font-['Proxima Nova']">
              Send
            </h1>
          </button>
        </div>
        {/* {Send Button Ends} */}

        {/* {TExt} */}

        <div className="flex lg:justify-center pb-2 flex-col pt-4">
          <div className=" flex flex-row justify-center">
            <span className=" flex items-center text-center text-white text-[8px] lg:text-[12px] font-bold font-['Proxima Nova']">
              Minimum withdrawal is 2.500
              <img className="w-6 h-6 ml-1" src="/wallet/USDT2.png" alt="." />
            </span>
            <span className=" flex items-center text-center lg:text-[12px] text-white text-[8px] font-bold font-['Proxima Nova']">
              Your withdrawal will have 1.000
              <img className="w-6 h-6 ml-1" src="/wallet/USDT2.png" alt="." />
            </span>
          </div>
          <div className=" flex justify-center">
            <span className=" flex items-center lg:text-[12px] text-center text-white text-[8px] font-bold font-['Proxima Nova']">
              subtracted from your remaining balance to cover the fee required
              to process the transaction.
            </span>
          </div>
        </div>

        {/* {TExt end} */}

        <div className="text-center">
          <span className="text-white text-xs lg:text-[15px] font-black font-['Proxima Nova']">
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
