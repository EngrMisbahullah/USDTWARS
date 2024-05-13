import React from "react";

function GameStartSection({ playerCount }) {
  return (
    <div className="w-full h-[90px] lg:w-full lg:h-[200px] bg-white rounded-[5px] flex flex-col items-center justify-center">
      <div className="text-center text-black text-[10px] lg:text-[35px] font-normal font-['Aoboshi One']">
        Game Start
      </div>
      <div className="w-full h-[1px] bg-neutral-200 my-2"></div>
      <div className="flex justify-center w-full px-[10%]  ">
        {/* Player images */}
        {[...Array(playerCount)].map((_, index) => (
          <PlayerAvatar key={index} playerIndex={index} />
        ))}
      </div>
    </div>
  );
}




function PlayerAvatar({ playerIndex }) {
  const avatarSrc = playerIndex % 2 === 0 ? "/jackpot/pl1.jpeg" : "/jackpot/pl2.jpeg";
  const avatarAlt = `Player ${playerIndex + 1}`;

  return (
    <img
      className="w-[40px] h-[40px] lg:w-[88px] lg:h-[88px] p-[2px] "
      src={avatarSrc}
      alt={avatarAlt}
    />
  );
}




// WinnerSection component
function WinnerSection() {
  return (
    <div className="w-full h-max lg:w-full lg:h-max p-3 lg:space-y-4 space-y-0 bg-[#1475E1] rounded-bl-[5px] rounded-br-[5px] flex flex-col ">
      <div className=" flex justify-between items-center  ">

        <div>
        <h1 className="text-white text-sm lg:text-[35px] font-bold font-['Arial']">
          Winner
        </h1>
        </div>



        <div>
        <img className="w-[88px] h-[88px] " src="/jackpot/Arrow.png" alt="Arrow" />
        </div>



        <div className=" flex items-center">
          
          <h1 className="text-white text-sm lg:text-[35px] font-bold font-['Arial']">
            New Game in:
          </h1>
          <div className="w-[37px] h-[19px] lg:w-[80px] lg:h-[48px] flex justify-center items-center bg-slate-900 rounded-[5px]">
            <h1 className="text-white text-base lg:text-[35px] font-medium font-['Inter']">
              30
            </h1>
          </div>
        </div>


        
      </div>

      <div className="flex justify-between">
        <h1 className="text-white text-sm lg:text-[35px] font-bold font-['Arial']">
          Winning Ticket
        </h1>
        <h1 className="text-white text-sm lg:text-[35px] font-normal font-['Arial']">
          Be first to Enter
        </h1>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-white text-sm lg:text-[35px] font-bold font-['Arial']">
          Coin Prize:
        </h1>
        <div className="flex items-center">
          <img
            className="w-20 h-20"
            src="https://s3-alpha-sig.figma.com/img/caf4/c164/d1a939ccb4c8f3f5a9a5e0c5267a8893?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IvXifww7wR7NxTIgxv-59shn5UU43jIFzuVMZmK4QOVzAIBVEE8V7dSA2uCjoHtjrYOrfjM80bENO5h7AjsoupcROd9D3XZghXLHzsyR07pW596yyyM0ZshszHnmtr0ZsmdIYPu4ZTYW67ZLWnxvDXr1OZ-qXBe8JJh4nJhRqZ025KN-WhTXnP47HTtgV70qf-xWY39EEV3Bslcl2MtNtIhSEaL2Ag1JbLMtdZzqy7DOSC1O03xZB0P0XtzI3uUc1BiIchdDZe4OyQrE3hWfmCxUlKcTk5LLIN8SxAqS95oSLrS1nTeOoCZCIIFsF3xXi1rXh5WhoFCSIwdCqHj1Q__"
            alt="Coin"
          />
          <h1 className="text-yellow-400 text-[15px] lg:text-[35px] font-bold font-['Inter'] relative">
            50000
          </h1>
        </div>
        <div className="flex pt-3">
          <div className="w-[62.83px] lg:w-[192px] h-[23.29px] lg:h-[60px] flex justify-center items-center bg-slate-800 rounded-tl-[5px] rounded-bl-[5px]">
            <h1 className="text-white text-[15px] lg:text-[35px] font-normal font-['Archivo'] text-center">
              Min.1
            </h1>
          </div>
          <div className="w-[61.25px] lg:w-[127px] h-[23.27px] lg:h-[60px] bg-orange-400 rounded-[5px]">
            <h1 className="text-white text-[15px] lg:text-[35px] font-bold font-['Arial'] text-center">
              Enter
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// GameStart component
export default function GameStart() {
  return (
    <div>
      <GameStartSection playerCount={8} />
      <WinnerSection />
    </div>
  );
}
