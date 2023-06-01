<script setup>
import BreadCrumb from './bread-crumb.vue'
import ScreenSize from './screen-size.vue'
import ColorMood from './color-mood.vue';
</script>
<template>
  <div class="tools">
    <BreadCrumb />
    <div class="flex gap-x-5 items-center">
      <ColorMood />
      <ScreenSize />
    </div>
  </div>
</template>
