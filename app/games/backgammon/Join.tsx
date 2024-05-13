"use client";
import React, { useState } from 'react';
import { Inter } from "next/font/google";
import Coins from './Coins';

const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function Join() {
  const [buttonText, setButtonText] = useState("SignIn to Play");

  const handleButtonClick = () => {
    if (buttonText === "SignIn to Play") {
      setButtonText("Join 1v1");
    } else {
      setButtonText("SignIn to Play");
    }
  };

  const players = [
    { name: "Zinab", points: 1500 },
    { name: "Zinab", points: 1500 },
    { name: "Zinab", points: 1500 },
    { name: "Zinab", points: 1500 },
   
  ];

  return (
    <div>
      {/* White Button */}
      {players.map((player, index) => (
        <div key={index} className="flex justify-center  pt-[3px]">
          <div className="w-full lg:h-[60px] ml-2 mr-2 p-[2px] lg:w-full lg:ml-10 lg:mr-10 h-11 justify-between bg-zinc-100 rounded-[5px] flex flex-row items-center">
            <div className={`text-black text-sm lg:text-[30px]  font-normal pl-3 ${inter.className}`}>
              {player.name}
            </div>
            {index === 0 && (
              <>
                <img alt='Image' className="w-[35px] lg:w-[75px]  " src="/backg/20.png" />
                <img alt='Image' className="w-[30px] lg:w-[70px] " src="/backg/bb.gif" />
                {/* <img alt='Image' className="w-[15px] h-[15px] " src="https://s3-alpha-sig.figma.com/img/df86/e5c7/83172474e8c51f8d21ca9ba72aec1f4d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IvG6pbpvsHabmAJKcPUJ179F9SZnbRS7aSNyfSAHinfH0NeyV6ESmEMYD0UIqkjplFcWx9OYZuELofXRK9qn79m09QYp4fss4WmCjLuOWEBBVNdzqfE7qpyVwY5yc57jBs9wLm1447bZE~L3UJQ00Gf3l9BtUiwkE2ujwa-QOjoLLiSsAlyO34TWnBjeQwzYsg8WkayVZTi8lYgugj4X-ENTMlfYCEh0elWkq2mZOIpUg3Nx7hfxk9bOa26oqR-pxC4PV-OLkXVTGH7vETvlT9NXciRrKoKzlUSzT5s4NznDmaRiQQGb7GLcmZA5QQkzV9qxvCI28dm2jSD41t8~TA__" /> */}
                {/* <img alt='Image' className="w-[30px] " src="/backg/5.png" /> */}
              </>
            )}
            {index === 0 && (
              <div className=" flex flex-row space-x-1 items-center text-center text-green-500 text-sm lg:text-[35px] font-black font-['Arial']">
                <img alt='Image' className="lg:w-[30px] w-[15px] " src="/backg/5.png" />
                
                {player.points}
              </div>
            )}
            <div className={` lg:w-[220px] w-[104px]   h-full  bg-[#F37543] flex items-center justify-center rounded-[5px]`}>
              <button onClick={handleButtonClick} className={`text-center text-white lg:text-[25px]  text-xs font-black `}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}


    </div>
  );
}
