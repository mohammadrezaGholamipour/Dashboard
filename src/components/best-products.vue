<script setup>
import { reactive } from "vue";
//////////////////////
const state = reactive({
  bestProducts: [
    { imageProduct: 'src/assets/images/product-sound.png', name: 'گیاه شناسی', category: 'طب سنتی', type: 'دیجیتال' },
    { imageProduct: 'src/assets/images/paid.png', name: 'آموزش حسابداری', category: 'فناوری', type: 'دیجیتال' },
    { imageProduct: 'src/assets/images/category.png', name: 'عادت های اتمی', category: 'کتاب', type: 'کالا' },
    { imageProduct: 'src/assets/images/bg-login.png', name: 'تلویزیون', category: 'فناوری', type: 'کالا' },
    { imageProduct: 'src/assets/images/image.png', name: 'کامپیوتر', category: 'فناوری', type: 'کالا' },
  ],
  bestTabs: [
    { name: 'فروش', icon: 'fa-duotone fa-face-tongue-money', type: 'sale' },
    { name: 'بازدید', icon: 'fa-duotone fa-eye', type: 'view' },
    { name: 'دانلود', icon: 'fa-duotone fa-download', type: 'download' },
    { name: 'لایک', icon: 'fa-duotone fa-thumbs-up', type: 'like' },
  ],
  bestTabSelected: '',
});
</script>
<template>
  <div class="parent-best-product">
    <!-- ///////////////////////////////////// -->
    <div class="w-full gap-x-5 flex items-center justify-between p-3">
      <div v-for="(item, index) in state.bestTabs" :key="index" class="best-tab">
        <p>{{ item.name }}</p> <i :class="item.icon"></i>
      </div>
    </div>
    <!-- ///////////////////////////////////// -->
    <div class="flex w-full flex-col items-start justify-center">
      <div v-for="(item, index) in state.bestProducts" :key="index" class="flex w-full items-center justify-between"
        :class="{ 'border-dashed border-b': state.bestProducts.length - (index + 1) }">
        <div class="flex items-center">
          <div class="w-[45px] flex items-center justify-center bg-[#f9f9f9] dark:bg-[#1b1b29] rounded-md h-[45px]">
            <img :src="item.imageProduct" width="23" />
          </div>
          <div class="flex items-start p-3 justify-center flex-col gap-y-1">
            <p class="text-[#181C32] font-bold text text-no-wrap-best-product-right">{{ item.name }}</p>
            <p class="dark:text-[#565674] text-[#A1A5B7] text-no-wrap-best-product-right">{{ item.category }}</p>
          </div>
        </div>
        <p class="dark:text-[#565674] text-[#A1A5B7] text-no-wrap-best-product-left">{{ item.type }}</p>
      </div>
    </div>
  </div>
</template>