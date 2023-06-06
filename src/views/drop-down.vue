<script setup>
import { onClickOutside } from '@vueuse/core'
import { reactive, ref } from "vue";
//////////////////////
const dropDown = ref(null)
const state = reactive({
  dropDownStatus: false
})
/////////////////////
onClickOutside(dropDown, () => {
  state.dropDownStatus = false
})
///////////////////
</script>
<template>
  <div ref="dropDown" class="parent-drop-down">
    <!-- //////////////////////// -->
    <div @click="state.dropDownStatus = !state.dropDownStatus" class="btn-drop-down">
      <p>انتخاب کردن</p>
      <i class="fa-duotone fa-chevron-down  transition-all duration-500"
        :class="{ 'rotate-180': state.dropDownStatus }"></i>
    </div>
    <!-- ///////////////////////// -->
    <transition-expand>
      <div v-if="state.dropDownStatus" @click="state.dropDownStatus = !state.dropDownStatus" class="list-drop-down">
        <p class="item-drop-down">محصولات</p>
        <p class="item-drop-down">دسته بندی</p>
        <p class="item-drop-down">نمایشگاه</p>
        <p class="item-drop-down">دیدنی ها</p>
      </div>
    </transition-expand>
    <!-- ///////////////////////// -->
  </div>
</template>