import {add} from "../../api/user"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    account: '',
    password: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  handleInput(event) {
    this.setData({
      [event.currentTarget.id]: event.detail.value
    })
  },

  // 取消
  cancel() {
    wx.navigateBack({
      delata: 1
    })
  },
  // 添加用户
  async add()  {
    if(!this.data.username.trim() || !this.data.account.trim() || !this.data.password.trim()) {
      wx.showToast({
        title: '请输入人员信息',
        icon: "error"
      })
      return;
    };
    let res = await add({
      username: this.data.username,
      account: this.data.account,
      password: this.data.password
    });
    if(res.code === 0) {
      wx.showToast({
        title: '操作成功',
      })
      wx.navigateBack();
    } else{
      wx.showToast({
        title: res.msg,
        icon: "error"
      })
    };
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