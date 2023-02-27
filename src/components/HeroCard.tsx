import { Hero } from "@/modules/modulesHeroes";
import React from "react";
import { Link } from "react-router-dom";

const HeroCard: React.FC<Hero> = ({
  localized_name,
  name,
  attack_type,
  primary_attr,
  roles,
  id,
}) => {
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

  return (
    <li className="relative mr-4 mt-4 bg-white border border-grey-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-[256px]">
      <img
        className="rounded-t-lg object-cover min-w-[256px]"
        src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${name.replace(
          "npc_dota_hero_",
          ""
        )}.png`}
        alt={localized_name}
      />
      {
        <div className="p-5 pb-[60px]">
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
