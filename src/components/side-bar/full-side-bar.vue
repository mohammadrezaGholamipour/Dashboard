<script setup>
import { onClickOutside, useWindowSize } from '@vueuse/core'
import FullAccount from './components/full-account.vue';
import { useDashboardStore } from '@/store/pinia';
import { ref } from 'vue'
////////////////////////////////
const { width } = useWindowSize();
const pinia = useDashboardStore();
const sideBar = ref(null)
///////////////////////
onClickOutside(sideBar, (event) => {
  const sideBarBtn = event.target?.attributes[0]?.name === "sidebar" ? false : true
  if (width.value <= 999 && pinia.getSideBarStatus && sideBarBtn) {
    pinia.handleSideBarStatus(false)
  }
})
//////////////////////////
</script>
<template>
  <div ref="sideBar" class="parent-side-bar"
    :class="pinia.getSideBarStatus ? 'min-w-[265px] w-[265px]' : 'min-w-0 w-0 overflow-hidden'">
    <transition-slide :delay="200">
      <FullAccount v-if="pinia.getSideBarStatus" @accountLogOut="pinia.requestAccountLogOut()"
        :accountInfo="pinia.getAccountInfo" />
    </transition-slide>
  </div>
</template>