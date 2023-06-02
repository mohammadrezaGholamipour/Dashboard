<script setup>
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue'
// //////////////////////
const layout = ref(document.getElementById('parent-layout'))
const { isFullscreen, enter, exit, toggle } = useFullscreen(layout)
</script>
<template>
  <transition-slide group>
    <i v-if="isFullscreen" @click="exit" class="fa-duotone fa-compress-arrows text-xl cursor-pointer"></i>
    <i v-else @click="enter" class="fa-duotone fa-arrows-maximize text-xl cursor-pointer"></i>
  </transition-slide>
</template>


