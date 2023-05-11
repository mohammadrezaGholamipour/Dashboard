import VueTransitions from '@morev/vue-transitions';
import "vue-toastification/dist/index.css";
import '@morev/vue-transitions/styles';
import Toast from "vue-toastification";
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/index.css'
/////////////////////////
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(VueTransitions)
app.use(Toast, {
  transition: "Vue-Toastification__slideBlurred",
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  position: "top-center",
  pauseOnFocusLoss: true,
  closeButton: "button",
  draggablePercent: 0.6,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  timeout: 5000,
  icon: true,
  rtl: true
})
app.use(router)
////////////////
app.mount('#app')
