"use client"
import React, { useState, useEffect } from 'react';

export default function Rotate() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    // Clear timeout if countdown reaches 0
    if (countdown === 0) {
      clearTimeout(timer);
      // Here you can add a callback to close the component
      // For instance, you can call a function to close it.
      closeComponent();
    }

    return () => clearTimeout(timer);
  }, [countdown]); // Re-run effect whenever countdown changes

  const closeComponent = () => {
    // Implement closing logic here
    console.log("Closing component...");
  };

  return (
    <div className='flex justify-center items-center m-5 sm:m-10'>
      <div className="w-full opacity-80 pb-5 p-3 sm:p-5 space-y-4 bg-[#071D2A] rounded-[5px]">
        <h1 className="text-center text-white opacity-100 lg:text-[28px] text-[20px] font-black font-proxima">
          For the best experience <br/>rotate the phone
        </h1>

        <div className='flex justify-center'>
          <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] relative">
            <img className="w-60 h-60 sm:w-80 sm:h-80 absolute" src="https://s3-alpha-sig.figma.com/img/6f33/56d5/771b9d41a6febeaf7e708e9607ca341d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O1UWgMxqldqbCNzkiT6Ae25GxSYsz1NGZ8ca~KQIOF7pZ00r4xxWTqK1dg4VoglnnjS1OoM2NXl0aTpNMxwE3gFObMrbVx4mmlw~9t5wQ-u5QL-GcohKh7FV4fRbq59BSHbjo7~JrPIoRiDXIbkwhun2r~1Zr3IDpMwHjPmMYbinUo9rJGHZYeB9BRmTb7gI0Zu0Rm7oyKsdUesHBwYEVA~YcYj1--U01qWHeF8UzVuo-a6gFV94eEovgGJ4UHkCFrHEqCZ9EzbTBuqKgWrZ4ct7E~EIrurrnhmMajUXZp5T3wW9rw8mo~dWjMcdRwMHXCtaD2N0kgltAMO3GnvXxA__" alt="Placeholder" />
            <div className="top-[72px] sm:top-[112px] absolute opacity-90 bg-[#1A2C38] rounded-full"></div>
            <div className="lg:left-[140.40px] left-[100.20px] lg:top-[80px] top-[80px] absolute opacity-90 text-center text-slate-700 text-[58px] sm:text-[88px] font-black font-proxima">{countdown}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
