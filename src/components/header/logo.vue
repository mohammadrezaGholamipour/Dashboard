<script setup>
import { useWindowSize } from '@vueuse/core'
//////////////////////////////////
const props = defineProps(['sideBarStatus'])
const emit = defineEmits(['sideBar'])
//////////////////////////////////
const { width } = useWindowSize()
</script>
<template>
  <div class="header-logo">
    <img class="bg-transparent" width="45" src="@/assets/images/logo-dashboard.png">
    <template v-if="width > 999">
      <p class="text-white fpnt-bold text-2xl">همراه فدک</p>
      <i @click="emit('sideBar')" class="text-xl cursor-pointer text-white"
        :class="props.sideBarStatus ? 'fa-duotone fa-sidebar-flip' : 'fa-duotone fa-sidebar'"></i>
    </template>
    <i @click="emit('sideBar')" v-else sideBar class="fa-duotone fa-navicon text-xl cursor-pointer text-white"></i>
  </div>
</template>

