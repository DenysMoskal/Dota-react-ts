import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "@store/index";
import { fetchInfoHeroData } from "@/store/Hero/infoSlice";
import { fetchHeroesData } from "@/store/Hero/heroesSlice";
import InfoName from "@/components/InfoName";
import { Hero } from "@/modules/modulesHeroes";
import InfoGame from "@/components/InfoGames";

type dataHeroType = Hero | undefined;

const InfoCard = () => {
  const { id } = useParams();
  const numId = id ? +id : 0;

  const dispatch = useDispatch<AppDispatch>();
  const { info } = useSelector((state: RootState) => state.info);
  const { data } = useSelector((state: RootState) => state.hero);

  React.useEffect(() => {
    dispatch(fetchInfoHeroData(numId));
    dispatch(fetchHeroesData());
  }, []);

  const dataHero: dataHeroType = data.find((item) => item.id === numId);

  console.log(info);

  return (
    <div className="container flex justify-center">
      <div className="items-center m-[24px] pl-[40px] ">
        <InfoName dataHero={dataHero} />
      </div>
      <div>
        {info.map((item) => (
          <InfoGame key={item.match_id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
