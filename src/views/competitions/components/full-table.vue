<script setup>
import { useWindowSize } from '@vueuse/core';
import FilterTable from './filter-table.vue';
import { reactive } from 'vue';
//////////////////////////////////
const props = defineProps(['competitions'])
//////////////////////////////////
const { width } = useWindowSize();
/////////////////////////////////
const state = reactive({
  filterStatus: false
})
</script>
<template>
  <div class="w-full">
    <template v-if="width >= 999">
      <div class="parent-table-system">
        <div class="header-table-system">
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
          <FilterTable v-if="state.filterStatus" />
        </transition-expand>
        <!-- ////////////////////////// -->
        <div class="w-full overflow-scroll">
          <table class="table-system">
            <thead>
              <tr>
                <th class="w-[100px]">
                  <div class="flex items-center justify-center gap-x-2">
                    <p>ردیف</p><i class="fa-duotone fa-arrow-down-wide-short"></i>
                  </div>
                </th>
                <th>
                  <div class="flex items-center justify-center gap-x-2">
                    <p>عنوان</p><i class="fa-duotone fa-ballot-check"></i>
                  </div>
                </th>
                <th>
                  <div class="flex items-center justify-center gap-x-2">
                    <p>ایجاد کننده</p> <i class="fa-duotone fa-user"></i>
                  </div>
                </th>
                <th>
                  <div class="flex items-center justify-center gap-x-2">
                    <p>وضعیت</p><i class="fa-duotone fa-toggle-off"></i>
                  </div>
                </th>
                <th>
                  <div class="flex items-center justify-center gap-x-2">
                    <p>اطلاعات بیشتر</p><i class="fa-duotone fa-memo-circle-info"></i>
                  </div>
                </th>
                <th>
                  <div class="flex items-center justify-center gap-x-2">
                    <p>وضعیت</p><i class="fa-sharp fa-regular fa-sliders"></i>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-row-system-body" v-for="(item, index) in  props.competitions" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.creatorUserName }}</td>
                <td>{{ item.isActive }}</td>
                <td>اطلاعات بیشتر</td>
                <td style="min-width: 152px;">
                  <i
                    class="fa-duotone fa-pen p-2 rounded-md bg-[#F9F9F9] dark:bg-[#2b2b40] shadow-sm text-[#A1A5B7] mx-1 hover:text-blue-500 text-xl cursor-pointer duration-300 transition-all"></i>
                  <i
                    class="fa-duotone fa-trash p-2 rounded-md bg-[#F9F9F9] dark:bg-[#2b2b40] shadow-sm text-[#A1A5B7] mx-1 hover:text-blue-500 text-xl cursor-pointer duration-500 transition-all"></i>
                  <i
                    class="fa-duotone fa-eye p-2 rounded-md bg-[#F9F9F9] dark:bg-[#2b2b40] shadow-sm text-[#A1A5B7] mx-1 hover:text-blue-500 text-xl cursor-pointer duration-500 transition-all"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- ////////////////////////// -->
      </div>
    </template>
    <!-- ///////////////////// -->
    <div v-else class="parent-table-mobile">
      <div v-for="(item, index) in props.competitions" :key="index" class="table-mobile">
        <div class="table-mobile-row font-bold">
          <p class="table-mobile-col"> ردیف :</p>
          <p class="table-mobile-col"> شماره فاکتور :</p>
          <p class="table-mobile-col">نام کاربری :</p>
          <p class="table-mobile-col">تلفن همراه :</p>
          <p class="table-mobile-col">جمع کل :</p>
        </div>
        <div class="table-mobile-row">
          <p class="table-mobile-col">{{ index + 1 }}</p>
          <p class="table-mobile-col">{{ item.title }}</p>
          <p class="table-mobile-col">{{ item.creatorUserName }}</p>
          <p class="table-mobile-col">{{ item.isActive }}</p>
          <p class="table-mobile-col">اطلاعات بیشتر</p>
        </div>
      </div>
    </div>
    <!-- ///////////////////////////// -->
  </div>
</template>


