import axios from '../core/axios'

const productService = {
    async getProductInfo (id) {
        let data = await axios({
            url: `/products/${id}`,
            method: 'get'
        })
        return data;
    }
}
export default productService;