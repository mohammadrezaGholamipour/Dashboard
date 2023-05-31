<script setup>
import FullSideBar from '@/components/side-bar/full-side-bar.vue'
import FullHeader from '@/components/header/full-header.vue'
import { useDashboardStore } from '@/store/pinia'
import AuthService from "@/utils/AuthService";
////////////////////////////////////////
const pinia = useDashboardStore()
/////////////////////////////////
if (AuthService.getTokenUser()) {
  pinia.requestGetAccountInfo()
}
</script>
<template>
  <div id="parent-layout" class="parent-layout">
    <!-- ////////////////////// -->
    <FullHeader />
    <!-- //////////////////////// -->
    <main class="content">
      <FullSideBar />
      <div class="route">
        <router-view v-slot="{ Component }">
          <transition-slide>
            <component :is="Component" />
          </transition-slide>
        </router-view>
      </div>
    </main>
    <!-- //////////////////////// -->
  </div>
</template>



