import { Text } from "@radix-ui/themes";
import React from "react";
import GameSummary from "./GameSummary";
import ScoreBoard from "./ScoreBoard";
import { Grid } from "../../components";
import Players from "./Players";
import GameStart from "./GameStart";
import Player from "./Player";


const GameDashboard = () => {
  return (
    <Grid className="grid-cols-1 grid-rows-6 gap-3">
      <GameSummary
        gamesToday={160}
        uniquePlayersToday={32}
        lowestWinChance={6.78}
        biggestWin={4560.05}
      />
    
      <ScoreBoard />
      <Players/>
      <GameStart/>
      <Player/>
    </Grid>
    
  );
};

export default GameDashboard;
