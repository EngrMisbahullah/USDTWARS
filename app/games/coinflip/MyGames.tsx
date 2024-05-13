import React from 'react';

// Sample game data
const gamesData = [
  { id: 1,  backgroundColor: '#203744' },
  { id: 2,  backgroundColor: '#203744' },
  // Add more games as needed
];

export default function MyGames() {
  return (
    <div>
      <div className="pl-2 text-start text-white text-lg font-black font-['Proxima Nova Condensed']">
        MY GAMES
      </div>

      <div className="flex flex-row gap-x-1 pl-2 pr-2">
        {gamesData.map((game) => (
          <div
            key={game.id}
            className="lg:w-full  w-full h-[122px] bg-[#203744] rounded-[5px]"
            style={{ backgroundColor: game.backgroundColor }}
          >
         
          </div>
        ))}
      </div>
    </div>
  );
}

