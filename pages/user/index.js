import {page,deleteUser} from "../api/user"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: "",
    pageNum: 0,
    pageSize: 13,
    total: '',
    userList: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  bindDownLoad() {
    if (this.data.pageSize < this.data.total) {
      let pageSize = this.data.pageSize
      this.setData({
        pageSize: pageSize + 6
      })
      this.getUserList()
    } else {
      wx.showToast({
        title: "没有更多了",
        icon: "none"
      })
    }
  },

  add() {
    wx.navigateTo({
      url: "/pages/userAdd/index"
    })
  },

  async getUserList(){
    let res = await page({
      pageNum: this.data.pageNum,
      pageSize: this.data.pageSize,
      account: this.data.key
    })
    if(res.code === 0) {
      this.setData({
        total: res.data.total,
        userList: res.data.records
      })
    }
  },

  // 用户输入事件 
  handleInput(event) {
    this.setData({
      key: event.detail.value
    })
  },

  // 清除输入
  deleteKey(event) {
    this.setData({
      key: ''
    })
    this.getUserList();
  },

  // 搜索
  search() {
    this.setData({
      pageNum: 0,
      pageSize: 6,
      total: '',
    })
    this.getUserList();
  },
  // 删除人员
  delete(event){
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: async (sm) => {
        if (sm.confirm) {
            // 用户点击了确定 可以调用删除方法了
            let res = await deleteUser({id: event.target.id * 1});
            wx.showToast({
              title: res.data,
              icon: (res.code ===0) ? "success" : "error"
            })
            this.getUserList();
          } else if (sm.cancel) {
            console.log('用户点击取消')
          }
      } 
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
    this.getUserList()
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