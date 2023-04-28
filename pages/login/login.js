import { login } from "../../api/user";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    password: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },
  // 获取用户账号
  content(event) {
    this.setData({
      account: event.detail.value
    })
  },
  // 获取用户密码
  password(event) {
    this.setData({
      password: event.detail.value
    })
  },

  // 登录
  async login() {
    if(!this.data.account.trim() || !this.data.password.trim()) {
      wx.showToast({
        title: '请输入登录信息',
        icon: "error"
      })
      return;
    }
    let result = await login({
      account:this.data.account,password:this.data.password
    })
    if(result.code === 0) {
      wx.setStorageSync("Authorization",result.data);
      wx.showToast({
        title: '登录成功',
      })
      wx.switchTab({
        url: "/pages/index/index"
      })
    } else{
      wx.showToast({
        title: result.msg,
        icon: "error"
      })
    }
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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