<script setup>
import InputRadio from '@/components/input-radio.vue'
import DropDown from '@/components/drop-down.vue'
</script>
<template>
  <div class="parent-table-filter">
    <div
      class="flex w-full bg-[#f4f4f4] dark:bg-[#151521] shadow-md rounded-md p-5 flex-wrap items-center gap-5 justify-start text">
      <div class="flex items-center flex-nowrap gap-x-3">
        <p>دسته بندی ها :</p>
        <DropDown />
        <div class="h-[38px] border-slate-300 border"></div>
      </div>
      <div class="flex items-center flex-nowrap gap-x-3">
        <p>گروه ها :</p>
        <DropDown />
        <div class="h-[38px] border-slate-300 border"></div>
      </div>
      <div class="flex items-center flex-nowrap gap-x-4">
        <p class="font-bold">نوع نمایش :</p>
        <InputRadio />
        <div class="h-[38px] border-slate-300 border"></div>
      </div>
      <input class="input-grey bg-white" type="text" placeholder="مبلغ مورد نظر" />
    </div>
    <!-- ///////////////////////////////// -->
    <div
      class="flex flex-col items-center justify-center h-full gap-y-3">
      <button class="btn-green"> اعمال کردن</button>
      <button class="btn-gray">بستن</button>
    </div>
  </div>
</template>

