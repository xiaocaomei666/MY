// pages/clearing/clearing.js
// 引入SDK核心类
let QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
let qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',
    longitude: '',
    isBtnClicked: false,
    address: '广东省广州市天河区临江大道5号保利中心',
    cancelbeans: {
      title: '确认取消',
      content: '开始配送前可取消',
      templateShow: false
    }, //确认取消弹窗
    carShop: [],
    northRes: [],
    springOne: [],
    springThree: [],
    floorSeven: [],
    behinedSchool: [],
    qBaby: [],
    address: '',//地址
    addresschose: '',
    amount: '',
    originalCost: '',
    freight: '',
    orderShop: [],
    textareaTexter: '',
    dataOut:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;

    //获取经纬度
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: function (res) {
    //     let latitude = res.latitude
    //     let longitude = res.longitude
    //     that.setData({
    //       latitude: latitude,
    //       longitude: longitude,
    //     });


    //     // 实例化API核心类
    //     qqmapsdk = new QQMapWX({
    //       key: 'CDMBZ-HX2RX-Q4C4J-7VPA4-VOFQV-CCB2G'
    //     });
    //     // 调用接口
    //     qqmapsdk.reverseGeocoder({
    //       location: {
    //         latitude: that.data.latitude,
    //         longitude: that.data.longitude
    //       },
    //       success: function (res) {
    //         let region = [res.result.address_component.province, res.result.address_component.city, res.result.address_component.district];
    //         console.log(options.site)
    //         if (options.site){
    //           that.setData({
    //             address: options.site,
    //             region: region,
    //             street: res.result.address_component.street_number
    //           });
    //         }else{
    //           that.setData({
    //             address: res.result.address,
    //             region: region,
    //             street: res.result.address_component.street_number
    //           });

    //         }

    //       },
    //       fail: function (res) {
    //       },
    //     });

    //   }

    // });

    that.data.carShop = wx.getStorageSync('carShop');
    that.setData({
      carShop: that.data.carShop
    });
    console.log(that.data.carShop)
    let northRes = [];
    let springOne = [];
    let springThree = [];
    let floorSeven = [];
    let behinedSchool = [];
    let qBaby = [];
    for (let i = 0; i < that.data.carShop.length; i++) {
      let carShopItem = that.data.carShop[i];
      let place = carShopItem.place;
      let amount = carShopItem.buyQuantity;
      let totalPrice = carShopItem.totalPrice;
      if (place == '北区') {
        northRes.push(carShopItem);
      } else if (place == '春一') {
        springOne.push(carShopItem);
      } else if (place == '春三') {
        springThree.push(carShopItem);
      } else if (place == '7栋楼下') {
        floorSeven.push(carShopItem);
      } else if (place == '学院后门堂茶店') {
        behinedSchool.push(carShopItem);
      } else if (place == '北区饭堂门口Q堡堡') {
        qBaby.push(carShopItem);
      }
      that.data.originalCost = Number(that.data.originalCost) + Number(totalPrice);
      that.data.amount = Number(that.data.amount) + Number(amount);
    }

    if (that.data.originalCost >= 15) {
      that.data.freight = 0;
    } else {
      that.data.freight = 5;
    }
    that.data.watercard = Number(that.data.originalCost) + Number(that.data.freight);
    that.setData({
      northRes: northRes,
      springOne: springOne,
      springThree: springThree,
      floorSeven: floorSeven,
      behinedSchool: behinedSchool,
      qBaby: qBaby,
      originalCost: that.data.originalCost,
      amount: that.data.amount,
      freight: that.data.freight,
      watercard: that.data.watercard
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
    var that = this;
    let pages = getCurrentPages();
    // 下一个页面
    let currPage = pages[pages.length - 1];
    if (currPage.data.addresschose) {
      that.setData({//将携带的参数赋值
        address: currPage.data.addresschose,
      });
    }
  },

  // 留言框
  textareaText(e) {
    var that = this;
    that.setData({
      textareaTexter: e.detail.value
    })
  },

  // 确认订单   console.log(that.data.carShop)  
  toPayIt() {
    let that = this;
    let carShop = that.data.carShop;
    if (!that.data.address) {
      wx.showToast({
        title: '请选择地址',
        icon: 'none',
        duration: 1000
      })
    } else {
      let dataOut = that.data.dataOut;
      let data = {};
      data.address = that.data.address;
      data.textArea = that.data.textareaTexter;
      data.watercard = that.data.watercard;
      dataOut.push(data);
      if (wx.getStorageSync("dataOut")){
        let data2 = wx.getStorageSync("dataOut");
        dataOut = dataOut.concat(data2);
      }
      wx.setStorage({
        key: "dataOut",
        data: dataOut
      })

      that.setData({
        dataOut: dataOut
      })

      console.log(that.data.dataOut)
      
      carShop.address = that.data.address;
      carShop.textArea = that.data.textareaTexter;
      carShop.watercard = that.data.watercard;
      console.log(carShop);
      wx.setStorage({
        key: "orderShop2",
        data: carShop
      })
      if (wx.getStorageSync("orderShop")){
        let orderShop = wx.getStorageSync("orderShop");
        carShop = carShop.concat(orderShop);

        console.log('本地存储',carShop)

        that.setData({
          orderShop: carShop
        })
      }else{
        console.log(333)
        that.setData({
          orderShop: carShop
        })
      }
      wx.setStorage({
        key: "orderShop",
        data: that.data.orderShop
      })
       
      wx.navigateTo({
        url: '../pay/pay?originalCost=' + that.data.watercard
      })
    }
  },

  site: function () {
    let that = this;
    if (!that.data.isBtnClicked) {
      wx.navigateTo({
        url: '../distribution/distribution',
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

  scope: function () {
    let that = this;
    that.setData({
      cancelbeans: {
        title: '确认支付',
        content: '该地址不在配送范围内，是否继续支付？',
        templateShow: true
      },
    });
  },

  // 配送单确认取消弹框 不要取消
  templateCancel: function () {
    var that = this;
    that.setData({
      cancelbeans: {
        templateShow: false
      },
    })
  },

  // 配送单确认取消弹框 确认取消
  templateConfirm: function () {
    var that = this;
    that.setData({
      cancelbeans: {
        templateShow: false
      },
    })
  },

  // 跳到地址选择
  toAddress() {
    let that = this;
    if (!that.data.isBtnClicked) {
      wx.navigateTo({
        url: '../addresschoose/addresschoose?statue=2',
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