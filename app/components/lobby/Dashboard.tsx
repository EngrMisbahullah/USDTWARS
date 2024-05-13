"use client";
import React, { useState } from "react";

export default function Dashboard() {
  const [showMessage, setShowMessage] = useState(false);
  const [username, setUsername] = useState("");

  const handleClick = () => {
    // Assuming you have a way to retrieve the username,
    // for example, from an input field
    const username = "Haris"; // retrieve the username here
    setUsername(username);
    setShowMessage(true);
  };

  return (
    <div className="w-full h-[342px] lg:h-[350px] grid sm:grid-cols-2 bg-[#0F212E]">
      <div className="pt-2 lg:mt-14 flex-col lg:space-y-3">
        <div className="flex justify-center pt-1 flex-col items-center space-y-2">
          {showMessage ? (
            <div className="text-center pl-5  text-white lg:text-[20px] pb-12 lg:pb-0 text-[19px] w-[300px] lg:w-[500px] font-bold font-['Proxima Nova Condensed']">
              Dear {username},
              <br />
              May your day be filled with joy and odds always be in your favor
            </div>
          ) : (
            <>
              <div className="text-center text-white text-[22px] lg:text-[38pz] font-bold font-['Proxima Nova Condensed']">
                Play Fair
              </div>

              <button
                className="w-[288px] h-[38px] lg:w-[430p] lg:h-[60p] flex justify-center items-center bg-[#1475E1] rounded-[100px]"
                onClick={handleClick}
              >
                <h1 className="text-white lg:text-2l font-bold font-['Proxima Nova Condensed']">
                  Register immediately
                </h1>
              </button>
            </>
          )}
        </div>

        {!showMessage && (
          <div className="flex justify-center items-center space-x-3 ">
            <svg
              width="80"
              height="2"
              viewBox="0 0 80 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1L80 1" stroke="#B1BAD3" strokeWidth="2" />
            </svg>

            <div className="text-center text-slate-300 text-lg font-normal font-['Proxima Nova Condensed']">
              OR
            </div>
            <svg
              width="80"
              height="2"
              viewBox="0 0 80 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1L80 1" stroke="#B1BAD3" strokeWidth="2" />
            </svg>
          </div>
        )}

        {!showMessage && (
          <div className="flex justify-center  ">
            <div className="w-[88px] h-12 ">
              <button className="w-[88px] h-[38px] lg:w-[128p] lg:h-[68p] bg-[#2F4553] rounded-[10px] flex justify-center items-center">
                <img
                  className="w-12 h-12 lg:w-[74p] lg:h-[74p]  "
                  src="/wallet/google.png"
                  alt="Google Logo"
                />
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        <img
          className="w-[434px] h-[168px] lg:w-[888px] lg:h-[347px] lg:pr-3"
          src="/lobby/usdt.png"
          alt="USDT Logo"
        />
      </div>
    </div>
  );
}
