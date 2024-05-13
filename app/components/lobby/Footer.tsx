import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className=" flex flex-col w-full h-full bg-[#071D2A]  ">
      <div className=" flex flex-row justify-around pt-8">
        <div className=" space-y-2">
          <h1 className=" text-[25px] text-white font-bold">GAMES</h1>

          <div className=" space-y-1 flex flex-col  ">
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Jackpot
            </Link>
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Coinflip
            </Link>
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Backgammon
            </Link>
          </div>
        </div>

        <div className=" space-y-2 ">
          <h1 className=" text-[25px] text-white font-bold">Support</h1>
          <div className=" space-y-1 flex flex-col">
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Fairness
            </Link>
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Affiliates
            </Link>
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Support
            </Link>
          </div>
        </div>

        <div className=" space-y-2 ">
          <h1 className=" text-[25px] text-white font-bold">Community</h1>
          <div className=" space-y-1 flex flex-col ">
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Blog
            </Link>
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Facebook
            </Link>
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Support
            </Link>
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Twitter
            </Link>
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Instagram
            </Link>
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Youtube
            </Link>
          </div>
        </div>

        <div className=" space-y-2 ">
          <h1 className=" text-[25px] text-white font-bold">About Us</h1>
          <div className=" space-y-1 flex flex-col ">
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Privacy Policy
            </Link>
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Terms of Service
            </Link>
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              Addict Help Center
            </Link>
          </div>
        </div>

        <div className=" space-y-2 ">
          <h1 className=" text-[25px] text-white font-bold">Language</h1>
          <div className=" space-y-1 flex flex-col ">
            <Link
              href={"/#"}
              className=" text-[16px] font-bold text-[#B1BAD3] "
            >
              English
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h1 className="  bg-gray-200 mt-6 h-[1px]"></h1>
      </div>

      <div className=" flex justify-center items-center flex-col">
        <h1 className=" flex justify-center pt-4  ">
          <span className="text-[#33C16C] text-[50px] font-black font-['Proxima Nova Condensed']">
            USDT
          </span>
          <span className="text-white text-[50px] font-black font-['Proxima Nova Condensed']">
            WARS
          </span>
        </h1>

        <h1 className="  text-[18px] text-[#B1BAD3]">
          &copy; 2023 USDTWARS.COM | All Rights Reserved
        </h1>
        <h1 className="  text-[18px] text-[#B1BAD3]">
          1 USDT = 1 COIN IN USDTWARS
        </h1>
      </div>
    </div>
  );
}
