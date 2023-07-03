<script setup>

import FullTable from './components/full-table.vue';
import { useDashboardStore } from '@/store/pinia';
import competitionsApi from '@/api/competitions'
import { useToast } from "vue-toastification";
import { onMounted, reactive } from 'vue';
//////////////////////////////////////////////
const pinia = useDashboardStore()
const toast = useToast();
//////////////////////////////////////////////
onMounted(() => {
  const breadCrumb = [
    { name: 'صفحه اصلی', link: '/' },
    { name: 'لیست مسابقات', link: '/competitions' },
  ]
  pinia.handleBreadCrumb(breadCrumb);
  ////////////////////////
  requestGetCompetitions()
})
//////////////////////////////////////////////
const state = reactive({
  competitions: false
})
//////////////////////////////////////////////
const requestGetCompetitions = () => {
  competitionsApi.get()
    .then((response) => {
      state.competitions = response.data
    }).catch((error) => {
      toast.error('لیست مسابقات دریافت نشد')
    })
}
</script>
<template>
  <div class="parent-competitions">
    <!-- ///////////////////////////// -->
    <div class="header-competitions">
      <p class="title">لیست مسابقات</p>
      <button class="btn-primary flex items-center gap-x-3 p-2 px-5 justify-center">
        <p>افزودن</p>
        <i class="fa-duotone fa-circle-plus text-xl"></i>
      </button>
    </div>
    <!-- ///////////////////////////// -->
    <div class="main-competitions">
      <FullTable :competitions="state.competitions" />
    </div>
  </div>
</template>