<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue';
//////////////////////////////
const emit = defineEmits(['dialogStatus'])
const { statusDialog, dialogWidth, headerStatus, headerText, footerStatus, btnAcceptStatus, btnCancelStatus, btnAcceptText, btnCancelText } = defineProps({
  statusDialog: {
    type: Boolean,
    required: true,
    default: false,
  },
  dialogWidth: {
    type: Number,
    required: false,
    default: 300
  },
  headerStatus: {
    type: Boolean,
    required: false,
    default: true
  },
  headerText: {
    type: String,
    required: () => headerStatus,
    default: 'دیالوگ'
  },
  footerStatus: {
    type: Boolean,
    required: false,
    default: true,
  },
  btnAcceptStatus: {
    type: Boolean,
    required: () => footerStatus,
    default: true,
  },
  btnCancelStatus: {
    type: Boolean,
    required: () => footerStatus,
    default: true,
  },
  btnAcceptText: {
    type: String,
    required: () => btnAcceptStatus,
    default: 'تایید',
  },
  btnCancelText: {
    type: String,
    required: () => btnCancelStatus,
    default: 'بازگشت',
  },
})
// //////////////////////////
const handleDialogStatus = (status) => {
  emit('dialogStatus', status)
}
/////////////////////////////
const card = ref(null)
onClickOutside(card, () => {
  card.value.className = 'dialog-card animate-pulse'
})

</script>
<template>
  <Teleport to="#app">
    <transition-slide>
      <div v-if="statusDialog" class="dialog-back-ground">
        <div ref="card" class="dialog-card" :style="{ width: `${dialogWidth}px` }">
          <!-- ///////////////////////// -->
          <div v-if="headerStatus" class="dialog-header ">
            <p class="font-bold">{{ headerText }}</p>
          </div>
          <!-- ////////////////////////// -->
          <div class="dialog-content">
            <slot />
          </div>
          <!-- ////////////////////////// -->
          <div v-if="footerStatus" class="dialog-footer">
            <button @click="handleDialogStatus(true)" v-if="btnAcceptStatus"
              class="bg-[#2C9AFF] rounded-md hover:scale-105 transition-all text-white w-[123px] h-[43px]">{{
                btnAcceptText
              }}</button>
            <button @click="handleDialogStatus(false)" v-if="btnCancelStatus"
              class="bg-[#F9F9F9] rounded-md text-[#7E8299] hover:scale-105 transition-all w-[123px] h-[43px]">{{
                btnCancelText }}</button>
          </div>
          <!-- /////////////////////////// -->
        </div>
      </div>
    </transition-slide>
  </Teleport>
</template>



