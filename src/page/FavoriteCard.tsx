import React from "react";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

import FavCard from "@/components/FavoriteCard/FavCard";
import FavoriteEmpty from "@/components/FavoriteCard/FavoriteEmpty";
import { useDispatch } from "react-redux";
import { clearFavorite } from "@/store/Hero/fevoriteSlice";
import { itemType } from "@/components/AllHero/HeroCard";

const FavoriteCard: React.FC = () => {
  const { favorite } = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch();

  if (favorite.length < 1) {
    return <FavoriteEmpty />;
  }

  return (
    <>
      <h1 className="text-center mt-2 text-slate-200 text-[36px]">
        Favorite heroes:
      </h1>
      <ul>
        {favorite.map((item: itemType) => (
          <FavCard key={item.id} {...item} />
        ))}
      </ul>
      <button
        className="flex m-auto mt-[40px] mb-[40px] border-2 px-12 py-3 bg-black text-white hover:bg-red-400"
        onClick={() => dispatch(clearFavorite())}
      >
        Clear
      </button>
    </>
  );
};

export default FavoriteCard;
