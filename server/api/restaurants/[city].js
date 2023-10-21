import restaurants from "@/data/restaurants-01.json";

// Supabase database
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  const { city } = event.context.params;
  const { type } = getQuery(event);

  let filteredRestaurants = restaurants;

  filteredRestaurants = filteredRestaurants.filter((restaurant) => {
    return restaurant.city.toLowerCase() === city.toLowerCase();
  });
  if (type) {
    filteredRestaurants = filteredRestaurants.filter((restaurant) => {
      return restaurant.type === type;
    });
  }
  return filteredRestaurants;

  // Test json file input
  // return restaurants;
});
