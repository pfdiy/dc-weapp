// pages/scan/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value:"75",
    gradientColor: {
      '0%': '#ffd01e',
      '50%': '#ffd01e',
      '100%': '#ee0a24',}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  sanCode() {
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
