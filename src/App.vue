<template>
  <router-view v-slot="{ Component }">
    <component class="page" :is="Component" />
  </router-view>
</template>