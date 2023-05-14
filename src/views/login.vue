<script setup>
import { useForm, ErrorMessage, useField } from "vee-validate";
import Loading from "@/components/loading.vue";
import { useToast } from "vue-toastification";
import AuthService from "@/utils/AuthService";
import { useWindowSize } from '@vueuse/core'
import { useRouter } from "vue-router";
import accountApi from '@/api/acoount'
import { reactive } from "vue";
import * as yup from "yup";
///////////////////////////
const { width } = useWindowSize()
const router = useRouter()
const toast = useToast();
///////////////////////////
const state = reactive({
  showPassword: false,
  loading: false,
  timer: false,
  schema: yup.object({
    userName: yup
      .string()
      .required("نام کاربری خود را وارد کنید")
      .min(4, "حداقل چهار کاراکتر باید باشد"),
    password: yup
      .string()
      .required("رمز خود را وارد کنید")
      .min(4, "حداقل چهار کاراکتر باید باشد"),
  }),
})
// ////////////////////////////////
const { handleSubmit } = useForm({ validationSchema: state.schema });
///////////////////////////////
const { value: userName } = useField("userName");
const { value: password } = useField("password");
////////////////////////////////////
function onInvalidSubmit({ errors }) {
  const error = Object.values(errors)
  toast.error(error[0])
}
////////////////////////////////////
const onSubmit = () => {
  clearTimeout(state.timer)
  state.timer = setTimeout(
    handleSubmit((values) => {
      handleAcceptLogin(values);
    }, onInvalidSubmit), 200);
}
/////////////////////////////////
const handleAcceptLogin = (values) => {
  state.loading = true
  const userlogin = {
    userName: values.userName,
    password: values.password,
  }
  setTimeout(() => {
    accountApi.login(userlogin)
      .then((response) => {
        if (response.data) {
          AuthService.setTokenUser(response.data.accessToken)
          router.push('/')
        } else {
          toast.error(response.message)
        }
      })
      .catch((error) => {
        toast.error(error.message)
      }).finally(() => {
        state.loading = false
      })
  }, 3000);
}

</script>
<template>
  <div class="parent-login">
    <transition-slide>
      <Loading v-if="state.loading" />
    </transition-slide>
    <div v-if="width >= 1000" class="logo-login">
      <img src="@/assets/images/bg-login.png">
    </div>
    <div class="inputs-login">
      <img v-if="width >= 1000" class="mb-5" src="@/assets/images/logo.png" />
      <img v-else class="mb-5" src="@/assets/images/logo-2.png" />
      <input class="input" v-model="userName" type="text" placeholder="نام کاربری" />
      <transition-expand>
        <ErrorMessage v-if="userName" class="error-message" name="userName" />
      </transition-expand>
      <input v-model="password" class="input" type="text" placeholder="رمز عبور" />
      <transition-expand>
        <ErrorMessage v-if="password" class="error-message" name="password" />
      </transition-expand>
      <button @click="onSubmit" class="btn-login">وارد شدن</button>
    </div>
  </div>
</template>