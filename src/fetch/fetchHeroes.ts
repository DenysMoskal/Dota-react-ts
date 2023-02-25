import axios from "axios";

import { Hero } from "@modules/modulesHeroes";

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
