Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '12:01',
    timem:'0',
    items: [
      { name: '我来替大家收', value: '我来替大家收', checked: 'true' },
      { name: '各收各', value: '各收各' },
      
    ],
    give: [
      { name: '我请大家吃', value: '我请大家吃', checked: 'true' },
      { name: '各收各', value: '各收各' },
      { name: 'aa制', value: 'aa制' },

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
      time: time,
      
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
  bindTimeChangem: function (e) {
    console.log('picker发送选择改变，携带值为', e)
    this.setData({
      timem: e.detail.value
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  radioChanges: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})