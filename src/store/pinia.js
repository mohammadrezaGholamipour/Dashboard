import AuthService from "@/utils/AuthService";
import accountApi from '@/api/acoount'
import { defineStore } from 'pinia'
//////////////////////////
export const useDashboardStore = defineStore('pinia', {
  state: () => ({
    sideBarStatus: false,
    accountInfo: '',
    requestLoading: false,
    breadCrumb: [
      { name: 'صفحه اصلی', link: '/' }
    ]
  }),
  /////////////////////////
  actions: {
    handleSideBarStatus() {
      this.sideBarStatus = !this.sideBarStatus
    },
    handleBreadCrumb(breadCrumb) {
      this.breadCrumb = breadCrumb
    },
    handleRequestLoading() {
      this.requestLoading = !this.requestLoading
    },
    requestGetAccountInfo() {
      accountApi.info()
        .then((response) => {
          this.accountInfo = response.data
        })
        .catch((error) => {
          console.log(error);
        })
    },
    requestAccountLogOut() {
      accountApi.logOut()
        .then(() => {
          AuthService.removeTokenUser()
          window.location.href = '/login'
          this.accountInfo = ''
        }).catch((error) => {
          console.log(error);
        })
    }
  },
  ///////////////////
  getters: {
    getSideBarStatus: (state) => state.sideBarStatus,
    getrequestLoading: (state) => state.requestLoading,
    getAccountInfo: (state) => state.accountInfo,
    getbreadCrumb: (state) => state.breadCrumb,

  },
})