import React from 'react';

// Sample open games data
const openGamesData = [
  { id: 1, players: 1500, joinText: 'JOIN', gameType: '1V1', backgroundColor: '#203744' },
  { id: 2, players: 1500, joinText: 'JOIN', gameType: '1V1', backgroundColor: '#203744' },
  // Add more open games as needed
];

export default function OpenGames() {
  return (
    <div>
      <div className="pl-2 text-start text-white text-lg font-black font-['Proxima Nova Condensed']">
        OPEN GAMES
      </div>



      <div className="flex flex-row gap-x-1 pb-1 pl-2 pr-2 ">
        {openGamesData.map((game) => (
          <div
            key={game.id}
            className="lg:w-full w-full h-full lg:h-full lg:p-5 bg-[#203744] rounded-[5px] flex justify-center items-center"
            style={{ backgroundColor: game.backgroundColor }}
          >
            <div className="w-[171px] h-[85.14px] relative">
              <div className="w-[60px] h-[60px] left-[5px] top-[15px] absolute bg-zinc-300 rounded-full"></div>
              <img alt='Image' className="w-[22px] h-[22px]" src="/coinFlip/coin2.png" />

              <div className="w-[58px] h-4 left-[5px] top-[66px] absolute">
                <div className="w-[58px] h-4 left-0 top-0 absolute bg-slate-800"></div>
                <img alt='Image' className="w-[14px] h-[14px] left-[0.48px] top-[2.78px] absolute" src="/coinFlip/5.png" />
                <div className="left-[19px] top-[1px] absolute text-center text-green-500 text-xs font-black font-['Proxima Nova Condensed']">
                  {game.players}k
                </div>
              </div>
              <img alt='Image' className="w-20 h-[77.14px] left-[46px] top-[8px] absolute" src="/coinFlip/vs.png" />
              <img alt='Image' className="w-[22px] h-[22px] left-[149px] top-0 absolute" src="/coinFlip/coin1.png" />
              <div className="left-[109px] top-[21px] absolute text-center text-white text-[22px] font-black font-['Proxima Nova Condensed']">
                {game.joinText}
              </div>
              <div className="left-[119px] top-[39px] absolute text-center text-white text-[22px] font-black font-['Proxima Nova Condensed']">
                {game.gameType}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-x-1 pl-2 pr-2">
        {/* Add additional content here if needed */}
      </div>
    </div>
  );
}
