import React from "react";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroesData } from "@/store/Hero/heroesSlice";
import CardMatchRadiant from "./CardMatchRadiant";
import CardMatchDire from "./CardMatchDire";
import Error from "../Error";
import Loader from "../Loader";

interface arrGameType {
  account_id?: number;
  hero_id?: number;
  player_slot?: number;
  key: string;
}

export interface resultType {
  account_id?: number;
  hero_id?: number;
  player_slot?: number;
  key: string;
  attack_type?: string;
  id?: number;
  legs?: number;
  localized_name?: string;
  name?: string;
  primary_attr?: string;
  roles?: string[];
}

const InfoMatch = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.match
  );
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchHeroesData());
  }, [dispatch]);

  const objPgroup = data.data?.pgroup;

  const arrGame: arrGameType[] = [];

  if (objPgroup) {
    for (const key of Object.keys(objPgroup)) {
      arrGame.push({ key, ...objPgroup[key] });
    }
  }

  const heroId = arrGame.map((item) => item.hero_id);

  const { data: DataHero } = useSelector((state: RootState) => state.hero);

  const FiltersData = DataHero.filter((item) => heroId.includes(item.id));

  const result = arrGame.reduce((acc: resultType[], cur: arrGameType) => {
    const item = FiltersData.find((item) => item.id === cur.hero_id);
    if (item) {
      acc.push({ ...cur, ...item });
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);

  const whoWin = data.data?.radiant_win;

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <div className="flex">
        <div className="w-[50%]">
          <div className="flex items-center">
            {result.length > 0 && (
              <h1 className="text-[36px] text-green-500 ml-2">Team radiant</h1>
            )}
            {whoWin && (
              <h1 className="text-[36px] text-slate-200 ml-4 underline">WIN</h1>
            )}
          </div>
          {result
            .filter((i) => {
              return typeof i.player_slot === "number" && i.player_slot < 5;
            })
            .map((item) => (
              <CardMatchRadiant {...item} key={item.key} />
            ))}
        </div>
        <div className="w-[50%]">
          <div className="flex items-center justify-end">
            {!whoWin && result.length > 0 && (
              <h1 className="text-[36px] text-slate-200 mr-4 underline">WIN</h1>
            )}
            {result.length > 0 && (
              <h1 className="text-[36px] text-red-700  text-right mr-2">
                Team dire
              </h1>
            )}
          </div>
          {result
            .filter((i) => {
              return typeof i.player_slot === "number" && i.player_slot > 5;
            })
            .map((item) => (
              <CardMatchDire {...item} key={item.key} />
            ))}
        </div>
      </div>
      {loading && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default InfoMatch;
