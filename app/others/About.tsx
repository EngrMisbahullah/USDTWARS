import React from "react";

const About = () => {
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

      <div className="flex justify-center mt-8 flex-col  pl-2">
        <div className="flex flex-row items-center">
          <div className="lg:ml-[12%]">
            <img
              className="w-10 h-10"
              src="https://s3-alpha-sig.figma.com/img/15ed/3dde/c7a3c74b5c14dc7ff26610bd29a92106?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LIG1APqSbZ3eDYExXGp-K4XoVaFQoXsRLpQQXTsifuyvo3-CBS5ve~GwMPY~O0S1L3bIYbySwF0NwMDISvyXgsf52gx9c9e1wGDCThvT-1s2T~ovczP8dFu7DXuYll4MKlzk1FWEMUVVFrBDkuNYXbi-ygzZWXDue8haVvx7jLy7NulNOarxIycp66uG~CZvI-yQROF59Z-d1TNQPUcDqN47nJUjVfvUlnHLwd3YLrS1-XA4oSv4q6jCdEB05JX4nCmdpu4DrJb9jRGFQ-B0zlvXdfGV~thQbg6q7e7JC2hErJmuo5KIKyqLYHic0QOU7cwO5dJIrN~7xsqxtoGrYA__"
              alt="About Image"
            />
          </div>
          <div className="lg:text-[27px] font-bold text-white text-[17px]">
            About
          </div>
        </div>
        <div className="w-[340px] pb-3 space-y-10 lg:w-[1000px] flex lg:justify-start pl-[2%] lg:ml-[12%] h-full bg-[#0F212E] rounded-[5px] justify-center flex-col">
          <div className="text-white text-[17px] lg:text-[29px] lg:pt-3 pt-1 font-bold font-proxima-nova-condensed">
            Welcome to USDTWARS!
          </div>
          <div className="w-[329px] lg:w-[850px] pt-1 text-slate-300 text-xs lg:text-lg font-bold font-proxima-nova">
            At the heart of entertainment and chance, we have crafted a haven for
            thrill-seekers and game enthusiasts. Our story revolves around the
            exhilaration of winning and the camaraderie of competition. We are
            not just any gaming place; we are the ultimate destination for those
            who revel in the art of gaming.
          </div>
          <div className=" p-1 lg:w-[850px] pt-2 text-white text-sm lg:text-xl font-bold font-proxima-nova">
            Right now, USDTWARS offers you an electrifying trio of games:
          </div>
          <div className="w-[324px] lg:w-[850px] pt-1">
            <p className="text-white text-xs lg:text-xl font-bold font-proxima-nova">
              Jackpot:
              <span className="text-slate-300">
                {" "}
                A whirlwind of excitement awaits as you test your luck for a shot
                at life-changing fortunes. The more coins you add, the more luck you
                have.
              </span>
            </p>
            <p className="text-white text-xs lg:text-xl font-bold font-proxima-nova">
              Coin Flip:
              <span className="text-slate-300">
                {" "}
                A game of pure chance where a simple flip can lead to thrilling
                victories.
              </span>
            </p>
            <p className="text-white text-xs lg:text-xl font-bold font-proxima-nova">
              Backgammon:
              <span className="text-slate-300">
                {" "}
                Exercise your strategic prowess in this timeless classic of skill
                and strategy.
              </span>
            </p>
          </div>
          <div className="w-[324px] lg:w-[850px] lg:text-xl pt-1 text-slate-300 text-xs font-bold font-proxima-nova">
            At the heart of entertainment and chance, we have crafted a haven for
            thrill-seekers and game enthusiasts. Our story revolves around the
            exhilaration of winning and the camaraderie of competition. We are
            not just any gaming place; we are the ultimate destination for those
            who revel in the art of gaming.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
