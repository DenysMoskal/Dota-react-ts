import axios from "axios";

import { Hero, InfoHero } from "@modules/modulesHeroes";

export const fetchHeroes = async (): Promise<Hero[]> => {
  try {
    const response = await axios.get<Hero[]>(
      "https://api.opendota.com/api/heroes?limit=10"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchHeroInfo = async (id: number): Promise<InfoHero[]> => {
  try {
    const response = await axios.get<InfoHero[]>(
      `https://api.opendota.com/api/heroes/${id}/matches`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
