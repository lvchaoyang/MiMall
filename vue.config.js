// 开发环境会读
module.exports = {
  devServer: {
    proxy: { // 代理
      '/api': { // 访问‘/api’时，拦截
        target: 'http://mall-pre.springboot.cn', // 代理目标主机端口
         // changeOrigin默认是false：请求头中host仍然是浏览器发送过来的host(http://localhost)
        // 如果设置成true：发送请求头中host会设置成target
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite:{
          '^/api': '' // api为前端虚拟，实际代理为''
        }
      }
    }
    // 此时请求到 /api/xxx 现在会被代理到请求 `${proxy.target}/xxx`
  },
  publicPath: '/app', // 部署应用包时的基本 URL
  outputDir: 'html', // 生成的生产环境构建文件的目录
  productionSourceMap: false, // 打包不生成.map文件
  chainWebpack: (config) => {
    config.plugins.delete('prefetch') // 禁止预加载
  }
}