// pages/pay/pay.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "orderId": '',
    "payMoney": '',
    "addQuantity": '',
    "skuIdList": [],
    originalCost: '',
    time: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(wx.getStorageSync("orderShop"), wx.getStorageSync("orderShop2"), 333);
    let orderId = options.orderId;
    let originalCost = options.originalCost;
    let myDate = new Date();
    let month = myDate.getMonth() + 1;
    let getMinutes = myDate.getMinutes() + 30;
    let time = myDate.getFullYear() + '-' + month + '-' + myDate.getDate() + ' ' + myDate.getHours() + ':' + getMinutes;
    that.setData({
      originalCost: originalCost,
      time: time
    })
    wx.getStorage({
      key: 'token',
      success: function (res) {
        app.func.getreq('pay/customerPaySuccess', { "orderId": orderId }, res.data, function (res) {
          if (res.code == 0) {
            that.setData({
              "orderId": res.payOrderSuccessResponseDto.orderId,
              "payMoney": res.payOrderSuccessResponseDto.payMoney,
              "addQuantity": res.payOrderSuccessResponseDto.addQuantity,
              "skuIdList": res.payOrderSuccessResponseDto.skuIdList,
            })
            console.log(res.payOrderSuccessResponseDto.skuIdList);
          }
        })
      },
    })
  },

  // 预约送水
  primary() {
    wx.showToast({
      title: '催单成功',
      icon: 'none',
      duration: 1000
    })
  },
  // 查看订单按钮
  look() {
    wx.navigateTo({
      url: '../deliver/deliver?id=' + this.data.orderId + '&title=1'
    })
  },

  // 回到购物车
  toWater() {
    wx.switchTab({
      url: '../shopping-trolley/shopping-trolley'
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})