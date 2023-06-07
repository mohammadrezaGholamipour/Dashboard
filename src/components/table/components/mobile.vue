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
  <div class="parent-table-mobile">
    <div v-for="(item, index) in state.ordersList" :key="index" class="table-mobile">
      <div class="table-mobile-row font-bold">
        <p class="table-mobile-col"> ردیف :</p>
        <p class="table-mobile-col"> شماره فاکتور :</p>
        <p class="table-mobile-col">نام کاربری :</p>
        <p class="table-mobile-col">تلفن همراه :</p>
        <p class="table-mobile-col">جمع کل :</p>
      </div>
      <div class="table-mobile-row">
        <p class="table-mobile-col">{{ item.id }}</p>
        <p class="table-mobile-col">{{ item.billNumber }}</p>
        <p class="table-mobile-col">{{ item.userName }}</p>
        <p class="table-mobile-col">{{ item.phone }}</p>
        <p class="table-mobile-col">{{ item.totlaMoney }}</p>
      </div>
    </div>
  </div>
</template>


