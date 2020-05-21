import axios from '../core/axios'
const loginService = {
  /**
   * 登录
   * @param {*} json 
   */
  async login (json) {
    let data = await axios({
      url: '/user/login',
      method: 'post',
      data: json
    })
    return data;
  },
  /**
   * 注册
   * @param {*} json 
   */
  async reqister (json) {
    let data = await axios({
      url: '/user/reqister',
      method: 'post',
      data: json
    })
    return data;
  },
  /**
   * 获取用户信息
   * @param {*} json 
   */
  async getUserInfo () {
    let data = await axios({
      url: '/user',
      method: 'get'
    })
    return data;
  },
  /**
   * 退出登录
   */
  async logout () {
    let data = await axios({
      url: '/user/logout',
      method: 'post'
    })
    return data;
  }
}
export default loginService;