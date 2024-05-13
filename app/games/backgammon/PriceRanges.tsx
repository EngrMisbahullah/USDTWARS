import React from 'react';

export default function Price() {
  const priceRanges = [
    { value: '$1000+' },
    { value: '$100+' },
    { value: '$50' },
    { value: '$25' },
    { value: '$10' }
  ];

  return (
    <div className="flex justify-center pt-[4px]">
      <div className=" flex flex-row space-x-2">
        {priceRanges.map((range, index) => (
          <div key={index}  >
            <div className=" lg:w-[95px]  lg:h-8 w-[54px] h-[20px] lg:rounded-[10px] flex justify-center items-center rounded-[5px]  bg-[#203744] border border-white">
            <div className={`text-center text-white text-[12px] lg:text-[20px]  font-normal`}>
              {range.value}
            </div>
            </div>
            
           
          </div>
        ))}
      </div>
    </div>
  );
}
