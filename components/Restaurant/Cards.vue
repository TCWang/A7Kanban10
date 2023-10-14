<template>
  <div class="w-full">
    <RestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :restaurant="restaurant"
      @favor="handleFavorite"
      :favored="restaurant.id in favorite"
    />
  </div>
</template>

<script setup>
const { restaurants } = useRestaurants();

const favorite = useLocalStorage("favorite", {});

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>
