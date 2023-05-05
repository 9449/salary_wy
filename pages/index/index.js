import {getCurrentUserDetail} from "../../api/user"
import {detailInfos} from "../../api/userSalary"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAdmin: false,
    userInfo: {},
    pageNum: 1,
    pageSize: 4,
    total: 0,
    detailInfos: [],
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let Authorization = wx.getStorageSync('Authorization');
    if(!Authorization){
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        success: () => {
          // 跳转至登录界面
          wx.reLaunch({
            url: '/pages/login/login'
          })
        }
      })
    }
    if (Authorization) {
      this.getCurrentUserDetail();
    }
  },

  // 获取当前登陆人员信息
  async getCurrentUserDetail(){
    let result = await getCurrentUserDetail();
    if(result.code === 0 ){
      this.setData({
        isAdmin: (result.data.type === 1),
        userInfo: result.data
      });
    }
    wx.setStorageSync("userInfo",this.data.userInfo);
    if(!this.data.isAdmin) {
      this.detailInfos();
    }
  },

  // 人员获取工资列表
  async detailInfos() {
    let res = await detailInfos({
      pageNum: this.data.pageNum,
      pageSize: this.data.pageSize,
      uid: this.data.userInfo.id
    })
    if(res.code === 0) {
      let detailInfos = [...this.data.detailInfos,...res.data.records];
      this.setData({
        detailInfos,
        total: res.data.total,
        pageNum: ++this.data.pageNum
      })
    }
  },

  // 触底 需要获取下一页
  bindDownLoad() {
    if(this.data.total > ((this.data.pageNum -1) * this.data.pageSize)) {
      this.detailInfos();
    } else {
      wx.showToast({
        title: "没有更多了",
        icon: "none"
      })
    }
  },


  // 跳转到详情页面
  getDeteial(event) {
    wx.navigateTo({
      url: '/pages/salaryDetail/index?id=' + event.currentTarget.id + "&date=" + event.currentTarget.dataset.date
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  switchMenu(event) {
    wx.navigateTo({
      url: event.currentTarget.id
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
