// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let userInfo = wx.getStorageSync('userInfo');
    this.setData({
      userInfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  layout(event) {
    wx.showModal({
      title: '提示',
      content: '确定要退出吗？',
      success: (sm) => {
        if (sm.confirm) {
            // 用户点击了确定
            wx.removeStorageSync("Authorization");
            wx.removeStorageSync("userInfo");
            wx.reLaunch({
              url: "/pages/login/login"
            })
          } else if (sm.cancel) {
            console.log('用户点击取消')
          }
      } 
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },
  more() {
    wx.showToast({
      title: "攻城狮正在开发中~~~~请您耐心等待~~~~~",
      icon:"none"
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})