import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import ButtonCustom from "../../components/ButtonCustom";

const GameAlert = () => {
  return (
    <Flex className="row-span-3" gap="6" px="4" align="center">
      <img
        src="/icons/PlayIcon.png"
       
        alt="Picture of the author"
        className="w-[61px] h-[61px] lg:w-[88px] lg:h-[88px]"
      />
      <Content />
    </Flex>
  );
};

export default GameAlert;

const Content = () => {
  return (
    <Flex gap="3" direction="column" className="text-font_primary_website  ">
      <h1  className=" text-[10px] lg:text-[30px] font-bold" >The Games Has Begun! Make a Entry</h1>
      <Flex gap="3" align="center">
        <ButtonCustom
          className=" px-7 py-1 rounded-sm font-bold lg:w-[150px] lg:text-[18px] lg:h-[35px]"
          color="bg-button_primary_website"
        >
          FAIR PLAY
        </ButtonCustom>
        <Text as="p" weight="bold" className=" lg:text-[20px] text-[8px] font-bold ">
          Round Hash MDS:
        </Text>
      </Flex>
    </Flex>
  );
};
