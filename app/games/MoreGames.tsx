import { Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Grid } from "../components";

const MoreGames = () => {
  return (
    <Grid className="grid-cols-1 gap-5">
      <Flex direction="column">
        <Heading mb="1" size="4" className="text-center text-white">
          MORE GAMES
        </Heading>
        <Link href="/games/coinflip">
          <Image
            src={"/games/coinflip.png"}
            alt="Nothing"
            width={280}
            height={380}
            className="rounded-lg"
          />
        </Link>
      </Flex>
      <Link href="/games/backgammon">
        <Image
          src={"/games/backgammon.png"}
          alt="a"
          width={280}
          height={380}
          className="rounded-lg"
        />
      </Link>
    </Grid>
  );
};

export default MoreGames;
