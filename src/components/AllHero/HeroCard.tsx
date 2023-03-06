import { Hero } from "@/modules/modulesHeroes";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { addToFavorite, removeFromFavorite } from "@/store/Hero/fevoriteSlice";

export interface itemType {
  localized_name: string;
  name: string;
  primary_attr: string;
  id: number;
}

const HeroCard: React.FC<Hero> = ({
  localized_name,
  name,
  attack_type,
  primary_attr,
  roles,
  id,
}) => {
  const item: itemType = {
    localized_name: localized_name,
    name: name,
    primary_attr: primary_attr,
    id: id,
  };

  const dispatch = useDispatch<AppDispatch>();

  let color;
  let text;
  if (primary_attr === "str") {
    text = "Strength";
    color = "red";
  } else if (primary_attr === "int") {
    text = "Intelligence";
    color = "blue";
  } else {
    text = "Agility";
    color = "green";
  }

  const nameStyle = {
    color: color,
  };

  const { favorite } = useSelector((state: RootState) => state.favorite);

  const isFavortie = favorite.some((fav: itemType) => fav.id === item.id);

  const toggleFavorite = () => {
    if (isFavortie) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(item));
    }
  };

  return (
    <li className=" mr-10 mt-4 bg-white border border-grey-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-[258px] relative">
      <span
        onClick={toggleFavorite}
        className="cursor-pointer absolute left-[234px] top-[-16px]"
      >
        {isFavortie ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
            fill="#B92C2C"
          >
            <path d="m480 935-41-37q-106-97-175-167.5t-110-126Q113 549 96.5 504T80 413q0-90 60.5-150.5T290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.5T880 413q0 46-16.5 91T806 604.5q-41 55.5-110 126T521 898l-41 37Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
            fill="gray"
          >
            <path d="M730 776V646H600v-60h130V456h60v130h130v60H790v130h-60ZM440 936 313 822q-72-65-123.5-116t-85-96q-33.5-45-49-87T40 435q0-94 63-156.5T260 216q52 0 99 21.5t81 61.5q34-40 81-61.5t99-21.5q85 0 142.5 51.5T834 388q-18-7-36-10.5t-35-3.5q-101 0-172 70.5T520 616q0 52 21 98.5t59 79.5q-19 17-49.5 43.5T498 884l-58 52Z" />
          </svg>
        )}
      </span>
      <img
        className="rounded-t-lg object-cover min-w-[256px] "
        src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${name.replace(
          "npc_dota_hero_",
          ""
        )}.png`}
        alt={localized_name}
      />

      {
        <div className="p-5 pb-[60px] ">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {localized_name}
          </h5>

          <h3>
            <span className="font-bold text-gray-400 ">Attribute:</span>{" "}
            <span style={nameStyle}>{text}</span>
          </h3>
          <h3>
            {" "}
            <span className="font-bold text-gray-400">Type:</span> {attack_type}
          </h3>
          <h3>
            <span className="font-bold text-gray-400 mb-[140px]">Roles:</span>{" "}
            {roles.map((value) => value + ", ")}
          </h3>
        </div>
      }
      <Link to={`/hero/${id}`}>
        <button className="border-2 rounded bg-slate-300 text-black py-2 px-4 absolute bottom-0 w-full hover:bg-red-400">
          More Info
        </button>
      </Link>
    </li>
  );
};

export default HeroCard;
