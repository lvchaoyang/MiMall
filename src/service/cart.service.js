import axios from '../core/axios';

const cartService = {
  /**
   * 加入购物车
   * @param {*} json 
   */
  async addCart (json) {
    let res = await axios({
      method: 'post',
      url: '/carts',
      data: json
    })
    return res;
  },
  async getCartCount () {
    let data = await axios({
      url: '/carts/products/sum',
      method: 'get'
    })
    return data;
  },
  async getCartList () {
    let data = await axios({
      url: '/carts',
      method: 'get'
    })
    return data;
  }
}

export default cartService;