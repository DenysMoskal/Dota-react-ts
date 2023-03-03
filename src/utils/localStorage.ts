import { initialStateFavoriteType } from "@/store/Hero/fevoriteSlice";

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return [];
};

export const setLocalStorage = (
  key: string,
  data: initialStateFavoriteType
) => {
  localStorage.setItem(key, JSON.stringify(data));
};
