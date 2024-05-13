import React from "react";
import GameCard from "./Props";
export default function Games() {

const gamesData = [
    {
      title: "Jackpot",
      imageSrc: "/lobby/jack.png",
      description: "Dive into a world where luck rules and a single moment can bring astonishing rewards. Experience the thrill of the unexpected. Will today be your day?"
    },
    {
      title: "CoinFlip",
      imageSrc: "/lobby/coin.png",
      description: "A simple yet thrilling game of pure chance, where a single flip can decide fates, spark excitement, and instantly determine winners. Ready to flip to it?"
    },
    {
      title: "Backgammon",
      imageSrc: "/lobby/back.png",
      description: "A thrilling blend of strategy and luck, where every roll can turn the tide, inviting players into an ancient game of skillful competition. Let's play!"
    }
  ];


  return (
    <div>
      <div className=" text-white  pt-2 lg:text-[44px] text-[33px] pl-6 lg:pl-0  font-black font-['Proxima Nova Condensed']">
        USDTWARS GAMES
      </div>

      <div className=" flex justify-center">
        <div className=" grid sm:grid-cols-1 lg:grid-cols-3 lg:space-x-5   ">
          {/* <div className="pt-14  ">
            <div className=" space-y-2">
              <h1 className="  text-start text-white text-[28px] font-black font-['Proxima Nova Condensed']">
                Jackpot
              </h1>
              <img
                className="w-[300px] h-[188px]  lg:w-[450px] lg:h-[200px]  rounded-[5px]"
                src="/lobby/jack.png"
              />
              <h1 className="w-[310px] lg:w-[378px] text-justify  text-slate-300 text-base font-normal font-['Proxima Nova Condensed']">
                Dive into a world where luck rules and a single moment can bring
                astonishing rewards. Experience the thrill of the unexpected.
                Will today be your day?
              </h1>
              <button className="w-[300px] lg:w-[370px] lg:h-12  h-11  flex justify-center items-center  bg-blue-600 rounded-[5px]">
                <h1 className=" text-white text-[22px] font-bold font-['Proxima Nova Condensed']">
                  Go to Play!
                </h1>
              </button>
            </div>
          </div>

          <div className="pt-14 ">
            <div className=" space-y-2">
              <h1 className="  text-start text-white text-[28px] font-black font-['Proxima Nova Condensed']">
                CoinFlip
              </h1>
              <img
                className="w-[300px] h-[188px]  lg:w-[450px] lg:h-[200px]  rounded-[5px]"
                src="/lobby/coin.png"
              />
              <h1 className="w-[310px] lg:w-[360px] text-justify  text-slate-300 text-base font-normal font-['Proxima Nova Condensed']">
                a simple yet thrilling game of pure chance, where a single flip
                can decide fates, spark excitement, and instantly determine
                winners. Ready to flip it?
              </h1>
              <button className="w-[300px] lg:w-[370px]  h-11 lg:h-12   flex justify-center items-center  bg-blue-600 rounded-[5px]">
                <h1 className=" text-white text-[22px] font-bold font-['Proxima Nova Condensed']">
                  Go to Play!
                </h1>
              </button>
            </div>
          </div>

          <div className="pt-14 ">
            <div className=" space-y-2">
              <h1 className="  text-start text-white text-[28px] font-black font-['Proxima Nova Condensed']">
                Backgammon
              </h1>
              <img
                className="w-[300px] h-[188px]  lg:w-[450px] lg:h-[200px]  rounded-[5px]"
                src="/lobby/back.png"
              />
              <h1 className="w-[310px] lg:w-[360px] text-justify  text-slate-300 text-base font-normal font-['Proxima Nova Condensed']">
                a thrilling blend of strategy and luck, where every roll can
                turn the tide, inviting players into an ancient game of skillful
                competition. Let's play!
              </h1>
              <button className="w-[300px] lg:w-[370px]  h-11 lg:h-12   flex justify-center items-center  bg-blue-600 rounded-[5px]">
                <h1 className=" text-white text-[22px] font-bold font-['Proxima Nova Condensed']">
                  Go to Play!
                </h1>
              </button>
            </div>
          </div> */}



  {/* Map through the gamesData array and render a GameCard for each item */}
  {gamesData.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              imageSrc={game.imageSrc}
              description={game.description}
            />
          ))}


        </div>
      </div>
    </div>
  );
}
