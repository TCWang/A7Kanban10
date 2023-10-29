<template>
  <div class="w-full">
    <h2>A7重劃區 商店匯總</h2>
    <p>
      <span class="text-red-600">可點選照片進入商店詳細介紹</span>,
      請選擇查詢區域及使用下拉選單選擇餐廳種類。 商店依據地址排序
    </p>

    <ShopCard v-for="shop in shops" :key="shop.id" :shop="shop" />
  </div>
</template>

<script setup>
const props = defineProps({
  shops: Array,
});
</script>
