var order = ['menu1', 'menu2', 'menu3', 'menu4', 'menu1']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      { id: 0, text: '菜单一' },
      { id: 1, text: '菜单二' },
      { id: 2, text: '菜单三' },
      { id: 3, text: '菜单四' },
      

    ],
    menuContain:[
      { id: 'menu1', text: '模块1' },
      { id: 'menu2', text: '模块2' },
      { id: 'menu3', text: '模块3' },
      { id: 'menu4', text: '模块4' },

    ],
    toView: 'menu1',
   
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },


  upper: function (e) {
   // console.log(e)
  },
  lower: function (e) {
   // console.log(e)
  },
  scroll: function (e) {
   // console.log(e)
  },
  
 
  menuClick: function (e) {
   
    var id = e.currentTarget.dataset.id;
   // console.log(id)
   // console.log(order[id])
    this.setData({
      toView: order[id ]
    })
   
   
  },
//点击吃什么按钮
  eatThing:function(){
    wx.navigateTo({
      url: '../eatThing/eat'
    })
  },

  //点击一起吃
  getAll:function(){
    wx.navigateTo({
      url: '../take/launchTake'
    })
  },
  //点击摸一个菜
  menusClick:function(){
    wx.navigateTo({
      url: '../make/makeMethod'
    })
  },
  //点击菜单去付款按钮
  submit:function(){
    wx.navigateTo({
      url: '../order/submitOrder'
    })
  }


})