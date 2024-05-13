"use client";
// import React from "react";
import { Archivo } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"], weight: "900" });
import Link from "next/link";
import Timer from "./Timer";
import Waiting from "./Waiting";
import Dialogue_Box from "./Dialogue_Box";
import CommissionSystem from "../jackpot/CommissionSystem";
import React from 'react'
import CommisionSys_Coin from "./CommisionSys";
import Sides from "./Sides";
import MyGames from "./MyGames";
import OpenGames from "./OpenGames";
import Before_Signin from "./Before_Sign";
import Coins from "../backgammon/Coins";

export default function page() {
  return (
    <div>
       <div
        className={`"text-center text-white text-lg lg:text-2xl font-black ${archivo.className} pl-[9px]`}
      >
        CoinFlip
      </div>

<CommisionSys_Coin/>

<Sides/>

<MyGames/>

<OpenGames/>








    </div>
  )
}







{/* <Dialogue_Box/> */}

{/* <Waiting/> */}
{/* <Timer/> */}
