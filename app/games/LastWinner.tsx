import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import "./page.css";

const LastWinner = () => {
  return (
    <Box className="rounded bg-background_secondary_website py-2 px-4 h-fit">
      <Flex direction="column">
        <Flex direction="column" align="center" justify="center">
          <Heading
            size="3"
            weight="medium"
            align="center"
            className="text-box_primary_color pb-1 w-[6rem] m-auto tight_spacing"
          >
            LAST WINNER
          </Heading>
          <Box className="bg-box_primary_color rounded-[1rem] w-[6rem] h-[6rem]"></Box>
          <Text
            size="2"
            weight="regular"
            className="text-box_primary_color py-1"
          >
            Avraham
          </Text>
        </Flex>
        <Flex justify="between">
          <Text className="text-box_primary_color" size="3" weight="medium">
            Win:
          </Text>
          <Text
            as="span"
            size="3"
            align="left"
            className="text-border_primary_website "
          >
            500 USDT
          </Text>
        </Flex>
        <Flex justify="between">
          <Text className="text-box_primary_color" size="3" weight="medium">
            Chance:
          </Text>
          <Text
            as="span"
            size="3"
            align="left"
            className="text-border_primary_website flex-[0.9]"
          >
            11.59%
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LastWinner;
