<script setup>
import NewOrEdit from './components/new-or-edit.vue';
import { useDashboardStore } from '@/store/pinia';
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
  categorySelected: {}
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
  state.categories = false
  setTimeout(() => {
    categoryApi.get()
      .then((response) => {
        state.categories = response.data
        state.categorySelected = {}
        state.showList = true
      }).catch(() => {
        toast.error('لیست دسته بندی ها دریاف نشد')
      })
  }, 1000);
}
/////////////////////////
const handleCategorySelect = (category) => {
  state.categorySelected = category;
  state.showList = false
}
///////////////////////
const requestDeleteCategory = (categoryId) => {
  categoryApi.delete(categoryId)
    .then(() => {
      requestGetCategoryList()
      toast.success('دسته بندی مورد نظر با موفقیت حذف شد')
    }).catch(() => {
      toast.error('دسته بندی مورد نظر حذف نشد')
    })
}
</script>
<template>
  <div class="parent-categories">
    <!-- /////////////////////// -->
    <transition-slide group class="w-full flex">
      <div class="header-categories" v-if="state.showList">
        <p class="title">دسته بندی ها</p>
        <button @click="state.showList = false" class="btn-primary flex items-center gap-x-3 p-2 px-5 justify-center">
          <p>افزودن</p>
          <i class="fa-duotone fa-circle-plus text-xl"></i>
        </button>
      </div>
      <!-- /////////////////////// -->
      <div class="header-categories" v-else>
        <p class="title">{{ state.categorySelected?.categoryId ? 'تغییر دسته بندی' : 'افزودن دسته بندی' }}</p>
        <button @click="state.showList = true, state.categorySelected = {}"
          class="btn-red flex items-center gap-x-3 p-2 px-5 justify-center">
          <p>بازگشت</p>
          <i class="fa-duotone fa-angles-left text-xl"></i>
        </button>
      </div>
    </transition-slide>
    <!-- ///////////////////////// -->
    <transition-scale group class="main-categories" :class="{ 'bg-white': !state.showList }">
      <!-- /////////////////////////////// -->
      <div v-if="state.showList" class="relative w-full mt-4 max-w-[365px] min-w-[200px] justify-center items-center">
        <input :disabled="!state.categories.length || !state.categories"
          :class="{ 'hover:cursor-not-allowed': !state.categories.length || !state.categories }"
          class="input bg-white m-0 dark:bg-[#151521] text" type="text" placeholder="عنوان محصول را وارد کنید">
        <i :class="{ 'hidden': !state.categories.length || !state.categories }"
          class="fa-duotone text fa-magnifying-glass text-xl absolute left-5 top-3 bottom-0 cursor-pointer hover:text-blue-500 transition-all"></i>
      </div>
      <!-- /////////////////////////////// -->
      <List @DeleteCategory="requestDeleteCategory" @categorySelect="handleCategorySelect" v-if="state.showList"
        :categories="state.categories" />
      <NewOrEdit :category="state.categorySelected" @finishNewOrEditCategory="requestGetCategoryList" v-else />
      <!-- /////////////////////////////// -->
    </transition-scale>
  </div>
</template>