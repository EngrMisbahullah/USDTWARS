import React from 'react';

export default function Sides() {
  return (
    <div  className=' flex flex-row justify-end mt-2'>
<div className=' grid lg:grid-cols-2 grid-cols-1'>

      <div className="flex flex-row items-center justify-end pr-[1.5%]">
        <h1 className="text-center w-[100px] text-white text-sm font-black font-['Proxima Nova Condensed'] pr-2">
          Choose Side:
        </h1>
        <button>
          <img
          alt='Image'
          className="w-[29px] h-[29px] opacity-50 hover:opacity-100 hover:border-1  hover:border-yellow-300 rounded-full"
            src="/coinFlip/coin2.png"
          />
        </button>
        <button className="mr-2">
          <img
          alt='Image'
          className="w-[29px] h-[29px] opacity-50 hover:opacity-100 hover:border-1  hover:border-yellow-300 rounded-full"
            src="/coinFlip/coin1.png"
          />
        </button>
        <div className="w-[109px]  h-[30px] lg:h-[35px] bg-[#203744] flex items-center gap-x-1 pl-1 rounded-[5px]">
          <img
           alt='Image'
           className="w-4 h-4"
            src="/coinFlip/5.png"
          />
          <div className="text-center text-white text-sm font-light font-['Proxima Nova Condensed']">
            Min. 5
          </div>
        </div>
      </div>

      {/* Sign-in button */}
      <div className="flex justify-end pr-[1.5%] pt-2 pb-2">
        <button className="w-[178px] h-[26px] lg:h-[35px] bg-[#F37543] rounded-[5px]">
          <h1 className="text-center text-white text-[16px] font-bold font-['Arial'] mt-[1%]">
          Sign in to create game
          </h1>
        </button>
      </div>

      {/* Other button */}
      </div>
    </div>
  );
}
