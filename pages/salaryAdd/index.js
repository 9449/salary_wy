import {listType} from "../api/user"
import {list} from "../api/salaryTemplate"
import {add} from "../api/userSalary"
import dayjs from "dayjs"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: [],
    isShow: false, 
    current: {
      id: 0,
      account: "全部人员"
    },
    templates:[],
    isOpen: false,
    userSalaryDetail: {},
    username: "",
    date: '请选择日期',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.listType();
    this.list();
  },

  setDate() {
    let date = dayjs().year() + '-' + (dayjs().month() + 1);
    this.setData({
      date
    })
  },
  // 获取所有的用户
  async listType() {
    let res = await listType();
    this.setData({
      userList: res.data
    });
  },
  // 获取所有的选择的模板
  async list() {
    let res = await list();
    if(res.code === 0) {
      this.setData({
        templates: res.data
      })
    }
  },

  // 选择日期
  bindDateChange(event){
    this.setData({
      date: event.detail.value
    })
  },

    // 用户输入事件 
    handleInput(event) {
      this.data.userSalaryDetail[event.currentTarget.id] = event.detail.value;
    },
  

  changOpen(){
    let isOpen = !this.data.isOpen;
    this.setData({
      isOpen
    })
  },

  openClose() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  // 用户选择人员
  optionTap(e) {
    let dataset = e.target.dataset
    this.setData({
      current: dataset,
      isShow: false,
    });
    let username = this.data.templates.find((item) =>  {
      item.title === "姓名"
      return item;
    });
    if(username !== undefined) {
      this.data.userSalaryDetail[username.id] = dataset.account
    }
  },
// 取消
  cancel() {
    wx.navigateBack();
  },
  // 提交表单
  async confirm() {
    if(this.data.date === "请选择日期") {
      wx.showToast({
        title: '请选择日期',
        icon: "error"
      })
      return;
    };
    if(this.data.current.id === 0) {
      wx.showToast({
        title: '请选择人员',
        icon: "error"
      })
      return;
    };
    if(Object.keys(this.data.userSalaryDetail).length === 0) {
      wx.showToast({
        title: '请填写信息',
        icon: "error"
      })
      return;
    }
    let res = await add({
      date: this.data.date,
      uid: this.data.current.id,
      userSalaryDetail: JSON.stringify(this.data.userSalaryDetail)
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