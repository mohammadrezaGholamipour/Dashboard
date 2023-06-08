<script setup>
import { reactive } from "vue";
////////////////////////
const state = reactive({
  menuList: [
    { name: 'دسته بندی ها', route: '/categories' }
  ]
})
</script>

<template>
  <div class="parent-menu">
    <div v-for="(item, index) in state.menuList" :key="index" class="menu-item">
      <router-link class="flex gap-x-3 items-center w-full" :to="item.route">
        <i class="fa-duotone fa-books"></i>
        <p>{{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>

