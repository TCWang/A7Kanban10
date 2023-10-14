import restaurants from "@/data/restaurant.json";
import types from "@/data/types.json";

export const useRestaurants = () => {
  return {
    restaurants,
    types,
  };
};
