<template>
  <div v-if="restaurant">
    <p>餐廳介紹</p>
    <RestaurantDetailHero :restaurant="restaurant" />
    <!-- <RestaurantDetailAttributes :features="restaurant.features" />
    <RestaurantDetailDescription :description="restaurant.description" />
    <RestaurantDetailContact /> -->
  </div>
</template>

<script setup>
const { restaurants } = useRestaurants();
const route = useRoute();
const { capitalizeFirstLetter } = useUtilities();

const restaurant = computed(() => {
  return restaurants.find((restaurant) => {
    return restaurant.id === route.params.id;
    // return restaurant.id === parseInt(route.params.id);
  });
});

if (!restaurant.value) {
  throw createError({
    statusCode: 404,
    message: `Restaurant with ID of ${route.params.id} does not exist`,
  });
}

useHead({
  title: capitalizeFirstLetter(route.params.name),
});

definePageMeta({
  layout: "custom",
});
</script>
