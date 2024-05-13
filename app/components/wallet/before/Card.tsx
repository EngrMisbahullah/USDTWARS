"use client";
import React, { useState } from "react";
import tab from "./Tab";
import Select_button from "./button";
import Verify from "./Veri";
export default function Card() {
  const [showCard, setShowCard] = useState(true); // State to manage visibility of Card component
  const [showVerify, setShowVerify] = useState(false); // State to manage visibility of Verify component

  const handleSave = () => {
    setShowCard(false); // Hide Card component
    setShowVerify(true); // Show Verify component
  };

  return (
    <div >
      {showCard && (
        
   
      <div className=" bg-[rgb(32,55,68)] rounded-[5px] pt-4">
       
        {/* {Button Group end} */}
<div className=" flex justify-center pt-2 lg:mt-2">
        <div className="w-[298px] lg:w-[460px] lg:h-full  h-48 bg-[#203744] rounded-[5px] border-2 border-[#D9D9D9] border-opacity-30">

        <div className=" ml-2 mt-2 text-white text-base lg:text-[20px] font-bold font-['Proxima Nova']">Email</div>
        <div className=" ml-2  text-white text-xs lg:pt-2 lg:text-[17px] font-normal font-['Proxima Nova']">In order to deposit you need to verify your account</div>
        <div className="  ml-3 mt-5 w-[267px] lg:w-[430px]  h-[0px] border border-zinc-300"></div>

{/* {Email} */}



<div className=" flex-col flex pl-3 pt-2 lg:pt-5">
          <div className=" flex items-start gap-x-1">
          <div className="text-center"><span className="text-white text-sm lg:text-[20px] font-bold font-['Proxima Nova']">Email </span><span className="text-rose-500 text-sm font-bold font-['Proxima Nova']">*</span></div>
          
          </div>
          {/* <div class="w-[300px] h-[30px] bg-teal-950 rounded-[5px] border-2 border-zinc-300 border-opacity-50"></div> */}
          <div>
            <input
              type="text"
              id="email"
              className=' text-white pl-2  w-[264px] lg:w-[430px] lg:h-[35px] h-[30px] bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"'
            />
          </div>
        </div>





{/* {Email Ends} */}




<div className=" flex justify-center pt-[9px] lg:pt-[35px]">
<div className="w-[298px] lg:w-[460px]  justify-between h-12 bg-[#203744] rounded-[2px] border-[1px] border-[#D9D9D9] border-opacity-30 flex items-center">

{/* {Open Gmail} */}
<div className="w-[103px] h-[35px] ml-1 ">
    <button className="w-[103px] h-[35px]  bg-blue-500 rounded-[3px] flex justify-center items-center">
    <h1 className=" text-center text-white text-[13px] font-bold font-['Proxima Nova']">Open Gmail</h1>
    </button>
</div>
{/* {Open Gmail} */}
<div className=" flex flex-row space-x-2">
  <div className=" flex items-center">
<button className="   text-center  text-white text-xs font-bold font-['Proxima Nova']">Resend Email</button>
</div>
{/* {Save} */}
<div className=" pr-1">
    <button
    onClick={handleSave}
    className="lg:w-[103px] w-[90px]  h-[33px] bg-[#02FF67] rounded-[3px]  flex justify-center items-center">
    <h1 className=" text-center text-[#203744] text-[15px] font-bold font-['Proxima Nova']">Save</h1>
    </button>
    </div>
{/* {Save} */}
</div>


</div>
</div>
















        </div>
        </div>





       

      </div>
         )}
         {  showVerify && <Verify/> }
    </div>
  );
}
