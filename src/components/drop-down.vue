<script setup>
import { onClickOutside } from '@vueuse/core'
import { reactive, ref } from "vue";
//////////////////////
const dropDown = ref(null)
const state = reactive({
  dropDownStatus: false,
  dropDownList: [
    { id: 1, name: 'فروشگاه' },
    { id: 2, name: 'مشاوره' },
    { id: 3, name: 'کالا' },
    { id: 4, name: 'همه' },
  ],
  dropDownSelected: 'همه'
})
/////////////////////
onClickOutside(dropDown, () => {
  state.dropDownStatus = false
})
///////////////////
const handleSelectDropDown = (item) => {
  state.dropDownStatus = !state.dropDownStatus
  state.dropDownSelected = item.name
}
</script>
<template>
  <div ref="dropDown" class="parent-drop-down">
    <!-- //////////////////////// -->
    <div @click="state.dropDownStatus = !state.dropDownStatus" class="btn-drop-down">
      <p>{{ state.dropDownSelected }}</p>
      <i class="fa-duotone fa-chevron-down  transition-all duration-500"
        :class="{ 'rotate-180': state.dropDownStatus }"></i>
    </div>
    <!-- ///////////////////////// -->
    <transition-expand>
      <div v-if="state.dropDownStatus" class="list-drop-down">
        <p class="item-drop-down" @click="handleSelectDropDown(item)" v-for="(item, index) in state.dropDownList"
          :key="index">{{ item.name }}</p>
      </div>
    </transition-expand>
    <!-- ///////////////////////// -->
  </div>
</template>