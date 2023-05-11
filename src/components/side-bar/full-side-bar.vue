<script setup>
import FullAccount from './components/full-account.vue';
import { useDashboardStore } from '@/store/pinia'
////////////////////////////////
const pinia = useDashboardStore()
</script>
<template>
  <div class="parent-side-bar" :class="pinia.getSideBarStatus ? 'w-[265px]' : 'w-0'">
    <FullAccount />
  </div>
</template>



