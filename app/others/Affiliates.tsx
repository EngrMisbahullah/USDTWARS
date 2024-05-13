import React from "react";

const Affiliates = () => {
  return (
    <div className="mb-16">
      <div className="flex flex-row items-center justify-start space-x-1 ml-[13.5px] mt-[20px]">
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
        <button className="text-center text-white text-[17px] font-bold font-proxima-condensed">
          Back
        </button>
      </div>

      <div className="flex lg:justify-start justify-center pl-[2%] lg:pl-[12%] mt-8">
        <div className="w-[342.67px] h-[430.31px] relative">
          <div className="w-[340px] h-full lg:w-[1000px] lg:h-full left-[2.08px] top-[38.52px] lg:top-[50px] absolute bg-[#0F212E] rounded-[5px]"></div>
          <div className="left-[37px] top-[11px] absolute text-center text-white text-[17px] lg:text-[27px] font-normal font-archivo-black">
            Affiliate
          </div>
          <img
            className="w-10 h-10 left-0 top-0 lg:top-3 absolute"
            src="https://s3-alpha-sig.figma.com/img/3fb3/6e68/9a947c6dff57b52b58a02e67b58dd5c3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJY1tCKlfMybwJwV2KI76Q2yy3~KYv57icAdH8xsECA2g8f7h8Lqh0qV-cnxkv3w-~VJwySzrw5D9XX8dPrL6L-qHsqyb5t7VO~7xRouQutZWfL5BdDUDg-35Hu7YAAAVEyghTKmSyRbUMvrphF-EsXGm~L40CU3fxgpxFxzgJJ~6d5tF12RROhq69aYHuF1vOFSmKRCI6ciPHjHKPdrWEtbCd2tTIBiLjxY~KgYar5phPCExk6RaXvxL-17wtSejDEldePFBwgo4tHLkn695ZjwzCgvTmYqP2MNvMSvHJNqGTpCiY9y~vN18uH3vQOyaPj5Mk0DjkR0p~nIqL7S0A__"
            alt="Affiliate Image"
          />
          <div className="lg:w-[850px] h-[310px] left-[14px] lg:left-[30px] top-[69px] absolute space-y-6">
            <p className="text-slate-300 text-xs lg:text-xl font-bold font-proxima-nova">
              Earn money by participating in the{" "}
              <span className="text-green-500">USDT</span>
              <span className="text-white"> WARS</span>
              .com affiliate program! You will receive an affiliate commission
              of <span className="text-orange-400">1.5%</span> of all gaming
              profits at <span className="text-green-500">USDT</span>
              <span className="text-white"> WARS</span>.com.
            </p>
            <p className="text-slate-300 text-xs lg:text-xl font-bold font-proxima-nova">
              Being a <span className="text-white">USDT</span>
              <span className="text-green-500"> WARS</span>.com affiliate means
              you will get a commission from our profits on the players who
              join - which unlike traditional affiliate programs, it doesnt
              matter if they lose they win you will make your profit, because{" "}
              <span className="text-green-500">USDT</span>
              <span className="text-white"> WARS</span>.com makes commissions
              not losses!
            </p>
            <p className="text-white text-xs lg:text-xl font-bold font-proxima-nova">
              Contact us at the following email with subject of “Affiliate”
              <br />
              <a
                href="mailto:support@usdtwars.com"
                className="text-blue-500 hover:text-blue-700"
              >
                support@usdtwars.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliates;
