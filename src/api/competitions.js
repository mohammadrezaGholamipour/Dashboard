import HttClient from './axios-base'
export default {
  get: () => HttClient.get('v1/Panel/GetMatchList?pageSize=10'),
  matchStatus: (competitionsId, status) => HttClient.post(`v1.0/Panel/MatchSetActive/${competitionsId}/${status}`),
};