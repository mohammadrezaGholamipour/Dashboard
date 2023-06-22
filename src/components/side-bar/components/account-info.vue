<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import { reactive, ref } from 'vue'
//////////////////////////////////
const props = defineProps(['accountInfo'])
const emit = defineEmits(['dialogLogOut'])
const popupElement = ref(null)
const router = useRouter()
const route = useRoute()
// /////////////////////
const state = reactive({
  popup: false
})
///////////////////////
onClickOutside(popupElement, (event) => {
  if (event.target?.attributes[0]?.name !== "popup") {
    state.popup = false
  }
})
////////////////////////////
const handleLogOut = () => {
  emit('dialogLogOut');
}
</script>
<template>
  <div v-if="props.accountInfo" class="account-info">
    <img width="50" class="rounded-md" :src="props.accountInfo.imageAddress"
      @error="$event.target.src = '/src/assets/images/account.png'">
    <div class="flex justify-between w-full items-center mr-4">
      <div class="flex flex-col gap-1">
        <p style="font-weight: 600;font-size: 1.075rem">{{ props.accountInfo.userName }}</p>
        <p class="text-gray-400"
          style="font-weight: 500;font-size: 0.85rem;overflow: hidden;text-overflow: ellipsis;max-width: 110px;white-space: nowrap">
          {{
            props.accountInfo.userFamily }}</p>
      </div>
      <i popup @click="state.popup = !state.popup"
        class="fa-duotone fa-gear shadow-lg text-xl cursor-pointer duration-500 transition-all hover:rotate-45"></i>
    </div>
    <!-- ///////////////////////////////// -->
    <transition-slide>
      <div ref="popupElement" @click="state.popup = false" v-if="state.popup" class="account-popup">
        <div class="p-3 gap-x-3 w-full flex items-center">
          <img width="50" class="rounded-md" :src="props.accountInfo.imageAddress"
            @error="$event.target.src = '/src/assets/images/account.png'">
          <div class="flex flex-col gap-y-2 mr-1">
            <div class="flex items-center">
              <p class="text">{{ props.accountInfo.userName }}</p>
              <span class="account-popup-badge">دسترسی کامل</span>
            </div>
            <p class="text-gray-400" style="font-weight: 500;font-size: 0.85rem">{{ props.accountInfo.userFamily }}</p>
          </div>
        </div>
        <div class="seperator"></div>
        <div class="px-3 flex mt-3 gap-2 flex-col justify-start items-center w-full text-slate-600">
          <div @click="router.push('/account-setting')"
            :class="route.path === '/account-setting' ? 'account-popup-item text-blue-400 bg-slate-100 dark:bg-[#151521] dark:text-blue-400' : 'account-popup-item'">
            <p>تنظیمات حساب کاربری</p>
            <i class="fa-duotone fa-gear"></i>
          </div>
          <div @click="handleLogOut" class="account-popup-item">
            <p>خروج از حساب کاربری</p>
            <i class="fa-duotone fa-portal-exit"></i>
          </div>
        </div>
      </div>
    </transition-slide>
    <!-- ///////////////////////////////// -->
  </div>
  <!-- //////////////////////////////////////// -->
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

