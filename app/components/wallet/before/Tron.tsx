"use client";
import React, { useState } from "react";
import tab from "./Tab";
import Select_button from "./button";
import NavigationMenuDemo from "../../Navigation";
import S_Withdraw from "../after/Withdraw";
export default function Tron() {
  const [showCard, setShowCard] = useState(true); // State to manage visibility of Card component
  const [showVerify, setShowVerify] = useState(false); // State to manage visibility of Verify component

  const handleSave = () => {
    setShowCard(false); // Hide Card component
    setShowVerify(true); // Show Verify component
  };


  return (
    <div className="  flex justify-center pt-4">
      {showCard && (
        
     
      
      <div className=" bg-[#203744] rounded-[5px]">
        <div className=" flex justify-center pt-2  gap-x-3">
          {/* {Dollar start} */}
          <div className="w-[100px] h-[52px] relative">
            <input
              type="text"
              id="text"
              className="w-[100px]  text-white  pl-2 h-[37px] left-0 top-[15px] absolute bg-[#092637] rounded-[5px] mt-1"
            />
            <h1 className="left-[2px] top-0 absolute text-center text-slate-300 text-xs lg:text-[15px] font-bold font-['Proxima Nova']  ">
              Currency
            </h1>
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
        <div className=" flex justify-center pt-5 ">
          <div className="w-[298px] lg:w-[460px] h-full bg-[#203744] rounded-[5px] border-2 border-[#D9D9D9] border-opacity-30">
            <div className=" ml-2 mt-2 text-white text-base lg:text-[20px] font-bold font-['Proxima Nova']">
              Verification
            </div>
            <div className=" ml-2 text-[#FFFFFF] text-[11px] lg:text-[15px] font-bold font-['Proxima Nova'] pt-1 lg:pt-2">
              One final step before you get started
            </div>
            <div className=" ml-2 lg:pt-2 text-white text-[11px] lg:text-[15px] font-normal font-['Proxima Nova'] pt-1">
              Please upload your proof of identity. All the documents
              <br />
              must be laying on the surface with all four corners inside
              <br />
              the frame. All information should be clear and identifiable.
            </div>

            <div className="  ml-3 mt-5 w-[267px] lg:w-[430px]  h-[0px] border border-zinc-300"></div>

            {/* {Country} */}

            <div className=" flex  space-x-2">
              <div className=" flex-col flex pl-2 pt-2 lg:mt-3">
                <div className=" flex items-start gap-x-1">
                  <div className="text-center">
                    <span className="text-white text-sm  lg:text-[20px] font-bold font-['Proxima Nova'] pl-1">
                      Proof of Identity(Front)
                    </span>
                    <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                      *
                    </span>
                  </div>
                </div>
                <div className="w-[273px] h-[30px] relative">
                  <input  className=" left-0 lg:mt-1 top-0 absolute  text-white pl-2  w-[276px] h-[32px] lg:w-[430px] lg:h-[35px] pr-2 bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50 " />
                  <button className=" left-[246px] lg:left-[400px] lg:top-[10px] top-[4px] absolute">
                    <img 
                    alt='Image'
                    className="w-[22px] h-[22px] "
                      src="/wallet/upload.png"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* {Country} */}

            {/* {Country} */}

            <div className=" flex  space-x-2">
              <div className=" flex-col flex pl-2 pt-2 lg:mt-4">
                <div className=" flex items-start gap-x-1">
                  <div className="text-center">
                    <span className="text-white text-sm lg:text-[20px] font-bold font-['Proxima Nova'] pl-1">
                      Proof of Identity(Back)
                    </span>
                    <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                      *
                    </span>
                  </div>
                </div>
                <div className="w-[273px] h-[30px] relative">
                  <input className=" left-0 top-0 absolute  text-white pl-2 lg:w-[430px] lg:h-[35px]  w-[276px] h-[32px] pr-2 bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50 " />
                  <button className=" left-[246px] top-[4px] absolute lg:left-[400px] lg:top-[5px]">
                    <img
                    alt='Image'
                    className="w-[22px] h-[22px]  "
                      src="/wallet/upload.png"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* {Country} */}
            <div className=" flex justify-center lg:mt-2">
              <h1 className="text-center pt-1 text-white lg:text-sm text-[10px]  font-bold font-['Proxima Nova']">
                Following file types are accepted, .png, .jpg, .pdf
              </h1>
            </div>
            {/* {Bottom} */}

            <div className=" flex justify-center pt-[9px]">
              <div className="w-[298px] h-12 bg-[#203744] rounded-[2px] lg:w-[460px] justify-between pl-2 pr-1 border-[1px] border-[#D9D9D9] border-opacity-30 flex items-center">
                <button className="text-center text-white text-sm font-bold font-['Proxima Nova']">
                  Back
                </button>
                {/* {Save} */}
                <div className=" ">
                  <button
                  onClick={handleSave}
                  className="w-[92px] h-[33px] bg-[#02FF67] rounded-[3px] flex justify-center items-center">
                    <h1 className=" text-center text-[#203744] text-[15px] font-bold font-['Proxima Nova']">
                      Continue
                    </h1>
                  </button>
                </div>
                {/* {Save} */}
              </div>
            </div>
            {/* {Bottom Ends} */}
          </div>
        </div>
      </div>
       )}
       {showVerify && <S_Withdraw/> }
    </div>
  );
}
{/* */}
