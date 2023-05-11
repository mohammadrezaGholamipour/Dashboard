<script setup>
import FullAccount from './components/full-account.vue';
import { useDashboardStore } from '@/store/pinia';
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
////////////////////////////////
const pinia = useDashboardStore();
const sideBar = ref(null)
///////////////////////
onClickOutside(sideBar, (event) => console.log(event))
</script>
<template>
  <div ref="sideBar" class="parent-side-bar" :class="pinia.getSideBarStatus ? 'w-[265px]' : 'w-0'">
    <FullAccount :accountInfo="pinia.getAccountInfo" />
  </div>
</template>



