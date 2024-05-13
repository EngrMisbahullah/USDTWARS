"use client";
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [showMessage, setShowMessage] = useState(true);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setShowMessage(false);
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(countdownInterval);
    }, 3000);

    return () => clearTimeout(messageTimer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      // Timer is finished
    }
  }, [countdown]);
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[338.53px] h-[299.26px] relative">
          <div className="w-[338.53px] h-[299.26px] left-0 top-0 absolute">
            <div className="w-[338.53px] h-[277.59px] left-0 top-0 absolute bg-zinc-300 rounded-[10px]"></div>
            <div className="w-[335.71px] h-[274.35px] left-[1.41px] top-[1.62px] absolute bg-[#203744] rounded-[10px]"></div>

            <img
              className="w-[15.91px] h-[15.91px] left-[289.44px] top-[17.60px] absolute"
              src="/coinFlip/coin1.png"
              alt=""
            />
            <img
              className="w-[15.23px] h-4 left-[32.16px] top-[17.26px] absolute"
              src="/coinFlip/coin2.png"
              alt=""
            />
            <div className="w-[63.30px] h-[16.25px] left-[237.31px] top-[83.62px] absolute bg-slate-800"></div>
            <div className="w-[63.30px] h-[16.25px] left-[36.56px] top-[83.62px] absolute bg-slate-800"></div>
            <div className="w-[56.87px] h-[56.87px] left-[240.69px] top-[20.99px] absolute bg-blue-400 rounded-full"></div>
            <div className="w-[54.84px] h-[54.84px] left-[241.71px] top-[22px] absolute bg-zinc-300 rounded-full"></div>
            <div className="w-[56.87px] h-[56.87px] left-[39.95px] top-[19.97px] absolute bg-red-500 rounded-full"></div>
            <div className="w-[54.84px] h-[54.84px] left-[40.96px] top-[20.99px] absolute bg-zinc-300 rounded-full"></div>
            <div className="w-[78.54px] h-[18.96px] left-[29.11px] top-[63.30px] absolute bg-slate-800"></div>
            <img
              className="w-[10.16px] h-[10.16px] left-[237.31px] top-[86.66px] absolute"
              src="/coinFlip/5.png"
              alt=""
            />
            <div className="left-[256px] top-[83px] absolute text-center text-green-500 text-sm font-black">
              1.5k
            </div>
            <div className="w-[74.48px] h-[74.48px] left-[9.82px] top-[224.78px] absolute"></div>
            <img
              className="w-[10.16px] h-[10.16px] left-[36.56px] top-[86.66px] absolute"
              src="/coinFlip/5.png"
              alt=""
            />
            <div className="w-[50.79px] h-[13.42px] left-[42.17px] top-[83.62px] absolute text-center text-green-500 text-sm font-black">
              1.5k
            </div>
            <div className="w-[9.14px] h-[31.14px] left-[11.51px] top-[6.43px] absolute text-center text-slate-300 text-xl font-normal font-['Arial']">
              X<br />
            </div>
            <div className="w-[78.54px] h-[18.96px] left-[229.86px] top-[63.30px] absolute bg-slate-800"></div>
            <div className="left-[34px] top-[64.38px] absolute text-center text-white text-[11px] font-black font-['Proxima Nova Condensed']">USERNAMES</div>
            <div className="left-[244.59px] top-[64.38px] absolute text-center text-white text-[11px] font-black font-['Proxima Nova Condensed']">
             Waiting...
            </div>
          </div>
          <div className="w-[235px] h-[22px] left-[51px] top-[144px] absolute text-center text-white text-xl font-black font-['Proxima Nova Condensed']">
              {showMessage && "Timer of 5 sec will appear and then one of the video of the flip coin"}
            </div>
            
            <div className="w-[235px] h-[22px] left-[51px] top-[180px] absolute text-center text-white text-xl font-black font-['Proxima Nova Condensed']">
              {!showMessage && countdown}
            </div>
        </div>
      </div>
    </>
  );
}
