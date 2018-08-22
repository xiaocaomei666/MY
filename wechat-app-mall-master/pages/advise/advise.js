//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adviseText: '',
    adviseContent: '',
    isBtnClicked: false,
    systemData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var systemData = {};
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        systemData.mobileType = res.model;
        systemData.systemVersion = res.system;
        systemData.wechatVersion = res.version;
        systemData.screenSize = res.windowWidth + 'x' + res.windowHeight;
        that.setData({
          systemData: systemData
        })
      }
    })
    // 获取网络状态
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        that.data.systemData.networkType = res.networkType;
        that.setData({
          systemData: that.data.systemData
        })
      }
    })
  },
  // 标题
  adviseTitle(e) {
    this.setData({
      adviseText: e.detail.value
    })
  },

  // 内容
  adviseContent(e) {
    this.setData({
      adviseContent: e.detail.value
    })
  },

  // 提交
  contentPost() {
    let that = this;
    if (!that.data.isBtnClicked) {
      if (that.data.adviseText == '') {
        wx.showToast({
          title: '请输入反馈标题',
          icon: "none",
          duration: 1000
        })
      } else if (that.data.adviseContent == '') {
        wx.showToast({
          title: '请输入反馈内容',
          icon: "none",
          duration: 1000
        })
      } else {
        // 提交，发送网络请求。提交到服务器
        // that.data.systemData.title = that.data.adviseText;
        // that.data.systemData.content = that.data.adviseContent;
        // that.setData({
        //   systemData: that.data.systemData
        // })
        // wx.getStorage({
        //   key: 'token',
        //   success: function (res) {
        //     app.func.req('customercenter/customer/insert/operFeedback', that.data.systemData, res.data, function (res) {
        //       if (res.code == 0) {
                wx.showToast({
                  title: '提交成功',
                  icon: "none",
                  duration: 1000
                })
                setTimeout(function(){
                  wx.switchTab({
                    url: '../user/user',
                  })
                },1000) 
              } 
            // });
          // }
        // })
      // }
      that.setData({
        isBtnClicked: true
      });
      setTimeout(function () {
        that.setData({
          isBtnClicked: false
        });
      }, 1000);
    }
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