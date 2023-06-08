<script setup>
import { reactive } from "vue";
//////////////////////
const state = reactive({
  ordersList: [
    { id: 1, billNumber: 57, userName: 'gholamipourdfasdfasdfasdfasdfasdf', phone: '09195412801', totlaMoney: '500,000' },
    { id: 2, billNumber: 82, userName: 'mrzgp2016', phone: '09036266494', totlaMoney: '285,000' },
    { id: 3, billNumber: 125, userName: 'mohammadi2023', phone: '09104515523', totlaMoney: '125,000' },
    { id: 4, billNumber: 368, userName: 'tavakoli1402', phone: '09100585915', totlaMoney: '859,000' },
    { id: 5, billNumber: 258, userName: 'scorpion2018', phone: '09108216164', totlaMoney: '369,000' },
  ]
});
</script>
<template>
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
              <p>شماره فاکتور</p><i class="fa-duotone fa-ballot-check"></i>
            </div>
          </th>
          <th>
            <div class="flex items-center justify-center gap-x-2">
              <p>نام کاربری</p> <i class="fa-duotone fa-user"></i>
            </div>
          </th>
          <th>
            <div class="flex items-center justify-center gap-x-2">
              <p>تلفن همراه</p> <i class="fa-duotone fa-mobile"></i>
            </div>
          </th>
          <th>
            <div class="flex items-center justify-center gap-x-2">
              <p>مبلغ کل</p><i class="fa-duotone fa-money-bill"></i>
            </div>
          </th>
          <th>
            <div class="flex items-center justify-center gap-x-2">
              <p>عملیات</p><i class="fa-sharp fa-regular fa-sliders"></i>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-row-system-body" v-for="(item, index) in  state.ordersList " :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.billNumber }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.totlaMoney }}</td>
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
</template>