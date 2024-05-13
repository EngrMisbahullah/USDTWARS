import React from "react";

const Fairness = () => {
  return (
    <div className="mb-16">
      <div className="flex flex-row items-center space-x-1 ml-[13.5px] mt-[20px]">
        <button>
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 2C5.22128 5.77872 3.42553 7.57447 3 8L6 11L9 14"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </button>
        <button className="text-center text-white text-[17px] font-bold font-proxima-nova-condensed">
          Back
        </button>
      </div>

      <div className="mt-8 flex-col flex justify-center lg:justify-start pl-[2%] lg:pl-[12%]">
        <div className="flex flex-row items-center">
          <div>
            <img
              className="w-10 h-10"
              src="https://s3-alpha-sig.figma.com/img/a9e8/9769/944b4198cd45b581d81bcbcdae9ae96f?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KSOZsAYvWA9xf0LETqUwCpTkW78oGja-UjZDkIrJaiZi10wJffNdqR~mCC9GA8nceYs2jyYNlDZaLobO9E3dxDbqZJaWyg-qtKUR3-p83u5uyfNldqFNBdsOQ8DkvnINZdMujvj1AiDsJ-oCRCacymzBeiP6TsXuDV8ZGnFFd2lPxMbnkcWNVSlTw8xZLKNkyC2Y8wx0lKG3zmjrGgKlVa97SErCELq0GZSZ4wYTMIaxugGa5FLY-CpewAlvp6Cg0OB0Pl-xC~GgViRDKYhh23Frks-85~Wby~64XetTmmgKaTCLxsVTRhLJdnol3NRtq0syOCEQreFwZ2k0WkSZgA__"
              alt="Fairness Image"
            />
          </div>
          <div className="lg:text-[27px] text-white text-[17px] font-normal font-archivo-black">
            Fairness
          </div>
        </div>
        <div className="w-[340px] space-y-1 h-full lg:pt-2 pb-1 lg:pb-4 lg:w-[1000px] bg-[#0F212E] rounded-[5px] flex justify-center flex-col pl-2">
          <div className="text-white text-[17px] lg:text-2xl pt-1 font-bold font-proxima-nova-condensed">
            Jackpot
          </div>
          <div className="w-[329px] lg:w-[850px] pt-1 lg:text-lg text-slate-300 text-xs font-bold font-proxima-nova">
            At USDTWARS, our Jackpot game operates on a transparent principle of
            increasing chances. The more coins you add to the jackpot, the
            higher your likelihood of hitting life-changing fortunes. This
            ensures that every participant has a fair shot at success, and the
            odds dynamically shift as players contribute, creating an engaging
            and equitable experience.
          </div>
          <div className="w-[324px] lg:w-[850px] pt-2 lg:text-2xl text-white text-sm font-bold font-proxima-nova">
            Coin Flip
          </div>
          <div className="w-[329px] lg:w-[850px] pt-1 lg:text-lg text-slate-300 text-xs font-bold font-proxima-nova">
            In the Coin Flip game, simplicity meets fairness with a classic
            50/50 logic. Its a pure game of chance where the outcome is as
            straightforward as the flip of a coin. This inherent fairness
            ensures that every player has an equal opportunity to achieve
            thrilling victories, making it a level playing field for all.
          </div>

          <div className="w-[324px] lg:w-[850px] pt-2 lg:text-2xl text-white text-sm font-bold font-proxima-nova">
            Backgammon
          </div>
          <div className="w-[329px] lg:w-[850px] pt-1 lg:text-lg text-slate-300 text-xs font-bold font-proxima-nova">
            Strategy takes center stage in our Backgammon game, where the roll
            of the dice is a pivotal element. The randomness of the dice drop
            every round ensures a fair and unpredictable environment. No player
            has control over the dice, leveling the playing field and
            emphasizing skill and strategy as the deciding factors.
          </div>

          <div className="w-[324px] lg:w-[850px] pt-2 lg:text-2xl text-white text-sm font-bold font-proxima-nova">
            Fair Play Guarantee
          </div>
          <div className="w-[329px] lg:w-[850px] pt-1 lg:text-lg text-slate-300 text-xs font-bold font-proxima-nova">
            At USDTWARS, we take fairness seriously. Our commitment goes beyond
            the game mechanics. We operate on a net-profit model, removing any
            margin for the house. Moreover, we take only a minimal material fee
            from each game, fostering an environment where players compete
            against each other, not against the house. This ensures that every
            game is a true test of skill, luck, and strategy, with no hidden
            advantage for the casino. Join us at USDTWARS, where fairness is not
            just a promise—its the foundation of our gaming experience. May the
            odds be ever in your favor!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fairness;
