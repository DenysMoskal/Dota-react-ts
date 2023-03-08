import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroesData } from "@/store/Hero/heroesSlice";
import { AppDispatch, RootState } from "@store/index";
import { Hero } from "@modules/modulesHeroes";
import HeroCard from "@/components/AllHero/HeroCard";
import Categories from "@/components/AllHero/Categories";
import Input from "@/components/AllHero/Input";
import useDebounce from "@/hooks/Debounce";
import Error from "@/components/Error";
import Loader from "@/components/Loader";

const AllHero: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.hero
  );

  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [value, setValue] = React.useState("");

  const filteredData = selectedCategory
    ? data.filter((item) => item.primary_attr === selectedCategory)
    : data;

  useEffect(() => {
    dispatch(fetchHeroesData());
  }, [dispatch]);

  const debouncedValue = useDebounce<string>(value, 500);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="container mb-[40px]">
      <div className="flex justify-around items-center ">
        <Input value={value} setValue={setValue} />

        <Categories
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className=" flex mx-auto justify-center align-items ">
        <ul className=" flex max-w-[1200px] flex-wrap justify-center ">
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
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default AllHero;
