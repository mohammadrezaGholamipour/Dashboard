<script setup>
import BestProducts from '@/components/best-products.vue'
import ChartBar from '../components/chart-bar.vue';
</script>
<template>
  <div class="flex w-full h-full overflow-scroll items-start flex-wrap gap-5 justify-start">
    <ChartBar />
    <BestProducts />
  </div>
</template>

