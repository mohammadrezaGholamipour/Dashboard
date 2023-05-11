const AuthService = {
  ///////////////////////////////////////////////
  getTokenUser: () => {
    return window.localStorage.getItem("tokenUser");
  },
  ///////////////////////////////////////////////
  setTokenUser: (token) => {
    window.localStorage.setItem("tokenUser", token);
  },
  ///////////////////////////////////////////////
  removeTokenUser: () => {
    window.localStorage.removeItem('tokenUser');
  },
  ///////////////////////////////////////////////
};
export default AuthService;
