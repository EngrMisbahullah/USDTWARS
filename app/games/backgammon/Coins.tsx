import React from "react";
import { Inter } from "next/font/google";
import { Archivo } from "next/font/google";
import { Aoboshi_One } from "next/font/google";
export default function Coins() {
  const aoboshi = { fontFamily: "Aoboshi One", fontWeight: 400 };
  const inter = { fontFamily: "Inter", fontWeight: 400 };
  const archivo = { fontFamily: "Archivo", fontWeight: 900 };

  return (
    <div>
      <div className="flex justify-center ">
        <div className="w-full lg:w-full h-max pb-3 bg-[#203744] lg:m-2 rounded-[5px]">
          <div className="text-center text-white text-[26px] lg:text-[45px] pt-3 font-bold font-proxima">
            How many COIN each
          </div>

          <div className="flex justify-center ">
            <div className="pt-5 grid lg:grid-cols-5  grid-cols-4">
              {[
                { value: "10", left: 29 },
                { value: "25", left: 30 },
                { value: "50", left: 30 },
                { value: "100", left: 23 },
                { value: "250", left: 23 },
                { value: "500", left: 24 },
                { value: "1000", left: 17 },
                { value: "2500", left: 18 },
                { value: "5000", left: 18 }
              ].map((coin, index) => (
                <button key={index} className="lg:w-[200px] lg:h-[200px] w-[88px] h-[88px]  relative">
                  <img
                  alt='Image'
                  className=" left-0 top-0 absolute"
                    src="/backg/5.png"
                  />
                  <div
                    style={{ left: `${coin.left}px`, top: "28px" }}
                    className="absolute text-center   text-white text-xl font-black font-arial"
                  >
                    {coin.value}
                    <br />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center pt-5 text-white text-[12px] lg:text-[20px] font-black font-proxima">
            Due to the waiting we can notify you via Email
          </div>

          <div className="flex justify-center">
            <button className="w-[328px] lg:w-[600px] h-11 flex justify-center items-center bg-blue-600 rounded-[5px]">
              <h1 className="text-center text-white text-2xl font-black font-proxima">
                Create a game
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
