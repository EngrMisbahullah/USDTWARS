import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { RxCross2 } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className=" text-white relative" aria-label="Update dimensions">
        <div className="">
          {" "}
          <IoIosNotifications className="w-[32px] h-[32px]" />
        </div>
        <div className="w-2 h-2 right-[7px] top-[4px] absolute  bg-blue-600 rounded-full "></div>
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded pt-2 pl-2 pr-2 pb-2  w-[280px] bg-[#0F212E]    "
        sideOffset={5}
      >
        <div className="flex flex-col space-y-1 ">
          <div className=" flex justify-between">
            <div className=" flex items-center ">
              <h1 className="w-5 text-gray-400">
                {" "}
                <IoIosNotifications />
              </h1>
              <h1 className=" text-center text-white text-lg font-bold">
                Notifications
              </h1>
            </div>

            <div>
              <Popover.Close
                className=" h-[25px] w-[25px]  text-white font-bold "
                aria-label="Close"
              >
                <RxCross2 />
              </Popover.Close>
            </div>
          </div>
          <div className=" flex justify-end pr-2">
            <button className=" text-center text-white text-xs font-bold font-['Proxima Nova']">
              Mark all as read
            </button>
          </div>

          {/* {Withdraw sent} */}
          <div className=" flex border-b-4 border-[#1475E1] rounded rounded-br-[px]  ">
            <div className="w-[54px] h-20  bg-[#1A2C38] rounded-tl-sm rounded-bl-sm flex justify-center items-center">
              <img
              alt='Image'
              className="w-12 h-12"
                src="https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HX2CsXjOtu9fk0FjPjv0c34DshlKAhegLbVu7RmymVNsr8BzVnZvbCn8x64YyW6dMA1HKr8wTNANdLAkM074BDwEaFrZhGzV4QO0lLCuTT8lgeFgfWGl~uw-AeZVmpXkZOTKFQEGECwKF5YFv36bIrnSyzSrcaCALYWeAoJj8sLt-Wmvf5wl0j9M6DVFVpnzud-gXID9Pwl-Je0CMgEp7OlczEZV8SyJcQJdl0~~lR46s6HgKdJxaEShyxheqozlBMmrjpygXI7WDvYkYil00~el36YMdiH0jheTeBupbHUSAlTBhXcHazta~Aq4T4EX6kwZsbS6R1JpE0Bk~n~tTg__"
              />
            </div>
            <div className="w-52 h-20 bg-[#2E4452] rounded-tr-sm rounded-br-sm">
              <div className=" flex justify-end pt-2 pr-2">
                <div className=" w-[5px] h-[5px] bg-[#1475E1] rounded-full"></div>
              </div>
              <div className=" flex justify-start flex-col pl-2 pt-1 ">
                <h1 className=" text-white text-[13px] font-bold font-['Proxima Nova']">
                  Withdraw Sent
                </h1>
                <h1 className="      text-slate-300 text-[9px] font-bold font-['Proxima Nova']">
                  Your withdrawal of $10.00 was sent successfully.
                </h1>
              </div>
            </div>
          </div>
          {/* {Withdraw sent end} */}

          {/* {Deposit Confirmed} */}

          <div className=" flex border-b-4 border-[#1475E1] rounded rounded-br-[px] ">
            <div className="w-[54px] h-20 bg-[#1A2C38] rounded-tl-sm rounded-bl-sm flex justify-center items-center">
              
              <img
              alt='Image'
              className="w-12 h-12"
                src="https://s3-alpha-sig.figma.com/img/9fa6/69df/f86404893dfc9e0d901e5d6408f1ec34?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WXCOUiPdJRjiGIdADyA5x2lTBWTlc0HuWfQxlSIMdniJzqAVu3cyZkkA5EehPcWgYPKaV7DpQ~NdkC3m-4skUSt9CQdZIuOcwmzLA3H7cw7-LgmnG79XBt98Un8wDz20NeB-uOj~-DkXhTDfHpYtvJIE5-qor1Onj45LAJlkQYTOpjNQhes3CXH9w2ougzOKuaLg8nD5cuz42~XHUcnAkewCdstk9zOMP-QtjguF7lEKf92bxfIVcwX4TQ1~bXYJ7h2gYnmQ2PbW5NKgh7k5oJIOlcuAn7YjLnmTwVFbw1QXpQX29rPZSr-xSnR5Z2s5YlHoXvbSSqlmo2vFd35HXA__"
              />
            </div>
            <div className="w-52 h-20 bg-[#2E4452] rounded-tr-sm rounded-br-sm">
              <div className=" flex justify-end pt-2 pr-2">
                <div className=" w-[5px] h-[5px] bg-[#1475E1] rounded-full"></div>
              </div>
              <div className=" flex justify-start flex-col pl-2 pt-1 ">
                <h1 className=" text-white text-[13px] font-bold font-['Proxima Nova']">
                  Deposit Confirmed
                </h1>
                <h1 className="      text-slate-300 text-[9px] font-bold font-['Proxima Nova']">
                  Your deposit of $10.00 has been successfully processed.
                </h1>
              </div>
            </div>
          </div>
          {/* {Deposit Confirmed END} */}

          {/* {Deposit Ending} */}
          <div className=" flex border-b-4 border-[#1475E1] rounded rounded-br-[px] ">
            <div className="w-[54px] h-20 bg-[#1A2C38] rounded-tl-sm rounded-bl-sm flex justify-center items-center">
              <img
               alt='Image'
               className="w-12 h-12"
                src="https://s3-alpha-sig.figma.com/img/9fa6/69df/f86404893dfc9e0d901e5d6408f1ec34?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WXCOUiPdJRjiGIdADyA5x2lTBWTlc0HuWfQxlSIMdniJzqAVu3cyZkkA5EehPcWgYPKaV7DpQ~NdkC3m-4skUSt9CQdZIuOcwmzLA3H7cw7-LgmnG79XBt98Un8wDz20NeB-uOj~-DkXhTDfHpYtvJIE5-qor1Onj45LAJlkQYTOpjNQhes3CXH9w2ougzOKuaLg8nD5cuz42~XHUcnAkewCdstk9zOMP-QtjguF7lEKf92bxfIVcwX4TQ1~bXYJ7h2gYnmQ2PbW5NKgh7k5oJIOlcuAn7YjLnmTwVFbw1QXpQX29rPZSr-xSnR5Z2s5YlHoXvbSSqlmo2vFd35HXA__"
              />
            </div>
            <div className="w-52 h-20 bg-[#2E4452] rounded-tr-sm rounded-br-sm">
              <div className=" flex justify-end pt-2 pr-2">
                <div className=" w-[5px] h-[5px] bg-[#1475E1] rounded-full"></div>
              </div>
              <div className=" flex justify-start flex-col pl-2 pt-1 ">
                <h1 className=" text-white text-[13px] font-bold font-['Proxima Nova']">
                  Deposit Confirmed
                </h1>
                <h1 className="      text-slate-300 text-[9px] font-bold font-['Proxima Nova']">
                  Your deposit using $10.00 is registered and awaiting
                  confirmation.
                </h1>
              </div>
            </div>
          </div>
          {/* {Deposit Ending End} */}

          <div className=" pt-2 ">
            <h1 className=" text-center text-white text-[12px] font-bold font-['Proxima Nova']">
              No Notifications Available
            </h1>
            <h1 className=" text-center text-slate-300 text-[13px] font-bold font-['Proxima Nova']">
              your interactions will be visible here
            </h1>
          </div>
        </div>

        <Popover.Arrow className="fill-[#0F212E] " />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
