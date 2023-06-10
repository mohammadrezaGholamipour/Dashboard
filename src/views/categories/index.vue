<script setup>
import { useDashboardStore } from '@/store/pinia';
import NewEdit from './components/new-edit.vue';
import { useToast } from "vue-toastification";
import { onMounted, reactive } from 'vue';
import categoryApi from '@/api/category';
import List from './components/list.vue';
/////////////////////////////////
const pinia = useDashboardStore()
const toast = useToast();
////////////////////////////////
const state = reactive({
  categories: false,
  showList: true,
  categorySelected: false
})
////////////////////////////////
onMounted(() => {
  const breadCrumb = [
    { name: 'صفحه اصلی', link: '/' },
    { name: 'دسته بندی ها', link: '/categories' },
  ]
  pinia.handleBreadCrumb(breadCrumb)
  requestGetCategoryList()
})
// ////////////////////////////
const requestGetCategoryList = () => {
  categoryApi.get()
    .then((response) => {
      state.categories = response.data
    })
}
</script>
<template>
  <div class="parent-categories">
    <transition-slide group class="w-full flex">
      <div class="header-categories" v-if="state.showList">
        <p class="title">دسته بندی ها</p>
        <button @click="state.showList = false" class="btn-primary flex items-center gap-x-3 p-2 px-5 justify-center">
          <p>افزودن</p>
          <i class="fa-duotone fa-circle-plus text-xl"></i>
        </button>
      </div>
      <div class="header-categories" v-else>
        <p class="title">{{ state.categorySelected ? 'تغییر دسته بندی' : 'افزودن دسته بندی' }}</p>
        <button @click="state.showList = true, state.categorySelected = false"
          class="btn-red flex items-center gap-x-3 p-2 px-5 justify-center">
          <p>بازگشت</p>
          <i class="fa-duotone fa-angles-left text-xl"></i>
        </button>
      </div>
    </transition-slide>
    <transition-scale group class="main-categories" :class="{ 'bg-white': !state.showList }">
      <!-- /////////////////////////////// -->
      <div v-if="state.showList" class="relative w-full max-w-[365px] min-w-[200px] justify-center items-center">
        <input :disabled="!state.categories.length || !state.categories"
          :class="{ 'hover:cursor-not-allowed': !state.categories.length || !state.categories }"
          class="input bg-white m-0 dark:bg-[#151521] text" type="text" placeholder="عنوان محصول را وارد کنید">
        <i :class="{ 'hidden': !state.categories.length || !state.categories }"
          class="fa-duotone text fa-magnifying-glass text-xl absolute left-5 top-3 bottom-0 cursor-pointer hover:text-blue-500 transition-all"></i>
      </div>
      <!-- /////////////////////////////// -->
      <List v-if="state.showList" :categories="state.categories" />
      <NewEdit v-else />
      <!-- /////////////////////////////// -->
    </transition-scale>
  </div>
</template>