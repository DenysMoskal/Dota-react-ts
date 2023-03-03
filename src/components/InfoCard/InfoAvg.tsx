import React from "react";
import { useDispatch } from "react-redux";
import { changeCount } from "@/store/Hero/infoSlice";

interface infoAvgType {
  killsAvg: number;
  deathsAvg: number;
  assistsAvg: number;
  durationAvg: string;
  winsCount: number;
  loosCount: number;
  winRate: number;
}

const InfoAvg: React.FC<infoAvgType> = ({
  killsAvg,
  deathsAvg,
  assistsAvg,
  durationAvg,
  winsCount,
  loosCount,
  winRate,
}) => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = React.useState(false);
  const [isCountNumber, setIsCountNumber] = React.useState(1);

  const parts = durationAvg.split(".");
  const durationAvgClear = parts[0];

  const winRateClear = Math.floor(winRate);

  const isCount = [
    {
      text: 10,
      id: 1,
    },
    {
      text: 20,
      id: 2,
    },
    {
      text: 50,
      id: 3,
    },
  ];

  return (
    <div>
      <div className="flex">
        <button
          className="border text-slate-200 border-slate-200 bg-black px-4 py-2 mr-6 hover:bg-red-400"
          onClick={() => setIsVisible(!isVisible)}
        >
          Number of matches
        </button>
        {isVisible && (
          <ul>
            {isCount.map((item) => (
              <button
                key={item.id}
                className={
                  isCountNumber === item.id
                    ? "border text-slate-200 border-slate-200 bg-red-400 px-4 py-2"
                    : "border text-slate-200 border-slate-200 bg-black px-4 py-2"
                }
                onClick={() => {
                  setIsCountNumber(item.id);
                  dispatch(changeCount(item.text));
                }}
              >
                {item.text}
              </button>
            ))}
          </ul>
        )}
      </div>

      <ul>
        <li className="text-slate-200 pl-4 pt-[2px]">
          Win Rate :{" "}
          <span
            className={winRateClear < 50 ? "text-red-400" : "text-green-600"}
          >
            {winRateClear}%
          </span>
        </li>
        <li className="text-slate-200 pl-4 pt-[2px]">
          Kiils average : <span className="text-green-600">{killsAvg}</span>
        </li>
        <li className="text-slate-200 pl-4 pt-[2px]">
          Deaths average : <span className="text-red-400">{deathsAvg}</span>
        </li>
        <li className="text-slate-200 pl-4 pt-[2px]">
          Assists average :{" "}
          <span className="text-yellow-200">{assistsAvg}</span>
        </li>
        <li className="text-slate-200 pl-4 pt-[2px]">
          Duratuins average :{" "}
          <span className="underline">{durationAvgClear}</span> min
        </li>
      </ul>
    </div>
  );
};

export default InfoAvg;
