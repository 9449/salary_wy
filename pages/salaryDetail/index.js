// pages/salaryDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    salaryItems: [
      {
        "title": "姓名",
        "content": "张三",
        "type": 0
      },
      {
        "title": "基本工资",
        "content": "张三",
        "type": 0
      },
    
      {
      "title": "基本工资总额",
      "content": "7000",
      "type": 0
      },
      {
      "title": "绩效",
      "content": "",
      "type": 1
      },
      {
      "title": "带看车补",
      "content": "",
      "type": 1
      },
      {
      "title": "公车补贴",
      "content": "300",
      "type": 1
      },
      {
      "title": "社保",
      "content": "684.6",
      "type": 2
      },
      {
      "title": "考核项",
      "content": "",
      "type": 2
      },
      {
      "title": "考勤类",
      "content": "251.85",
      "type": 2
      },
      {
      "title": "个税",
      "content": "",
      "type": 2
      },
      {
      "title": "税收",
      "content": "",
      "type": 2
      },
      {
      "title": "税前工资",
      "content": "6363.55",
      "type": 0
      },
      {
        "title": "税后工资",
        "content": "6363.55",
        "type": 0
        },
        {
          "title": "本月实发",
          "content": "6363.55",
          "type": 0
          },
  ],
    isOpen: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  changOpen() {
    let isOpen = !this.data.isOpen;
    this.setData({
      isOpen
    })
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