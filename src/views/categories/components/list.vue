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
  <transition-scale group class="flex w-full justify-center items-center p-2 flex-wrap gap-4">
    <template v-if="props.categories.length">
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
    </template>
    <!-- //////////////////////////// -->
    <div v-else-if="props.categories" class="flex flex-col items-center">
      <img width="500" src="@/assets/images/not-found-data.jpg" />
      <p class="text text-xl font-bold">دسته بندی یافت نشد</p>
    </div>
    <!-- //////////////////////////// -->
    <template v-else>
      <div v-for="item in 16" :key="item" class="category animate-pulse">
        <div class="w-[66px] h-[66px] rounded-md dark:bg-white bg-slate-500"></div>
        <div class="w-full h-[20px] rounded-md dark:bg-white bg-slate-200"></div>
        <div class="flex w-full justify-center items-center gap-x-5">
          <div class="w-[20px] h-[20px] dark:bg-white rounded-full bg-slate-200"></div>
          <div class="w-[20px] h-[20px] dark:bg-white rounded-full bg-slate-200"></div>
        </div>
      </div>
    </template>
    <!-- //////////////////////////// -->
    <template>
      <Dialog @dialogStatus="handleStatusDialog" :statusDialog="state.statusDialog" :dialogWidth="300"
        :headerStatus="false" :headerText="'dialog'" :footerStatus="true" :btnAcceptStatus="true" :btnCancelStatus="true"
        :btnAcceptText="'تایید'" :btnCancelText="'بازگشت'">
        <p>{{ `دسته بندی ${state.category.categoryTitle} حذف شود؟` }}</p>
      </Dialog>
      <!-- //////////////////////////// -->
    </template>
  </transition-scale>
</template>