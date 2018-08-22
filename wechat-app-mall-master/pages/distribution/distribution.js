// pages/distribution/distribution.js
// 引入SDK核心类
let QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
let qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '天河区'],
    latitude: '',
    longitude: '',
    address: '广东省广州市天河区临江大道5号保利中心',
    street: '保利中心',
    choosename: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    //获取经纬度
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        let latitude = res.latitude
        let longitude = res.longitude
        that.setData({
          latitude: latitude,
          longitude: longitude,
        });


        // 实例化API核心类
        qqmapsdk = new QQMapWX({
          key: 'CDMBZ-HX2RX-Q4C4J-7VPA4-VOFQV-CCB2G'
        });
        // 调用接口
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: that.data.latitude,
            longitude: that.data.longitude
          },
          success: function (res) {
            let region = [res.result.address_component.province, res.result.address_component.city, res.result.address_component.district];

            that.setData({
              address: res.result.address,
              region: region,
              street: res.result.address_component.street_number
            });

          },
          fail: function (res) {
          },
        });

      }

    });



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
    // this.onLoad()
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
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  site() {
    let that = this;
    //获取经纬度
    wx.chooseLocation({
      success: function (res) {
        
        let address = res.address
        let choosename = res.name
        let latitude = res.latitude
        let longitude = res.longitude
        that.setData({
          latitude: latitude,
          longitude: longitude,
        });
        // 实例化API核心类
        qqmapsdk = new QQMapWX({
          key: 'CDMBZ-HX2RX-Q4C4J-7VPA4-VOFQV-CCB2G'
        });
        // 调用接口
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: that.data.latitude,
            longitude: that.data.longitude
          },
          success: function (res) {
            let region = [res.result.address_component.province, res.result.address_component.city, res.result.address_component.district];

            that.setData({
              address: address,
              region: region,
              street: choosename
            });
          },
          fail: function (res) {
          },
        });
      },
      fail(res) {
        if (res.errMsg == "chooseLocation:fail cancel") {
        } else {
          wx.openSetting({
            success: (res) => {
            }
          })
        }

      },

    });

  },
  confirm: function () {
    let that = this;
    if (!that.data.isBtnClicked) {
      wx.navigateTo({
        url: '../clearing/clearing?site=' + that.data.address,
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
})