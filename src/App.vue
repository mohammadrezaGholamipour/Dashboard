<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component class="page" :is="Component" />
    </transition>
  </router-view>
</template>
<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .5s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}</style>