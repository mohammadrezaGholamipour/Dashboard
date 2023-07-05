<script setup>
import { useWindowSize } from '@vueuse/core';
import FilterTable from './filter-table.vue';
import { reactive } from 'vue';
//////////////////////////////////
const props = defineProps(['competitions']);
//////////////////////////////////
const { width } = useWindowSize();
/////////////////////////////////
const state = reactive({
  filterStatus: false,
});
</script>
<template>
  <template v-if="width >= 999">
    <div class="parent-table-system">
      <transition-slide>
        <div v-if="props.competitions.length" class="header-table-system">
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
          <transition-expand>
            <FilterTable v-if="state.filterStatus" />
          </transition-expand>
        </div>
      </transition-slide>
      <!-- ////////////////////////// -->
      <transition-slide group class="w-full h-full overflow-scroll">
        <table v-if="props.competitions.length" class="table-system">
          <thead class="sticky top-0 bg-[#009ef7] text-center z-10 text-white" style="border-radius: 20px;">
            <tr>
              <th class="w-[100px] rounded-r-md">
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
              <th class="rounded-l-md">
                <div class="flex items-center justify-center gap-x-2">
                  <p>وضعیت</p><i class="fa-sharp fa-regular fa-sliders"></i>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in  props.competitions" :key="index">
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
        <div v-else-if="props.competitions" class="flex relative flex-col items-center">
          <p class="text text-xl absolute top-7 font-bold">لیست مسابقه ای یافت نشد</p>
          <img width="350" src="@/assets/images/not-found-data.jpg" />
        </div>
        <div v-else class="w-full h-full cursor-wait flex flex-col gap-y-2 justify-start items-center">
          <div class="w-full bg-slate-200 rounded-md animate-pulse h-[85px]"></div>
          <div
            class="w-full  flex flex-col justify-start items-center gap-y-5 h-[500px] bg-slate-200 ounded-md animate-pulse rounded-md">
          </div>
        </div>
      </transition-slide>
    </div>
    <!-- ////////////////////////// -->
  </template>
  <!-- ///////////////////// -->
  <div v-else class="w-full h-full">
    <transition-slide group class="parent-table-mobile">
      <template v-if="props.competitions.length">
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
      </template>
      <div v-else-if="props.competitions" class="flex relative flex-col items-center">
        <p class="text text-xl absolute top-7 font-bold">لیست مسابقه ای یافت نشد</p>
        <img width="350" src="@/assets/images/not-found-data.jpg" />
      </div>
      <div v-else class="w-full h-full flex flex-col gap-y-2 justify-start items-center">
        <div v-for="item in 5" :key="item"
          class="w-full h-[150px] rounded-md shadow-md cursor-wait animate-pulse bg-slate-300 dark:bg-slate-100"></div>
      </div>
    </transition-slide>
  </div>
  <!-- ///////////////////////////// -->
</template>

