import React from 'react';
import notificationsData from '.';

export default function Notifications() {
  return (
    <div>
      {notificationsData.map((notification, index) => (
        <div key={index} className={`flex border-b-4 ${notification.borderColor}`}>
          <div className="w-[54px] h-20 lg:w-[110px] lg:h-36 bg-[#1A2C38] rounded-tl-sm rounded-bl-sm flex justify-center items-center">
            <img
              className="w-12 h-12 lg:w-[100px] lg:h-[100px] bg-[#1A2C38]"
              src={notification.iconSrc}
              alt="Notification icon"
            />
          </div>
          <div className="w-52 h-20 lg:w-[462px] lg:h-36 bg-[#2E4452] rounded-tr-sm rounded-br-sm">
            <div className="flex justify-between space-y-1 flex-row items-center pl-2 pt-3">
              <div>
                <h1 className="text-white text-[14px] lg:text-[26px] font-bold font-['Proxima Nova']">
                  {notification.title}
                </h1>
                <h1 className="text-slate-300 text-[11px] lg:text-xl font-bold font-['Proxima Nova']">
                  {notification.description}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
