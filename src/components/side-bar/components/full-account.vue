<script setup>
import AccountInfo from './account-info.vue'
//////////////////////////////
const props = defineProps(['accountInfo'])
</script>
<template>
  <div class="parent-account">
    <AccountInfo :accountInfo="props.accountInfo" />
  </div>
</template>

