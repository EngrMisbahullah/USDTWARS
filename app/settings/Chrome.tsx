import React from "react";

export default function Chrome() {
  return (
    <div>
      <div className=" flex flex-row mt-[24px] ml-[13px] space-x-1  ">
        <img
          className="w-[30px] h-[30px] "
          alt='Image'
          src="https://s3-alpha-sig.figma.com/img/331a/066e/045fb4951f10d731423624656a76bb4f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4LqvkAhSXod1Whjb3KLu5-9Qr04ZJfstpfArUatPzy6etYlo6EPhsTQBYRaJD59YVuCCwvx~H7EyombAfPJN17pE8wpyBL38-46Wt9xGDId6~4WXNHKWs4MkLa4BXeyuqyyscyeuCAVxGZ8Vt-JM0SP2JREB3eqxRGxXiKFH1jAqUW0LLccCH69K5WzSMiZioNiLjtXtippTJnOIyriM1ZtzwJuidKAaFpcK9RYR7B03EOVE1aX1Pk7DZCEUAxymuNpdofNobw-TUSltSzlPNl-eeOnvaRBL6D~q9zeyJPGOWauedvEfMgnloMuwwesCXKFp8khTnwwJxi5hefdDg__"
        />
        <div className=" text-white text-[17px] pt-[2px] font-bold font-['Proxima Nova Condensed']">
          Settings
        </div>
      </div>

      <div className=" flex justify-center pt-5">
        <div className="w-full h-full  bg-[#0F212E] mb-5 rounded-[5px]">
          <div className="flex flex-row    text-[10px] lg:text-[25px] lg:justify-evenly justify-evenly   p-2">
            <h1 className="    text-slate-300 font-bold font-['Proxima Nova Condensed']">
              Browser
            </h1>
            <h1 className="  text-slate-300  font-bold font-['Proxima Nova Condensed']">
              Location
            </h1>
            <h1 className="  text-slate-300 font-bold font-['Proxima Nova Condensed']">
              IP Address
            </h1>
            <h1 className="  text-slate-300 font-bold font-['Proxima Nova Condensed']">
              Action
            </h1>
            <h1 className="  text-slate-300 font-bold font-['Proxima Nova Condensed']">
              Last Used
            </h1>
          </div>

          <div className="  flex justify-center lg:pt-2 pt-0 lg:pl-20 lg:pr-20 pl-3 pr-3 ">
            <div className=" w-full h-full pt-2  lg:p-3 p-0 text-[10px] lg:text-xl   flex flex-row items-center justify-evenly lg:justify-between   bg-[#1A2C38] rounded-[5px] border-2 border-slate-700">
              <h1 className="   text-center text-slate-300  font-bold font-['Proxima Nova Condensed']">
                Chrome
              </h1>
              <h1 className="   text-center text-slate-300  font-bold font-['Proxima Nova Condensed']">
                USA,Miami
              </h1>
              <h1 className="   text-center text-slate-300  font-bold font-['Proxima Nova Condensed']">
                09.212.1221.10
              </h1>
              <h1 className="   text-center text-slate-300  font-bold font-['Proxima Nova Condensed']">
                33 Minutes ago
              </h1>
              <h1 className="   text-center text-slate-300  font-bold font-['Proxima Nova Condensed']">
                Current
              </h1>
            </div>
          </div>

          <div className=" flex justify-center pt-32 ">
            <div className=" flex items-center space-x-2  inset-x-0  justify-center bottom-0">
              <button className="left-0 top-[104px]   text-center text-slate-300 text-opacity-60 text-[17px] font-bold font-['Proxima Nova Condensed']">
                Previous
              </button>

              <button className="left-[0.11px] top-[31px]   text-center text-white text-[17px] font-bold font-['Proxima Nova Condensed']">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
