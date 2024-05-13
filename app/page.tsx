import React from 'react'
import Lobby from './lobby/page'
import ScreenNoti from './components/ScreenNoti'
import Notifications from './components/notifications/Notifications'
import Footer from './components/lobby/Footer'
export default function page() {
  return (




    
    <div>
      <Lobby />
      {/* <ScreenNoti/> */}
      {/* <Notifications/> */}
{/* 
    <div className=" mb-5">
      <div className="w-full   h-[342px]   lg:h-[350px]  grid sm:grid-cols-2  bg-[#0F212E]">
        <div className=" pt-2 lg:mt-14  flex-col lg:space-y-3">
          <div className=" flex justify-center pt-1  flex-col items-center space-y-2">
            <div className="text-center text-white text-[22px] font-bold font-['Proxima Nova Condensed']">
              Play Fair
            </div>

            <button className="w-[288px]  h-[38px] flex justify-center items-center bg-[#1475E1]  rounded-[100px] ">
              <h1 className=" text-white font-bold font-['Proxima Nova Condensed']">
                Register immediately
              </h1>
            </button>
          </div>

          <div className=" flex justify-center items-center space-x-3 ">
            <svg
              width="80"
              height="2"
              viewBox="0 0 80 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1L80 1" stroke="#B1BAD3" stroke-width="2" />
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
              <path d="M0 1L80 1" stroke="#B1BAD3" stroke-width="2" />
            </svg>
          </div>

          <div className="flex justify-center  ">
            <div className="w-[88px] h-12 ">
              <button className="w-[88px] h-[38px]  bg-[#2F4553] rounded-[10px] flex justify-center items-center">
                <img className="w-12 h-12  " src="/wallet/google.png" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <img
            className="w-[434px] h-[168px] lg:w-[888px] lg:h-[347px] lg:pr-3  "
            src="/lobby/usdt.png"
          />
        </div>
      </div>

      <div className=" text-white  pt-2 text-[32px] pl-6 lg:pl-10 font-black font-['Proxima Nova Condensed']">
        USDTWARS GAMES
      </div>

      <div className=" flex justify-center">
        <div className=" grid sm:grid-cols-1 lg:grid-cols-3 lg:space-x-5   ">
          <div className="pt-14  ">
            <div className=" space-y-2">
              <h1 className="  text-start text-white text-[28px] font-black font-['Proxima Nova Condensed']">
                Jackpot
              </h1>
              <img
                className="w-[300px] h-[188px]  lg:w-[450px] lg:h-[200px]  rounded-[5px]"
                src="/lobby/jack.png"
              />
              <h1 className="w-[310px] lg:w-[390px]  text-slate-300 text-base font-normal font-['Proxima Nova Condensed']">
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
                Jackpot
              </h1>
              <img
                className="w-[300px] h-[188px]  lg:w-[450px] lg:h-[200px]  rounded-[5px]"
                src="/lobby/coin.png"
              />
              <h1 className="w-[310px] lg:w-[380px]  text-slate-300 text-base font-normal font-['Proxima Nova Condensed']">
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
                Jackpot
              </h1>
              <img
                className="w-[300px] h-[188px]  lg:w-[450px] lg:h-[200px]  rounded-[5px]"
                src="/lobby/back.png"
              />
              <h1 className="w-[310px] lg:w-[395px]  text-slate-300 text-base font-normal font-['Proxima Nova Condensed']">
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
          </div>
        </div>
      </div>

      <div className="  pt-4 ">
        <div className=" pt-14 pl-8  lg:pl-10 ">
          <span className="text-green-500 text-[23px] font-black font-['Proxima Nova Condensed']">
            USDT
          </span>
          <span className="text-white text-[23px] font-black font-['Proxima Nova Condensed']">
            WARS GAMES SYSTEM
          </span>
        </div>
      </div>
      <div className=" flex pl-8  lg:pl-10 pr-10 justify-ce">
        <div className="w-[312px] lg:w-[1374px] text-slate-300 text-xl font-normal font-['Proxima Nova Condensed']">
          Our innovative website revolutionizes online gaming by prioritizing
          fairness. Unlike typical platforms where players compete against the
          house, our system uniquely features player-versus-player gameplay.
          This ensures an unbiased playing field, as we have no vested interest
          in the game's outcome. Our role is to facilitate these exciting
          matchups, maintaining a transparent environment where skill and
          strategy take center stage. We sustain our operations by taking a
          modest commission from games, emphasizing our commitment to fair play
          and trust. Join us for a genuinely fair gaming experience, where your
          skills are the true game-changer.
        </div>
      </div>

      <Footer />

    </div> */}
    </div>
  )
}





