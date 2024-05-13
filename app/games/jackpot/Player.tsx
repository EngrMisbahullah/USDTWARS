import React from 'react';

function Player() {
  const images = [
    { url: 'https://via.placeholder.com/170x170', percentage: '70.59%' },
    { url: 'https://via.placeholder.com/170x170', percentage: '80%' },
    // Add more objects for additional players if needed
  ];

  return (
    <div className='bg-background_secondary_website w-full h-full flex justify-center p-2 space-x-8'>
      {images.map((image, index) => (
        <div className="relative" key={index}>
          <img className="Image lg:w-[170px] lg:h-[170px] w-[58px] h-[58px] rounded-[256px] border-2 border-orange-400" src={image.url} alt={`Player ${index + 1}`} />
          <div className="absolute bottom-0 left-0 right-0 lg:w-[188px] lg:h-12  w-[66px] h-[19px] bg-slate-900 flex justify-center items-center">
            <h1 className="text-center text-orange-400 lg:text-[44px] text-sm font-bold font-['Proxima Nova Condensed']">{image.percentage}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}




export default function App() {
  return (
    <div>
      <Player />
    </div>
  );
}
