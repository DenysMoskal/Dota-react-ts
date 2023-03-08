import axios from "axios";
import { Hero, InfoHero } from "@modules/modulesHeroes";

export const fetchHeroes = async (): Promise<Hero[]> => {
  const response = await axios.get<Hero[]>(
    "https://api.opendota.com/api/heroes"
  );
  return response.data;
};

export const fetchHeroInfo = async (id: number): Promise<InfoHero[]> => {
  const response = await axios.get<InfoHero[]>(
    `https://api.opendota.com/api/heroes/${id}/matches`
  );
  return response.data;
};
