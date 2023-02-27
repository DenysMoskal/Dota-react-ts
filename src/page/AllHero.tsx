import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchHeroesData } from "@/store/Hero/heroesSlice";
import { AppDispatch, RootState } from "@store/index";
import { Hero } from "@modules/modulesHeroes";
import HeroCard from "@/components/HeroCard";
import Categories from "@/components/Categories";
import Input from "@/components/Input";
import useDebounce from "@/hooks/Debounce";

const AllHero: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.hero);

  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [value, setValue] = React.useState("");

  const filteredData = selectedCategory
    ? data.filter((item) => item.primary_attr === selectedCategory)
    : data;

  useEffect(() => {
    dispatch(fetchHeroesData());
  }, [dispatch]);

  const debouncedValue = useDebounce<string>(value, 500);

  return (
    <div className="container ">
      <div className="flex justify-around items-center">
        <Input value={value} setValue={setValue} />

        <Categories
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className=" flex mx-auto justify-center align-items">
        <ul className=" flex max-w-[1200px] flex-wrap justify-center">
          {filteredData
            .filter((item) =>
              item.localized_name
                .toLowerCase()
                .includes(debouncedValue.toLowerCase())
            )
            .map((item: Hero) => (
              <HeroCard key={item.id} {...item} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AllHero;
