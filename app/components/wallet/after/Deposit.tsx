"use client";

import React, { useState } from "react";
import Select_button from "../before/button";

import  NavigationMenuDemo  from "@/app/components/Navigation";
export default function Deposit() {

  




  return (
    <div className=" flex justify-center  pt-10 mb-14">
      <div className=" bg-[#203744] rounded-[5px]">
      
    
        {/* {Button Group end} */}

        <div className=" flex justify-center pt-2  gap-x-3">
          {/* {Dollar start} */}
          <div className="w-[100px] h-[52px] relative">
            <input
            
              className="w-[100px]  text-white  pl-2 h-[37px] left-0 top-[15px] absolute bg-[#092637] rounded-[5px] mt-1"
            />
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

          {/* left-0 top-[15px] absolute */}
        </div>

        {/* <NavigationMenuDemo/> */}

       

            {/* {Country} */}

            <div className="  lg:mt-6  pt-4">
              <div className=" flex-col flex pt-2">
                <div className=" flex  gap-x-1">
                <h1 className="  "><span className=" text-slate-300  text-xs lg:text-[20px] font-bold font-['Proxima Nova']">Your USD deposit address</span><span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">*</span></h1>

                </div>
                {/* <div class="w-[300px] h-[30px] bg-teal-950 rounded-[5px] border-2 border-zinc-300 border-opacity-50"></div> */}
          
                <div className="relative">
  <input
    className="text-white pl-2 w-[276px] h-[32px] lg:w-[450px] lg:h-[35px] pr-2 bg-[#47697B] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"
    type=""

  />
  <button className="absolute flex items-center justify-center bottom-0 right-0">
    <img
      alt='Image'
      className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
      src="/wallet/link.png"
    />
  </button>
</div>
             
              </div>
            </div>

            {/* {Country} */}
{/* {White Box} */}
<div className=" flex justify-center pt-3 lg:pt-5">
            <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-[5px]"></div>
            </div>
{/* {White Box End} */}



<div className="text-center text-slate-300 pt-2 text-[11px] lg:text-[15px] font-bold font-['Proxima Nova']">Only send USDT to this address, 2 confirmations require</div>


<div className="text-center"><span className="text-white text-xs lg:text-[15px] font-black font-['Proxima Nova']">1 USDT = 1 COIN OF </span><span className="text-green-500 text-xs font-black font-['Proxima Nova']">USDT</span><span className="text-white text-xs font-black font-['Proxima Nova']">WARS</span></div>



         
          </div>
        </div>
     
  );
}
