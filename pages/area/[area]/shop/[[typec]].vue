<template>
  <div>
    <!-- <RestaurantCards v-if="restaurants.length" :restaurants="restaurants" /> -->
    <ShopCards
      v-if="shopsOrganized.filtered.length"
      :shops="shopsOrganized.filtered"
    />

    <!-- <RestaurantCards /> -->
    <h1 v-else class="text-red-600">沒有餐廳符合搜尋條件</h1>
  </div>
</template>

<script setup>
const route = useRoute();
// const restaurants = await useFetchRestaurants(route.params.city, {
//   //   minPrice: route.query.minPrice,
//   //   maxPrice: route.query.maxPrice,
//   type: route.params.type,
// });

// watch(
//   () => route.query,
//   () => {
//     window.location.reload(true);
//   }
// );

import shops from "@/data/shops.json";

// const restaurantsOrganized = {
//   filtered: [...restaurants].filter(
//     (restaurant) =>
//       restaurant.category === route.params.city &&
//       restaurant.type === route.params.type
//   ),
// };
// const restaurantsOrganized = {
//   filtered: [...restaurants].filter(
//     (restaurant) => restaurant.category === route.params.city
//   ),
// };

const shopsOrganized = {
  filtered: [...shops]
    .filter((shop) => {
      if (route.params.typec === "" || route.params.typec === "所有") {
        return shop.category === route.params.area;
      } else {
        return (
          shop.category === route.params.area &&
          shop.type === route.params.typec
        );
      }
    })
    .sort((a, b) => a.address.localeCompare(b.address)),
};
</script>
