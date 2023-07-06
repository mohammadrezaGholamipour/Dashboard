<script setup>
import { useForm, useField } from "vee-validate";
import { useToast } from "vue-toastification";
import { onMounted, reactive } from "vue";
import uploaderApi from '@/api/upload';
import * as yup from "yup";
///////////////////////////
const emit = defineEmits(['editeCategory', 'newCategory'])
const props = defineProps(['category'])
const toast = useToast();
/////////////////////////
onMounted(() => {
  categoryTitle.value = props.category.data?.categoryTitle;
  imageName.value = props.category.data?.imageName;
  priority.value = props.category.data?.priority;
})
/////////////////////////
const state = reactive({
  loading: false,
  timer: null,
  schema: yup.object({
    categoryTitle: yup
      .string()
      .required("لطفا نام دسته بندی خود را وارد کنید")
      .nullable("لطفا نام دسته بندی خود را وارد کنید"),
    priority: yup
      .string()
      .required("لطفا الویت دسته بندی خود را وارد کنید")
      .nullable("لطفا الویت دسته بندی خود را وارد کنید"),
    imageName: yup
      .string()
      .required("لطفا تصویر دسته بندی خود را بارگزاری کنید")
      .nullable("لطفا تصویر دسته بندی خود را بارگزاری کنید")
  }),
});
////////////////////////////////////
const { handleSubmit } = useForm({ validationSchema: state.schema });
///////////////////////////////
const { value: categoryTitle } = useField("categoryTitle");
const { value: imageName } = useField("imageName");
const { value: priority } = useField("priority");
////////////////////////////////////
function onInvalidSubmit({ errors }) {
  const error = Object.values(errors)
  toast.error(error[0])
}
////////////////////////////////////
const handleChangeOrNewCategory = () => {
  clearTimeout(state.timer)
  state.timer = setTimeout(
    handleSubmit((values) => {
      if (props.category.data?.categoryId) {
        props.category.data.categoryTitle = categoryTitle.value
        props.category.data.imageName = imageName.value
        props.category.data.priority = priority.value
        emit('editeCategory', props.category.data)
      } else {
        emit('newCategory', values)
      }
    }, onInvalidSubmit), 1000);
}
//////////////////////////////////
const handleCategoriesImage = (event) => {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      imageName.value = e.target.result
    }
    reader.readAsDataURL(event.target.files[0]);
    handleConvertProfileForUpload(event.target.files[0])
  }
}
/////////////////////////////////////
const handleConvertProfileForUpload = (file) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  const formData = new FormData();
  reader.onload = () => {
    formData.append('file', new Blob([reader.result], { type: file.type }), file.name);
    requestUploadProfile(formData)
  };
}
///////////////////////////////
const requestUploadProfile = (formData) => {
  state.loading = true;
  uploaderApi.profile(formData)
    .then((response) => {
      imageName.value = response.data
    }).catch(() => {
      toast.error('پروفایل بارگزاری نشد')
    })
    .finally(() => {
      state.loading = false;
    })
}
//////////////////////////
const handleResetInputs = () => {
  if (props.category.data?.categoryId) {
    categoryTitle.value = props.category.data.categoryTitle;
    imageName.value = props.category.data.imageName;
    priority.value = props.category.data.priority;
  } else {
    categoryTitle.value = '';
    imageName.value = '';
    priority.value = '';
  }
}
</script>
<template>
  <div class="flex w-full flex-col items-start justify-start p-5 gap-10">
    <div class="flex gap-5 w-full justify-start rounded-md items-center flex-wrap">
      <!-- ////////////////////////////// -->
      <div class="flex max-w-[365px] w-full min-w-[200px] items-start flex-col justify-center gap-y-2 text">
        <p>عنوان :</p>
        <input v-model="categoryTitle" class="input-grey" type="text" placeholder="عنوان" />
      </div>
      <div class="flex max-w-[365px] w-full min-w-[200px] items-start flex-col justify-center gap-y-2 text">
        <p>الویت :</p>
        <input v-model="priority" class="input-grey" type="text" placeholder="الویت" />
      </div>
      <div class="flex items-center justify-center gap-x-5 text">
        <p>تصویر دسته بندی :</p>
        <label class="uploader-image">
          <!-- ///////////////////// -->
          <img v-if="imageName" @error="$event.target.src = '/src/assets/images/category.png'" :src="imageName" width="75"
            class="rounded-md" />
          <img v-else src="@/assets/images/image.png" width="75">
          <input class="hidden" type="file" @change="handleCategoriesImage" />
          <!-- /////////////////////// -->
          <img width="25" height="25" src="@/assets/images/edit.svg" @click="handleCategoriesImage"
            class="absolute right-[-7px] bottom-[-18]" />
          <img @click.prevent="imageName = ''" width="25" height="25" src="@/assets/images/remove.svg"
            class="absolute left-[-7px] bottom-[-18]">
        </label>
      </div>
      <!-- ////////////////////////////// -->
    </div>
    <div class="w-full flex justify-end items-center gap-5">
      <button @click="handleChangeOrNewCategory" :disabled="state.loading || props.category.requestLoading"
        :class="!state.loading && !props.category.requestLoading ? 'btn-primary' : '!cursor-not-allowed btn-gray bg-slate-500 text-white'">
        <transition-slide group>
          <i v-if="state.loading || props.category.requestLoading"
            class="fa-duotone fa-loader animate-spin transition-all duration-300"></i>
          <p v-else>تایید</p>
        </transition-slide>
      </button>
      <button @click="handleResetInputs" class="btn-gray">بازنشانی</button>
    </div>
  </div>
</template>


