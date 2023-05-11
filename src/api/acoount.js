import HttClient from './axios-base'
export default {
  login: (userLogin) => HttClient.post('v1/Activations/loginadmin', userLogin),
  logOut: () => HttClient.post('v1/Activations/logOut'),
  info: () => HttClient.post("v1/Users/GetUserInfo"),
  edit: (user) => HttClient.post("v1/Users/EditUser", user),
};