<script setup>
import { onClickOutside, useWindowSize } from '@vueuse/core'
import FullAccount from './components/full-account.vue';
import { useDashboardStore } from '@/store/pinia';
import { ref } from 'vue'
////////////////////////////////
const { width } = useWindowSize()
const pinia = useDashboardStore();
const sideBar = ref(null)
///////////////////////
onClickOutside(sideBar, (event) => {
  const sideBarBtn = event.target?.attributes[0]?.name === "sidebar" ? false : true
  if (width.value <= 999 && pinia.getSideBarStatus && sideBarBtn) {
    pinia.handleSideBarStatus(false)
  }
})
</script>
<template>
  <div ref="sideBar" class="parent-side-bar" :class="pinia.getSideBarStatus ? 'w-[265px]' : 'w-0'">
    <FullAccount :accountInfo="pinia.getAccountInfo" />
  </div>
</template>



