"use client"
import React, { useState, useEffect } from 'react';
import { Archivo_Black } from 'next/font/google';

export default function Waiting() {
  const archivo = { fontFamily: 'Archivo Black', fontWeight: 400 };

  const [time, setTime] = useState(120); // Initial time in seconds (2 minutes)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime === 0) {
          clearInterval(timer);
          // Perform any action when the countdown reaches zero
          // For example, redirect or show a message
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert remaining time to MM:SS format
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className='flex justify-center'>
      <div className="w-full h-max lg:w-[750px] bg-[#203744] rounded-[5px]">
        <div className="flex items-center justify-center lg:space-x-[20%] lg:pr-[10%] space-x-[2%]">
          <button>
            <img className="w-[30px] lg:w-[115px] lg:h-[115px] ml-1 mt-1 h-[30px]" src="/backg/6.png" alt="Waiting" />
          </button>
          <h1 className={`pt-2 text-white flex justify-center text-[16px] lg:text-[25px] font-bold`} style={archivo}>Hey please waiting for the player</h1>
        </div>

        <div className='pt-16 space-y-8 flex justify-center items-center flex-col'>
          <div className="w-[166px] h-[65px] lg:w-[320px] lg:h-[100px] flex justify-center items-center bg-slate-800 rounded-lg">
            <h1 className={`text-white text-[40px] lg:text-[80px] font-bold`} style={archivo}>{formattedTime}</h1>
          </div>

          <div>
            <h1 className={`text-center text-white text-[11px] lg:text-[20px] font-normal`} style={archivo}>If you leave without clicking exit, you will be charged coins</h1>
          </div>
        </div>

        <h1 className={`mt-[32%] lg:mt-[20%] lg:text-[25px] text-center text-white text-[17px] font-bold`} style={archivo}>We are notification the player</h1>
      </div>
    </div>
  );
}
