import React from "react";

// Player component for each player entry
function Player({ name, coin, tickets, img }) {
  return (
    <div className="flex justify-center flex-col">
      <div className="w-[349px] h-12 lg:w-[740px] lg:h-[90px]  bg-white rounded-[5px] flex items-center">
        <div className="flex items-center pl-[8px]">
          <img src={img} alt="Picture of the author" className="  border-2 border-[#E99649] w-[40px] h-[40px] rounded-full rounded lg:w-[80px] lg:h-[80px]" />
        </div>
        <div className="pl-[26px] text-center lg:pl-[20%]">
          <span className="text-black text-sm lg:text-2xl font-bold font-['Arial']">
            {name}{" "}
          </span>
          <span className="text-black text-sm lg:text-2xl font-normal font-['Arial']">
            Enter with{" "}
          </span>
          <span className="text-blue-500 text-sm lg:text-2xl font-black font-['Arial']">
            {coin} COIN
            <br />
          </span>
          <span className="text-black text-sm lg:text-2xl font-normal font-['Arial']">
            {" "}
            Tickets: from
          </span>
          <span className="text-black text-sm lg:text-2xl font-bold font-['Arial']">
            {" "}
            {tickets.from}{" "}
          </span>
          <span className="text-black text-sm lg:text-2xl font-normal font-['Arial']">
            to
          </span>
          <span className="text-black text-sm lg:text-2xl font-bold font-['Arial']">
            {" "}
            {tickets.to}
          </span>
        </div>
      </div>
    </div>
  );
}

// Players component to wrap multiple players
export default function Players() {
  return (
    <div className="flex justify-center">
      <div className="w-full h-[65px] flex-col lg:w-full lg:h-full flex justify-center gap-2 items-center bg-[#203744] rounded-[5px]">
        {/* Player 1 */}
        <Player name="Avraham" coin={500} tickets={{ from: "#6778", to: "#7100" }} img="/lobby/usdt.png" />
        <Player name="DFVm" coin={30} tickets={{ from: "#6778", to: "#7100" }} img="/lobby/usdt.png" />
      </div>
    </div>
  );
}
