<script setup>
import FullSideBar from '@/components/side-bar/full-side-bar.vue'
import FullHeader from '@/components/header/full-header.vue'
</script>
<template>
  <div class="parent-layout">
    <!-- ////////////////////// -->
    <FullHeader />
    <!-- //////////////////////// -->
    <main class="content">
      <FullSideBar />
      <router-view />
    </main>
    <!-- //////////////////////// -->
  </div>
</template>



