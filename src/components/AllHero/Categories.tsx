import React from "react";
import { AppDispatch, RootState } from "@store/index";
import { setActiveCategory } from "@/store/Hero/filterSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

type CategoriesProp = {
  setSelectedCategory: (value: string) => void;
  selectedCategory: string;
};

type buttonDataType = {
  name: string;
  attributes: string;
  color: string;
  id: number;
};

const Categories: React.FC<CategoriesProp> = ({
  setSelectedCategory,
  selectedCategory,
}) => {
  const { activeCategory } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();

  const handleCategoryClick = (category: string, id: number) => {
    if (category === selectedCategory) {
      setSelectedCategory("");
      dispatch(setActiveCategory(0));
    } else {
      setSelectedCategory(category);
      dispatch(setActiveCategory(id));
    }
  };

  const buttonData: buttonDataType[] = [
    {
      name: "Strength",
      attributes: "str",
      color: "red",
      id: 1,
    },
    {
      name: "Agility",
      attributes: "agi",
      color: "green",
      id: 2,
    },
    {
      name: "Intelligence",
      attributes: "int",
      color: "blue",
      id: 3,
    },
  ];

  return (
    <div className="flex py-4 px-2 ">
      <h2 className="mr-4 flex items-center text-slate-300 text-[24px]">
        Attribute:
      </h2>
      {buttonData.map((item) => (
        <button
          key={item.id}
          className={
            activeCategory === item.id
              ? `border-2 border-black mr-4  h-[40px] rounded-full py-2 px-4 w-[120px] bg-${item.color}-400 `
              : `border mr-4  h-[40px] rounded-full py-2 px-4 w-[120px] bg-slate-300  hover:bg-white hover:border-${item.color}-400 shadow`
          }
          onClick={() => handleCategoryClick(item.attributes, item.id)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
