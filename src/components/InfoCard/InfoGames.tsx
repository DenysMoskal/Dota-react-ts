import React from "react";
import { InfoHero } from "@modules/modulesHeroes";
import { secondsToMinutes } from "@/utils/secondsToMinutes";
import { whoWin } from "@/utils/whoWin";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchMatchData } from "@/store/Hero/matchSlice";
import { Link } from "react-router-dom";

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
  const dispatch = useDispatch<AppDispatch>();
  const match_id_str = match_id.toString();

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
          <div className="bg-white px-2 pb-2 relative">
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
            <Link to={"/match"}>
              <button
                onClick={() => dispatch(fetchMatchData(match_id_str))}
                className="absolute bottom-0 right-0 border-2 border-black px-4 py-2 bg-slate-200 mb-2 mr-2 hover:bg-red-200"
              >
                Chek match
              </button>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InfoGame;
