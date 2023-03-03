import React from "react";
import { InfoHero } from "@modules/modulesHeroes";
import { secondsToMinutes } from "@/utils/secondsToMinutes";
import { whoWin } from "@/utils/whoWin";

const InfoGame: React.FC<InfoHero> = ({
  match_id,
  assists,
  deaths,
  kills,
  duration,
  league_name,
  radiant,
  radiant_win,
}) => {
  const win = whoWin(radiant, radiant_win);
  const minDuration = secondsToMinutes(duration);

  return (
    <div className="m-[24px] min-w-[600px]  border rounded">
      <ul>
        <li className="rounded ">
          <div className="bg-slate-200 px-2 pt-2">
            <div>
              GameID: <span className="text-red-500">{match_id}</span>{" "}
            </div>
            <div className="font-bold">Tournaments: {league_name}</div>
          </div>
          <div className="bg-white px-2 pb-2">
            <div className="text-green-500">Kills:{kills}</div>
            <div className="text-red-500">Deaths: {deaths}</div>
            <div className="text-yellow-400">Assists: {assists}</div>
            <div>Duration: {minDuration} min</div>
            <div>
              Result:{" "}
              <span className={win ? "text-green-500" : "text-red-500"}>
                {win ? "win" : "loss"}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InfoGame;
