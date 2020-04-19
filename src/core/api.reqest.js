let baseUrl;
// CORS跨域配置
/**
 * process.env.NODE_ENV读取package中
 * "scripts": {
 *   "serve": "vue-cli-service serve", // 开发环境：process.env.NODE_ENV = development
 *   "build": "vue-cli-service build", // 正式环境：process.env.NODE_ENV = production
 *   "lint": "vue-cli-service lint" 
 * },
 *  */ 
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://dev-mall-pre.sprintboot.cn/api';
    break;
  case 'test':
    baseUrl = 'http://test-mall-pre.sprintboot.cn/api';
    break;
    case 'product':
      baseUrl = 'http://mall-pre.sprintboot.cn/api';
      break;
    default:
      baseUrl = 'http://mall-pre.sprintboot.cn/api';
      break;
}

export default {
  baseUrl
}