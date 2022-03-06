// pages/order-list/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    res: [],
    value: "",
    searchResult: false,
    searchData: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "https://websiteapi.usemock.com/list",
      success: (res) => {
        console.log(res.data.data);
        this.setData({
          res: res.data.data,
        });
      },
    });
  },

  onChange(e) {
    console.log(e.detail);
    this.setData({
      value: e.detail,
    });
  },
  onCancel() {
    this.setData({
      searchResult: false,
    });

  },
  onClick() {
    let pod = this.data.value;
    console.log(pod);

    if (pod == "") {
      wx.request({
        url: "https://websiteapi.usemock.com/list",
        success: (res) => {
          console.log(res.data.data);
          this.setData({
            res: res.data.data,
          });
        },
      });
    } else {
      this.setData({
        searchResult: true,
        value:""
      });
      wx.request({
        url: "http://t.talelin.com/v2/movie/search",
        data: {
          q: pod,
        },
        success: (res) => {
          this.setData({
            searchData: res.data.subjects,
          });
        },
      });
    }
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
  onPullDownRefresh() {
    wx.showLoading({
      title: "数据刷新中..",
    });

    setTimeout(function () {
      wx.hideLoading();
    }, 2000);

    wx.request({
      url: "https://websiteapi.usemock.com/list",
      success: (res) => {
        console.log(res.data.data);
        this.setData({
          res: res.data.data,
        });
        wx.stopPullDownRefresh();
      },
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: "数据拉取中..",
    });

    setTimeout(function () {
      wx.hideLoading();
    }, 2000);

    wx.request({
      url: "https://websiteapi.usemock.com/list",
      success: (res) => {
        console.log(res.data.data);
        this.setData({
          res: res.data.data,
        });
        wx.stopPullDownRefresh();
      },
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
