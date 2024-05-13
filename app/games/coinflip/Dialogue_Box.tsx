import React from "react";
import Link from "next/link";


export default function DialogueBox() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[310px] h-[255px] lg:w-[400px] lg:h-[310px] border-white lg:border-2 border bg-[#213743] lg:rounded-[5px] rounded-[8px] flex justify-center flex-col items-center space-y-5">
        <h1 className="w-[255px] lg:w-[300px] text-center text-white lg:text-xl font-normal flex justify-center font-['Proxima Nova Condensed']">
          Due to the time to wait we will notify you by email that the game has started, even as soon as you won/lost we will notify you.
        </h1>
        <div className="flex justify-center space-x-2">
         <input type="checkbox" id="checkbox"  />
          <label className="text-white text-[15px] font-['Proxima Nova Condensed']">Dont show me this message again</label>
        </div>
        <button className="w-[250px] h-[29.17px] lg:h-[35px] lg:w-[310px] bg-blue-600 rounded-[5px] flex justify-center items-center">
          <h1 className="text-center text-white text-[22px] font-black font-['Proxima Nova Condensed']">OK</h1>
        </button>
      </div>
    </div>
  );
}
