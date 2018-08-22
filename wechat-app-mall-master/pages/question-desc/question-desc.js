// pages/question-desc/question-desc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //获取上一个页面传过来的数据
    getQuestionTitle: '',
    getQuesitonIndex: '',
    titleIndex:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取上一个页面传过来的数据
    that.setData({
      getQuestionTitle: options.id,
      getQuesitonIndex: options.index,
      titleIndex: options.titleIndex
    });

    //改变当前导航的标题
    wx.setNavigationBarTitle({
      title: that.data.getQuestionTitle
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


