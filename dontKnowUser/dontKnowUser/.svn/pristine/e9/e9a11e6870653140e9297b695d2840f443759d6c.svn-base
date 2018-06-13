Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '12:01',
    items: [
      { name: '堂食', value: '堂食', checked: 'true' },
      { name: '外带', value: '外带' },

    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dateTime = new Date();
    var h = dateTime.getHours();
    var m = dateTime.getUTCMinutes();
    var time = h + ':' + m;
    this.setData({
      time: time
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
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  goMark: function () {
    wx.navigateTo({
      url: '../eatThing/mark'
    })
  },
  submit:function(){
    wx.navigateTo({
      url: './collageDetail'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})