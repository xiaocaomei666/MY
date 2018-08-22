// pages/order/order.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    distributionInfoDetail: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let id = options.id;
    wx.getStorage({
      key: 'token',
      success: function (res) {
        app.func.getreq('customercenter/distribution/queryDistributionInfoDetail', { "id": id }, res.data, function (res) {
          if (res.code == 0) {
            that.setData({
              distributionInfoDetail: res.distributionInfoDetail,
            })
          }
        })
      },
    })
  },
  
  // 查看订单按钮
  look() {
    wx.navigateTo({
      url: '../deliver/deliver?id=' + this.data.distributionInfoDetail.id
    })
    
  },

  // 回到首页按钮
  home() {
    wx.switchTab({
      url: '../index/index'
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