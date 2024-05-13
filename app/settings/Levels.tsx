import React from 'react';

// Reusable component for each level item
function LevelItem(props
:{ level : string , completed: boolean }) {
  return (
    <div className="lg:w-[980px] lg:h-[70px] w-[330px] h-[40px] bg-[#213743] rounded-[5px] justify-between flex items-center p-4">
      <div className='flex items-center space-x-2 justify-start'>
        <h1 className=' text-slate-300 text-[17px] lg:text-[28px] font-normal font-["Proxima Nova Condensed"]'>{props.level}</h1>
        <div className={`lg:w-[117px] w-20 h-[18px] flex justify-center items-center  lg:h-[22px] rounded-[50px] ${props.completed ? 'bg-[#02FF68]' : 'bg-red-500'}`}>
          <h1 className="text-center text-slate-800 lg:text-lg text-xs font-bold font-['Proxima Nova Condensed']">{props.completed ? 'Completed' : 'Not Completed'}</h1>
        </div>
      </div>
      <div>
        <button>
        <img src="Vector 84.svg" className='w-[20px] h-[15px] lg:w-[35px] lg:h-[30px]' alt="" />
        </button>
      </div>
    </div>
  );
}

// Levels component
export default function Levels() {
  // Example array of level data with completion status
  const levels = [
    { level: 'Level 1', completed: true },
    { level: 'Level 2', completed: true },
    { level: 'Level 3', completed: true }
  ]; // Add more levels with completion status as needed

  return (
    <div className='flex justify-center items-center mt-10'>
      <div className="p-7 w-max h-[316px] bg-[#0F212E] rounded-[10px] space-y-2">
        {/* Map over the levels array and render a LevelItem for each level */}
        {levels.map((levelData, index) => (
          <LevelItem key={index} level={levelData.level} completed={levelData.completed} />
        ))}
      </div>
    </div>
  );
}
