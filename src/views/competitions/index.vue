<script setup>
import FullTable from './components/full-table.vue';
import { useDashboardStore } from '@/store/pinia';
import competitionsApi from '@/api/competitions';
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
    }).catch(() => {
      toast.error('لیست مسابقات دریافت نشد')
      state.competitions = []
    }).finally(() => {
      setTimeout(() => {
        if (pinia.getrequestLoading) {
          pinia.handleRequestLoading()
        }
      }, 1000);
    })
}
//////////////////////////////////////
const requestCompetitionsChangeStatus = (competitionsId) => {
  pinia.handleRequestLoading()
  const competitions = state.competitions.find((item) => item.matchId === competitionsId)
  competitionsApi.matchStatus(competitions.matchId, !competitions.isActive)
    .then(() => {
      requestGetCompetitions()
    }).catch((error) => {
      toast.error(error.message)
      pinia.handleRequestLoading()
    })
}
</script>
<template>
  <div class="parent-competitions">
    <!-- ///////////////////////////// -->
    <transition-slide class="w-full">
      <div v-if="state.competitions.length" class="header-competitions">
        <p class="title">لیست مسابقات</p>
        <button class="btn-green flex items-center gap-x-3 p-2 px-5 justify-center">
          <p>افزودن</p>
          <i class="fa-duotone fa-circle-plus text-xl"></i>
        </button>
      </div>
    </transition-slide>
    <!-- ///////////////////////////// -->
    <div class="main-competitions">
      <FullTable @competitionsChangeStatus="requestCompetitionsChangeStatus" :competitions="state.competitions" />
    </div>
  </div>
</template>