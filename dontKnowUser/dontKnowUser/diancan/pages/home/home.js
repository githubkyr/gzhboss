Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgUrls: [
      { id: 1, url:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'},
      { id: 2, url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'},
      { id: 2, url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg' },
     
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    custmerBtn: [{ id: 1, title: '点餐'},
      { id: 2, title: '拼团' },
      { id: 3, title: '砍价' },
     /** { id: 4, title: '约饭' },
      { id: 5, title: '吃什么' },
      { id: 6, title: '分享' }*/
      ]
    
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
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
  itemClick:function(e){
    console.log(e)
    var id = e.currentTarget.dataset.id;
    switch(id){
      case 1:
      //点外卖按钮
        wx.navigateTo({
         // url: '../eatThing/menus'
          url: '../chooseRestaurant/chooseARestaurant'
        })

      break;

      case 2:
      //购食材
        wx.navigateTo({
          url: '../take/collectTake'
        })

      break;
      case 3:
      //找餐厅
        wx.navigateTo({
          url: '../eatThing/navigation'
        })

        break;
      case 4:
        wx.navigateTo({
          url: '../take/submitOrder'
        })

        break;
      case 5:
        wx.navigateTo({
          url: '../eatThing/eat'
        })

        break;
      case 6:
 
        wx.navigateTo({
          url: '../take/placeOrder'
        })
        break;
    }

  },
  toeat:function(){
    
    wx.navigateTo({
      url:'../eatThing/menu'
     // url: '../qrCode/qrCode'
    })
  },
  makeMthod:function(){
    wx.navigateTo({
      url: '../make/makeMethod'
    })
    
  },
  song: function () {
   /* wx.navigateTo({
      url: '../order/submitOrder'
    })*/
    wx.navigateTo({
      url: '../song/song'
    })

  },
  smallTools :function(){
    wx.navigateTo({
      url: '../order/myOrder'
    })
  },
  order:function(){
    wx.navigateTo({
      url: '../order/myOrder'
    })
  },
  choose:function(){
    wx.navigateTo({
      url: '../eatThing/chooseRestaurant'
    })
  },

  toGo: function () {
   // wx.navigateTo({
     // url: '../eatThing/navigation'
    //})
    wx.navigateTo({
      url: '../home/phone'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
    
  }
})