import React from "react";
import HeadingWithIcon from "../../components/HeadingWithIcon";
import { Flex, Text,  } from "@radix-ui/themes";
import { Card } from "../../components";
import Image from "next/image";

const PlayBoard = () => {
  return (
    <Flex
      align="center"
      direction="column"
      className="row-span-7 bg-white w-[336px] lg:w-full  "
      gap="3"
    >
      <HeadingWithIcon 
        textData={{
          value: "THE DRAW AFTER",
          headingClass: "text-black lg:text-sm text-[10px] font-[100]",
          size: "1",
        }}
        imgData={{
          src: "/icons/Clock.png",
          alt: "Clock",
          imgClass: "",
          width: 16,
          height: 16,
        }}
      />
      <CoinTimer />
      <Shape />
      <BoardOffer />
    </Flex>
  );
};

const CoinTimer = () => {
  return (
    <Flex
      justify="between"
      gap="2"
      align="center"
      className="w-[90%] text-center mt-2"
    >
      <Flex
        align="center"
        justify="center"
        className="bg-background_secondary_website text-font_primary_website relative lg:w-[67%] w-[189px] h-[50px] rounded-md lg:h-full text-2xl font-[600] leading-[1.25]"
      >
        <span className="bg-button_primary_website absolute left-[1px] h-[95%] w-[32px]  rounded-md"></span>
        50 Coin
      </Flex>
      <Text className="text-black text-[14px] lg:w-[8%] w-[14%] font-[700]">Or in</Text>
      <Card
        className="bg-background_secondary_website w-[80px] h-[50px] lg:w-[25%]  flex justify-center items-center text-font_primary_website lg:text-[2.75rem] text-[24px] leading-[1.25]"
        Pad={true}
      >
        03:00
      </Card>
    </Flex>
  );
};

const Shape = () => {
  return (
    <Flex direction="row" justify="center" className="h-[3.5rem] w-full mt-2">
      <Flex
        className=" bg-background_secondary_website lg:w-[58%] w-[285px]   lg:pl-[5rem] pl-[3rem] text-white font-[700] text-[20px] lg:text-2xl"
        align="center"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 88% 50%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 12% 50%)",
        }}
      >
        Your Stake:
      </Flex>
    </Flex>
  );
};

const BoardOffer = () => {
  return (
    <Flex justify="between" align="end" className="text-black flex-1 mb-2 w-full px-4">
      <Flex direction="column" >
        <Text className="bg-font_secondary_website text-font_tertiary_website w-[214px] h-[18px] text-[9px] lg:w-fit rounded-md lg:text-xs font-[800] px-3 py-[2px]">
          Minimum bet 1 USDT. Maximum 500 USDT.
        </Text>
        <Text className="text-black lg:text-xs text-[7px] w-fit pl-1">
          The higher bet, The greater chance to win.{" "}
          <span className="text-font_red_website">More Info.</span>
        </Text>
      </Flex>
      <button className="btn text-font_tertiary_website w-[218px] h-[38px] lg:w-[345px] lg:h-[70px] bg-font_orange_website text-[26px]  lg:text-[40px] font-[500] rounded-lg">
        Sign in to play!
      </button>
    </Flex>
  );
};

export default PlayBoard;
