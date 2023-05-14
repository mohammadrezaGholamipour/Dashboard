<script setup>
import { useDashboardStore } from '@/store/pinia'
import Tools from './tools.vue';
import Logo from './logo.vue';
////////////////////////////
const pinia = useDashboardStore()
////////////////////////////
const handleSideBarStatus = () => {
  pinia.handleSideBarStatus()
}
</script>
<template>
  <header class="parent-header">
    <Logo @sideBar="handleSideBarStatus" :sideBarStatus="pinia.getSideBarStatus" />
    <Tools />
  </header>
</template>


