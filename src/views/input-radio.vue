<script setup>
import { reactive } from "vue";
//////////////////////
const state = reactive({
  inputRadios: [
    { id: 1, value: 'slider', label: 'اسلایدر' },
    { id: 2, value: 'every', label: 'همه' },
  ]
})
/////////////////////
</script>
<template>
  <div class="parent-input-radios">
    <div v-for="(item, index) in state.inputRadios" :key="index" class="input-radio">
      <label :for="item.id" v-text="item.label" class="text" />
      <label class="radio" :for="item.id"></label>
      <input type="radio" name="radio" :id="item.id" :value="item.value">
    </div>
  </div>
</template>
<style scoped>
input[type="radio"] {
  display: none;
}

/* Style the radio button's label */
label.radio {
  display: inline-block;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

/* Style the checked radio button's label */
label.radio:checked {
  background-color: blue;
  color: white;
  border-color: blue;
}
</style>