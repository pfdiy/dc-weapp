let QQMapWx = require("../../utils/lbs/qqmap-wx-jssdk");
let qqmapsdk;
const app = getApp();

// pages/scan/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: "82",
    latitude: "",
    longitude: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (res) => {
        this.getAddress();
      },
    });
  },

  getAddress() {
    qqmapsdk = new QQMapWx({
      key: app.lbskey,
    });
    let that = this;
    wx.getLocation({
      type: "gcj02",
      isHighAccuracy: true,
      success: (res) => {
        let lat = res.latitude;
        let lon = res.longitude;
        qqmapsdk.reverseGeocoder({
          location: { latitude: lat, longitude: lon },
          success: (res) => {
            let address = res.result.address;
            console.log(address);
            that.setData({
              latitude: lat,
              longitude: lon,
            });
          },
        });
      },
    });
  },

  sanCode: () => {
    wx.scanCode({
      success(res) {
        console.log(res);
      },
    });
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
