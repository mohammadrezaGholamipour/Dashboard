<script setup>
import { useDashboardStore } from '@/store/pinia'
///////////////////////
const pinia = useDashboardStore()
</script>
<template>
  <div class="bread-crumb">
    <p class="text-[#181C32] font-extrabold text-lg dark:text-white">داشبورد مدیریت</p>
    <ul class="flex flex-wrap items-center gap-x-1 text-[#A1A5B7] text-xs mt-2">
      <li class="flex gap-x-1 items-center" v-for="(item, index) in pinia.getbreadCrumb" :key="index">
        <router-link class="cursor-pointer" :to="item.link">{{ item.name }} </router-link>
        <i v-if="pinia.getbreadCrumb.length - (index + 1)" class="fa-duotone fa-chevrons-left"></i>
      </li>
    </ul>
  </div>
</template>


