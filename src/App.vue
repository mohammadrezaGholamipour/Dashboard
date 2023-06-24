<script setup>
import Dialog from '@/components/dialog.vue';
import { useOnline } from '@vueuse/core';
import { watch } from 'vue';
///////////////////////////
const online = useOnline();
///////////////////////////
watch(() => online.value, (status) => {
  if (status) {
    window.location.reload()
  }
});
/////////////////////////////
</script>
<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
    <Dialog :statusDialog="!online" :dialogWidth="300" :headerStatus="false" :headerText="'dialog'" :footerStatus="false"
      :btnAcceptStatus="true" :btnCancelStatus="true" :btnAcceptText="'تایید'" :btnCancelText="'بازگشت'">
      <div class="flex items-center gap-x-5">
        <p class="text-xl text-slate-500 text-center">اینترنت شما متصل نمیباشد! </p>
        <img src="@/assets/images/disconnect.png" width="100" />
      </div>
    </Dialog>
  </router-view>
</template>