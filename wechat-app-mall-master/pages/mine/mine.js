// pages/mine/mine.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',//昵称
    isBtnClicked: false,
    phone: '',//手机号码
    cancelbeans: {
      title: '是否更新昵称？',
      content: '',
      templateShow: false
    }, //更新昵称弹框
    cancelbeans2: {
      title: '是否更新手机号码？',
      content: '',
      templateShow: false
    }, //更新手机号码弹框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      name: options.name,
      phone: options.phone
    })
  },

  // 我的地址
  toAddress() {
    let that = this;
    if (!that.data.isBtnClicked) {
      wx.navigateTo({
        url: '../addresschoose/addresschoose',
      });
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

  // 更新昵称弹框 否
  templateCancel: function () {
    var that = this;
    that.data.cancelbeans.templateShow = false;
    that.setData({
      cancelbeans: that.data.cancelbeans
    })
  },

  // 更新昵称弹框 是
  templateConfirm: function () {
    let that = this;
    that.data.cancelbeans.templateShow = false;
    wx.getUserInfo({
      lang: 'zh_CN',
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        that.setData({
          name: nickName
        })
        app.globalData.userInfo.avatarUrl = avatarUrl;
        var userMsg = {};
        userMsg.nickName = that.data.name;
        userMsg.headImgUrl = avatarUrl;
        // wx.getStorage({
        //   key: 'token',
        //   success: function (res) {
        //     var token = res.data;
            // 发送网络请求，更新用户昵称和头像信息
            // app.func.req('customercenter/customer/update/nikeNameAndHeadImg', userMsg, token, function (res) {
              // if (res.code == 0) {
                wx.showToast({
                  title: '更新成功',
                  icon: 'none',
                  duration: 1000
                })
              // } else {
              //   wx.showToast({
              //     title: '更新失败',
              //     icon: 'none',
              //     duration: 1000
              //   })
              // }
            // });
          }
        // })
      // }
    })
    that.setData({
      cancelbeans: that.data.cancelbeans,
      isBtnClicked: true
    });
    setTimeout(function () {
      that.setData({
        isBtnClicked: false
      });
    }, 1000);
  },

  // 更新昵称
  updateName() {
    var that = this;
    that.data.cancelbeans.templateShow = true;
    that.setData({
      cancelbeans: that.data.cancelbeans
    })
  },

  // 获取手机号码
  getPhoneNumber: function (e) {
    var that = this;
    if (!e.detail.iv) {
    } else {
      wx.getStorage({
        key: 'token',
        success: function (res) {
          // 发送网络请求，更新手机号码/解密手机号
          app.func.req('/customercenter/customer/update/phone', { "iv": e.detail.iv, "encryptedData": e.detail.encryptedData }, res.data, function (res) {
            if(res.code == 0){
              that.data.phone = res.user.mobile.substr(0, 3) + '****' + res.user.mobile.substr(7);
              that.setData({
                phone: that.data.phone
              })
              wx.showToast({
                title: '获取成功',
                icon: 'none',
                duration: 2000
              })
            }else{
              wx.showToast({
                title: '获取失败',
                icon: 'none',
                duration: 1000
              })
            }
          });
        }
      })
    }
  },

  // 更新手机号码
  updatePhone() {
    var that = this;
    that.data.cancelbeans2.templateShow = true;
    that.setData({
      cancelbeans2: that.data.cancelbeans2
    })
  },

  // 更新手机号弹框 否
  templateCancel2: function () {
    var that = this;
    that.data.cancelbeans2.templateShow = false;
    that.setData({
      cancelbeans2: that.data.cancelbeans2
    })
  },

  // 更新手机号弹框 是
  templateConfirm2: function () {
    let that = this;
    if (that.data.phone != 'undefined' || that.data.phone != '') {
      that.data.cancelbeans2.templateShow = false;
      that.setData({
        cancelbeans2: that.data.cancelbeans2,
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