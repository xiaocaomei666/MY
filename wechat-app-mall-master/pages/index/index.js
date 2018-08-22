//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    loadingHidden: false, // loading
    userInfo: {},
    swiperCurrent: 0,
    selectCurrent: 0,
    // categories: [],
    goods: [],
    scrollTop: "0",
    loadingMoreHidden: true,
    hasNoCoupons: true,
    coupons: [],
    // 轮播图
    banners: [
      'http://p701vezuq.bkt.clouddn.com/banner_01.png',
      'http://p701vezuq.bkt.clouddn.com/banner_02.jpg',
      'http://p701vezuq.bkt.clouddn.com/banner_03.png',
      'http://p701vezuq.bkt.clouddn.com/banner_04.jpg',
      'http://p701vezuq.bkt.clouddn.com/banner_05.png',
    ],
    autoplay: true,
    //分类
    categories: [
      {
        'img': '../../images/index/cate_00.png',
        'desc': '全部',
        'id': 0
      },
      {
        'img': '../../images/index/cate_11.png',
        'desc': '生日蛋糕',
        'id': 1
      },
      {
        'img': '../../images/index/cate_02.png',
        'desc': '甜点饮品',
        'id': 2
      },
      {
        'img': '../../images/index/cate_03.png',
        'desc': '甜点炸鸡',
        'id': 3
      },
      {
        'img': '../../images/index/cate_04.png',
        'desc': '暖胃粉面',
        'id': 4
      },
      {
        'img': '../../images/index/cate_05.png',
        'desc': '煲仔饭',
        'id': 5
      },
      {
        'img': '../../images/index/cate_08.png',
        'desc': '营养早餐',
        'id': 6
      },
      {
        'img': '../../images/index/cate_06.png',
        'desc': '活力午餐',
        'id': 7
      },
      {
        'img': '../../images/index/cate_10.png',
        'desc': '美味晚餐',
        'id': 8
      },   
      {
        'img': '../../images/index/cate_09.png',
        'desc': '暖冬宵夜',
        'id': 9
      }
    ],
    //被选中的分类
    activeCategoryId: 0,
    // 搜索
    searchInput: '',
    //公告
    noticeList: [
      {
        'title': '新用户首单立减10元，戳 戳 戳 我看详情',
        'id': 0,
      },
      {
        'title': '商城新开张，品类多多，戳 戳 戳 我看详情',
        'id': 1,
      },
      {
        'title': '新添加各种新品，欢迎查看，戳 戳 戳 我看详情',
        'id': 2,
      },
    ],
    //活动页面
    activityBean: [
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/activity_01.jpg'
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/activity_02.jpg'
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/activity_03.jpg'
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/activity_04.jpg'
      },
    ],
    //商品列表
    goodList: [
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/pie.jpg',
        'title': '煎饼果子',
        'place': '7栋楼下 北区 春一',
        'price_go': '15',
        'comment': '../../images/saler/saler_fives.png',
        'price': '3.5',
        'pricedel': '4',
        'hassel': '50',
        'tip': '新品热销',
        'buyQuantity': 1,
        'declare':"7栋楼下、北区饭堂、春一饭堂热销煎饼果子，满15元送货上门，早餐请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/doujiang.png',
        'title': '豆浆油条',
        'place': '北区 春一',
        'price_go': '15',
        'comment': '../../images/saler/saler_fours.png',
        'price': '4',
        'pricedel': '4.4',
        'hassel': '80',
        'tip': '早餐热卖',
        'buyQuantity': 1,
        'declare': "北区饭堂、春一饭堂早餐有豆浆油条，满15元送货上门，早餐请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/bread.jpg',
        'title': '天下包子',
        'place': '7栋楼下 北区 春一',
        'price_go': '15',
        'comment': '../../images/saler/saler_four.png',
        'price': '2',
        'pricedel': '2.5',
        'hassel': '80',
        'tip': '早餐必备',
        'buyQuantity': 1,
        'declare': "7栋楼下、北区饭堂、春一饭堂早餐和晚餐有各种包子，满15元送货上门，请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/dumping.jpg',
        'title': '五彩饺子',
        'place': '7栋楼下 北区 春一',
        'price_go': '15',
        'comment': '../../images/saler/saler_four.png',
        'price': '3.5',
        'pricedel': '4',
        'hassel': '200',
        'tip': '早餐热卖',
        'buyQuantity': 1,
        'declare': "7栋楼下、北区饭堂、春一饭堂早餐有卖各种饺子，满15元送货上门，早餐请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/changfen.jpg',
        'title': '丝滑肠粉',
        'place': '北区 春一',
        'price_go': '15',
        'comment': '../../images/saler/saler_fives.png',
        'price': '5',
        'pricedel': '5.5',
        'hassel': '100',
        'tip': '早餐热卖',
        'buyQuantity': 1,
        'declare': "北区饭堂、春一饭堂早餐和宵夜热销丝滑肠粉，满15元送货上门，早餐请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/chaofen.jpg',
        'title': '各式炒粉面',
        'place': '北区 春一',
        'price_go': '15',
        'comment': '../../images/saler/saler_three.png',
        'price': '4',
        'pricedel': '4.5',
        'hassel': '120',
        'tip': '热销中',
        'buyQuantity': 1,
        'declare': "北区饭堂、春一饭堂早餐、晚餐和午餐有各式炒粉面，满15元送货上门，请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/zhou.jpg',
        'title': '营养粥',
        'place': '北区 春一',
        'price_go': '15',
        'comment': '../../images/saler/saler_four.png',
        'price': '3',
        'pricedel': '3.5',
        'hassel': '150',
        'tip': '营养早餐',
        'buyQuantity': 1,
        'declare': "北区饭堂、春一饭堂有营养粥，满15元送货上门，早餐请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/milk.jpg',
        'title': '牛奶饮品',
        'place': '北区 春一 7栋楼下',
        'price_go': '15',
        'comment': '../../images/saler/saler_two.png',
        'price': '4',
        'pricedel': '4.5',
        'hassel': '200',
        'tip': '营养早餐',
        'buyQuantity': 1,
        'declare': "7栋楼下、北区饭堂、春一饭堂热销牛奶饮品，满15元送货上门，早餐请提前预定"
      },

      {
        'img': 'http://p701vezuq.bkt.clouddn.com/rice.jpg',
        'title': '鸡腿饭',
        'place': '北区 春一 春三',
        'price_go': '15',
        'comment': '../../images/saler/saler_one.png',
        'price': '8',
        'pricedel': '8.5',
        'hassel': '90',
        'tip': '9.5折',
        'buyQuantity': 1,
        'declare': "北区饭堂、春一饭堂有鸡腿饭，饭量很足，满15元送货上门，请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/good.jpg',
        'title': '香煎牛扒',
        'place': '北区 春一 春三',
        'price_go': '15',
        'comment': '../../images/saler/saler_five.png',
        'price': '8',
        'pricedel': '9',
        'hassel': '150',
        'tip': '9折',
        'buyQuantity': 1,
        'declare': "北区饭堂、春一饭堂和春三饭堂有香煎牛扒，满15元送货上门，请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/niunan.jpg',
        'title': '牛腩饭',
        'place': '北区 春一 春三',
        'price_go': '15',
        'comment': '../../images/saler/saler_four.png',
        'price': '9.5',
        'pricedel': '11',
        'hassel': '90',
        'tip': '8折',
        'buyQuantity': 1,
        'declare': "北区饭堂、春一饭堂和春三饭堂有牛腩饭，饭量很足，满15元送货上门，请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/chick.jpg',
        'title': '黄焖加米饭',
        'place': '北区 春一',
        'price_go': '15',
        'comment': '../../images/saler/saler_five.png',
        'price': '9.5',
        'pricedel': '10',
        'hassel': '80',
        'tip': '8折',
        'buyQuantity': 1,
        'declare': "北区饭堂、春一饭堂有黄焖鸡米饭，饭量很足，满15元送货上门，请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/niujinwan.jpg',
        'title': '招牌牛筋丸粉面',
        'place': '7栋楼下 北区 春一',
        'price_go': '15',
        'comment': '../../images/saler/saler_fives.png',
        'price': '8',
        'pricedel': '9',
        'hassel': '100',
        'tip': '9折',
        'buyQuantity': 1,
        'declare': "7栋楼下、北区饭堂和春一饭堂有招牌牛筋丸粉面，饭量很足，满15元送货上门，请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/pig.jpg',
        'title': '潮汕猪脚饭',
        'place': '北区 春一 春三',
        'price_go': '15',
        'comment': '../../images/saler/saler_fives.png',
        'price': '10',
        'pricedel': '10.5',
        'hassel': '90',
        'tip': '8.5折',
        'buyQuantity': 1,
        'declare': "北区饭堂、春一饭堂和春三饭堂有潮汕猪脚饭，饭量很足味道很香，满15元送货上门，请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/son.jpg',
        'title': '煲仔饭',
        'place': '北区 春一',
        'price_go': '15',
        'comment': '../../images/saler/saler_fives.png',
        'price': '9',
        'pricedel': '10',
        'hassel': '60',
        'tip': '7折',
        'buyQuantity': 1,
        'declare': "北区饭堂和春一饭堂有煲仔饭，饭量很足味道很香，满15元送货上门，请提前预定"
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/paigu.jpg',
        'title': '糖醋排骨',
        'place': '北区 春一',
        'price_go': '15',
        'comment': '../../images/saler/saler_four.png',
        'price': '5',
        'pricedel': '6',
        'hassel': '300',
        'tip': '热卖中',
        'buyQuantity': 1,
        'declare': "北区饭堂和春一饭堂有糖醋排骨，味道很香，满15元送货上门，请提前预定"
      }
    ],
    isBtnClicked: false,
    //回到顶部的显示
    isTotop: false,
  },

  //轮播图自动轮播
  swiperchange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  //回到顶部
  totop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  // 点击轮播图跳转到详情页  ../merchandise/merchandise?id=
  tapBanner: function (e) {
    console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    if (index == 3) {
      wx.navigateTo({
        url: "../merchandise/merchandise?id=" + 2
      })
    }else if(index == 4){
      wx.navigateTo({
        url: "../merchandise/merchandise?id=" + 1
      })
    }else if(index == 0){
      wx.navigateTo({
        url: "../merchandise/merchandise?id=" + 0
      })
    } else if(index == 2){
      wx.navigateTo({
        url: "../merchandise/merchandise?id=" + 3
      })
    }else{
      wx.pageScrollTo({
        scrollTop: 500,
        duration: 300
      })
    }
  },

  // 点击分类
  tabClick: function (e) {
    let that = this;
    if (!that.data.isBtnClicked) {
      that.setData({
        activeCategoryId: e.currentTarget.id
      });
      console.log(that.data.activeCategoryId);   
      let activeCategoryId = that.data.activeCategoryId;
      if (activeCategoryId == 0){
        wx.pageScrollTo({
          scrollTop: 550,
          duration: 300
        })
      } else if (activeCategoryId == 1){
        wx.navigateTo({
          url: '../merchandise/merchandise?id=' + 0
        })
      } else if (activeCategoryId == 2) {
        wx.navigateTo({
          url: '../merchandise/merchandise?id=' + 2
        })
      } else if (activeCategoryId == 3) {
        wx.navigateTo({
          url: '../merchandise/merchandise?id=' + 1
        })
      } else if (activeCategoryId == 4) {
        wx.pageScrollTo({
          scrollTop: 2000,
          duration: 300
        })
      } else if (activeCategoryId == 5) {
        wx.pageScrollTo({
          scrollTop: 2000,
          duration: 300
        })
      } else if (activeCategoryId == 6) {
        wx.pageScrollTo({
          scrollTop: 500,
          duration: 300
        })
      } else if (activeCategoryId == 7) {
        wx.pageScrollTo({
          scrollTop: 1400,
          duration: 300
        })
      } else if (activeCategoryId == 8) {
        wx.pageScrollTo({
          scrollTop: 1400,
          duration: 300
        })
      } else if (activeCategoryId == 9) {
        wx.navigateTo({
          url: '../merchandise/merchandise?id=' + 1
        })
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

  // 点击公告
  toDetail(e) {
    let that = this;
    if (!that.data.isBtnClicked) {
      console.log(e.currentTarget.dataset.index);
      let index = e.currentTarget.dataset.index;
      if (index == 0) {
        wx.navigateTo({
          url: '../question-desc/question-desc?id=' + "新用户首单立减5元" + '&index=1&titleIndex=3'
        })
      } else if (index == 1) {
        wx.navigateTo({
          url: '../merchandise/merchandise?id=' + 2
        })
      } else {
        wx.navigateTo({
          url: '../merchandise/merchandise?id=' + 1
        })
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

  //点击中间四大板块
  toFourDetail(e) {
    let that = this;
    if (!that.data.isBtnClicked) {
      console.log(e.currentTarget.dataset.index);
      wx.navigateTo({
        url: '../merchandise/merchandise?id=' + e.currentTarget.dataset.index
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

  // 点击吃饭时间
  toEatLunch(e) {
    let that = this;
    if (!that.data.isBtnClicked) {
      let clickId = (e.currentTarget.dataset.index) + 4;
      console.log(clickId);
      let goodList = that.data.goodList[e.currentTarget.dataset.index];
      console.log(goodList);
      wx.navigateTo({
        url: '../merchandise/merchandise?id=' + clickId + '&title=' + goodList.title + '&price=' + goodList.price + '&pricedel=' + goodList.pricedel + '&imageSamll=' + goodList.img + '&buyQuantity=' + goodList.buyQuantity + '&place=' + goodList.place + '&gift=' + goodList.tip + '&declare=' + goodList.declare
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

  // scroll: function (e) {
  //   var that = this, 
  //   scrollTop = that.data.scrollTop;
  //   that.setData({
  //     scrollTop: e.detail.scrollTop
  //   })
  // },

  onLoad: function () {
    var that = this;
    wx.setNavigationBarTitle({
      // title: wx.getStorageSync('mallName')
      title: '网上订餐'
    })
    /*
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    */
    // wx.request({
      // url: 'https://api.it120.cc/' + app.globalData.subDomain + '/banner/list',
      // data: {
      //   key: 'mallName'
      // },
      // success: function (res) {
      //   if (res.data.code == 404) {
      //     wx.showModal({
      //       title: '提示',
      //       content: '请在后台添加 banner 轮播图片',
      //       showCancel: false
      //     })
      //   } else {
      //     that.setData({
            // banners: res.data.data
          // });
        // }
      // }
    // })
    // wx.request({
    //   url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/category/all',
    //   success: function (res) {
    //     var categories = [{ id: 0, name: "全部" }];
    //     if (res.data.code == 0) {
    //       for (var i = 0; i < res.data.data.length; i++) {
    //         categories.push(res.data.data[i]);
    //       }
    //     }
    //     that.setData({
    //       // categories:categories,
    //       activeCategoryId: 0
    //     });
    //     that.getGoodsList(0);
    //   }
    // })
    // that.getCoupons();
    // that.getNotice();
  },
  // 得到的商品展示
  // getGoodsList: function (categoryId) {
  //   if (categoryId == 0) {
  //     categoryId = "";
  //   }
  //   console.log(categoryId)
  //   var that = this;
  //   wx.request({
  //     url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/list',
  //     data: {
  //       categoryId: categoryId,
  //       nameLike: that.data.searchInput
  //     },
  //     success: function (res) {
  //       that.setData({
  //         goods: [],
  //         loadingMoreHidden: true
  //       });
  //       var goods = [];
  //       if (res.data.code != 0 || res.data.data.length == 0) {
  //         that.setData({
  //           loadingMoreHidden: false,
  //         });
  //         return;
  //       }
  //       for (var i = 0; i < res.data.data.length; i++) {
  //         goods.push(res.data.data[i]);
  //       }
  //       that.setData({
  //         goods: goods,
  //       });
  //     }
  //   })
  // },
  // getCoupons: function () {
  //   var that = this;
  //   wx.request({
  //     url: 'https://api.it120.cc/' + app.globalData.subDomain + '/discounts/coupons',
  //     data: {
  //       type: ''
  //     },
  //     success: function (res) {
  //       if (res.data.code == 0) {
  //         that.setData({
  //           hasNoCoupons: false,
  //           coupons: res.data.data
  //         });
  //       }
  //     }
  //   })
  // },
  // gitCoupon: function (e) {
  //   var that = this;
  //   wx.request({
  //     url: 'https://api.it120.cc/' + app.globalData.subDomain + '/discounts/fetch',
  //     data: {
  //       id: e.currentTarget.dataset.id,
  //       token: app.globalData.token
  //     },
  //     success: function (res) {
  //       if (res.data.code == 20001 || res.data.code == 20002) {
  //         wx.showModal({
  //           title: '错误',
  //           content: '来晚了',
  //           showCancel: false
  //         })
  //         return;
  //       }
  //       if (res.data.code == 20003) {
  //         wx.showModal({
  //           title: '错误',
  //           content: '你领过了，别贪心哦~',
  //           showCancel: false
  //         })
  //         return;
  //       }
  //       if (res.data.code == 30001) {
  //         wx.showModal({
  //           title: '错误',
  //           content: '您的积分不足',
  //           showCancel: false
  //         })
  //         return;
  //       }
  //       if (res.data.code == 20004) {
  //         wx.showModal({
  //           title: '错误',
  //           content: '已过期~',
  //           showCancel: false
  //         })
  //         return;
  //       }
  //       if (res.data.code == 0) {
  //         wx.showToast({
  //           title: '领取成功，赶紧去下单吧~',
  //           icon: 'success',
  //           duration: 2000
  //         })
  //       } else {
  //         wx.showModal({
  //           title: '错误',
  //           content: res.data.msg,
  //           showCancel: false
  //         })
  //       }
  //     }
  //   })
  // },
  // onShareAppMessage: function () {
  //   return {
  //     title: wx.getStorageSync('mallName') + '——' + app.globalData.shareProfile,
  //     path: '/pages/index/index',
  //     success: function (res) {
  //       // 转发成功
  //     },
  //     fail: function (res) {
  //       // 转发失败
  //     }
  //   }
  // },
  // getNotice: function () {
  //   var that = this;
  //   wx.request({
  //     url: 'https://api.it120.cc/' + app.globalData.subDomain + '/notice/list',
  //     data: { pageSize: 5 },
  //     success: function (res) {
  //       if (res.data.code == 0) {
  //         that.setData({
  //           noticeList: res.data.data
  //         });
  //       }
  //     }
  //   })
  // },

  // 搜索框
  listenerSearchInput: function (e) {
    this.setData({
      searchInput: e.detail.value
    })
  },
  // 搜索
  toSearch: function () {
    this.getGoodsList(this.data.activeCategoryId);
  },

    /**
   * 页面滚动
   */
  onPageScroll: function (e) {
    var that = this;
    that.setData({
      scrollTop: e.scrollTop
    })

    if (e.scrollTop > 200) {
      that.setData({
        isTotop: true
      })
    } else {
      that.setData({
        isTotop: false
      })
    }
  }
})
