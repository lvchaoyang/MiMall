import axios from '../core/axios'
const orderService = {
    /**
     * 获取地址列表
     */
    async getAddressList () {
        let data = await axios({
            url: '/shippings',
            method: 'get'
        })
        return data
    },
    /**
     * 编辑地址
     * @param {接口地址} url 
     * @param {接口方法} method 
     * @param {数据} params 
     */
    async submitAddress (url, method, params) {
        let data = await axios({
            url: url,
            method: method,
            data: params
        });
        return data;
    },
    /**
     * 提交订单
     * @param {订单数据}} params 
     */
    async orderSubmit (params) {
        let data = await axios({
            url: '/orders',
            method: 'post',
            data: params
        });
        return data;
    },
    /**
     * 获取订单详情
     * @param {订单}} orderId 
     */
    async getOrderDetail (orderId) {
        let data = await axios({
            url: `/orders/${orderId}`,
            method: 'get'
        })
        return data
    },
    /**
     * 付钱
     * @param {订单数据}} params 
     */
    async payForGoods (params) {
        let data = await axios({
            url: '/pay',
            method: 'post',
            data: params,
        })
        return data
    },
    /**
     * 获取订单列表
     */
    async getOrderList (pageNum, pageSize) {
        let data = await axios({
            url: `/orders?pageNum=${pageNum}&pageSize=${pageSize}`,
            method: 'get',
        })
        return data
    }
}

export default orderService;