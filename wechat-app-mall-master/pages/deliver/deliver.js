// pages/deliver/deliver.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gift: [],
    giftshow: true,
    distributionInfoDetail: {},
    list: [
      {
        "star": 1,
        "text": "待配送",
        "nub": "5644567879748",
        "time": "2018年5月1日 14:30-15:30",
        "color": "rgb(34, 22, 22)"
      },
      {
        "star": 2,
        "text": "配送中",
        "nub": "5644567879748",
        "time": "2018年5月1日 14:30-15:30",
        "color": "rgb(80, 181, 79)"
      },
      {
        "star": 3,
        "text": "物流异常",
        "nub": "5644567879748",
        "time": "2018年5月1日 14:30-15:30",
        "color": "rgb(255, 60, 56)"
      },
      {
        "star": 4,
        "text": "已取消",
        "nub": "5644567879748",
        "time": "2018年5月1日 14:30-15:30",
        "color": "rgb(255, 60, 56)"
      },
      {
        "star": 5,
        "text": "已完成",
        "nub": "5644567879748",
        "time": "2018年5月1日 14:30-15:30",
        "color": "rgb(34, 22, 22)"
      },
    ],
    star: 5,//5钟情况的标志
    btn: [
      {
        "star": 10,
        "text": "临时取消",
      },
      {
        "star": 20,
        "text": "一键催单",
      },
      {
        "star": 30,
        "text": "联系客服",
      },
      {
        "star": 50,
        "text": "有疑问",
      },
    ],
    //  商品列表
    product: [
      {
        "img": "../../images/bucket.png",
        "title": "鼎湖山泉一次性桶",
        "size": "15L",
        "number": "1",
        "price": "30.00",
        "gross": "2"
      },

    ],
    // 配送员信息
    courier: {
      "head": "../../images/bucket.png",
      "name": "张三",
      "phone": "18888888888",
    },
    // 订单编号
    num: "5644567879748",
    // 最新状态
    news: "已到达广州集散中心",
    //第一种弹框
    cancelbeans: {
      title: '确认取消',
      content: '开始配送前可取消',
      templateShow: false,

    }, //确认取消弹窗

    // 第二中弹窗
    msgitem2: {
      refund: false,
      items: [
        { type: 'success', value: '未收到货', selected: false },
        { type: 'success', value: '送水员态度恶劣', selected: false },
        { type: 'success', value: '包装破损', selected: false },
        { type: 'success', value: '数量不对', selected: false },
        { type: 'success', value: '以上都不是', selected: false }
      ]
    },
    // 有疑问的数据存储
    // questions:[],
    inputval: '',
    questionval: '',
    // 储存items里的每个selected
    allselected: [],
    // 记录申诉情况记录
    reminderreminder: true,
    templateShow3: false,
    title3: '申诉详情',
    reminder: true,
    urgeCount:'',//催单次数
    questionbtn: true,
    distributionInfoDetailDtoList: [],
    id: "",
    inser: {
      "distributionId": 1,
      "title": "以上都不是",
      "content": '送水员送水太快了，受不了'
    },
    questionDetail: {
      "questionId": '',
      "distributionInfoId": "",
      "status": '',
      "statusChinese": "",
      "questionTitle": "",
      "questionContent": "",
      "createTime": "",
      "replyContent": null
    },
    ques:true,//申诉详情
    orderShow:false,
    remark:'',
    distributionInfoDetail2:'',
    watercard:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    console.log(id);
    that.setData({
      id: id
    })
    if(options){
      console.log(options)
      let title = options.title;
      if(title == 1){
        console.log('真的')
        that.setData({
          orderShow:true
        })
      }else{
        orderShow: false
      }
    }


    wx.getStorage({
      key: 'orderShop2',
      success: function (res) {
        let orderShop2 = res.data;
        console.log('数据',orderShop2);
        that.data.distributionInfoDetail = orderShop2;
        that.setData({
          distributionInfoDetail: that.data.distributionInfoDetail
        })

      }
    })
// dataOut
    wx.getStorage({
      key: 'dataOut',
      success: function (res) {
        let dataOut = res.data;
        console.log('数据', dataOut);
        // that.data.distributionInfoDetail = 

        that.data.distributionInfoDetail2 = dataOut[dataOut.length-1].address;
        that.data.remark = dataOut[dataOut.length - 1].textArea;
        that.data.watercard = dataOut[dataOut.length - 1].watercard;
        that.setData({
          distributionInfoDetail2: that.data.distributionInfoDetail2,
          remark: that.data.remark,
          watercard: that.data.watercard
        })

      }
    })

    // wx.getStorage({
    //   key: 'token',
    //   success: function (res) {
    //     app.func.getreq('customercenter/distribution/queryDistributionInfoDetail', { "id": id }, res.data, function (res) {
    //       if (res.code == 0) {
           
    //         that.setData({
    //           distributionInfoDetail: res.distributionInfoDetail,
    //           distributionInfoDetailDtoList: res.distributionInfoDetail.distributionInfoDetailDtoList,
    //           urgeCount: res.distributionInfoDetail.urgeCount
    //         })
    //       } else {

    //       }

    //     })
    //   },
    // })

    var arr = that.data.distributionInfoDetailDtoList;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].skuType == 3) {
        that.data.gift.push(arr[i])
      }
    }
    that.setData({
      gift: that.data.gift
    })
    if (that.data.gift.length == 0) {
      that.setData({
        giftshow: false
      })
    } else {
      that.setData({
        giftshow: true
      })
    }
  },
  // 复制
  copy(e){
    let that = this;
    wx.setClipboardData({
      data: that.data.distributionInfoDetail.code,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'none',
          duration: 1000
        })
      }
    }); 
  },
  copy2(e) {
    let that = this;
    wx.setClipboardData({
      data: that.data.distributionInfoDetail.logisticsCode,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'none',
          duration: 1000
        })
      }
    });
  },
  //回到首页
  tohome(){
    wx.switchTab({
      url: '../index/index'
    })
  },
  // 点击btn
  btnClick() {
    var that = this;
    that.setData({
      cancelbeans: {
        title: '确认取消',
        content: '开始配送前可取消',
        templateShow: true
      },
    })
  },
  btnClick2() {
    var that = this;
    wx.showToast({
      title: '催单成功',
      icon: 'none',
      duration: 1000
    })
    wx.getStorage({
      key: 'token',
      success: function (res) {
        app.func.getreq('customercenter/distribution/reminderDistributionInfo', { "id": that.data.id }, res.data, function (res) {
          if (res.code == 0) {
            that.setData({
              urgeCount: res.urgeCount
            })

          } else {

          }

        })
      },
    })
   
  },
  btnClick3() {
    var that = this;
    that.setData({
      msgitem2: {
        refund: true,
        items: [
          { type: 'success', value: '未收到货', selected: false },
          { type: 'success', value: '送水员态度恶劣', selected: false },
          { type: 'success', value: '包装破损', selected: false },
          { type: 'success', value: '数量不对', selected: false },
          { type: 'success', value: '以上都不是', selected: false }
        ]
      },
    })

  },
  // 申诉情况
  appeal() {
    var that = this;
    that.setData({
      templateShow3: true
    })
    wx.getStorage({
      key: 'token',
      success: function (res) {
        app.func.getreq('customercenter/distribution/queryDistributionQuestion', { "id": that.data.id }, res.data, function (res) {
          if (res.code == 0) {
            that.setData({
              questionDetail: res.questionDetail
            })
           
          } else {
      
          }

        })
      },
    })

  },
  // 拨打电话
  telphone() {
    wx.makePhoneCall({
      phoneNumber: "1881329993"
    })
  },

  // 配送单确认取消弹框 不要取消
  templateCancel: function () {
    // console.log('否');
    var that = this;
    that.setData({
      cancelbeans: {
        title: '确认取消',
        content: '开始配送前可取消',
        templateShow: false
      },
    })
  },

  // 配送单确认取消弹框 确认取消
  templateConfirm: function () {
    var that = this;
    // console.log('是');
    wx.showLoading({
      title: '加载中',
    })
    let status = that.data.distributionInfoDetail.status
    that.setData({
      cancelbeans: {
        title: '确认取消',
        content: '开始配送前可取消',
        templateShow: false
      },
    })
    wx.getStorage({
      key: 'token',
      success: function (res) {
        app.func.getreq('customercenter/distribution/cancle/' + that.data.id, {}, res.data, function (res) {
          if (res.code == 0) {
            wx.hideLoading()
            wx.getStorage({
              key: 'token',
              success: function (res) {
                app.func.getreq('customercenter/distribution/queryDistributionInfoDetail', { "id": that.data.id }, res.data, function (res) {
                  if (res.code == 0) {
            
                    that.setData({
                      distributionInfoDetail: res.distributionInfoDetail,
                      distributionInfoDetailDtoList: res.distributionInfoDetail.distributionInfoDetailDtoList
                    })
                  } else {
             
                  }

                })
              }
            })
          } else {
        
          }

        })
      },
    })

  },

  // 第二种弹窗
  // 是
  refundConfirm: function (e) {
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    let items = that.data.msgitem2.items;
    for (let i = 0; i < items.length; i++) {
      var selected = items[i].selected;
      that.data.allselected.push(items[i].selected);
    }
    var allselected = that.data.allselected;
    if (allselected.indexOf(true) == -1) {
      wx.showToast({
        title: '请选择原因',
        icon: 'none',
        duration: 1000
      })
    } else {
      that.setData({
        msgitem2: {
          refund: false,
          items: [
            { type: 'success', value: '未收到货', selected: false },
            { type: 'success', value: '送水员态度恶劣', selected: false },
            { type: 'success', value: '包装破损', selected: false },
            { type: 'success', value: '数量不对', selected: false },
            { type: 'success', value: '以上都不是', selected: false }
          ]
        },
        questionbtn: false,
      })
      wx.getStorage({
        key: 'token',
        success: function (res) {
          that.setData({
            inser: {
              "distributionId": that.data.id,
              "title": that.data.questionval,
              "content": that.data.inputval,
            }
          })
          app.func.req('customercenter/distribution/insertDistributionQuestion', that.data.inser, res.data, function (res)           {
            if (res.code == 0) {
              wx.hideLoading()
              let status = that.data.distributionInfoDetail.status
              that.setData({
                status: res.status,
                ques:false,
              })
            } else {
           
            }

          })
        },
      })
    }

  },
  // 否
  refundNo: function () {
    this.setData({
      msgitem2: {
        refund: false,
        items: [
          { type: 'success', value: '未收到货', selected: false },
          { type: 'success', value: '送水员态度恶劣', selected: false },
          { type: 'success', value: '包装破损', selected: false },
          { type: 'success', value: '数量不对', selected: false },
          { type: 'success', value: '以上都不是', selected: false }
        ]
      }
    })
  },
  //选择原因
  radio: function (e) {
    var that = this;

    const index = e.currentTarget.dataset.index;

    let items = that.data.msgitem2.items;

    let selected = items[index].selected;
    var itemcontent = items[index].value;
    for (let i = 0; i < items.length; i++) {
      items[i].selected = false;
      items[index].selected = true;
    }

    that.setData({
      msgitem2: {
        refund: true,
        items: items,
      },
      questionval: itemcontent
    });

  },
  // 描述详情内容
  inputvalue(e) {
    var that = this;
    var value = e.detail.value;

    that.setData({
      inputval: value
    })

  },
  // 第三种
  templateCancel3: function () {
    // console.log('否');
    var that = this;
    that.setData({
      templateShow3: false
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
    var arr = that.data.distributionInfoDetail.distributionInfoDetailDtoList;

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