import dayjs from "dayjs"
import {detailMonth} from "../../api/userSalary"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    salaryItems: [],
    isOpen: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 修改标题
    let title = dayjs(options.date).format("YYYY年MM月") + "工资条";
    wx.setNavigationBarTitle({
      title
    })
    // 获取数据
    this.detailMonth(options.id);
  },
  changOpen() {
    let isOpen = !this.data.isOpen;
    this.setData({
      isOpen
    })
  },
  // 获取用户工资表详情
  async detailMonth(id) {
    let res = await detailMonth({
      id
    })
    if (res.code === 0) {
      this.setData({
        salaryItems: res.data
      })
    }
  },

  // 获取人员的信息
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