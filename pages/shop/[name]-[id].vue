<template>
  <div v-if="shop">
    <h1>餐廳介紹</h1>
    <ShopDetail :shop="shop" />
    <!-- <RestaurantDetailAttributes :features="restaurant.features" />
    <RestaurantDetailDescription :description="restaurant.description" />
    <RestaurantDetailContact /> -->

    <ShopBack :area="shop.area" />
  </div>
</template>

<script setup>
const { shops } = useShops();
const route = useRoute();

const shop = computed(() => {
  return shops.find((shop) => {
    return shop.id === route.params.id;
    // return restaurant.id === parseInt(route.params.id);
  });
});

if (!shop.value) {
  throw createError({
    statusCode: 404,
    message: `Restaurant with ID of ${route.params.id} does not exist`,
  });
}

useHead({
  title: `商店黃頁:${route.params.name}`,
});

definePageMeta({
  layout: "custom",
});
</script>
