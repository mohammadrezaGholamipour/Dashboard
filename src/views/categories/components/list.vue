<script setup>
import Dialog from '@/components/dialog.vue';
import { reactive } from 'vue';
//////////////////////////////////////////
const emit = defineEmits(['categorySelect', 'DeleteCategory'])
const props = defineProps(['categories'])
////////////////////////////////////////
const state = reactive({
  statusDialog: false,
  category: {},
})
///////////////////////////////
const handleDeleteCategory = (category) => {
  state.category = category;
  state.statusDialog = true
}
//////////////////////////////////
const handleStatusDialog = (status) => {
  if (status) {
    emit('DeleteCategory', state.category.categoryId)
  }
  state.statusDialog = false
}
</script>
<template>
  <transition-scale group class="flex w-full justify-center items-center flex-wrap gap-4">
    <!-- ////////////////////////////////// -->
    <div v-if="props.categories.length" class="flex flex-col justify-center items-center w-full gap-y-5">
      <!-- ////////////////////////////////// -->
      <div class="relative w-full max-w-[365px] min-w-[200px] justify-center items-center">
        <input class="input bg-white m-0 dark:bg-[#151521] text" type="text" placeholder="عنوان محصول را وارد کنید">
        <i
          class="fa-duotone text fa-magnifying-glass text-xl absolute left-5 top-3 bottom-0 cursor-pointer hover:text-blue-500 transition-all"></i>
      </div>
      <div class="flex w-full flex-wrap justify-center items-center gap-5">
        <div v-for="(item, index) in props.categories" :key="index" class="category">
          <img @error="$event.target.src = 'src/assets/images/category.png'" width="66" height="66" :src="item.imageName"
            class="rounded-md">
          <p class="text-no-wrap-category">{{ item.categoryTitle }}</p>
          <div class="flex w-full justify-center items-center gap-x-5">
            <i @click="emit('categorySelect', item)"
              class="fa-duotone fa-gear text-xl text-blue-500 hover:rotate-45 cursor-pointer transition-all duration-300"></i>
            <i @click="handleDeleteCategory(item)" class="fa-duotone fa-trash text-xl text-red-500 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- //////////////////////////// -->
    <div v-else-if="props.categories" class="flex relative flex-col items-center">
      <p class="text text-xl absolute top-7 font-bold">دسته بندی یافت نشد</p>
      <img width="350" src="@/assets/images/not-found-data.jpg" />
    </div>
    <!-- //////////////////////////// -->
    <div v-else class="flex w-full flex-wrap gap-5 justify-center items-center">
      <div v-for="item in 16" :key="item" class="category animate-pulse">
        <div class="w-[66px] h-[66px] rounded-md dark:bg-white bg-slate-500"></div>
        <div class="w-full h-[20px] rounded-md dark:bg-white bg-slate-200"></div>
        <div class="flex w-full justify-center items-center gap-x-5">
          <div class="w-[20px] h-[20px] dark:bg-white rounded-full bg-slate-200"></div>
          <div class="w-[20px] h-[20px] dark:bg-white rounded-full bg-slate-200"></div>
        </div>
      </div>
    </div>
    <!-- /////////////////////////// -->
    <template>
      <Dialog @dialogStatus="handleStatusDialog" :statusDialog="state.statusDialog" :dialogWidth="300"
        :headerStatus="false" :headerText="'dialog'" :footerStatus="true" :btnAcceptStatus="true" :btnCancelStatus="true"
        :btnAcceptText="'تایید'" :btnCancelText="'بازگشت'">
        <p>{{ `دسته بندی ${state.category.categoryTitle} حذف شود؟` }}</p>
      </Dialog>
    </template>
    <!-- /////////////////////////// -->
  </transition-scale>
</template>