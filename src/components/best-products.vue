<script setup>
import { reactive } from "vue";
//////////////////////
const state = reactive({
  ordersList: [
    { imageProduct: 57, userName: 'gholamipourdfasdfasdfasdfasdfasdf', phone: '09195412801', totlaMoney: '500,000' },
    { imageProduct: 82, userName: 'mrzgp2016', phone: '09036266494', totlaMoney: '285,000' },
    { imageProduct: 125, userName: 'mohammadi2023', phone: '09104515523', totlaMoney: '125,000' },
    { imageProduct: 368, userName: 'tavakoli1402', phone: '09100585915', totlaMoney: '859,000' },
    { imageProduct: 258, userName: 'scorpion2018', phone: '09108216164', totlaMoney: '369,000' },
  ]
});
</script>
<template>
  <div class="w-full bg-white rounded-md overflow-scroll">
    <table class="table-system ">
      <tbody>
        <tr class="table-row-system-body" v-for="(item, index) in  state.ordersList " :key="index">
          <td>{{ item.imageProduct }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.totlaMoney }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>