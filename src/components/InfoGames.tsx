import React from "react";
import { InfoHero } from "@modules/modulesHeroes";

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
  const whoWin = (radiant: boolean, radiant_win: boolean) => {
    if (radiant) {
      if (radiant_win) {
        return true;
      }
      return false;
    } else {
      if (radiant_win) {
        return false;
      }
      return true;
    }
  };

  const win = whoWin(radiant, radiant_win);

  return (
    <div className="m-[24px] min-w-[600px]  border rounded">
      <ul>
        <li className="rounded">
          <div className="bg-slate-200 ">
            <div>GameID: {match_id} </div>
            <div>Tournaments: {league_name}</div>
          </div>
          <div className="bg-white">
            <div>Kills:{kills}</div>
            <div>Deaths: {deaths}</div>
            <div>Assists: {assists}</div>
            <div>Duration: {duration}</div>
            <div>Result: {win ? "win" : "loss"}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InfoGame;
