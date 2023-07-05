<script setup>
import NewOrEdit from './components/new-or-edit.vue';
import { useDashboardStore } from '@/store/pinia';
import { onMounted, reactive, watch } from 'vue';
import { useToast } from "vue-toastification";
import categoryApi from '@/api/category';
import List from './components/list.vue';
import { useRouter } from 'vue-router';
/////////////////////////////////
const pinia = useDashboardStore()
const router = useRouter();
const toast = useToast();
////////////////////////////////
const state = reactive({
  categorySelected: {
    requestLoading: false,
    data: {},
  },
  categories: false,
  showList: true,
})
////////////////////////////
onMounted(() => {
  const breadCrumb = [
    { name: 'صفحه اصلی', link: '/' },
    { name: 'لیست دسته بندی ها', link: '/categories/list' },
  ]
  pinia.handleBreadCrumb(breadCrumb);
  requestGetCategoryList();
})
//////////////////////////////
watch(() => state.showList, (value) => {
  if (value) {
    router.push({ name: 'categories', params: { section: 'list' } })
  } else if (state.categorySelected.data?.categoryId) {
    router.push({ name: 'categories', params: { section: 'edit', id: state.categorySelected.data.categoryId } })
  } else {
    router.push({ name: 'categories', params: { section: 'new' } })
  }
})
//////////////////////////////
const requestGetCategoryList = () => {
  state.categories = false
  categoryApi.get()
    .then((response) => {
      state.categories = response.data
      state.showList = true
      state.categorySelected = {
        requestLoading: false,
        data: {},
      }
    }).catch(() => {
      toast.error('لیست دسته بندی ها دریافت نشد');
      state.categories = [];
    })
}
///////////////////////////////////////////
const handleCategorySelect = (category) => {
  state.categorySelected.data = category;
  state.showList = false
}
//////////////////////////////////////////
const requestDeleteCategory = (categoryId) => {
  categoryApi.delete(categoryId)
    .then(() => {
      requestGetCategoryList()
      toast.success('دسته بندی مورد نظر با موفقیت حذف شد')
    }).catch((error) => {
      toast.error(error?.response?.data?.message)
    })
}
//////////////////////////////////////
const requestNewCategory = (category) => {
  state.categorySelected.requestLoading = true
  categoryApi.new(category)
    .then(() => {
      requestGetCategoryList()
      toast.success('با موفقیت افزوده شد');
    })
    .catch(() => { toast.error('دسته بندی اضافه نشد') })
    .finally(() => { state.categorySelected.requestLoading = false })
}
//////////////////////////
const requestEditCategory = (category) => {
  state.categorySelected.requestLoading = true
  categoryApi.edit(category)
    .then(() => {
      requestGetCategoryList()
      toast.success('با موفقیت تغییر یافت');
    })
    .catch(() => { toast.error('دسته بندی تغییر نکرد') })
    .finally(() => { state.categorySelected.requestLoading = false })
}
</script>
<template>
  <div class="parent-categories">
    <!-- /////////////////////// -->
    <transition-slide group class="w-full flex">
      <template v-if="state.categories.length">
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
      </template>
    </transition-slide>
    <!-- ///////////////////////// -->
    <transition-slide group class="main-categories" :class="{ 'bg-white mt-3': !state.showList }">
      <!-- /////////////////////////////// -->
      <List v-if="state.showList" @DeleteCategory="requestDeleteCategory" @categorySelect="handleCategorySelect"
        :categories="state.categories" />
      <NewOrEdit v-else :category="state.categorySelected" @editeCategory="requestEditCategory"
        @newCategory="requestNewCategory" />
      <!-- /////////////////////////////// -->
    </transition-slide>
  </div>
</template>
<style>

</style>