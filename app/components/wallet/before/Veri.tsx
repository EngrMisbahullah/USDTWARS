"use client";
import React, { useState } from "react";
import tab from "./Tab";
import Select_button from "./button";
import Deposit from "../after/Deposit";
export default function Verify() {

  const [showCard, setShowCard] = useState(true); // State to manage visibility of Card component
  const [showVerify, setShowVerify] = useState(false); // State to manage visibility of Verify component

  const handleSave = () => {
    setShowCard(false); // Hide Card component
    setShowVerify(true); // Show Verify component
  };


  

  return (
    <div className="  flex justify-center ">
      {showCard && (
        
     
      <div className=" bg-[#203744]  rounded-[5px]">
       
        {/* {Button Group} */}

       

        {/* {Button Group end} */}
        <div className=" flex justify-center pt-2 ">
          <div className=" bg-[#203744] lg:w-[460px]   rounded-[5px] border-2 border-[#D9D9D9] border-opacity-30">
            <h1 className=" ml-2 mt-2 text-white text-base lg:text-[20px] font-bold font-['Proxima Nova']">
              Verification
            </h1>
            <h1 className=" ml-2 text-white text-[11px] font-normal lg:text-[16px]  font-['Proxima Nova']">
              In the events your details changes, level one verifications
              <br />
              can be updated at the later time
            </h1>
            <div className="  ml-3 mt-5 w-[267px] lg:w-[430px]  h-[0px] border border-zinc-300"></div>

            {/* {Email} */}

            <div className=" flex  space-x-2 lg:space-x-7">
              <div className=" flex-col flex pl-2 pt-2">
                <div className=" flex items-start gap-x-1 ">
                  <div className="text-center">
                    <span className="text-white text-sm lg:text-[20px] font-bold pl-1 font-['Proxima Nova']">
                      First Name{" "}
                    </span>
                    <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                      *
                    </span>
                  </div>
                </div>
                {/* <div class="w-[300px] h-[30px] bg-teal-950 rounded-[5px] border-2 border-zinc-300 border-opacity-50"></div> */}
                <div>
                  <input
                    type="text"
                    id="firstname"
                    className=' text-white pl-2  w-[135px] h-[30px] lg:w-[200px] lg:h-[35px] bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"'
                  />
                </div>
              </div>
              <div className=" flex-col flex pt-2">
                <div className=" flex items-start gap-x-1">
                  <div className="text-center">
                    <span className="text-white text-sm lg:text-[20px] pl-1 font-bold font-['Proxima Nova']">
                      Last Name
                    </span>
                    <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                      *
                    </span>
                  </div>
                </div>
                {/* <div class="w-[300px] h-[30px] bg-teal-950 rounded-[5px] border-2 border-zinc-300 border-opacity-50"></div> */}
                <div>
                  <input
                    type="text"
                    id="lastname"
                    className=' text-white pl-2  w-[135px] h-[30px] lg:w-[200px] lg:h-[35px] bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"'
                  />
                </div>
              </div>
            </div>

            {/* {Email Ends} */}

            {/* {Date of Birth} */}

            <div className=" flex  space-x-2">
              <div className=" flex-col flex pl-2 pt-2">
                <div className=" flex items-start gap-x-1">
                  <div className="text-center">
                    <span className="text-white text-sm lg:text-[20px] font-bold font-['Proxima Nova'] pl-1">
                      Date of Birth{" "}
                    </span>
                    <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                      *
                    </span>
                  </div>
                </div>
                {/* <div class="w-[300px] h-[30px] bg-teal-950 rounded-[5px] border-2 border-zinc-300 border-opacity-50"></div> */}
                <div>
                  <input
                    type="date"
                    id="date"
                    className='  text-white pl-2  w-[276px] h-[32px] lg:w-[430px] lg:h-[35px] pr-2 bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"'
                  />
                </div>
              </div>
            </div>

            {/* {Date of Birth} */}
            {/* {Country} */}

            <div className=" flex  space-x-2">
              <div className=" flex-col flex pl-2 pt-2">
                <div className=" flex items-start gap-x-1">
                  <div className="text-center">
                    <span className="text-white text-sm lg:text-[20px] font-bold font-['Proxima Nova'] pl-1">
                      Country
                    </span>
                    <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                      *
                    </span>
                  </div>
                </div>
                {/* <div class="w-[300px] h-[30px] bg-teal-950 rounded-[5px] border-2 border-zinc-300 border-opacity-50"></div> */}
                <div>
                  <input
                    type="country"
                    id="country"
                    className=' text-white pl-2  w-[276px] h-[32px] lg:w-[430px] lg:h-[35px] pr-2 bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"'
                  />
                </div>
              </div>
            </div>

            {/* {Country} */}
            {/* {Residential address} */}

            <div className=" flex  space-x-2">
              <div className=" flex-col flex pl-2 pt-2">
                <div className=" flex items-start gap-x-1">
                  <div className="text-center">
                    <span className="text-white text-sm lg:text-[20px] font-bold font-['Proxima Nova'] pl-1">
                      Residential Address
                    </span>
                    <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                      *
                    </span>
                  </div>
                </div>
                {/* <div class="w-[300px] h-[30px] bg-teal-950 rounded-[5px] border-2 border-zinc-300 border-opacity-50"></div> */}
                <div>
                  <input
                    type="country"
                    id="country"
                    className=' text-white pl-2  w-[276px] h-[32px] lg:w-[430px] lg:h-[35px] pr-2 bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"'
                  />
                </div>
              </div>
            </div>

            {/* {Residential address ends} */}

            {/* {City and Postal Code} */}

            <div className=" flex  space-x-2 lg:space-x-7">
              <div className=" flex-col flex pl-2 pt-2">
                <div className=" flex items-start gap-x-1">
                  <div className="text-center">
                    <span className="text-white text-sm lg:text-[20px] font-bold font-['Proxima Nova'] pl-1">
                      City
                    </span>
                    <span className="text-rose-500 text-sm  lg:text-[20px] font-bold font-['Proxima Nova']">
                      *
                    </span>
                  </div>
                </div>
                {/* <div class="w-[300px] h-[30px] bg-teal-950 rounded-[5px] border-2 border-zinc-300 border-opacity-50"></div> */}
                <div>
                  <input
                    type="text"
                    id="firstname"
                    className=' text-white pl-2  w-[134px] h-[30px] lg:w-[200px] lg:h-[35px] bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"'
                  />
                </div>
              </div>
              <div className=" flex-col flex pt-2">
                <div className=" flex items-start gap-x-1">
                  <div className="text-center">
                    <span className="text-white text-sm lg:text-[20px] font-bold font-['Proxima Nova'] pl-1">
                      Postal Code
                    </span>
                    <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                      *
                    </span>
                  </div>
                </div>
                {/* <div class="w-[300px] h-[30px] bg-teal-950 rounded-[5px] border-2 border-zinc-300 border-opacity-50"></div> */}
                <div>
                  <input
                    type="text"
                    id="lastname"
                    className=' text-white pl-2  w-[134px] h-[30px] lg:w-[200px] lg:h-[35px] bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"'
                  />
                </div>
              </div>
            </div>

            {/* {City and Postal Code} */}

            {/* {Residential address} */}

            <div className=" flex  space-x-2">
              <div className=" flex-col flex pl-2 pt-2">
                <div className=" flex items-start gap-x-1">
                  <div className="text-center">
                    <span className="text-white text-sm lg:text-[20px] font-bold font-['Proxima Nova'] pl-1">
                      Occupation (Your job/work)
                    </span>
                    <span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">
                      *
                    </span>
                  </div>
                </div>
                {/* <div class="w-[300px] h-[30px] bg-teal-950 rounded-[5px] border-2 border-zinc-300 border-opacity-50"></div> */}
                <div>
                  <input
                    type="country"
                    id="country"
                    className=' text-white pl-2  w-[276px] h-[32px] lg:w-[430px] lg:h-[35px] pr-2  bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"'
                  />
                </div>
              </div>
            </div>

            {/* {Residential address ends} */}

            {/* {Bottom} */}

            <div className=" flex justify-center pt-[9px]">
              <div className="w-[298px] h-12 bg-[#203744] lg:w-[460px]  rounded-[2px] justify-between pl-2 pr-1 border-[1px] border-[#D9D9D9] border-opacity-30 flex items-center">
                <div className=" text-white text-[10px] lg:text-[13px]  font-bold font-['Arial']">
                  All data is safely stored and encrypted
                </div>
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
       {showVerify && <Deposit/> }
    </div>
  );
}

