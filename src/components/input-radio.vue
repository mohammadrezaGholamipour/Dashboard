<script setup>
import { reactive } from "vue";
//////////////////////
const state = reactive({
  inputRadios: [
    { id: 1, value: 'slider', label: 'اسلایدر', status: false },
    { id: 2, value: 'every', label: 'همه', status: true },
  ]
})
//////////////////////////////
const handleInputRadio = (inputRadio) => {
  state.inputRadios.forEach((item) => {
    item.status = false
  })
  inputRadio.status = true
}
</script>
<template>
  <div class="parent-input-radios">
    <div @click="handleInputRadio(item)" v-for="(item, index) in state.inputRadios" :key="index" class="input-radio">
      <p>{{ item.label }}</p>
      <div :class="item.status ? 'radio-active' : 'radio-Inactive'"></div>
    </div>
  </div>
</template>
<style scoped></style>