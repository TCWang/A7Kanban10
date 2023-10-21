<template>
  <div>
    <RestaurantCards v-if="restaurants.length" :restaurants="restaurants" />

    <!-- <RestaurantCards /> -->
    <h1 v-else class="text-red-600">沒有餐廳符合搜尋條件</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const restaurants = await useFetchRestaurants(route.params.city, {
  //   minPrice: route.query.minPrice,
  //   maxPrice: route.query.maxPrice,
  type: route.params.type,
});

// watch(
//   () => route.query,
//   () => {
//     window.location.reload(true);
//   }
// );
</script>
