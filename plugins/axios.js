import  axios from 'axios';
const MyAxios = {};
MyAxios.install = function (Vue){
    // 添加实例方法
     axios.defaults.baseURL = 'http://localhost:3000/';
     Vue.prototype.$http = axios;
};
export default MyAxios;