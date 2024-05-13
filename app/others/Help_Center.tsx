import React from "react";
import Link from "next/link";

const HelpCenter = () => {
  return (
    <div className="mb-16">
      <div className="flex flex-row items-center space-x-1 ml-[13.5px] mt-[20px]">
        <button>
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 2C5.22128 5.77872 3.42553 7.57447 3 8L6 11L9 14"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </button>
        <button className="text-center text-white text-[17px] font-bold font-proxima-nova-condensed">
          Back
        </button>
      </div>

      <div className="flex lg:justify-start pl-[2%] lg:pl-[12%] mt-8 justify-center">
        <div className="w-[347px] h-[430.31px] relative">
          <div className="w-[340px] h-full lg:w-[1000px] lg:h-full left-[2.08px] top-[38.52px] lg:top-[50px] absolute bg-[#0F212E] rounded-[5px]"></div>
          <div className="left-[39px] top-[8px] absolute text-center text-white text-[17px] lg:text-[27px] font-normal font-archivo-black">
            Addict Help Center
          </div>
          <div className="w-[333px] lg:w-[850px] lg:left-[30px] left-[10px] top-[75px] absolute space-y-6  lg:space-y-12">
            <p className="text-slate-300 text-xs lg:text-xl font-bold font-proxima-nova">
              Having an addiction is a common problem and{" "}
              <span className="text-green-500">USDT</span>
              <span className="text-white"> WARS</span>
              .com recognizes it.
            </p>
            <p className="text-slate-300 text-xs lg:text-xl font-bold font-proxima-nova">
              If you want a break from the site, contact us by email at{" "}
              <button href="mailto:support@usdtwars.com" className="text-white">
                support@usdtwars.com
              </button>
            </p>
            <p className="text-slate-300 text-xs lg:text-xl font-bold font-proxima-nova">
              If you have been hurt and you identify with the addiction
              disease, you can get help at the following link:
              <br />
              <Link href="https://www.ncpgambling.org/help-treatment/chat/">
                <button className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                  www.ncpgambling.org/help-treatment/chat/
                </button>
              </Link>
            </p>
          </div>
          <img
            className="w-10 h-10 left-0 top-0 lg:top-3 absolute"
            src="https://s3-alpha-sig.figma.com/img/ce1d/8c74/191a932ee912c28c356d729b0299e0c3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cV9Xu1pJZpOcBnQR6iuExzDgrIB8b6idEsi8Qyj87Xvgq8om4iN0ngfTVn9rsScZOl~u-4zHLybrr6RiB9L5rzjP3IHxgkbpbbBFOgJgNic8GMGYyCmCe9gIYUdoWCMh2kyRTHjbIHGMvWfYuaQd3nTYXjuvmObwi8p0CufllhxbIiMLBkE~4oHWfb~QsqmYf64Vuxh8fIV4eJYbAlYFxeqvVyO25PXKe2yWCRfyEdXWPKmAtbniMekZbMbth~hoy-~lfnLSnp3cL7-3SzfiP6LWiRYaagUMOE4~GGZSKrYNyFKY-~rrkpZGetNEaLcXoNNqS~9fGpQN-jMPgesa5g__"
            alt="Addict Help Center"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
