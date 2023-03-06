import React from "react";
import { resultType } from "./InfoMatch";

import agilityImg from "../../image/agillity.jpg";
import strenchIMG from "../../image/strench.jpg";
import inntellegentIMG from "../../image/intellegent.jpg";
import { Link } from "react-router-dom";

const CardMatchRadiant: React.FC<resultType> = ({
  id,
  account_id,
  localized_name,
  name,
  primary_attr,
}) => {
  let imgAttributes;

  if (primary_attr === "str") {
    imgAttributes = strenchIMG;
  } else if (primary_attr === "int") {
    imgAttributes = inntellegentIMG;
  } else {
    imgAttributes = agilityImg;
  }
  return (
    <Link to={`/hero/${id}`}>
      <ul className="flex items-center border bg-green-500 mb-2 relative mr-2  h-[76px]">
        <li>
          {
            <img
              className=" object-cover h-[75px] w-[164px] pl-6 mr-2 "
              src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${name?.replace(
                "npc_dota_hero_",
                ""
              )}.png`}
              alt={localized_name}
            />
          }
        </li>
        <li>
          <img
            src={imgAttributes}
            alt={localized_name}
            className="h-[75px] w-[75px]"
          />
        </li>
        <li className="ml-2 text-2xl text-slate-200 ">{localized_name}</li>
        <li className="absolute right-2 text-slate-300">
          Acaunt ID: <span className="text-red-600">{account_id}</span>
        </li>
      </ul>
    </Link>
  );
};

export default CardMatchRadiant;
