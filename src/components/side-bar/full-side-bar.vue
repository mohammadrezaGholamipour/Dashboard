<script setup>
import { onClickOutside, useWindowSize } from '@vueuse/core'
import FullAccount from './components/full-account.vue';
import { useDashboardStore } from '@/store/pinia';
import Menu from './components/menu.vue';
import { onMounted, ref, watch } from 'vue'
////////////////////////////////
const sideBarContentStatus = ref(false)
const { width } = useWindowSize();
const pinia = useDashboardStore();
const sideBar = ref(null)
///////////////////////
onMounted(() => {
  pinia.requestGetAccountInfo()
})
///////////////////////
onClickOutside(sideBar, (event) => {
  const dialog = document.getElementsByClassName('dialog-back-ground')
  const sideBarBtn = event.target?.attributes[0]?.name === "sidebar" ? false : true;
  if (width.value <= 999 && pinia.getSideBarStatus && sideBarBtn && !dialog[0]) {
    pinia.handleSideBarStatus(false)
  }
})
//////////////////////////
watch(() => pinia.getSideBarStatus, (value) => {
  if (value) {
    setTimeout(() => {
      sideBarContentStatus.value = true
    }, 400);
  } else {
    sideBarContentStatus.value = false
  }
})
</script>
<template>
  <div ref="sideBar" class="parent-side-bar"
    :class="pinia.getSideBarStatus ? 'min-w-[265px] w-[265px]' : 'min-w-0 w-0 overflow-hidden'">
    <FullAccount :class="{ 'Inactive': !sideBarContentStatus }" @accountLogOut="pinia.requestAccountLogOut()"
      :accountInfo="pinia.getAccountInfo" />
    <Menu :class="{ 'Inactive': !sideBarContentStatus }" />
  </div>
</template>
<style>
.Inactive {
  transform: translateX(265px) !important;
  transition: transform 0.1s ease-in-out !important;
}
</style>