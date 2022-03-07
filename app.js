// app.js
App({
  onLaunch() {
    //断网提示
    wx.onNetworkStatusChange((result) => {
      if (!result.isConnected) {
        wx.showToast({
          title: "请检查网络！",
          icon: "error",
          duration: 5000,
        });
      }
    });
  },

  url:"http://t.talelin.com/v2/movie/",
  gps:"https:api/bsm16.com/"
});