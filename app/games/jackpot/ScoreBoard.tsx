import React from "react";
import { Card, Grid } from "../../components";
import CommissionSystem from "./CommissionSystem";
import PlayBoard from "./PlayBoard";
import GameAlert from "./GameAlert";
import Players from "./Players";

const ScoreBoard = () => {
  return (
    <Grid className="row-span-5 bg-background_secondary_website rounded-md">
      <Grid className="grid-rows-11">
        <CommissionSystem />
        <PlayBoard />
   
        <GameAlert />
      </Grid>
    
    </Grid>
     
  );
};

export default ScoreBoard;
