"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Archivo } from "next/font/google";
import { Aoboshi_One } from "next/font/google";
import Coins from "./Coins";
import Rotate from "./Rotate";
import Waiting from "./Waiting";
import CommisionSys from "./CommisionSys";
import Price from "./PriceRanges";
import Join from "./Join";
const aoboshi = Aoboshi_One({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const archivo = Archivo({ subsets: ["latin"], weight: "900" });
// export default function After_Signin_bag() {
//   const [state, setstate] = useState(false);
//   const setHandle = () => {
//     setstate(true);
//   };
//   console.log(state);
//   return (
//     <>
//       <div className=" flex flex-col pb-3 lg:w-[750px] space-x-2 ">
//         <div className=" pt-[17px] flex justify-center ">
//           <div className="w-[311.24px] flex justify-center   bg-[#203744] rounded-[5px] border border-green-500">
//             <div
//               className={` text-center  text-white text-xs font-normal flex items-center ${inter.className}`}
//             >
//               COMMISSION SYSTEM TOTAL 8%
//             </div>
//           </div>
//         </div>

//         <div
//           className={`"text-center text-white text-lg lg:text-2xl font-black ${archivo.className} pl-[9px]`}
//         >
//           Backgammon
//         </div>

//         <div className=" flex justify-center ml-2 mr-2">
//           <div className="w-screen  h-[479px] bg-[#203744] rounded-[5px] pt-[2px]">
//             <div className="text-center pl-[10px] lg:text-xl  pt-[7px] text-white text-base font-black font-['Proxima Nova Condensed'] flex justify-start">
//               OPEN GAMES
//             </div>
//             <div className=" flex justify-center pt-[4px]">
//               <div className="w-[290px] h-5 relative ">
//                 <div className="w-[54px] h-5 left-0 top-0 absolute">
//                   <div className="w-[54px] h-5 left-0 top-0 absolute bg-white rounded-[5px]"></div>
//                   <div className="w-[52px] h-[18px] left-[1px] top-[1px] absolute bg-slate-800 rounded-[5px]"></div>
//                 </div>
//                 <div className="w-[54px] h-5 left-[59px] top-0 absolute">
//                   <div className="w-[54px] h-5 left-0 top-0 absolute bg-white rounded-[5px]"></div>
//                   <div className="w-[52px] h-[18px] left-[1px] top-[1px] absolute bg-slate-800 rounded-[5px]"></div>
//                 </div>
//                 <div className="w-[54px] h-5 left-[118px] top-0 absolute">
//                   <div className="w-[54px] h-5 left-0 top-0 absolute bg-white rounded-[5px]"></div>
//                   <div className="w-[52px] h-[18px] left-[1px] top-[1px] absolute bg-slate-800 rounded-[5px]"></div>
//                 </div>
//                 <div className="w-[54px] h-5 left-[177px] top-0 absolute">
//                   <div className="w-[54px] h-5 left-0 top-0 absolute bg-white rounded-[5px]"></div>
//                   <div className="w-[52px] h-[18px] left-[1px] top-[1px] absolute bg-slate-800 rounded-[5px]"></div>
//                 </div>
//                 <div className="w-[54px] h-5 left-[236px] top-0 absolute">
//                   <div className="w-[54px] h-5 left-0 top-0 absolute bg-white rounded-[5px]"></div>
//                   <div className="w-[52px] h-[18px] left-[1px] top-[1px] absolute bg-slate-800 rounded-[5px]"></div>
//                 </div>
//                 <div
//                   className={` left-[240px] top-[0.5px] absolute text-center  text-white text-[12px] font-normal ${inter.className}`}
//                 >
//                   $1000+
//                 </div>
//                 <div
//                   className={`left-[185px] top-[0.5px] absolute text-center text-white text-[12px] font-normal ${inter.className}`}
//                 >
//                   $100+
//                 </div>
//                 <div
//                   className={`left-[134px] top-[0.5px] absolute text-center text-white text-[12px] font-normal ${inter.className}`}
//                 >
//                   $50
//                 </div>
//                 <div
//                   className={`left-[75px] top-[0.5px] absolute text-center text-white text-[12px] font-normal ${inter.className}`}
//                 >
//                   $25
//                 </div>
//                 <div
//                   className={`left-[17px] top-[0.5px] absolute text-center text-white text-[12px] font-normal ${inter.className}`}
//                 >
//                   $10
//                 </div>
//               </div>
//             </div>
//             { !state ? (
//            <>

//               {/* {Blue Button} */}
//               <div className=" pt-[9px] flex justify-center">
//                 <button
//                   onClick={() => setHandle()}
//                   className="w-[328px] lg:w-full lg:ml-10 lg:mr-10 flex justify-center items-center h-11 bg-[#1475E1] rounded-[5px]"
//                 >
//                   <h1 className=" text-center  text-white text-2xl font-black font-['Proxima Nova Condensed']">
//                     Create a game
//                   </h1>
//                 </button>
//               </div>
//               {/* {Blue Button End} */}

//               {/* {White Button} */}
//               <div className=" flex justify-center pt-[3px]">
//                 <div className="w-[328px] lg:w-full lg:ml-10 lg:mr-10 pl-3 pr-[3px]  h-11 justify-between  bg-zinc-100 rounded-[5px] flex flex-row items-center">
//                   <div
//                     className={` text-black text-sm font-normal ${inter.className}`}
//                   >
//                     Zinab
//                   </div>
//                   <img
//                     className="w-[35px]  left-[48px] top-[4px] "
//                     src="/backg/20.png"
//                   />
//                   <img
//                     className="w-[30px]   top-[7px] "
//                     src="/backg/bb.gif"
//                   />

//                   <img
//                     className="w-[15px] h-[15px]  top-[14px] "
//                     src="https://s3-alpha-sig.figma.com/img/df86/e5c7/83172474e8c51f8d21ca9ba72aec1f4d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IvG6pbpvsHabmAJKcPUJ179F9SZnbRS7aSNyfSAHinfH0NeyV6ESmEMYD0UIqkjplFcWx9OYZuELofXRK9qn79m09QYp4fss4WmCjLuOWEBBVNdzqfE7qpyVwY5yc57jBs9wLm1447bZE~L3UJQ00Gf3l9BtUiwkE2ujwa-QOjoLLiSsAlyO34TWnBjeQwzYsg8WkayVZTi8lYgugj4X-ENTMlfYCEh0elWkq2mZOIpUg3Nx7hfxk9bOa26oqR-pxC4PV-OLkXVTGH7vETvlT9NXciRrKoKzlUSzT5s4NznDmaRiQQGb7GLcmZA5QQkzV9qxvCI28dm2jSD41t8~TA__"
//                   />
//                    <img
//                     className="w-[30px]   top-[7px] "
//                     src="/backg/5.png"
//                   />
//                   <div className="left-[161px] top-[12px]  text-center text-green-500 text-sm font-black font-['Arial']">
//                     1500
//                   </div>

//                   <div className="w-[104px] h-10 left-[222px] top-[2px] bg-[#F37543] flex items-center justify-center rounded-[5px]">
//                     <div
//                       className={`  text-center text-white text-[20px] font-black ${inter.className}"`}
//                     >
//                       Join 1V1
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* {White Button Ends} */}
//               {/* {Empty White Button} */}
//               <div className=" flex justify-center pt-[3px] ">
//                 <div className="w-[328px] lg:w-full lg:ml-10 lg:mr-10 h-11 bg-zinc-100 rounded-[5px]"></div>
//               </div>
//               <div className=" flex justify-center pt-[3px] ">
//                 <div className="w-[328px] h-11 lg:w-full lg:ml-10 lg:mr-10 bg-zinc-100 rounded-[5px]"></div>
//               </div>
//               <div className=" flex justify-center pt-[3px] ">
//                 <div className="w-[328px] h-11 bg-zinc-100 lg:w-full lg:ml-10 lg:mr-10 rounded-[5px]"></div>
//               </div>
//               <div className=" flex justify-center pt-[3px] ">
//                 <div className="w-[328px] h-11 bg-zinc-100 lg:w-full lg:ml-10 lg:mr-10 rounded-[5px]"></div>
//               </div>
//               <div className=" flex justify-center pt-[3px] ">
//                 <div className="w-[328px] h-11 bg-zinc-100 lg:w-full lg:ml-10 lg:mr-10 rounded-[5px]"></div>
//               </div>
//             </>
//             ) : (
//             <>
//               <Coins />
//             </>
//             ) }{/* {Empty White Button Ends} */}
//           </div>
//         </div>
//       </div>
//       {/* <Before_Signin /> */}

//       <Rotate />
//       <Waiting />
//     </>
//   );
// }
// ===================================================================================================================

export default function Page() {
  const [isGameCreated, setIsGameCreated] = useState(false);

  const handleCreateGame = () => {
    setIsGameCreated(true);
  };
  return (


<div>
    

    {!isGameCreated && (
      
    
    <div className=" flex flex-col  pb-3   ">
      <div
        className={`"text-center text-white text-lg lg:text-2xl font-black ${archivo.className} pl-[9px]`}
      >
        Backgammon
      </div>

      <div className=" flex justify-center  lg:m-2 ">
        <div className=" w-screen h-full lg:w-full lg:h-full mb-6  bg-[#203744] rounded-[5px] pt-[2px]">
          <CommisionSys />

          <div className="text-center pl-[10px] lg:text-xl  pt-[7px] text-white text-base font-black font-['Proxima Nova Condensed'] flex justify-start">
            OPEN GAMES
          </div>

          <Price />

          {/* {Blue Button} */}
          <div className=" pt-[11px] flex justify-center ">
            <button 
            onClick={handleCreateGame}
            className=" ml-2 mr-2  w-full  lg:w-full lg:h-[60px] lg:ml-10 lg:mr-10 flex justify-center items-center h-11 bg-[#1475E1] rounded-[5px]">
              <h1 className=" text-center  text-white text-xl lg:text-2xl font-black font-['Proxima Nova Condensed']">
                Create a game
              </h1>
            </button>
          </div>
          {/* {Blue Button End} */}

          <Join />
        </div>
      </div>



    </div>
)}
  
  {isGameCreated && <Coins />}
    </div>
  );
}

