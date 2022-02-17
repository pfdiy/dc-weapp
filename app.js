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
});
