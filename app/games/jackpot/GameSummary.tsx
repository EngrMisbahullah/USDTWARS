import { Flex, Text } from "@radix-ui/themes";
import { Card } from "@/app/components/index";
import Link from "next/link";
import React from "react";
import { Grid } from "../../components";

interface Props {
  gamesToday: number;
  uniquePlayersToday: number;
  lowestWinChance: number;
  biggestWin: number;
}

enum Status {
  GAMES_TODAY,
  UNIQUE_PLAYERS_TODAY,
  LOWEST_WIN_CHANCE,
  BIGGEST_WIN,
}

const GameSummary = ({
  gamesToday,
  uniquePlayersToday,
  lowestWinChance,
  biggestWin,
}: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Games Today", value: gamesToday, status: Status.GAMES_TODAY },
    {
      label: "Unique Players Today",
      value: uniquePlayersToday,
      status: Status.UNIQUE_PLAYERS_TODAY,
    },
    {
      label: "Lowest Win Chance",
      value: lowestWinChance,
      status: Status.LOWEST_WIN_CHANCE,
    },
    { label: "Biggest Win", value: biggestWin, status: Status.BIGGEST_WIN },
  ];
  return (
    <Grid className="grid-cols-4   lg:gap-1 gap-2 ">
      {containers.map((container) => (
        <Card key={container.label} className="bg-background_secondary_website w-[88px]  h-[60px] lg:w-[182px] lg:h-[100px]">
          <Flex direction="column" >
            <Link
              className="lg:text-sm text-[6px]  font-medium text-font_primary_website"
              href={`/#`}
            >
              {container.label}
            </Link>
            <Text  className="text-font_secondary_website lg:text-[25px] text-[16px]">
              {container.value}
              {container.status === Status.LOWEST_WIN_CHANCE && "%"}
            </Text>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
};

export default GameSummary;
