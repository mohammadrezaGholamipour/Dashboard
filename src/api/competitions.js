import HttClient from './axios-base'
export default {
  get: () => HttClient.get('v1/Panel/GetMatchList?pageSize=10'),
};