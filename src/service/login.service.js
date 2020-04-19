import axios from '../core/axios'
const loginService = {
  login () {
    axios({
      url: '/user/login',
      method: 'get'
    })
  }
}