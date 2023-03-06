import React from "react";
import { resultType } from "./InfoMatch";

import agilityImg from "../../image/agillity.jpg";
import strenchIMG from "../../image/strench.jpg";
import inntellegentIMG from "../../image/intellegent.jpg";
import { Link } from "react-router-dom";

const CardMatchDire: React.FC<resultType> = ({
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
      <ul className="flex items-center border bg-red-800 mb-2 relative ml-2 h-[76px]">
        <li className=" right-2 text-slate-300 ml-2">
          Acaunt ID: <span className="text-green-600">{account_id}</span>
        </li>
        <li>
          {
            <img
              className=" object-cover h-[74px] w-[164px] mr-2 absolute right-[-6px] top-0 pr-6"
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
            className="h-[74px] w-[75px] padding-left absolute top-0 right-[174px]"
          />
        </li>
        <li className="ml-2 text-2xl text-slate-200 absolute  right-[255px]">
          {localized_name}
        </li>
      </ul>
    </Link>
  );
};

export default CardMatchDire;
