<script setup>
import { useRoute } from "vue-router";
import { reactive } from "vue";
////////////////////////
const route = useRoute()
////////////////////////
const state = reactive({
  menuList: [
    { name: 'دسته بندی ها', route: '/categories/list', status: true, },
  ]
})
</script>

<template>
  <div class="parent-menu">
    <div v-for="(item, index) in state.menuList" :key="index" class="menu-item">
      <router-link class="flex gap-x-3 items-center w-full p-2"
        :class="{ 'bg-[#009ef7] text-white rounded-md': route.path === item.route }" :to="item.route">
        <i class="fa-duotone fa-books"></i>
        <p>{{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>

