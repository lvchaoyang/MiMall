/**
 * @Author: 吕朝阳
 * @Date: 2020/04/19 14:44
 * @Description:
 */
import axios from 'axios'
import { Message } from 'element-ui'
// CORS解决跨域
// import env from './api.reqest'
// const baseUrl  = env.baseUrl;

// 前端proxy代理解决跨域
const baseUrl = '/api';

const service = axios.create({
  baseURL: baseUrl,
  timeout: 8000 // 超时
});
/**
 * 请求拦截
 */
service.interceptors.request.use(config => {
  // 1、设置默认请求头
  
  // 2、http拦截
  
  return config
}, error => {
  return Promise.reject(error)
});
// 接口错误拦截
service.interceptors.response.use(response => {
  let res = response.data;
  let path = location.pathname;
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    if (path !== '/index' && path !== '/login')
    window.location.href = '/login';
    return Promise.reject(res);
  } else {
    Message.warning(res.msg);
    return Promise.reject(res)
  }
},(error)=>{
  // let res = error.response;
  // Message.error(res.data.message);
  return Promise.reject(error);
});
export default service
