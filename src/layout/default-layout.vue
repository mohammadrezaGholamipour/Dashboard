<script setup>
import FullSideBar from '@/components/side-bar/full-side-bar.vue'
import FullHeader from '@/components/header/full-header.vue'
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
          <transition-slide group class="w-full h-full overflow-hidden">
            <component :is="Component" />
          </transition-slide>
        </router-view>
      </div>
    </main>
    <!-- //////////////////////// -->
  </div>
</template>



