// pages/user/user.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 功能选择区域
    userchoseBean: [
      {
        'img': '../../images/user_address.png',
        'desc': '我的地址'
      },
      {
        'img': '../../images/user_advice.png',
        'desc': '意见反馈'
      },
      {
        'img': '../../images/user_question.png',
        'desc': '常见问题'
      }
    ],
    isBtnClicked: false,
    motto: 'Hello',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userWaiteDisplay: true,
    waitePay: '', //待支付
    waiteGet: '', //待配送
    toastShow: false,
    pullshow: false, // 下拉刷新
    phone: '', //手机号码
    phones: '',
    wxMsgShow: false,//微信弹框
    userMsg: '',
    waterTotal: "",//余水总数量
    spuId: '',//商品详情的spuId
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        lang: 'zh_CN',
        success: res => {
          delete res.userInfo["language"];
          that.setData({
            userMsg: res.userInfo
          })
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // app.func.getreq('common/querySkipSpuId', '', '', function (res) {
    //   if (res.code == 0) {
    //     that.setData({
    //       spuId: res.spuId
    //     })
    //   }
    // });

    // 网络请求获取存储的手机号码
    if (that.userInfo != '') {
      wx.getStorage({
        key: 'token',
        success: function (res) {
          app.func.getreq('customercenter/customer/get/phone', '', res.data, function (res) {
            if (res.code == 0 && res.phone != null) {
              that.data.phone = res.phone.substr(0, 3) + '****' + res.phone.substr(7);
              that.setData({
                phone: that.data.phone
              })
            } else {
            }
          });
        }
      })
    } else {
    }

    // 网络请求获取 余水量 待付款 待送达
    if (that.userInfo != '') {
      wx.getStorage({
        key: 'token',
        success: function (res) {
          var token = res.data;
          // 发送网络请求
          app.func.getreq('customercenter/customer/getMyInformation', {}, token, function (res) {
            if (res.code == 0) {
              that.setData({
                waterTotal: res.myInformation.waterTotal,
                waitePay: res.myInformation.payTotal,
                waiteGet: res.myInformation.distributionTotal
              })
              if (that.data.waitePay > 99) {
                that.setData({
                  waitePay: '99+'
                })
              }
              if (that.data.waiteGet > 99) {
                that.setData({
                  waiteGet: '99+'
                })
              }
            } else {
            }
          });
        }
      })
    }
  },

  // 获取我的页面信息 网络请求获取 余水量 待付款 待送达
  getNetworkMsg() {
    var that = this;
    wx.getStorage({
      key: 'token',
      success: function (res) {
        var token = res.data;
        // 发送网络请求
        app.func.getreq('customercenter/customer/getMyInformation', {}, token, function (res) {
          if (res.code == 0) {
            that.setData({
              waterTotal: res.myInformation.waterTotal,
              waitePay: res.myInformation.payTotal,
              waiteGet: res.myInformation.distributionTotal
            })
          } else {
          }
        });
      }
    })
  },

  //未授权点击弹出授权
  getUserInfo: function (e) {
    var that = this;
    app.globalData.userInfo = e.detail.userInfo;
    wx.getUserInfo({
      lang: 'zh_CN',
      success: res => {
        delete res.userInfo["language"];
        that.setData({
          userMsg: res.userInfo
        })
        app.globalData.userInfo = res.userInfo;
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          wxMsgShow: true
        })
        this.networkLogin();
      }
    })
  },

  // 发送网络请求登录
  networkLogin() {
    var that = this;
    var userinfoData = '';
    wx.getStorage({
      key: 'code',
      success: function (res) {
        that.data.userMsg.code = res.data;
        that.setData({
          userMsg: that.data.userMsg
        })
        // 发送网络请求，登录  保存token
        // app.func.req('login', that.data.userMsg, '', function (res) {
        //   if (res.code == 0) {
        //     wx.setStorage({
        //       key: "token",
        //       data: res.token
        //     })
        //     that.getNetworkMsg();
        //   } else {
        //   }
        // })
      }
    })
  },

  // 打开设置，使其登录
  openSet: function () {
    var that = this;
    that.setData({
      wxMsgShow: true
    })
  },

  // 点击了待付款、待送达、全部

  // 点击待付款
  toWaitePay: function () {
    let that = this;
    if (!that.data.isBtnClicked) {
      if (that.data.hasUserInfo == false) {
        // 如果用户还没有登录，打开设置，询问用户是否要设置获取个人信息
        that.openSet();
      } else {
        wx.navigateTo ({
          url: '../order-list/order-list?currentType=0',
        });
        that.setData({
          isBtnClicked: true,
        });
        setTimeout(function () {
          that.setData({
            isBtnClicked: false
          });
        }, 1000);
      }
    }
  },

  // 点击待送达
  toWaiteGet: function () {
    let that = this;
    if (!that.data.isBtnClicked) {
      if (that.data.hasUserInfo == false) {
        // 如果用户还没有登录，打开设置，询问用户是否要设置获取个人信息
        that.openSet();
      } else {
        wx.navigateTo ({
          url: '../order-list/order-list?currentType=1',
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
    }
  },

  // 点击全部
  toUserWaite: function () {
    let that = this;
    if (!that.data.isBtnClicked) {
      if (that.data.hasUserInfo == false) {
        // 如果用户还没有登录，打开设置，询问用户是否要设置获取个人信息
        that.openSet();
      } else {
        wx.navigateTo ({
          url: '../order-list/order-list',
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
    }
  },

  // 点击了功能选择
  toUserChose: function (e) {
    let that = this;
    if (!that.data.isBtnClicked) {
      var num = e.currentTarget.dataset.index;
      if (that.data.hasUserInfo == false) {
        // 如果用户还没有登录，打开设置，询问用户是否要设置获取个人信息
        if (num !== 2) {
          that.openSet();
        } else {
          wx.navigateTo({
            url: '../questions/questions',
          });
        }
      } else {
        if (num == 0) {
          wx.navigateTo({
            url: '../addresschoose/addresschoose',
          });
        } else if (num == 1) {
          wx.navigateTo({
            url: '../advise/advise',
          });
        } else if (num == 2) {
          wx.navigateTo({
            url: '../questions/questions',
          });
        }
      }
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

  // 电话客服
  toUserChoseTel: function () {
    let that = this;
    if (!that.data.isBtnClicked) {
      wx.makePhoneCall({
        phoneNumber: '18813299693'
      })
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

  // 微信客服
  toUserChoseWx: function () {
    let that = this;
    if (!that.data.isBtnClicked) {
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

  // 拒绝弹框 个人信息
  showToast: function () {
    var that = this;
    that.setData({
      wxMsgShow: false
    })
    return;
  },

  // 弹框否 手机号码
  showToast2: function () {
    var that = this;
    that.setData({
      toastShow2: false
    })
    wx.navigateTo({
      url: '../mine/mine?name=' + that.data.userInfo.nickName,
    });
  },

  // 弹框是 手机号码
  showToast3: function () {
    var that = this;
    that.setData({
      toastShow2: false
    })
  },

  // 进入个人信息
  toUserMsg: function () {
    let that = this;
    if (!that.data.isBtnClicked) {
      if (that.data.phone == '') {
        that.setData({
          toastShow2: true
        })
      }
      else {
        wx.navigateTo({
          url: '../mine/mine?name=' + that.data.userInfo.nickName + '&phone=' + that.data.phone,
        });
      }
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

  // 账户余水
  toRemained() {
    let that = this;
    if (!that.data.isBtnClicked) {
      wx.navigateTo({
        url: '../mine/mine?name=' + that.data.userInfo.nickName + '&phone=' + that.data.phone,
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

  // 获取手机号码
  getPhoneNumber: function (e) {
    var that = this;
    if (!e.detail.iv) {
      that.setData({
        toastShow2: false
      })
      wx.navigateTo({
        url: '../mine/mine?name=' + that.data.userInfo.nickName + '&phone=' + that.data.phone,
      });
    } else {
      wx.getStorage({
        key: 'token',
        success: function (res) {
          // 发送网络请求，更新手机号码/解密手机号
          app.func.req('/customercenter/customer/update/phone', { "iv": e.detail.iv, "encryptedData": e.detail.encryptedData }, res.data, function (res) {
            if (res.code == 0) {
              that.data.phone = res.user.mobile.substr(0, 3) + '****' + res.user.mobile.substr(7);
              that.setData({
                toastShow2: false,
                phone: that.data.phone
              })

              wx.navigateTo({
                url: '../mine/mine?name=' + that.data.userInfo.nickName + '&phone=' + that.data.phone,
              });
            } else {
            }
          });
        }
      })
    }
  },

  // 取消微信弹框
  wxMsgShowCancel() {
    var that = this;
    that.setData({
      wxMsgShow: false
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
    var that = this;
    that.onLoad();
    that.getNetworkMsg()
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
    var that = this;
    that.setData({
      pullshow: true
    })
    setTimeout(function () {
      that.setData({
        pullshow: false
      })
    }, 1000)
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 650)
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