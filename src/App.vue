<template>
  <router-view v-slot="{ Component }">
    <transition  name="slide">
      <component class="page" :is="Component" />
    </transition>
  </router-view>
</template>
<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>