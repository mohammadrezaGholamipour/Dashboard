<script setup>
import { useForm, useField } from "vee-validate";
import { useDashboardStore } from '@/store/pinia'
import { onMounted, reactive, watch } from 'vue'
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import uploaderApi from '@/api/upload'
import acoountApi from '@/api/acoount'
import * as yup from "yup";
////////////////////////////////////////
const pinia = useDashboardStore()
const router = useRouter()
const toast = useToast();
//////////////////////////////
onMounted(() => {
  state.userMobileNumber = pinia.getAccountInfo?.userMobileNumber;
  userFamily.value = pinia.getAccountInfo?.userFamily;
  imageName.value = pinia.getAccountInfo?.imageAddress;
  userName.value = pinia.getAccountInfo?.userName;
})
watch(() => pinia.getAccountInfo, (value) => {
  state.userMobileNumber = value?.userMobileNumber;
  userFamily.value = value?.userFamily;
  imageName.value = value?.imageAddress;
  userName.value = value?.userName;
  state.clientProfile = '';
})
//////////////////////////////
const state = reactive({
  timer: null,
  userMobileNumber: null,
  clientProfile: '',
  schema: yup.object({
    userName: yup
      .string()
      .required("لطفا نام خود را وارد کنید")
      .nullable("لطفا نام خود را وارد کنید"),
    userFamily: yup
      .string()
      .required("نام خانوادگی خود را وارد کنید")
      .nullable("نام خانوادگی خود را وارد کنید"),
    imageName: yup
      .string()
      .required("لطفا پروفایل خود را بارگزاری کنید")
      .nullable("لطفا پروفایل خود را بارگزاری کنید")
  }),
})
//////////////////////
const { handleSubmit } = useForm({ validationSchema: state.schema });
///////////////////////////////
const { value: userFamily } = useField("userFamily");
const { value: userName } = useField("userName");
const { value: imageName } = useField("imageName");
////////////////////////////////////
function onInvalidSubmit({ errors }) {
  const error = Object.values(errors)
  toast.error(error[0])
}
////////////////////////////////////
const handleChangeAccount = () => {
  clearTimeout(state.timer)
  state.timer = setTimeout(
    handleSubmit((values) => {
      requestEditeAccount(values)
    }, onInvalidSubmit), 1000);
}
///////////////////////////////
const handleProfile = (event) => {
  if (event.target.files && event.target.files[0]) {
    state.clientProfile = '';
    var reader = new FileReader();
    reader.onload = function (e) {
      state.clientProfile = e.target.result
    }
    reader.readAsDataURL(event.target.files[0]);
    handleConvertProfileForUpload(event.target.files[0])
  }
}
////////////////////////////////
const handleConvertProfileForUpload = async (image) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(image);
  const formData = new FormData();
  reader.onload = () => {
    formData.append('file', new Blob([reader.result], { type: image.type }), image.name);
    requestUploadProfile(formData)
  };
}
///////////////////////////////
const requestUploadProfile = (formData) => {
  uploaderApi.profile(formData)
    .then((response) => {
      state.clientProfile = '';
      imageName.value = response.data
    }).catch(() => {
      toast.error('پروفایل بارگزاری نشد')
    })
}
///////////////////////////////
const requestEditeAccount = (user) => {
  acoountApi.edit(user)
    .then(() => {
      pinia.requestGetAccountInfo()
      toast.success('با موفقیت انجام شد')
    }).catch(() => {
      toast.error('تغییر حساب کاربری انجام نشد')
    })
}
</script>
<template>
  <div class="parent-account-setting">
    <!-- ///////////////////////// -->
    <div class="header-account-setting">
      <p class="title">تنظیمات حساب کاربری</p>
    </div>
    <!-- ///////////////////////// -->
    <div class="main-account-setting">
      <div class="flex w-full justify-start gap-x-10 items-center">
        <p class="text w-[124px]">عکس پروفایل :</p>
        <div class="flex shadow-md rounded-md p-3 relative">
          <!-- /////////////////////////////// -->
          <transition-scale group>
            <img v-if="state.clientProfile" :src="state.clientProfile"
              class="min-w-[90px] min-h-[90px] w-[90px] h-[90px] rounded-md">
            <img v-else @error="$event.target.src = 'src/assets/images/account.png'"
              :src="imageName ? imageName : 'src/assets/images/account.png'"
              class="min-w-[90px] min-h-[90px] w-[90px] h-[90px] rounded-md">
          </transition-scale>
          <!-- //////////////////////////////// -->
          <img @click="state.clientProfile = 'src/assets/images/account.png', imageName = ''"
            class="btn-change-profile left-0" width="25" height="25" src="@/assets/images/remove.svg">
          <!-- //////////////////////// -->
          <label class="btn-change-profile right-0">
            <input class="hidden" type="file" @change="handleProfile" />
            <img width="25" height="25" src="@/assets/images/edit.svg" />
          </label>
          <!-- ////////////////////////// -->
        </div>
      </div>
      <div class="flex w-full flex-wrap justify-start gap-x-10 items-center">
        <p class="text w-[124px]">نام کامل :</p>
        <div class="flex gap-x-5 flex-wrap">
          <input v-model="userName" class="input-grey" type="text" placeholder="نام">
          <input v-model="userFamily" class="input-grey" type="text" placeholder="نام خانوادگی">
        </div>
      </div>
      <div class="flex flex-wrap w-full justify-start gap-x-10 items-center">
        <p class="text w-[124px]"> شماره تلفن همراه :</p>
        <input :value="state.userMobileNumber" disabled class="input-grey bg-[#D9D8D8] hover:cursor-not-allowed"
          type="text" placeholder="تلفن همراه">
      </div>
      <div class="footer-account-setting">
        <button @click="handleChangeAccount" class="btn-primary">تایید</button>
        <button @click="router.push('/')" class="btn-gray">بازگشت</button>
      </div>
    </div>
    <!-- ///////////////////////// -->
  </div>
</template>

