import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchHeroesData } from "../../store/Hero/HeroSlice";
import { AppDispatch, RootState } from "@store/index";
import { Hero } from "@modules/modulesHeroes";
import HeroCard from "@/components/HeroCard";

const AllHero: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.hero);
  console.log(data);

  useEffect(() => {
    dispatch(fetchHeroesData());
  }, [dispatch]);

  return (
    <div className="container flex mx-auto justify-center align-items">
      <ul className=" flex max-w-[1200px] flex-wrap justify-center">
        {data?.map((item: Hero) => (
          <HeroCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default AllHero;
