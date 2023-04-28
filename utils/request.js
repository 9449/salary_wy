import config from "./config"
export default (url,data={},method='POST') => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      header:{
        Authorization: wx.getStorageSync('Authorization') ?　wx.getStorageSync('Authorization'):''
      },
      success(res) {
        const {
          data,
          statusCode
        } = res;
        // 如果data里的code等于-1就响应为失败
        if (statusCode === 500) {
          wx.showModal({
            content: "网络异常，请稍后重试",
            success() {
              wx.navigateBack({
                delta: 1,
              })
            }
          })
          return Promise.reject(res);
        }
        if (statusCode === 600) {
          wx.showModal({
            showCancel: false,
            content: '登录信息已过期，请重新进入小程序',
            success() {
              wx.removeStorage({
                key: 'Authorization',
                success(res) {}
              })
              wx.removeStorage({
                key: 'userInfo',
                success(res) {

                }
              })
              wx.reLaunch({
                url: '/pages/login/login',
              })
            }
          })
          return Promise.reject(res);
        }
        resolve(data);
      },
      // success: (res) => {
      //   resolve(res.data);
      // },
      fail: (err) => {
        reject(err);
      }
    })
  })
}