import React from "react";

export default function Email() {
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

      <div className=" flex justify-center mt-2 mb-5 lg:mr-20 lg:ml-20">
        <div className="w-full h-full  bg-[#0F212E] rounded-[5px]">
          <div className=" flex justify-center m-2 flex-col ">
            <div className="w-full h-full mb-2 pb-2 bg-[#1A2C38] rounded-[5px]  mt-5 border-2 border-slate-700">
              <div className=" ml-4 mt-1 flex flex-row items-center space-x-2">
                <div className=" text-white text-[17px] lg:text-[32px] font-bold font-['Proxima Nova Condensed']">
                  Email
                </div>
                <div className=" w-10 h-[11px] ">
                  <div className="w-10 h-[11px] lg:w-[67px] lg:h-[18px] bg-[#02FF67] rounded-[100px]  flex justify-center items-center">
                    <h1 className=" text-slate-800 text-[7px] lg:text-[15px] font-bold font-['Proxima Nova Condensed']">
                      Verified
                    </h1>
                  </div>
                </div>
              </div>

              <div className=" flex justify-center pt-[30px] p-5">
                <div className="w-full h-0   border border-slate-700"></div>
              </div>

              <div className=" ml-5 mt-3 lg:mr-80 mr-5">
                <div className=" ">
                  <span className="text-slate-300  text-[13px] lg:text-[22px] font-bold font-['Proxima Nova Condensed']">
                    Email{" "}
                  </span>
                  <span className="text-rose-500 text-[13px] font-bold font-['Proxima Nova Condensed']">
                    *
                  </span>
                </div>

                <input
                  id="email"
                  type="email"
                  className=" pl-2 lg:text-xl text-sm   text-white w-full h-[35px]   lg:h-[45px] bg-slate-700 rounded-[5px]"
                ></input>
              </div>

              <div className=" flex justify-center pt-[30px] p-5">
                <div className="w-full h-[0px]  border border-slate-700"></div>
              </div>

              <div className=" flex flex-row justify-end pr-4 pt-2 space-x-4">
                <button className="  text-center text-white text-[15px] font-bold font-['Proxima Nova Condensed']">
                  Resend Email
                </button>
                <button className="w-[85px] h-[30px]  bg-[#02FF67] rounded-[5px] flex justify-center items-center">
                  <h1 className=" text-slate-800 text-[17px] font-bold font-['Proxima Nova Condensed']">
                    Save
                  </h1>
                </button>
              </div>
            </div>
            =================================================================================
            <div className="w-full h-full mb-2 pb-2 bg-[#1A2C38] rounded-[5px]  mt-5 border-2 border-slate-700">
              <div className=" ml-4 mt-1 flex flex-row items-center space-x-2">
                <div className=" text-white text-[17px] lg:text-[32px] font-bold font-['Proxima Nova Condensed']">
                  Username
                </div>
                <div className=" w-10 h-[11px] "></div>
              </div>

              <div className=" flex justify-center pt-[30px] p-5">
                <div className="w-full h-0   border border-slate-700"></div>
              </div>

              <div className=" ml-5 mt-3 lg:mr-80 mr-5">
                <div className=" ">
                  <span className="text-slate-300  text-[13px] lg:text-[22px] font-bold font-['Proxima Nova Condensed']">
                    {" "}
                    New Username
                  </span>
                  <span className="text-rose-500 text-[13px] font-bold font-['Proxima Nova Condensed']">
                    *
                  </span>
                </div>

                <input
                  id="email"
                  type="email"
                  className=" pl-2 lg:text-xl text-sm   text-white w-full h-[35px]   lg:h-[45px] bg-slate-700 rounded-[5px]"
                ></input>
              </div>

              <div className=" flex justify-center pt-[30px] p-5">
                <div className="w-full h-[0px]  border border-slate-700"></div>
              </div>

              <div className=" ml-5 mt-3 lg:mr-80 mr-5">
                <div className=" ">
                  <span className="text-slate-300  text-[13px] lg:text-[22px] font-bold font-['Proxima Nova Condensed']">
                    Password
                  </span>
                  <span className="text-rose-500 text-[13px] font-bold font-['Proxima Nova Condensed']">
                    *
                  </span>
                </div>

                <input
                  id="email"
                  type="email"
                  className=" pl-2 lg:text-xl text-sm   text-white w-full h-[35px]   lg:h-[45px] bg-slate-700 rounded-[5px]"
                ></input>
              </div>

              <div className=" flex flex-row justify-end pr-4  space-x-4 pt-5">
                <button className="  text-center text-white text-[15px] font-bold font-['Proxima Nova Condensed']">
                  Resend Email
                </button>
                <button className="w-[85px] h-[30px]  bg-[#02FF67] rounded-[5px] flex justify-center items-center">
                  <h1 className=" text-slate-800 text-[17px] font-bold font-['Proxima Nova Condensed']">
                    Save
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
