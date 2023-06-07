<script setup>
import TableSystem from './components/system.vue';
import TableMobile from './components/mobile.vue';
import TableFilter from './components/filter.vue';
import { useWindowSize } from '@vueuse/core'
import { reactive } from 'vue';
//////////////////////////////////
const { width } = useWindowSize();
/////////////////////////////////
const state = reactive({
  filterStatus: false
})
</script>
<template>
  <div v-if="width >= 999" class="parent-table-system">
    <div class="header-table-system">
      <button class="btn-primary flex items-center gap-x-3 p-2 px-5 justify-center">
        <p>افزودن</p>
        <i class="fa-duotone fa-circle-plus text-xl"></i>
      </button>
      <div class="flex w-full justify-end items-center gap-x-3">
        <div class="relative w-full max-w-[365px] min-w-[200px] justify-center items-center">
          <input class="input-grey m-0" type="text" placeholder="عنوان محصول را وارد کنید">
          <i
            class="fa-duotone fa-magnifying-glass text-xl absolute left-5 top-3 bottom-0 cursor-pointer hover:text-blue-500 transition-all dark:text-white"></i>
        </div>
        <button @click="state.filterStatus = !state.filterStatus" class="btn-primary p-3">
          <p>فیلتر ها</p>
        </button>
      </div>
    </div>
    <transition-expand>
      <TableFilter v-if="state.filterStatus" />
    </transition-expand>
    <TableSystem />
  </div>
  <!-- ///////////////////// -->
  <TableMobile v-else />
</template>


