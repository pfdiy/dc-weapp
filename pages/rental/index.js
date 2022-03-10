// pages/rental/index.js
import { areaList } from "@vant/area-data";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    areaList,
    fileList: [{}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  showPopup() {
    this.setData({ show: true });
    console.log(111);
  },

  onClose() {
    this.setData({ show: false });
    console.log(222);
  },
  onChange(event) {
    console.log(event.detail);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
