"use client";
import React, { useState } from 'react';
import Tip from '@/app/components/wallet/after/Tip';
import Card from '@/app/components/wallet/before/Card';
import Tron from '@/app/components/wallet/before/Tron';
import Verify from '@/app/components/wallet/before/Veri';
import Withdraw from '@/app/components/wallet/after/Buy_Crypto';
import Deposit from '@/app/components/wallet/after/Deposit';
import S_Withdraw from '@/app/components/wallet/after/Withdraw';
import Buy_Crypto from '@/app/components/wallet/after/Buy_Crypto';



export default function Page() {
  const [showCard, setShowCard] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showTron, setShowTron] = useState(false);
  const [showBuyCrypto, setShowBuyCrypto] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
  };

  if (isHidden) {
    return null; // This will render nothing if isHidden is true
  }

  return (
    <div className='flex justify-center '>
      <div className='bg-[#203744] h-max lg:w-[490px]  w-[320px] lg:rounded-[10px] rounded-[5px] flex justify-center flex-col p-3'>

        <div className="flex justify-between">
          <div className="flex flex-row items-center  space-x-[3px]  ">
            <img
              alt='Image'
              className="w-[23px] h-[23px]"
              src="/icons/basket.png"
            />
            <h1 className="text-white text-[13px] lg:text-[17px] font-normal font-['Archivo Black']">
              Wallet
            </h1>
          </div>
          <button onClick={handleClose}>
            <img
              alt='Image'
              className="w-[23px] h-[23px] lg:w-[30px] lg:h-[30px] mr-[5px] mt-[3px]"
              src="/wallet/X.png"
            />
          </button>
        </div>

        {/* Button Group */}
        <div className="flex justify-center">
          <div className=" lg:w-max w-full h-max p-1 bg-[#092637] rounded-[50px] mt-[16px] flex justify-evenly items-center">
            <button
              type="button"
              className="w-[67px] h-[35px] lg:w-[110px] lg:h-[40px] lg:text-[20px] text-xs font-bold rounded-[50px] text-white focus:bg-[#2E4452] focus:text-white"
              onClick={() => {
                setShowCard(true);
                setShowTip(false);
                setShowTron(false);
                setShowBuyCrypto(false);
              }}
            >
              Deposit
            </button>
            <button
              type="button"
              className="w-[70px] h-[35px] lg:w-[120px] lg:h-[40px] lg:text-[20px] text-xs font-bold rounded-[50px] text-white focus:bg-[#2E4452] focus:text-white"
              onClick={() => {
                setShowCard(false);
                setShowTron(true);
                setShowTip(false);
                setShowBuyCrypto(false);
              }}
            >
              Withdraw
            </button>
            <button
            onClick={() => {
              setShowCard(false);
              setShowTip(false);
              setShowTron(false);
              setShowBuyCrypto(true);
            }}
              type="button"
              className="w-[75px] h-[35px] lg:w-[135px] lg:h-[40px] lg:text-[20px] text-xs font-bold rounded-[50px] text-white focus:bg-[#2E4452] focus:text-white"
            >
              Buy Crypto
            </button>
            <button
              type="button"
              className="w-[55px] h-[35px] lg:w-[75px] lg:h-[40px] lg:text-[20px] text-xs font-bold rounded-[50px] text-white focus:bg-[#2E4452] focus:text-white"
              onClick={() => {
                setShowCard(false);
                setShowTip(true);
                setShowTron(false);
                setShowBuyCrypto(false);

             
              }}
            >
              Tip
            </button>
          </div>
        </div>
        {/* Button Group end */}
        
        {/* Conditionally render Card or Tip */}
        <div className='flex justify-center'>
          {showCard && <Card />}
          {showTip && <Tip />}
          {showTron && <Tron/>}
          {showBuyCrypto && <Buy_Crypto/>}
        </div>


{/* <Tron/>  */}
{/* <Buy_Crypto/> */}
{/* <Withdraw/> */}
{/* 
<Tip/>
<S_Withdraw/> */}


  
      

      </div>
    </div>
  );
}






