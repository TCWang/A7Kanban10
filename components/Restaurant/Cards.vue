<template>
  <div class="w-full">
    <RestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :restaurant="restaurant"
    />
  </div>
</template>

<script setup>
const { restaurants } = useRestaurants();
</script>
