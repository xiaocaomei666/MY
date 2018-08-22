// //app.js
// App({
//   onLaunch: function () {
//     var that = this;
//     //  获取商城名称
//     wx.request({
//       url: 'https://api.it120.cc/'+ that.globalData.subDomain +'/config/get-value',
//       data: {
//         key: 'mallName'
//       },
//       success: function(res) {
//         if (res.data.code == 0) {
//           wx.setStorageSync('mallName', res.data.data.value);
//         }
//       }
//     })
//     // 获取商品评价
//     wx.request({
//       url: 'https://api.it120.cc/' + that.globalData.subDomain + '/score/send/rule',
//       data: {
//         code: 'goodReputation'
//       },
//       success: function (res) {
//         if (res.data.code == 0) {
//           that.globalData.order_reputation_score = res.data.data[0].score;
//         }
//       }
//     })
//     // 充值最少金额
//     wx.request({
//       url: 'https://api.it120.cc/' + that.globalData.subDomain + '/config/get-value',
//       data: {
//         key: 'recharge_amount_min'
//       },
//       success: function (res) {
//         if (res.data.code == 0) {
//           that.globalData.recharge_amount_min = res.data.data.value;
//         }
//       }
//     })
//     //登录
//     this.login();
//   },
//   //登录
//   login : function () {
//     var that = this;
//     var token = that.globalData.token;
//     if (token) {
//       wx.request({
//         url: 'https://api.it120.cc/' + that.globalData.subDomain + '/user/check-token',
//         data: {
//           token: token
//         },
//         success: function (res) {
//           if (res.data.code != 0) {
//             that.globalData.token = null;
//             that.login();
//           }
//         }
//       })
//       return;
//     }
//     wx.login({
//       success: function (res) {
//         wx.request({
//           url: 'https://api.it120.cc/'+ that.globalData.subDomain +'/user/wxapp/login',
//           data: {
//             code: res.code
//           },
//           success: function(res) {
//             if (res.data.code == 10000) {
//               // 去注册
//               that.registerUser();
//               return;
//             }
//             if (res.data.code != 0) {
//               // 登录错误
//               wx.hideLoading();
//               wx.showModal({
//                 title: '提示',
//                 content: '无法登录，请重试',
//                 showCancel:false
//               })
//               return;
//             }
//             //console.log(res.data.data)
//             that.globalData.token = res.data.data.token;
//             that.globalData.uid = res.data.data.uid;
//           }
//         })
//       }
//     })
//   },
//   // 注册用户
//   registerUser: function () {
//     var that = this;
//     wx.login({
//       success: function (res) {
//         var code = res.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到
//         wx.getUserInfo({
//           success: function (res) {
//             var iv = res.iv;
//             var encryptedData = res.encryptedData;
//             // 下面开始调用注册接口
//             wx.request({
//               url: 'https://api.it120.cc/' + that.globalData.subDomain +'/user/wxapp/register/complex',
//               data: {code:code,encryptedData:encryptedData,iv:iv}, // 设置请求的 参数
//               success: (res) =>{
//                 wx.hideLoading();
//                 that.login();
//               }
//             })
//           }
//         })
//       }
//     })
//   },
//   sendTempleMsg: function (orderId, trigger, template_id, form_id, page, postJsonString){
//     var that = this;
//     wx.request({
//       url: 'https://api.it120.cc/' + that.globalData.subDomain + '/template-msg/put',
//       method:'POST',
//       header: {
//         'content-type': 'application/x-www-form-urlencoded'
//       },
//       data: {
//         token: that.globalData.token,
//         type:0,
//         module:'order',
//         business_id: orderId,
//         trigger: trigger,
//         template_id: template_id,
//         form_id: form_id,
//         url:page,
//         postJsonString: postJsonString
//       },
//       success: (res) => {
//         //console.log('*********************');
//         //console.log(res.data);
//         //console.log('*********************');
//       }
//     })
//   },
//   sendTempleMsgImmediately: function (template_id, form_id, page, postJsonString) {
//     var that = this;
//     wx.request({
//       url: 'https://api.it120.cc/' + that.globalData.subDomain + '/template-msg/put',
//       method: 'POST',
//       header: {
//         'content-type': 'application/x-www-form-urlencoded'
//       },
//       data: {
//         token: that.globalData.token,
//         type: 0,
//         module: 'immediately',
//         template_id: template_id,
//         form_id: form_id,
//         url: page,
//         postJsonString: postJsonString
//       },
//       success: (res) => {
//         console.log('*********************');
//         console.log(res.data);
//         console.log('*********************');
//       }
//     })
//   },
  // getUserInfo: function (cb) {
  //   var that = this
  //   if (this.globalData.userInfo) {
  //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   } else {
  //     //调用登陆接口
  //     wx.login({
  //       success: function () {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             that.globalData.userInfo = res.userInfo
  //             typeof cb == "function" && cb(that.globalData.userInfo)
  //           }
  //         })
  //       }
  //     })
  //   }
  // },
//   globalData:{
//     userInfo:null,
//     subDomain: "tz", // 如果你的域名是： https://api.it120.cc/abcd 那么这里只要填写 abcd
//     version: "1.9.SNAPSHOT",
//     shareProfile: '百款精品商品，总有一款适合您' // 首页转发的时候话术
//   }
//   /*
//   根据自己需要修改下单时候的模板消息内容设置，可增加关闭订单、收货时候模板消息提醒；
//   1、/pages/to-pay-order/index.js 中已添加关闭订单、商家发货后提醒消费者；
//   2、/pages/order-details/index.js 中已添加用户确认收货后提供用户参与评价；评价后提醒消费者好评奖励积分已到账；
//   3、请自行修改上面几处的模板消息ID，参数为您自己的变量设置即可。  
//    */
// })





//app.js
// var http = require('./request.js')
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.setStorage({
          key: "code",
          data: res.code
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        var that = this;
        if (!res.authSetting['scope.userInfo'] || res.authSetting['scope.userInfo'] == true) {
          // 没有授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            lang: 'zh_CN',
            success: res => {
              console.log(res);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              delete that.globalData.userInfo["language"];
              // this.networkLogin();
            }
          })
        }
      }
    })
  },

  // 发送网络请求登录
  networkLogin() {
    var that = this;
    var userinfoData = '';
    // wx.getStorage({
    //   key: 'code',
    //   success: function (res) {
    //     that.globalData.userInfo.code = res.data;
        // 发送网络请求，登录  保存token
        // that.func.req('login', that.globalData.userInfo, '', function (res) {
        //   if (res.code == 0) {
        //     wx.setStorage({
        //       key: "token",
        //       data: res.token
        //     })
        //   } else {
        //   }
        // });
      // }
    // })
  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登陆接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  
  globalData: {
    userInfo: null
  },
  // func: {
  //   req: http.req,
  //   getreq: http.getreq,
  //   nologin: http.nologin
  // }
})