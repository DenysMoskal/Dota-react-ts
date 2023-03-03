import React from "react";
import { Hero } from "@/modules/modulesHeroes";

interface InfoNameProp {
  dataHero: Hero | undefined;
}

const InfoName: React.FC<InfoNameProp> = ({ dataHero }) => {
  return (
    <>
      <img
        className="rounded-lg object-cover w-[446px] "
        src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${dataHero?.name.replace(
          "npc_dota_hero_",
          ""
        )}.png`}
        alt={dataHero?.localized_name}
      />
      <h1 className="text-slate-300 font-bold text-[36px]">
        Name: {dataHero?.localized_name}
      </h1>
    </>
  );
};

export default InfoName;
