import AuthService from "@/utils/AuthService";
import accountApi from '@/api/acoount'
import { defineStore } from 'pinia'
//////////////////////////////////
export const useDashboardStore = defineStore('pinia', {
  state: () => ({
    sideBarStatus: true,
    accountInfo: '',
  }),
  ///////////////////
  actions: {
    handleSideBarStatus() {
      this.sideBarStatus = !this.sideBarStatus
    },
    requestGetAccountInfo() {
      accountApi.info()
        .then((response) => {
          this.accountInfo = response.data
        })
        .catch((error) => { console.log(error); })
    },
    requestAccountLogOut() {
      accountApi.logOut()
        .then((response) => {
          AuthService.removeTokenUser()
          window.location.href = '/login'
        }).catch((error) => {
          console.log(error);
        })
    }
  },
  ///////////////////
  getters: {
    getSideBarStatus: (state) => state.sideBarStatus,
    getAccountInfo: (state) => state.accountInfo,
  },
})