import React from 'react'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "400" });
export default function CommisionSys_Coin() {
  return (
   
      <div className=" pt-[17px] flex justify-center ">
          <div className="w-[311.24px] flex justify-center   bg-[#203744] rounded-[5px] border border-green-500">
            <div
              className={` text-center  text-white text-xs font-normal flex items-center ${inter.className}`}
            >
              COMMISSION SYSTEM TOTAL 8%
            </div>
          </div>
        

    </div>
  )
}
