import {detailInfos} from "../../api/userSalary"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: '',
    pageNum: 1,
    pageSize: 20,
    total: 0,
    detailInfos: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.detailInfos();
  },

  add(){
    wx.navigateTo({
      url: '/pages/salaryAdd/index'
    })
  },

  
  // 用户输入事件 
  handleInput(event) {
    this.setData({
      key: event.detail.value
    })
  },

  // 清除输入
  deleteKey() {
    this.setData({
      key: '',
      pageNum: 1,
      pageSize: 20,
      total: 0,
      detailInfos: [],
    })
    this.detailInfos();
  },

  // 文件上传
  chooseUpload() {
    let that = this;
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      extension: ['.xlsx', '.xls', '.XLSX', '.XLS', 'xlsx', 'xls', 'XLSX', 'XLS'],
      success(res) {
        wx.uploadFile({
          url: 'https://router.xuperpark.com/file/upload',
          filePath: res.tempFiles[0].path,
          name: 'file',
          // formData: {
          //   'name': res.tempFiles[0].name
          // },
          success: function(resp) {
            
            let data = JSON.parse(resp.data);
            if(data.code === 0) {
              wx.showToast({
                title: "导入成功",
                icon: "success",
                success: function() {
                  that.setData({
                    pageNum: 1,
                    pageSize: 20,
                    total: 0,
                    detailInfos: [],
                  })
                  that.detailInfos();
                }
              })
            } else {
              wx.showToast({
                title: data.msg,
                icon: "error"
              })
            }
            
          },
          fail: function(err) {
            console.log(err);
          }
        })
      },
    })
  },
  // 获取添加列表
  async detailInfos() {
    let res = await detailInfos({
      pageNum: this.data.pageNum,
      pageSize: this.data.pageSize,
      key:this.data.key
    })
    if(res.code === 0){
      let detailInfos = [...this.data.detailInfos,...res.data.records];
      this.setData({
        total: res.data.total,
        pageNum: ++this.data.pageNum,
        detailInfos
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

  // 搜索
  search() {
    this.setData({
      pageNum: 1,
      pageSize: 20,
      total: 0,
      detailInfos: [],
    })
    this.detailInfos();
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