<script setup>
import { useDashboardStore } from '@/store/pinia'
import { onMounted } from 'vue'
/////////////////////////////////
const pinia = useDashboardStore()
////////////////////////////////
onMounted(() => {
  const breadCrumb = [
    { name: 'صفحه اصلی', link: '/' },
    { name: 'دسته بندی ها', link: '/categories' },
  ]
  pinia.handleBreadCrumb(breadCrumb)
})
</script>
<template>
  <div> categories</div>
</template>