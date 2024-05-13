import React from 'react';
function GameCard(props : { title: string, imageSrc : string, description : string }) {
  return (
    <div className="pt-14">
      <div className="space-y-2">
        <h1 className="text-start text-white text-[28px] font-black font-['Proxima Nova Condensed']">
          {props.title}
        </h1>
        <img className="w-[300px] h-[188px] lg:w-[450px] lg:h-[200px] rounded-[5px]" src={props.imageSrc} alt={props.title} />
        <h1 className="w-[310px] lg:w-[360px] text-justify text-slate-300 text-base font-normal font-['Proxima Nova Condensed']">
          {props.description}
        </h1>
        <button className="w-[300px] lg:w-[370px] h-11 lg:h-12 flex justify-center items-center bg-blue-600 rounded-[5px]">
          <h1 className="text-white text-[22px] font-bold font-['Proxima Nova Condensed']">Go to Play!</h1>
        </button>
      </div>
    </div>
  );
}
export default GameCard;