<script setup>
import LogoAndBtnSidebar from './logo-and-btn-sidebar.vue';
import { useDashboardStore } from '@/store/pinia'
import Tools from './tools.vue';
////////////////////////////
const pinia = useDashboardStore()
</script>
<template>
  <header class="parent-header">
    <LogoAndBtnSidebar @sideBar="pinia.handleSideBarStatus()" :sideBarStatus="pinia.getSideBarStatus" />
    <Tools />
  </header>
</template>


