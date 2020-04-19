import axios from '../core/axios'
const homeService = {
  async getProductList (categoryId, pageSize) {
    let data = await axios({
      url: '/products?categoryId=' + categoryId + '&pageSize=' + pageSize,
      method: 'get'
    })
    return data
  }
}
export default homeService;