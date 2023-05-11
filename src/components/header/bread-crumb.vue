<script setup>
import { reactive } from "vue";
///////////////////////
const state = reactive({
  breadCrumb: [
    { name: 'صفحه اصلی', link: '/' },
  ]
})
</script>
<template>
  <div class="bread-crumb">
    <p class="text-[#181C32] font-extrabold text-lg">داشبورد مدیریت</p>
    <ul class="flex items-center text-[#A1A5B7]">
      <li  v-for="(item, index) in state.breadCrumb" :key="index">
        <router-link :to="item.link">{{ item.name }}</router-link> 
      </li>
    </ul>
  </div>
</template>


