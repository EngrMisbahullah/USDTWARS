"use client";
import React, { useState } from "react";
import Select_button from "../before/button";

// import { NavigationMenuDemo } from "../custom/Navigation";
export default function Tip() {

  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
  };

  if (isHidden) {
    return null; // This will render nothing if isHidden is true
  }




  return (
    <div className=" flex justify-center  pt-4 ">
      <div className=" bg-[#203744] rounded-[5px]">
       
  

        {/* {Button Group end} */}

        <div className=" flex justify-center pt-2  gap-x-3">
          {/* {Dollar start} */}
          <div className="w-[100px] h-[52px] relative">
            <input
            
              className="w-[100px]  text-white  pl-2 h-[37px] left-0 top-[15px] absolute bg-[#092637] rounded-[5px] mt-1"
            />
            <h1 className="left-[22px] top-0 absolute text-center text-slate-300 text-xs font-bold font-['Proxima Nova']  ">
              Currency
            </h1>
            <img
            alt='Image'
            className="w-[30px]  h-[30px] left-[69px] top-[22px] absolute"
              src="/wallet/USDT2.png"
            />
          </div>
          {/* {Dollar end} */}


          {/* left-0 top-[15px] absolute */}
        </div>

        {/* <NavigationMenuDemo/> */}

       

            {/* {USDT ADDRESS} */}

            <div className=" flex ml-3 lg:ml-1 space-x-2 pt-3">
            <div className="w-[302px] h-[55px] relative">
            <div className=" pl-1"><span className="text-center text-slate-300 text-xs lg:text-[20px] font-bold font-['Proxima Nova']">Name</span><span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">*</span></div>
    <input className="w-[296px] h-8 pl-1 text-white left-[3px] top-[23px] lg:w-[450px]  lg:h-[35px] absolute bg-[#092637] rounded-[5px] border-2 border-zinc-300 border-opacity-50"/>
</div>
            </div>

            {/* {USDT ADDRES END} */}



{/* {Amount} */}
<div className=" flex ml-3 lg:ml-1 space-x-2 lg:pt-5 pt-3" >
<div className="w-[297px] h-[50px] relative">
<div className=" "><span className=" text-slate-300  pl-1 text-xs lg:text-[20px] font-bold font-['Proxima Nova']">Amount</span><span className="text-rose-500 text-sm lg:text-[20px] font-bold font-['Proxima Nova']">*</span></div>

    <div className="w-[253px] h-8 left-[44px] top-[22px] lg:w-[410px] lg:h-[35px] absolute bg-slate-700 rounded-[5px] border-zinc-300 border-opacity-50"></div>
    <button className="left-[259px] top-[26px] lg:left-[415px] absolute text-center text-white text-[15px] font-bold font-['Proxima Nova']">Min</button>
    <input className="w-[250px]  text-white  pl-1 h-8 left-[1px] lg:w-[390px]  lg:h-[35px] top-[22px] absolute bg-[#092637] rounded-[5px] border-2 border-zinc-300 border-opacity-50"/>
    <img alt='Image' className="w-[26px] h-[26px] left-[225px] lg:left-[390px] top-[24px] absolute" src="/wallet/USDT2.png" />
    {/* <div className="left-[245px] top-[6px] absolute text-center text-[#D9D9D9] text-[10px] font-bold font-['Proxima Nova']">0.00 USDT</div> */}
</div>
</div>
{/* {Amount} */}



{/* {Send Button} */}
<div className=" flex lg:ml-[10px] ml-4 pt-8 ">

    <button className="w-[292px] h-8  lg:w-[450px] lg:h-[40px] bg-[#F37543] rounded-[5px] border-zinc-300 border-opacity-50 flex justify-center items-center">
    <h1 className="text-center text-slate-800 text-[17px] lg:text-[22px] font-bold font-['Arial']">Tip</h1>
    </button>

</div>
{/* {Send Button Ends} */}











{/* {TExt} */}
<div className=" flex justify-start pl-4 pb-2">
<div className="w-[126px] lg:w-[400px] h-6 relative">
    <img alt='Image' className="w-6 h-6 lg:w-8 lg:h-8 lg:left-[150px] lg:top-[0px] left-[110px] top-[2px] absolute" src="/wallet/USDT2.png" />
    <h1 className="left-0 top-[6px] absolute text-center text-white text-[11px] lg:text-[15px] font-bold font-['Proxima Nova']">Minimum tip is 1.000</h1>
</div>
</div>
{/* {TExt end} */}




<div className="text-center"><span className="text-white text-xs lg:text-[15px] lg:mt-6 font-black font-['Proxima Nova']">1 USDT = 1 COIN OF </span><span className="text-green-500 text-xs font-black font-['Proxima Nova']">USDT</span><span className="text-white text-xs font-black font-['Proxima Nova']">WARS</span></div>



         
          </div>
        </div>
     
  );
}
