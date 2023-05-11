import AuthService from "@/utils/AuthService";
import accountApi from '@/api/acoount'
import { defineStore } from 'pinia'
//////////////////////////////////
export const useDashboardStore = defineStore('pinia', {
  state: () => ({
    sideBarStatus: false
  }),
  ///////////////////
  actions: {
    handleSideBarStatus() {
      this.sideBarStatus = !this.sideBarStatus
    }
  },
  ///////////////////
  getters: {
    getSideBarStatus: (state) => state.sideBarStatus,
  },
})