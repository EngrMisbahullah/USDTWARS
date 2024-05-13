import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

interface HeadingData {
  value: string;
  headingClass: string;
  size: string;
}

interface ImageData {
  src: string;
  alt: string;
  imgClass: string;
  width: number;
  height: number;
}

interface Props {
  textData: HeadingData;
  imgData: ImageData;
}

const HeadingWithIcon = ({ textData, imgData }: Props) => {
  const { value, headingClass, size } = textData;
  const { src, alt, imgClass, width, height } = imgData;
  return (
    <Flex justify="center" gap="1" p={"2"} className="w-[80%]  border-b-[3px]">
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        className={imgClass}
      />
      <Text className={`${headingClass}`} >
        {value}
      </Text>
    </Flex>
  );
};

export default HeadingWithIcon;
