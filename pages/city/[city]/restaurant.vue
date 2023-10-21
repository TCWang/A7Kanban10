<template>
  <div class="mt-2 flex flex-col md:flex-row">
    <NuxtErrorBoundary>
      <!-- CAR SIDE BAR -->
      <RestaurantSideBar />

      <!-- Nuxt Page  -->
      <NuxtPage />

      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-5xl text-red-600 mb-4">Sorry Something went wrong</h1>
          <code>{{ error }}</code>
          <button
            class="text-white bg-blue-400 px-10 py-3 rounded mt-4"
            @click="error.value = null"
          >
            Go Back
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  title: `生活指引-餐廳推薦: ${route.params.city} 生活圈`,
});

definePageMeta({
  layout: "custom",
});
</script>
