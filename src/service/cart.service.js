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
  },
  async selectToggle (url) {
    let data = await axios({
      url: url,
      method: 'put'
    });
    return data;
  },
  async updateCart (productId, params) {
    let data = await axios({
      url: `carts/${productId}`,
      method: 'put',
      data: params,
    });
    return data;
  },
  async delProduct (productId) {
    let data = await axios({
      url: `carts/${productId}`,
      method: 'delete'
    });
    return data;
  }
}

export default cartService;