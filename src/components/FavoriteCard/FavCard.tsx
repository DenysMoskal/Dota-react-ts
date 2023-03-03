import React from "react";
import { itemType } from "../AllHero/HeroCard";
import agilityImg from "../../image/agillity.jpg";
import strenchIMG from "../../image/strench.jpg";
import inntellegentIMG from "../../image/intellegent.jpg";
import { useDispatch } from "react-redux";
import { removeFromFavorite } from "@/store/Hero/fevoriteSlice";
import { AppDispatch } from "@/store";
import { Link } from "react-router-dom";

const FavCard: React.FC<itemType> = ({
  id,
  primary_attr,
  name,
  localized_name,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  let imgAttributes;

  if (primary_attr === "str") {
    imgAttributes = strenchIMG;
  } else if (primary_attr === "int") {
    imgAttributes = inntellegentIMG;
  } else {
    imgAttributes = agilityImg;
  }
  return (
    <li className="flex w-[600px] m-auto h-[79px] relative mt-[40px] border-2 bg-black">
      <Link to={`/hero/${id}`}>
        <img
          className="rounded-lg object-cover max-w-[140px] mr-[20px] h-[76px]"
          src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${name.replace(
            "npc_dota_hero_",
            ""
          )}.png`}
          alt={localized_name}
        />
      </Link>

      <span className="text-slate-300 font-bold text-[32px] flex items-center ">
        {localized_name}
      </span>
      <img
        src={imgAttributes}
        alt={localized_name}
        className="h-[73px] w-[73px] absolute right-0"
      />
      <Link to={`/hero/${id}`}>
        <button className="text-black absolute right-[86px] bg-slate-200 py-2 px-4 hover:bg-red-200 mt-[17.5px]">
          Info
        </button>
      </Link>

      <span className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
          className="absolute right-[-50px]  cursor-pointer"
          onClick={() => dispatch(removeFromFavorite(id))}
        >
          <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
        </svg>
      </span>
    </li>
  );
};

export default FavCard;
