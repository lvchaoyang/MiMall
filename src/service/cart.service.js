import axios from '../core/axios';

const cartService = {
  async addCart (json) {
    let res = await axios({
      method: 'post',
      url: '/carts',
      data: json
    })
    return res;
  }
}

export default cartService;