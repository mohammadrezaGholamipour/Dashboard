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
  competitions: {
    loading: false,
    data: false,
  }
})
//////////////////////////////////////////////
const requestGetCompetitions = () => {
  competitionsApi.get()
    .then((response) => {
      state.competitions.data = response.data
    }).catch(() => {
      toast.error('لیست مسابقات دریافت نشد')
      state.competitions = []
    })
}
//////////////////////////////////////
const requestCompetitionsChangeStatus = (competitionsId) => {
  state.competitions.loading = true
  const competitions = state.competitions.data.find((item) => item.matchId === competitionsId)
  competitionsApi.matchStatus(competitions.matchId, !competitions.isActive)
    .then((response) => {
      toast.success(response.message)
    }).catch((error) => {
      toast.error(error.message)
    }).finally(() => {
      state.competitions.loading = false
    })
}
</script>
<template>
  <div class="parent-competitions">
    <!-- ///////////////////////////// -->
    <transition-slide class="w-full">
      <div v-if="state.competitions.data.length" class="header-competitions">
        <p class="title">لیست مسابقات</p>
        <button v-if="state.competitions.data.length" class="btn-green flex items-center gap-x-3 p-2 px-5 justify-center">
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