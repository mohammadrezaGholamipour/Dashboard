<script setup>
import { useOnline } from '@vueuse/core'
//////////////////////////////////
const props = defineProps(['accountInfo'])
const online = useOnline()
</script>
<template>
  <div v-if="props.accountInfo" class="account-info">
    <img width="50" class="rounded-md" :src="props.accountInfo.imageAddress"
      @error="$event.target.src = 'src/assets/images/account.png'">
    <div class="flex justify-between w-full items-center mr-4">
      <div class="flex flex-col">
        <p style="font-weight: 600;font-size: 1.075rem">{{ props.accountInfo.userName }}</p>
        <p class="text-gray-400" style="font-weight: 500;font-size: 0.85rem">{{ props.accountInfo.userFamily }}</p>
        <div class="flex items-center " :class="online ? 'text-[#50cd89]' : 'text-red-500'">
          <p style="font-size: 0.70rem ">{{ online ? 'online' : 'offline' }}</p>
          <i class="fa-duotone fa-circle  text-[8px] mr-2"></i>
        </div>
      </div>
      <i class="fa-duotone fa-gear text-xl cursor-pointer duration-500 transition-all hover:rotate-45"></i>
    </div>
  </div>
  <div v-else class="animate-pulse account-info">
    <span class="w-[50px] h-[50px] bg-white rounded-md"></span>
    <div class="flex justify-between w-full items-center mr-4">
      <div class="flex flex-col justify-between">
        <span class="w-[100px] my-1 rounded-md bg-white h-[5px]"></span>
        <span class="w-[100px] my-1 rounded-md bg-white h-[5px]"></span>
        <span class="w-[100px] my-1 rounded-md bg-white h-[5px]"></span>
      </div>
    </div>
    <span class="w-[30px] rounded-full bg-white h-[20px]"></span>
  </div>
</template>

