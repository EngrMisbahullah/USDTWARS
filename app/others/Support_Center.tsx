import React from "react";

export default function Support() {
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
        <button className="text-center text-white text-[17px] font-bold font-['Proxima Nova Condensed']">
          Back
        </button>
      </div>

      <div className="flex flex-col">
        <div>
          <h1 className="text-center text-white text-[22px] font-bold font-['Proxima Nova Condensed']">
            Support Center
          </h1>
        </div>

        <div className="flex justify-center lg:pr-[14.8%]">
          <div className="w-[298px] h-[58px]">
            <div className="text-white text-[17px] font-bold font-['Proxima Nova Condensed']">
              Subject
            </div>
            <input
              id="text"
              type="text"
              className="pl-2 text-white w-[298px] lg:w-[500px] h-9 bg-[#203744] rounded-[5px]"
            />
          </div>
        </div>

        <div className="flex justify-center ml-[7.5px] pt-3 lg:pr-[3.7%]">
          <div className="w-[306px] lg:w-[450px] h-[7px] text-white text-xs lg:text-[13px] font-bold font-['Proxima Nova Condensed']">
            Please be specific on the subject so that we understand the problem
            as quickly as possible, if you are looking for a partnership add in
            the subject [PS].
          </div>
        </div>

        <div className="flex justify-center pt-14 lg:pr-[14.8%]">
          <div className="w-[298px] h-[58px] relative">
            <div className="left-[157px] lg:left-[210px] top-0 absolute text-center text-white text-[17px] font-bold font-['Proxima Nova Condensed']">
              Last Name
            </div>
            <div className="w-[143px] h-[58px] left-0 top-0 absolute">
              <div className="left-[3px] top-0 absolute text-center text-white text-[17px] font-bold font-['Proxima Nova Condensed']">
                First Name
              </div>
              <input
                id="text"
                type="text"
                className="pl-2 text-white w-[143px] lg:w-[180px] h-9 left-0 top-[25px] absolute bg-[#203744] rounded-[5px]"
              />
            </div>
            <input
              id="text"
              type="text"
              className="pl-2 text-white w-[143px] lg:w-[180px] h-9 left-[155px] lg:left-[210px] top-[25px] absolute bg-[#203744] rounded-[5px]"
            />
          </div>
        </div>

        <div className="flex justify-center pt-5 lg:pr-[14.8%]">
          <div className="w-[298px] h-[58px]">
            <div className="left-[2px] text-white text-[17px] font-bold font-['Proxima Nova Condensed']">
              Email
            </div>
            <input
              id="email"
              type="email"
              className="pl-2 text-white w-[298px] lg:w-[500px] h-9 bg-[#203744] rounded-[5px]"
            />
          </div>
        </div>

        <div className="flex justify-center lg:ml-7 ml-0 pt-3">
          <input
            id="message"
            className="text-white pl-2 w-[298px] lg:w-[500px] h-[140px] bg-[#203744] rounded-[5px]"
          />
        </div>

        <div className="flex justify-center mt-1">
          <div>
            <button className="w-[298px] lg:ml-7 ml-0 h-9 lg:w-[500px] bg-blue-600 rounded-[5px] flex justify-center items-center">
              <h1 className="text-center text-white text-[17px] font-bold font-['Proxima Nova Condensed']">
                Send
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
