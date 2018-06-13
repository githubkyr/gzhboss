App({
  onLaunch: function () {
  },
  onShow: function () {
    console.log(getCurrentPages())
  },
  onHide: function () {
    console.log(getCurrentPages())
  },
  onError: function (msg) {
    console.log(msg)
  },
  globalData: {
    userInfo: null,
  }
})