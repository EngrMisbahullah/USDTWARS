import React from 'react'

export default function Select_button() {
  return (
    <div className=' flex justify-center '>
         
        {/* {Button Group} */}
        <div className="w-[300px] lg:w-[475px] lg:h-[50px] h-[42px] bg-[#092637] rounded-[50px] mt-[16px]  flex justify-evenly items-center">
          <div
            className="  space-x-2 justify-center items-center flex"
            role="group"
          >
            <button
              type="button"
              className="   w-[67px] h-[35px] lg:w-[110px]  lg:h-[40px] lg:text-[20px] text-xs  font-bold      rounded-[50px]  text-white     focus:bg-[#2E4452] focus:text-white    "
            >
              Deposit
            </button>
            <button
              type="button"
              className="   w-[70px] h-[35px] lg:w-[120px]  lg:h-[40px] lg:text-[20px] text-xs font-bold      rounded-[50px]  text-white     focus:bg-[#2E4452] focus:text-white    "
            >
              Withdraw
            </button>
            <button
              type="button"
              className="   w-[75px] h-[35px]  lg:w-[135px]  lg:h-[40px] lg:text-[20px] text-xs font-bold      rounded-[50px]  text-white     focus:bg-[#2E4452] focus:text-white    "
            >
              Buy Crypto
            </button>
            <button
              type="button"
              className="   w-[55px] h-[35px]  lg:w-[75px]  lg:h-[40px] lg:text-[20px] text-xs font-bold      rounded-[50px]  text-white     focus:bg-[#2E4452] focus:text-white    "
            >
              Tip
            </button>
          </div>
        </div>
     
        {/* {Button Group end} */}






        
    </div>

  )
}
