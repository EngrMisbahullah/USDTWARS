"use client";
import { useState } from "react";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const games = [
    {
      label: "Backgammon",
      route: "/backgammon",
      source: "/games/backgammonicon.png",
      href: "/games/backgammon",
    },
    {
      label: "Jackpot",
      route: "/jackpot",
      source: "/games/jackpoticon.png",
      href: "/games/jackpot",
    },
    {
      label: "Coin Flip",
      route: "/coinflip",
      source: "/games/coinflipicon.png",
      href: "/games/coinflip",
    },
  ];

  return (
    <div className="lg:hidden" style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 999 }}>
      <Flex
        justify="between"
        align="center"
        className="bg-background_dark_website mt-5 px-5 h-14 "
      >
        {games.map((game) => (
          <Link key={game.label} href={game.href}>
            <Flex
              gap="1"
              direction={"column"}
              justify="center"
              align="center"
              style={{ flex: 1, position: "relative" }}
              onClick={() => handleGameClick(game)}
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-blue-500 transition-opacity ${
                  selectedGame === game ? "opacity-100" : "opacity-0"
                }`}
              />
              <Image
                src={game.source}
                width={32}
                height={32}
                alt="SS"
                className={`transition-opacity ${
                  selectedGame === game ? "filter brightness-125" : ""
                }`}
              />
              <Text size="1" className="text-grey_shade_website">
                {game.label}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </div>
  );
};

export default Footer;
