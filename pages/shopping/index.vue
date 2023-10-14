<template>
  <div class="mt-2">
    <NuxtErrorBoundary>
      <!-- Groud Buying -->
      <h1>購物黃頁</h1>
      <NuxtImg
        src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-under-construction.webp"
        alt="Under Construction"
        class="w-[200px] mx-auto"
      ></NuxtImg>
      <!-- <GbuyingCards /> -->

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
  title: `購物黃頁`,
});

definePageMeta({
  layout: "custom",
});
</script>
