import { itemType } from "@/components/AllHero/HeroCard";
import { initialStateFavoriteType } from "@/store/Hero/fevoriteSlice";

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);

  if (data === null) {
    return [];
  }

  return JSON.parse(data);
};

export const setLocalStorage = (key: string, data: itemType) => {
  localStorage.setItem(key, JSON.stringify(data));
};
