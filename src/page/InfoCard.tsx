import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "@store/index";
import { fetchInfoHeroData } from "@/store/Hero/infoSlice";
import { fetchHeroesData } from "@/store/Hero/heroesSlice";
import InfoName from "@/components/InfoCard/InfoName";
import { Hero } from "@/modules/modulesHeroes";
import InfoGame from "@/components/InfoCard/InfoGames";
import { whoWin } from "@/utils/whoWin";
import { average } from "@/utils/average";
import { secondsToMinutes } from "@/utils/secondsToMinutes";
import InfoAvg from "@/components/InfoCard/InfoAvg";

type dataHeroType = Hero | undefined;

const InfoCard = () => {
  const { id } = useParams();
  const numId = id ? +id : 0;

  const dispatch = useDispatch<AppDispatch>();
  const { info, error, loading, count } = useSelector(
    (state: RootState) => state.info
  );
  const { data, error: errorIMG } = useSelector(
    (state: RootState) => state.hero
  );

  React.useEffect(() => {
    dispatch(fetchInfoHeroData(numId));
    dispatch(fetchHeroesData());
  }, [count]);

  const dataHero: dataHeroType = data.find((item) => item.id === numId);

  const winCount = info.filter((item) =>
    whoWin(item.radiant, item.radiant_win)
  );
  //to length

  const winsCount = winCount.length;
  const loosCount = info.length - winCount.length;
  const winRate = (winsCount / info.length) * 100;

  const kills = info.map((item) => item.kills);
  const deaths = info.map((item) => item.deaths);
  const assists = info.map((item) => item.assists);
  const duration = info.map((item) => item.duration);

  const killsAvg = average(kills, kills.length);
  const deathsAvg = average(deaths, deaths.length);
  const assistsAvg = average(assists, assists.length);
  const durationAvg = secondsToMinutes(average(duration, duration.length));

  if (error || errorIMG) {
    return <div>Error</div>;
  }

  return (
    <>
      <h1 className="text-center mt-2 text-slate-200 text-[36px]">Hero Info</h1>
      <div className="container flex justify-center">
        <div className="items-center m-[24px] pl-[40px] ">
          <div className="sticky top-0">
            <InfoName dataHero={dataHero} />
            <InfoAvg
              killsAvg={killsAvg}
              deathsAvg={deathsAvg}
              assistsAvg={assistsAvg}
              durationAvg={durationAvg}
              winsCount={winsCount}
              loosCount={loosCount}
              winRate={winRate}
            />
          </div>
        </div>

        <div>
          {info.map((item) => (
            <InfoGame key={item.match_id} {...item} />
          ))}
        </div>
        {loading && <div>Loading...</div>}
      </div>
    </>
  );
};

export default InfoCard;
