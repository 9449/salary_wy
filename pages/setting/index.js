import {list,change} from "../api/salaryTemplate"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOpen: false,
    templates:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.list();
  },
  changOpen(){
    let isOpen = !this.data.isOpen;
    this.setData({
      isOpen
    })
  },

  switchChange(event) {
    change({
      id: event.currentTarget.id
    });
  },
  async list() {
    let res = await list();
    if(res.code === 0) {
      this.setData({
        templates: res.data
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