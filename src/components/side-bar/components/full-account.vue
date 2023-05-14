<script setup>
import Dialog from '@/components/dialog.vue';
import AccountInfo from './account-info.vue'
import { reactive } from 'vue';
//////////////////////////////
const props = defineProps(['accountInfo'])
const emit = defineEmits(['accountLogOut'])
// ////////////////////////////////////
const state = reactive({
  statusDialog: false
})
///////////////////////////
const handleStatusDialog = (status) => {
  if (status) {
    emit('accountLogOut')
  }
  state.statusDialog = false
}
</script>
<template>
  <div class="parent-account">
    <AccountInfo @dialogLogOut="state.statusDialog = true" :accountInfo="props.accountInfo" />
    <Dialog @dialogStatus="handleStatusDialog" :statusDialog="state.statusDialog" :dialogWidth="300" :headerStatus="false"
      :headerText="'dialog'" :footerStatus="true" :btnAcceptStatus="true" :btnCancelStatus="true" :btnAcceptText="'تایید'"
      :btnCancelText="'بازگشت'">
      <p>از داشبورد خارج میشوید؟</p>
    </Dialog>
  </div>
</template>

