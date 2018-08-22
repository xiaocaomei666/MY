const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checks: "-1",
    pick: true,//文字颜色显示切换
    clickN: 1,//记录点击次数
    clickN2: 1,//记录点击次数
    tally: [
      "宿舍楼",
      "行政楼",
      "教学楼",
      "实验楼",
      "工业中心",
      "校医室"
    ],
    newtally: "",
    userN: '',//收货人姓名
    phoneN: '',//手机号
    addressN: '',//详细地址
    isBtnClicked: false,
    //第一种弹框
    cancelbeans: {
      title: '请输入',
      content: '开始配送前可取消',
      templateShow: false
    }, //确认取消弹窗
    cancelbeans2: {
      title: '请输入:',
      templateShow2: false
    },
    statue: "",
    delshow: true,
    textareashow: false,
    arr: [],
    proviceName: '请选择',
    cityName: '',
    districtName: '',
    tag: '',
    id: '',
    pickerShow: false,
    multiIndex: [0, 0, 0],
    multiArray: [
      ['广东技术师范大学'],
      ['女生宿舍', '实验楼', '男生宿舍', '工业中心', '教学楼', '行政楼', '校医室'],
      ['西区楼下', '北一楼下', '北二楼下']
    ],
    star: '',
    message: {
      "receiverName": "",
      "receiverMobile": "",
      "tag": "",
      "proviceName": "",
      "proviceCode": "",
      "cityName": "",
      "cityCode": "",
      "districtName": "",
      "districtCode": "",
      "addressDetail": ""
    },
    message2: {
      "id": '',
      "receiverName": "",
      "receiverMobile": "",
      "tag": "",
      "proviceName": "",
      "proviceCode": "",
      "cityName": "",
      "cityCode": "",
      "districtName": "",
      "districtCode": "",
      "addressDetail": ""
    },
    receiverName1: '',
    receiverMobile1: '',
    tag1: '',
    proviceName1: '',
    cityName1: '',
    districtName1: '',
    addressDetail1:'',
    regionArea: '',
    cityArea: '',
    districtArea: '',
    addresschose: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showLoading({
    //   title: '加载中',
    // })

    // 选择器数据渲染
    var that = this;
    // wx.getStorage({
    //   key: 'token',
    //   success: function (res) {
    // app.func.getreq('customercenter/commonArea/queryCommonAreaList', '', res.data, function (res) {
    // if (res.code == 0) {
    // wx.hideLoading()
    // that.setData({
    //   arr: res.commonArea
    // })
    // for (var i = 0; i < that.data.arr.length; i++) {
    //   that.data.multiArray[0].push(that.data.arr[i].name);
    // }
    // for (var j = 0; j < that.data.arr[0].list.length; j++) {
    //   that.data.multiArray[1].push(that.data.arr[0].list[j].name);
    // }
    // for (var d = 0; d < that.data.arr[0].list[0].list.length; d++) {
    //   that.data.multiArray[2].push(that.data.arr[0].list[0].list[d].name);
    // }
    // that.setData({
    //   multiArray: that.data.multiArray,
    //   statue: statue,
    // })
    // }

    // }),
    // app.func.getreq('customercenter/customer/getAddressTag', '', res.data, function (res) {
    // if (res.code == 0) {
    //   var index = res.addressTag.indexOf(tag);
    //   that.setData({
    //     tally: res.addressTag,
    //     checks: index,
    //   })
    // } 
    // })
    // }
    // })

    //获取上一个页面地址选择的值
    var statue = options.statue;
    var star = options.star;
    that.setData({
      statue: statue,
      star: star
    })
    if (star == 3) {
      console.log(options);
      var name = options.name;
      var number = options.number;
      var proviceName = options.proviceName;
      var cityName = options.cityName
      var districtName = options.districtName;
      var address = options.address;
      var tag = options.tag;
      var id = options.id;
      var star = options.star;
      that.setData({
        userN: name,
        phoneN: number,
        phoneN2: number,
        proviceName: proviceName,
        cityName: cityName,
        districtName: districtName,
        tag: tag,
        addressN: address,
        pick: false,
        id: id
      })
    }
    // 删除地址按钮显示
    if (that.data.statue == "1") {
      this.setData({
        delshow: false,
      })
    } else {
      that.setData({
        delshow: true,
      })
    }
  },

  //点击确定执行以下判断
  notarize() {
    var _this = this;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (_this.data.userN == '') {
      wx.showToast({
        title: '请输入姓名',
        icon: "none",
        duration: 1000
      })
    } else if (_this.data.phoneN == '') {
      wx.showToast({
        title: '请输入手机号码',
        icon: "none",
      })
    } else if (!myreg.test(_this.data.phoneN)) {
      wx.showToast({
        title: '手机号有误',
        icon: "none",
        duration: 1000
      })
    } else if (!(_this.data.regionArea) && !(_this.data.proviceName)) {
      console.log(_this.data.proviceName)
      wx.showToast({
        title: '请选择送餐地址',
        icon: "none",
        duration: 1000
      })
    } else {
      console.log('保存');
      // wx.getStorage({
      //   key: 'token',
      //   success: function (res) {

      if (_this.data.regionArea) {
        _this.setData({
          message: {
            "receiverName": _this.data.userN,
            "receiverMobile": _this.data.phoneN,
            "tag": _this.data.tag,
            "proviceName": _this.data.regionArea,
            "cityName": _this.data.cityArea,
            "districtName": _this.data.districtArea,
            "addressDetail": _this.data.addressN
          },
        })
      } else {
        _this.setData({
          message: {
            "receiverName": _this.data.userN,
            "receiverMobile": _this.data.phoneN,
            "tag": _this.data.tag,
            "proviceName": _this.data.proviceName,
            "cityName": _this.data.cityName,
            "districtName": _this.data.districtName,
            "addressDetail": _this.data.addressN
          },
        })
      }

      console.log(_this.data.message);
      //     app.func.req('customercenter/customer/insert/customerAddress', _this.data.message, res.data, function (res) {
      //       if (res.code == 0) {
      var pages = getCurrentPages();//当前页面
      var prevPage = pages[pages.length - 2];//上一页面
      //直接给上一个页面赋值
      prevPage.setData({
        receiverName1: _this.data.userN,
        receiverMobile1: _this.data.phoneN,
        tag1: _this.data.tag,
        proviceName1: _this.data.regionArea,
        cityName1: _this.data.cityArea,
        districtName1: _this.data.districtArea,
        addressDetail1: _this.data.addressN
        // message2: _this.data.message,
      });
      wx.navigateBack({//返回
        delta: 1
      })
      
      //       } else {

      //       }

      //     })
      //   }
      // })

      _this.setData({
        isBtnClicked: true
      });
      setTimeout(function () {
        _this.setData({
          isBtnClicked: false
        });
      }, 1000);
      // }
    }
  },

  // 三级联动
  bindMultiPickerChange: function (e) {
    var that = this;
    that.setData({
      pickerShow: true,
      multiIndex: e.detail.value
    })
    // var shengcode = that.data.arr[that.data.multiIndex[0]].code;
    // var shicode = that.data.arr[that.data.multiIndex[0]].list[that.data.multiIndex[1]].code;
    // var qucode = that.data.arr[that.data.multiIndex[0]].list[that.data.multiIndex[1]].list[that.data.multiIndex[2]].code;

    that.setData({
      regionArea: that.data.multiArray[0][that.data.multiIndex[0]],
      cityArea: that.data.multiArray[1][that.data.multiIndex[1]],
      districtArea: that.data.multiArray[2][that.data.multiIndex[2]]
    })
  },

  bindMultiPickerColumnChange: function (e) {
    var that = this;
    that.data.multiIndex[e.detail.column] = e.detail.value;
    console.log(e.detail.column);
    switch (e.detail.column) {
      case 1:
        switch (that.data.multiIndex[1]) {
          case 0:
            that.data.multiArray[2] = ['西区楼下', '北一楼下', '北二楼下'];
            break;
          case 1:
            that.data.multiArray[2] = ['楼下', '课室', '办公室'];
            break;
          case 2:
            that.data.multiArray[2] = ['6栋楼下', '7栋楼下', '北三楼下'];
            break;
          case 3:
            that.data.multiArray[2] = ['楼下', '课室', '办公室'];
            break;
          case 4:
            that.data.multiArray[2] = ['一教', '二教'];
            break;
          case 5:
            that.data.multiArray[2] = ['楼下', '办公室'];
            break;
          case 6:
            that.data.multiArray[2] = [];
            break;
        }
        break;
        that.data.multiIndex[2] = 0;
        console.log(that.data.multiIndex);
        break;
    }
    that.setData({
      multiIndex: that.data.multiIndex,
      multiArray: that.data.multiArray
    });
  },

  //获取收货人姓名的value
  userName: function (e) {
    this.setData({
      userN: e.detail.value
    })
  },

  //获取手机号的value
  phoneNumber: function (e) {
    this.setData({
      phoneN: e.detail.value
    })
  },

  //获取详细地址的value
  address: function (e) {
    this.setData({
      addressN: e.detail.value
    })
  },

  //省市区
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value,
      pick: false,
    })
  },

  //删除
  del() {
    var _this = this;
    _this.setData({
      cancelbeans: {
        // title: '确认取消',
        content: '确认删除该地址',
        templateShow: true
      }, //确认取消弹窗
      textareashow: true,
    })
  },

  //标签
  active(e) {
    // this.setData({
    //   clickN2: 1,
    // })
    // //var opp = 0; 
    // var add = this.data.clickN % 2;
    // if (add == 0) {
    //   this.setData({
    //     check: "undefined",
    //   })
    // } else {
    //   this.setData({
    //     check: true,
    //   })
    // }
    // this.setData({
    //   clickN: this.data.clickN + 1
    // })

    var index = e.currentTarget.dataset.index;
    this.setData({
      checks: index,
      tag: this.data.tally[index]
    })
  },

  // activetwo(e) {
  //   this.setData({
  //     clickN: 1,
  //   })
  //   var add01 = this.data.clickN2 % 2;
  //   // console.log(add01)
  //   if (add01 == 0) {
  //     this.setData({
  //       check: "undefined",
  //     })
  //     // console.log(123)
  //   } else {
  //     this.setData({
  //       check: false,
  //     })
  //   }
  //   this.setData({
  //     clickN2: this.data.clickN2 + 1
  //   })
  // },

  // 确认删除地址
  templateCancel: function () {
    // console.log('否');
    var that = this;
    that.setData({
      cancelbeans: {
        templateShow: false
      },
      textareashow: false,
    })
  },

  // 确认删除地址
  templateConfirm: function () {
    var that = this;
    that.setData({
      cancelbeans: {
        title: '确认取消',
        content: '开始配送前可取消',
        templateShow: false
      },
      star: 4,
      textareashow: false,
    })
    wx.getStorage({
      key: 'token',
      success: function (res) {
        app.func.req('customercenter/customer/update/customerAddress', { "id": that.data.id, "aliveFlag": 0 }, res.data, function (res) {
          if (res.code == 0) {

            var pages = getCurrentPages();//当前页面
            var prevPage = pages[pages.length - 2];//上一页面
            wx.navigateBack({//返回
              delta: 1
            })
          }
        })
      }
    })
  },

  // 地址标签
  templateCancel2: function () {
    // console.log('否');
    var that = this;
    that.setData({
      cancelbeans2: {
        templateShow2: false
      },
      textareashow: false,
    })
  },

  // 地址标签
  templateConfirm2: function (e) {
    var that = this;
    // console.log('是');

    var value = e.detail.value;
    var list = that.data.tally;
    // var lists= list.push(that.data.newtally);
    if (that.data.newtally == "") {
      wx.showToast({
        title: '不能为空',
        icon: 'none',
        duration: 1000
      })
    } else {
      list.push(that.data.newtally);
      that.setData({
        cancelbeans2: {
          title: '请输入:',
          templateShow2: false
        },
        tally: list,
        textareashow: false,
      })
    }

  },

  addtag(e) {
    var that = this;
    var value = e.detail.value;
    that.setData({
      newtally: value
    })

  },

  add() {
    var that = this;
    that.setData({
      cancelbeans2: {
        title: '请输入:',
        templateShow2: true
      },
      textareashow: true,
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