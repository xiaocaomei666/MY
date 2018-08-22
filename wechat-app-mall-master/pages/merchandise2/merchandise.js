// pages/merchandise/merchandise.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图图片
    indexSlider: [
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/activity_01.jpg',
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/activity_01.jpg',
      },
      {
        'img': 'http://p701vezuq.bkt.clouddn.com/activity_01.jpg',
      }
    ],
    // 底部图片
    bottomimg: {
      "img1": "../../images/icon_weixin.png",
      "img2": "../../images/icon_car.png",
    },
    // 商品描述
    des: {
      "title": "鼎湖山泉【轻便款】家庭饮用水",
      "declare": "物流到家/不收桶押金/一次性桶包装/密封无污染/无需回收/饮用水&独立两用",
      "price": "¥10-30"
    },
    //品类
    category: [
      {
        "id": 1,
        "name": "单桶"
      },
      {
        "id": 2,
        "name": "水卡"
      },
    ],
    // 类型
    styles: [
      {
        "id": 3,
        "type": "10桶卡"
      },
      {
        "id": 4,
        "type": "20桶卡"
      },
      {
        "id": 5,
        "type": "40桶卡"
      },
    ],
    //规格
    litre: [
      {
        "id": 6,
        "size": "4.5L"
      },
      {
        "id": 7,
        "size": "8L"
      },
      {
        "id": 8,
        "size": "15L"
      },
    ],
    // 数量
    num: 1,
    // 套餐显示隐藏
    meal: true,
    // 产品详情图
    product: [
      {
        "img": "../../images/index_commodity.jpg",
      }
    ],
    // 记录商品选择与否
    clickProduct1: '-1',
    clickProduct2: '-1',
    clickProduct3: '-1',
    // 记录点击次数
    clickNum: 1,
    showproduct: true,
    //回到顶部的显示
    isTotop: false,
    userInfo: {},
    // 箭头
    iconshow: true,
    // 购物车数量
    carnum: 0,
    redshow: false,
    // 用于储存品类水卡
    categorySet: [],
    categorySetn: [],
    // 用于储存套餐
    stylesSet: [],
    stylesSetn: [],
    // 用于储存规格水卡
    litreSet: [],
    litreSetn: [],
    // 用于储存品类单桶
    categoryoneset: [],
    categoryonesetn: [],
    litreoneset: [],
    litreonesetn: [],
    gift: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    let that = this;
    // 根据不同id显示不同的商品详情
    if (id == 0) {
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/cake2.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/cake4.jpg',
        },

      ];
      that.data.des = {
        "title": "甜品蛋糕",
        "declare": "春晖园三楼甜品蛋糕，满25元送货上门",
        "price": "¥10-30"
      },
        that.data.category = [
          {
            "id": 1,
            "name": "生日蛋糕"
          },
          {
            "id": 2,
            "name": "小蛋糕"
          },
        ],
        that.data.styles = [
          {
            "id": 3,
            "type": "黑森林"
          },
          {
            "id": 4,
            "type": "巧克力"
          },
          {
            "id": 5,
            "type": "芝士"
          },
        ],
        that.data.litre = [
          {
            "id": 6,
            "size": "1磅"
          },
          {
            "id": 7,
            "size": "2磅"
          },
          {
            "id": 8,
            "size": "3磅"
          },
        ],
        that.data.product = [
          {
            "img": "http://p701vezuq.bkt.clouddn.com/cake1.jpg",
          },
          {
            "img": "http://p701vezuq.bkt.clouddn.com/cake2.jpg",
          },
          {
            "img": "http://p701vezuq.bkt.clouddn.com/cake3.jpg",
          },
          {
            "img": "http://p701vezuq.bkt.clouddn.com/cake4.jpg",
          }
        ],
        that.data.gift = "限时赠品：精美小蛋糕*1,送完即止"
    } else if (id == 1) {
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/activity_02.jpg',
        }
      ];
      that.data.des = {
        "title": "Q堡堡",
        "declare": "北区饭堂Q堡堡，满25元送货上门",
        "price": "¥5-30"
      },
        that.data.category = [
          {
            "id": 1,
            "name": "单点"
          },
          {
            "id": 2,
            "name": "混点"
          },
        ],
        that.data.styles = [
          {
            "id": 3,
            "type": "黑森林"
          },
          {
            "id": 4,
            "type": "巧克力"
          },
          {
            "id": 5,
            "type": "芝士"
          },
        ],
        that.data.litre = [
          {
            "id": 6,
            "size": "1磅"
          },
          {
            "id": 7,
            "size": "2磅"
          },
          {
            "id": 8,
            "size": "3磅"
          },
        ],
        that.data.product = [
          {
          "img": "http://p701vezuq.bkt.clouddn.com/cake1.jpg",
          },
          {
            "img": "http://p701vezuq.bkt.clouddn.com/cake2.jpg",
          },
          {
            "img": "http://p701vezuq.bkt.clouddn.com/cake3.jpg",
          },
          {
            "img": "http://p701vezuq.bkt.clouddn.com/cake4.jpg",
          }
        ],
        that.data.gift = "限时赠品：精美小蛋糕*1,送完即止"
    }
    that.setData({
      indexSlider: that.data.indexSlider,
      des: that.data.des,
      category: that.data.category,
      styles: that.data.styles,
      litre: that.data.litre,
      product: that.data.product,
      gift: that.data.gift
    })
  },

  // 点击展示选择规格类型
  show() {
    var clickNum = this.data.clickNum + 1;
    this.setData({
      clickNum: clickNum,
    })
    var add = this.data.clickNum % 2;
    if (add == 0) {
      this.setData({
        // clickNum: clickNum,
        showproduct: false,
        iconshow: false,
      })
    } else {
      this.setData({
        showproduct: true,
        iconshow: true,
      })
    }

  },

  // 点击类型
  clickProductName(e) {
    // console.log("点击品类", e);
    var that = this;
    var index = e.currentTarget.dataset.index;
    console.log("点击品类", that.data.category[index].name);
    if (index == 0) {
      that.setData({
        meal: false,
        clickProduct2: '-1',
        clickProduct3: '-1',
      })
    } else {
      that.setData({
        meal: true,
        clickProduct3: '-1',
      })
    }
    that.setData({
      clickProduct1: e.currentTarget.dataset.index
    })
    that.data.categorySet.push({ name: that.data.category[index].name, id: that.data.category[index].id });
    that.data.categoryoneset.push({ name: that.data.category[index].name, id: that.data.category[index].id });
    console.log(that.data.categorySet)
  },
  // 点击品类
  clickProductNum(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    console.log("点击套餐", that.data.styles[index].type);
    that.setData({
      clickProduct2: e.currentTarget.dataset.index
    })
    that.data.stylesSet.push({ types: that.data.styles[index].type, id: that.data.styles[index].id });
    console.log(that.data.stylesSet)
  },
  // 点击规格
  clickProductSize(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    console.log("点击规格", that.data.litre[index].size);
    that.setData({
      clickProduct3: e.currentTarget.dataset.index
    })
    that.data.litreSet.push({ size: that.data.litre[index].size, id: that.data.litre[index].id });
    that.data.litreoneset.push({ size: that.data.litre[index].size, id: that.data.litre[index].id });
    console.log(that.data.litreSet)
  },
  // 增加数量
  addCounts(e) {
    if (this.data.num >= 999) {
      this.setData({
        num: 999
      });
    } else {
      let num = this.data.num;
      num = num + 1;
      this.data.num = num;
      this.setData({
        num: num
      });
    }
  },
  // 监听键盘输入数量
  listNumInput(e) {
    var that = this;
    var numNew = Number(e.detail.value);
    that.setData({
      num: numNew
    })
  },
  //当键盘失去焦点时
  listNumZeoro() {
    var that = this;
    if (that.data.num == 0) {
      that.setData({
        num: 1
      })
    }
  },

  // 减少数量
  minusCounts(e) {
    let num = this.data.num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    this.data.num = num;
    this.setData({
      num: num
    });
  },

  // 点击地址
  addrs() {
    wx.navigateTo({
      url: '../distribution/distribution'
    })
  },

  // 点击购物车
  car() {
    var that = this;
    wx.switchTab({
      url: '../shopping-trolley/shopping-trolley'
    })
    that.setData({
      redshow: true,
    })
  },
  // 加入购物车
  addcars(e) {
    var that = this;
    if (that.data.meal == true) {
      if (that.data.clickProduct1 == '-1') {
        wx.showToast({
          title: '请选择品类/套餐/规格',
          icon: 'none',
          duration: 1000
        })
      } else if (that.data.clickProduct2 == '-1') {
        wx.showToast({
          title: '请选择品类/套餐/规格',
          icon: 'none',
          duration: 1000
        })
      } else if (that.data.clickProduct3 == '-1') {
        wx.showToast({
          title: '请选择品类/套餐/规格',
          icon: 'none',
          duration: 1000
        })
      } else {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 1000
        })
        var carnum = that.data.carnum;
        console.log(carnum, '444')
        carnum = carnum + 1;
        that.setData({
          carnum: carnum,
          redshow: true
        })
        var arr = that.data.categorySet;
        var arr2 = that.data.stylesSet;
        var arr3 = that.data.litreSet;
        var categorySet = arr[arr.length - 1];
        var stylesSet = arr2[arr2.length - 1];
        var litreSet = arr3[arr3.length - 1];
        that.data.categorySetn.push(categorySet);
        that.data.stylesSetn.push(stylesSet);
        that.data.litreSetn.push(litreSet);
        that.setData({
          categorySetn: that.data.categorySetn,
          stylesSetn: that.data.stylesSetn,
          litreSetn: that.data.litreSetn
        })
        console.log(arr, "数组");
        console.log(that.data.categorySetn, "元素");
        wx.setStorageSync('categorys', that.data.categorySetn),
          wx.setStorageSync('styles', that.data.stylesSetn),
          wx.setStorageSync('litre', that.data.litreSetn)
      }
    } else {
      if (that.data.clickProduct1 == '-1') {
        wx.showToast({
          title: '请选择品类/规格',
          icon: 'none',
          duration: 1000
        })
      } else if (that.data.clickProduct3 == '-1') {
        wx.showToast({
          title: '请选择品类/规格',
          icon: 'none',
          duration: 1000
        })
      } else {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 1000
        })
        var carnum = that.data.carnum;
        console.log(carnum, '555')
        carnum = carnum + 1
        that.setData({
          carnum: carnum,
          redshow: true
        })


        var arr4 = that.data.categoryoneset;
        var arr5 = that.data.litreoneset;
        var categoryoneset = arr4[arr4.length - 1];
        var litreoneset = arr5[arr5.length - 1];
        that.data.categoryonesetn.push(categoryoneset);
        that.data.litreonesetn.push(litreoneset);
        that.setData({
          categoryonesetn: that.data.categoryonesetn,
          litreonesetn: that.data.litreonesetn
        })
        console.log(that.data.categorySetn, "元素");
        wx.setStorageSync('categorysone', that.data.categoryonesetn),
          wx.setStorageSync('litreone', that.data.litreonesetn)
      }
    }

  },

  // 立即购买
  // buy() {
  //   var that = this;
  //   if (that.data.clickProduct1 == '-1') {
  //     wx.showToast({
  //       title: '请选择品类/类型/规格',
  //       icon: 'none',
  //       duration: 1000
  //     })
  //   } else if (that.data.clickProduct2 == '-1') {
  //     wx.showToast({
  //       title: '请选择品类/类型/规格',
  //       icon: 'none',
  //       duration: 1000
  //     })
  //   } else if (that.data.clickProduct3 == '-1') {
  //     wx.showToast({
  //       title: '请选择品类/类型/规格',
  //       icon: 'none',
  //       duration: 1000
  //     })
  //   } else {
  //     wx.navigateTo({
  //       url: '../distribution/distribution',
  //     })
  //   }
  // },
  //未授权点击弹出授权  立即购买
  getUserInfo: function (e) {
    var that = this;
    // console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    // console.log(e.detail.userInfo);
    if (e.detail.userInfo == undefined) {
      that.setData({
        userInfo: e.detail.userInfo,
      })
    } else {
      that.setData({
        userInfo: e.detail.userInfo,
      })
    }

    if (app.globalData.userInfo) {
      console.log("已授权");
      that.setData({
        userInfo: app.globalData.userInfo,
      })
      if (that.data.meal == true) {
        if (that.data.clickProduct1 == '-1') {
          wx.showToast({
            title: '请选择品类/套餐/规格',
            icon: 'none',
            duration: 1000
          })
        } else if (that.data.clickProduct2 == '-1') {
          wx.showToast({
            title: '请选择类型/品类/规格',
            icon: 'none',
            duration: 1000
          })
        } else if (that.data.clickProduct3 == '-1') {
          wx.showToast({
            title: '请选择类型/品类/规格',
            icon: 'none',
            duration: 1000
          })
        } else {
          wx.navigateTo({
            url: '../clearing/clearing',
          })
        }
      } else {
        if (that.data.clickProduct1 == '-1') {
          wx.showToast({
            title: '请选择类型/规格',
            icon: 'none',
            duration: 1000
          })
        } else if (that.data.clickProduct3 == '-1') {
          wx.showToast({
            title: '请选择类型/规格',
            icon: 'none',
            duration: 1000
          })
        } else {
          wx.navigateTo({
            url: '../clearing/clearing',
          })
        }
      }

    } else {
      console.log("未授权")
    }
  },
  //回到顶部
  totop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var value = wx.getStorageSync('categorys');
    var value2 = wx.getStorageSync('styles');
    var value3 = wx.getStorageSync('litre');
    var value4 = wx.getStorageSync('categorysone');
    var value5 = wx.getStorageSync('litreone');
    console.log(value, '获取缓存数据品类');
    console.log(value2, '获取缓存数据套餐');
    console.log(value3, '获取缓存数据规格');
    console.log(value4, '获取缓存数据单桶品类');
    console.log(value5, '获取缓存数据单桶规格');
    // wx.clearStorageSync()

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

  },

  /**
   * 页面滚动
   */
  onPageScroll: function (e) {
    var that = this;
    that.setData({
      scrollTop: e.scrollTop
    })
    //console.log(that.data.scrollTop);

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