// pages/shopping-trolley/shopping-trolley.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allWaterSelected: true,
    allBucketSelected: false,
    all: false,
    btn: true,
    litext: true,
    shopping: false,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: true,
    totalPrice: '0.00',
    delBtnWidth: 80,//删除的宽
    startX: 0,//记录点击是的x
    startY: 0,//记录点击是的y
    index: '',
    showWaterCardDiv: false,
    showBucketDiv: false,
    carts: [],
    bucket: [],
    discount: 0,
    isBtnClicked: false,
    num: [],
    cartList: [],
    title1: '',
    carShop: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 增加数量
  addCountBucket(e) {
    console.log('增加数量')
    let that = this;
    const index = e.currentTarget.dataset.index;
    let bucket = that.data.bucket;
    let num = parseInt(bucket[index].buyQuantity) + 1;
    num = num >= 1000 ? 1000 : num;
    that.setData({
      bucket: that.data.bucket
    })
    // if (!that.data.hasUserInfo && that.data.canIUse) {
    that.updateBucketNum(index, num, true)
    // } else {
    // let token = wx.getStorageSync('token')
    // app.func.req('shoppingCart/update', { cartId: bucket[index].cartId, quantity: num }, token, function (res) {
    //   if (res.code == 0) {
    //     that.updateBucketNum(index, num, false)
    //   }
    // });

    // }
  },

  state() {
    let carts = this.data.carts
    let bucket = this.data.bucket
    let hasCarts = carts.length != 0
    let hasBucket = bucket.length != 0
    this.setData({
      showWaterCardDiv: hasCarts,
      showBucketDiv: hasBucket,
      shopping: !hasCarts && !hasBucket,
      all: hasCarts || hasBucket,
      allWaterSelected: true,
      allBucketSelected: true
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
    let cartArray = wx.getStorageSync('cartArray');
    if (cartArray.length == 0) {
      that.data.shopping = true;
      that.data.showBucketDiv = false;
    } else {
      that.data.shopping = false;
      that.data.showBucketDiv = true;
    }
    that.setData({
      bucket: cartArray,
      showBucketDiv: that.data.showBucketDiv,
      shopping: that.data.shopping,
      totalPrice:0
    })
    console.log('本地存储的数据', cartArray)
    let localCartData = wx.getStorageSync('localCartData');
    let token = wx.getStorageSync("token")
    // if (token) {
    //   app.func.getreq('shoppingCart/queryCartByCustomerId', {}, token, function (res) {
    //     if (res.code == 0) {

    //       let goodsList = res.shoppingCartListVo
    //       if (!goodsList) {
    //         goodsList = {}
    //         goodsList.waterCartList = []
    //         goodsList.oneBarreList = []
    //       } else {
    //         if (!goodsList.waterCartList) {
    //           goodsList.waterCartList = []
    //         }
    //         if (!goodsList.waterCartList) {
    //           goodsList.oneBarreList = []
    //         }
    //       }
    //       that.setData({
    //         carts: goodsList.waterCartList,
    //         bucket: goodsList.oneBarreList
    //       });
    //     }
    //     that.state();
    //     that.getTotalPrice()
    //   });
    // }
    if (app.globalData.userInfo) {
      that.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (that.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        lang: 'zh_CN',
        success: res => {
          app.globalData.userInfo = res.userInfo
          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
    //用户是否登录
    // if (!that.data.hasUserInfo && that.data.canIUse) {
    //   if (localCartData) {
    //     app.func.nologin('cart/queryCartInfoByskuId', localCartData, function (res) {
    //       if (res.code == 0) {

    //         let goodsList = res.shoppingCartListVo
    //         if (!goodsList) {
    //           goodsList = {}
    //           goodsList.waterCartList = []
    //           goodsList.oneBarreList = []
    //         }
    //         that.setData({
    //           carts: goodsList.waterCartList,
    //           bucket: goodsList.oneBarreList
    //         });
    //       }

    //       that.state()
    //       that.getTotalPrice()
    //     })
    //   } else {
    //     that.state()
    //   }
    // }
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

  // 刷新本地购物车缓存
  refreshLocalData() {
    let carts = this.data.carts;
    let bucket = this.data.bucket;
    let localCartData = []
    for (let i in carts) {
      let item = carts[i]
      localCartData.push({
        goodsSkuId: item.skuId,
        goodsSpuId: item.spuId,
        quantity: item.buyQuantity
      })
    }
    for (let i in bucket) {
      let item = bucket[i]
      localCartData.push({
        goodsSkuId: item.skuId,
        goodsSpuId: item.spuId,
        quantity: item.buyQuantity
      })
    }
    wx.setStorageSync('localCartData', localCartData)
  },

  // 计算总价
  getTotalPrice() {
    let that = this;
    console.log('计算总价')
    let carts = this.data.carts;
    let bucket = this.data.bucket;
    let discount = this.data.discount;
    let watercard = 0;
    let singlebarrel = 0;
    let discountMoney = 0;
    let num = [];
    let carShop = [];
    for (let i = 0; i < carts.length; i++) {
      let item = carts[i]
      if (item.selected) {
        let itemTotalPrice = item.price * item.buyQuantity
        item['totalPrice'] = itemTotalPrice.toFixed(2)
        watercard += itemTotalPrice;
        discountMoney += (item.originalPrice - item.price) * item.buyQuantity;
        num.push(item.cartId);
      }
    };
    for (let i = 0; i < bucket.length; i++) {
      let item = bucket[i]
      if (item.selected) {
        let itemTotalPrice = item.price * item.buyQuantity
        item['totalPrice'] = itemTotalPrice.toFixed(2)
        num.push(item.cartId)
        singlebarrel += itemTotalPrice;
        discountMoney += (item.originalPrice - item.price) * item.buyQuantity;
        carShop.push(item);
      }
    };
    let totalPrice = (watercard + singlebarrel).toFixed(2)
    let btn = totalPrice == 0
    // 保留两位小数
    discountMoney = discountMoney.toFixed(2);
    console.log('数组', carShop);
    this.setData({
      carts: carts,
      bucket: bucket,
      totalPrice: totalPrice,
      btn: btn,
      discount: discountMoney,
      num: num,
      carShop: carShop
    });
    wx.setStorage({
      key: "carShop",
      data: that.data.carShop
    })
  },


  // 水卡列表
  // 点击选中
  selectList(e) {
    let that = this
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let allSelected = true
    let clickItem = carts[index]
    clickItem.selected = !clickItem.selected;
    for (let i = 0; i < carts.length; i++) {
      if (!carts[i].selected) {
        allSelected = false
        break
      }
    }
    if (!allSelected) {
      this.setData({
        allWaterSelected: false,
        all: false,
        carts: carts
      });
    } else {
      this.setData({
        allWaterSelected: true,
        all: that.data.allBucketSelected,
        carts: carts
      });
    }
    this.getTotalPrice();
  },

  //全选
  waterCardSelectAll(e) {
    let that = this
    let allWaterSelected = !that.data.allWaterSelected;
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = allWaterSelected;
    }
    this.setData({
      allWaterSelected: allWaterSelected,
      carts: carts,
      all: allWaterSelected && that.data.allBucketSelected
    });
    this.getTotalPrice();
  },

  // 单桶列表
  // 点击选中
  bucketList(e) {
    let that = this
    let index = e.currentTarget.dataset.index;
    let bucket = that.data.bucket;
    let allSelected = true
    let clickItem = bucket[index]
    clickItem.selected = !clickItem.selected;
    for (let i = 0; i < bucket.length; i++) {
      if (!bucket[i].selected) {
        allSelected = false
        break
      }
    }

    if (!allSelected) {
      this.setData({
        allBucketSelected: false,
        all: false,
        bucket: bucket
      });
    } else {
      this.setData({
        allBucketSelected: true,
        all: that.data.allWaterSelected,
        bucket: bucket
      });
    }
    this.getTotalPrice();
  },

  //全选
  bucketSelectAll(e) {
    let that = this
    let allBucketSelected = !that.data.allBucketSelected;
    let bucket = this.data.bucket;
    for (let i = 0; i < bucket.length; i++) {
      bucket[i].selected = allBucketSelected;
    }
    this.setData({
      allBucketSelected: allBucketSelected,
      bucket: bucket,
      all: allBucketSelected && that.data.allWaterSelected
    });
    this.getTotalPrice();
  },

  // 全选
  aggregate(e) {
    let all = !this.data.all;
    let bucket = this.data.bucket;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = all;
    }
    for (let i = 0; i < bucket.length; i++) {
      bucket[i].selected = all;
    }
    this.setData({
      allBucketSelected: all,
      bucket: bucket,
      allWaterSelected: all,
      carts: carts,
      all: all
    });
    this.getTotalPrice();
  },

  // 水卡列表
  // 更新水卡数量
  updateWaterNum(index, num, updateCache) {
    let that = this
    let carts = that.data.carts
    let cartsItem = carts[index]
    cartsItem.buyQuantity = num;
    cartsItem['totalPrice'] = (cartsItem.price * num).toFixed(2)
    that.setData({
      carts: carts
    });
    that.getTotalPrice();
    updateCache && that.refreshLocalData();
  },

  // 水卡输入
  amountWater(e) {
    let that = this
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = e.detail.value;
    num = num <= 0 ? 1 : num
    num = num >= 1000 ? 1000 : num

    if (!that.data.hasUserInfo && that.data.canIUse) {
      that.updateWaterNum(index, num, true)
    } else {
      let token = wx.getStorageSync('token')
      app.func.req('shoppingCart/update', { cartId: carts[index].cartId, quantity: num }, token, function (res) {
        if (res.code == 0) {
          that.updateWaterNum(index, num, false)
        }
      });
    }
  },

  // 增加数量
  addCountWater(e) {
    let that = this
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = parseInt(carts[index].buyQuantity) + 1;
    num = num >= 1000 ? 1000 : num
    if (!that.data.hasUserInfo && that.data.canIUse) {
      that.updateWaterNum(index, num, true)
    } else {
      let token = wx.getStorageSync('token')
      app.func.req('shoppingCart/update', { cartId: carts[index].cartId, quantity: num }, token, function (res) {
        if (res.code == 0) {
          that.updateWaterNum(index, num, false)
        }
      });
    }

  },

  // 减少数量
  minusCountWater(e) {
    let that = this
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = parseInt(carts[index].buyQuantity) - 1;
    if (num <= 0) {
      return false
    }
    if (!that.data.hasUserInfo && that.data.canIUse) {
      that.updateWaterNum(index, num, true)
    } else {
      let token = wx.getStorageSync('token')
      app.func.req('shoppingCart/update', { cartId: carts[index].cartId, quantity: num }, token, function (res) {
        if (res.code == 0) {
          that.updateWaterNum(index, num, false)
        }
      });
    }
  },

  //点击删除
  waterDel: function (e) {
    var that = this
    var list = that.data.carts;
    var index = e.currentTarget.dataset.index;
    list[index].litext = false;
    let shoppingCartId = list[index].cartId;
    // 未登录删除本地缓存中对应skuId的数据    
    if (!that.data.hasUserInfo && that.data.canIUse) {
      let removeItem = list.splice(index, 1)[0];
      that.setData({
        carts: list,
      })
      if (list.length == 0) {
        that.setData({
          showWaterCardDiv: false
        });
      }
      that.shopping()
      that.refreshLocalData()
      that.getTotalPrice()
    } else {
      let token = wx.getStorageSync('token')
      app.func.req('shoppingCart/delete', [shoppingCartId], token, function (res) {
        if (res.code == 0) {
          //移除列表中下标为index的项  
          list.splice(index, 1);
          that.setData({
            carts: list,
          })
          if (list.length == 0) {
            that.setData({
              showWaterCardDiv: false
            });
            that.shopping();
          }
          that.getTotalPrice()
        }
      });
    }
  },

  // 单桶列表
  // 更新单桶数量
  updateBucketNum(index, num, updateCache) {
    let that = this
    let bucket = that.data.bucket
    let bucketItem = bucket[index]
    bucketItem.buyQuantity = num;
    bucketItem['totalPrice'] = (bucketItem.price * num).toFixed(2)
    that.setData({
      bucket: bucket
    });
    that.getTotalPrice();
    updateCache && that.refreshLocalData();
    wx.setStorageSync('cartArray', that.data.bucket);
  },

  //单桶输入
  amountBucket(e) {
    let that = this
    let index = e.currentTarget.dataset.index;
    let bucket = this.data.bucket;
    let num = e.detail.value;
    num = num <= 0 ? 1 : num
    num = num >= 1000 ? 1000 : num
    if (!that.data.hasUserInfo && that.data.canIUse) {
      that.updateBucketNum(index, num, true)
    } else {
      let token = wx.getStorageSync('token')
      // app.func.req('shoppingCart/update', { cartId: bucket[index].cartId, quantity: num }, token, function (res) {
      //   if (res.code == 0) {
      that.updateBucketNum(index, num, false)
      //   }
      // });
      wx.setStorageSync('cartArray', that.data.bucket);
    }
  },

  // 减少数量
  minusCountBucket(e) {
    let that = this
    const index = e.currentTarget.dataset.index;
    let bucket = that.data.bucket;
    let num = parseInt(bucket[index].buyQuantity) - 1;
    if (num <= 0) {
      return false
    }
    if (!that.data.hasUserInfo && that.data.canIUse) {
      that.updateBucketNum(index, num, true)
    } else {
      // let token = wx.getStorageSync('token')
      // app.func.req('shoppingCart/update', { cartId: bucket[index].cartId, quantity: num }, token, function (res) {
      //   if (res.code == 0) {
      that.updateBucketNum(index, num, false)
      //   }
      // });
      wx.setStorageSync('cartArray', that.data.bucket);
    }
  },

  //点击删除
  bucketDel: function (e) {
    let that = this;
    let carts = that.data.carts;
    let list = that.data.bucket;
    let index = e.currentTarget.dataset.index;
    list[index].litext = false;
    let shoppingCartId = list[index].cartId
    if (!that.data.hasUserInfo && that.data.canIUse) {
      list.splice(index, 1);
      that.setData({
        bucket: list,
      })
      if (list.length == 0) {
        that.setData({
          showBucketDiv: false
        });
      };
      that.getTotalPrice()
      that.refreshLocalData()
    } else {
      let token = wx.getStorageSync('token')
      // app.func.req('shoppingCart/delete', [shoppingCartId], token, function (res) {

      // if (res.code == 0) {
      //移除列表中下标为index的项  
      list.splice(index, 1);
      that.setData({
        bucket: list,
      });
      if (list.length == 0) {
        that.setData({
          showBucketDiv: false
        });
      };
      that.getTotalPrice()
      that.shopping();
      wx.setStorageSync('cartArray', that.data.bucket);
    }
    // });
    // }
  },

  // 左滑删除
  waterTouchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        //设置触摸起始点水平方向位置
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY
      });
    }
  },

  //触摸时触发，手指在屏幕上每移动一次，触发一次
  waterTouchM: function (e) {
    var that = this;
    if (e.touches.length == 1) {
      //记录触摸点位置的X坐标
      var moveX = e.touches[0].clientX;
      var ce = that.data.startY - e.touches[0].clientY;
      if (ce <= -15 || ce >= 15) {
        return
      } else {
        //计算手指起始点的X坐标与当前触摸点的X坐标的差值
        var disX = that.data.startX - moveX;
        //delBtnWidth 为右侧按钮区域的宽度
        var delBtnWidth = that.data.delBtnWidth;
        var txtStyle = "";
        var ces = 0;
        if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
          txtStyle = "left:" + 0 + "px";
          // ces = (delBtnWidth + disX);
          if (ces < 0) {
            this.setData({
              delBtnWidth: 80,
              litext: true,
            })
          }
        } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
          txtStyle = "left:-" + disX + "px";
          if (disX >= delBtnWidth) {
            //控制手指移动距离最大值为删除按钮的宽度
            txtStyle = "left:-" + delBtnWidth + "px";
          }
        }
        // //获取手指触摸的是哪一个item
        var index = e.currentTarget.dataset.index;
        var list = that.data.carts;
        //遍历数组修改每一个数组中txtStyle的偏移值
        for (var i = 0; i < list.length; i++) {
          list[i].txtStyle = "left:-" + 0 + "px";
        }
        // //将拼接好的样式设置到当前item中
        list[index].txtStyle = txtStyle;
        list[index].litext = true
        list[index].delBtnWidth = 80,
          //更新列表的状态
          this.setData({
            carts: list,
          });
      }
    }

  },

  waterTouchE: function (e) {
    var that = this
    if (e.changedTouches.length == 1) {
      //手指移动结束后触摸点位置的X坐标
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = that.data.startX - endX;
      var delBtnWidth = that.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" :
        "left:0px";
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var list = that.data.carts;
      list[index].txtStyle = txtStyle;
      list[index].litext = true
      list[index].delBtnWidth = 80,
        //更新列表的状态
        that.setData({
          carts: list,
          iconShow: index,
        });
    }
  },

  bucketTouchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        //设置触摸起始点水平方向位置
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY
      });
    }
  },

  //触摸时触发，手指在屏幕上每移动一次，触发一次
  bucketTouchM: function (e) {
    var that = this;
    if (e.touches.length == 1) {
      //记录触摸点位置的X坐标
      var moveX = e.touches[0].clientX;
      var ce = that.data.startY - e.touches[0].clientY;
      if (ce <= -15 || ce >= 15) {
        return
      } else {
        //计算手指起始点的X坐标与当前触摸点的X坐标的差值
        var disX = that.data.startX - moveX;
        //delBtnWidth 为右侧按钮区域的宽度
        var delBtnWidth = that.data.delBtnWidth;
        var txtStyle = "";
        var ces = 0;
        if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
          txtStyle = "left:" + 0 + "px";
          // ces = (delBtnWidth + disX);
          if (ces < 0) {
            this.setData({
              delBtnWidth: 80,
              litext: true,
            })
          }
        } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
          txtStyle = "left:-" + disX + "px";
          if (disX >= delBtnWidth) {
            //控制手指移动距离最大值为删除按钮的宽度
            txtStyle = "left:-" + delBtnWidth + "px";
          }
        }
        // //获取手指触摸的是哪一个item
        var index = e.currentTarget.dataset.index;
        var list = that.data.bucket;
        // console.log(list[index])
        //遍历数组修改每一个数组中txtStyle的偏移值
        for (var i = 0; i < list.length; i++) {
          list[i].txtStyle = "left:-" + 0 + "px";
        }
        // //将拼接好的样式设置到当前item中
        list[index].txtStyle = txtStyle;
        list[index].litext = true
        list[index].delBtnWidth = 80,
          // console.log("指定list" + list[index].txtStyle)
          //更新列表的状态
          this.setData({
            bucket: list,
          });
      }
    }
  },

  bucketTouchE: function (e) {
    // console.log("touchE", e);
    var that = this
    if (e.changedTouches.length == 1) {
      //手指移动结束后触摸点位置的X坐标
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = that.data.startX - endX;
      var delBtnWidth = that.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" :
        "left:0px";

      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var list = that.data.bucket;
      list[index].txtStyle = txtStyle;
      list[index].litext = true
      list[index].delBtnWidth = 80,
        //更新列表的状态
        that.setData({
          bucket: list,
          iconShow: index,
        });
    }
  },



  // 购物车为空
  shopping() {
    let that = this;
    let carts = that.data.carts;
    let list = that.data.bucket;
    // console.log(carts, list)
    if (list.length == 0 && carts.length == 0) {
      that.setData({
        shopping: true
      });
      // that.onLoad();
    } else {
      that.setData({
        shopping: false
      });
    }
  },

  // 未登录状态
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
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          wxMsgShow: true
        })
        that.networkLogin();
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
        // console.log(res.data);
        that.data.userMsg.code = res.data;
        that.setData({
          userMsg: that.data.userMsg
        })
        // 发送网络请求，登录  保存token
        app.func.req('login', that.data.userMsg, '', function (res) {
          // console.log(res);
          if (res.code == 0) {

            wx.setStorageSync('token', res.token)
            // 合并
            let localCartData = wx.getStorageSync('localCartData')

            if (localCartData) {
              app.func.req('shoppingCart/mergeCart', localCartData, res.token, function (res) {
                if (res.code == 0) {
                  try {
                    wx.removeStorageSync('localCartData')
                    that.onShow();
                  } catch (e) {
                    console.log(e)
                  }
                }
              });
            }
          } else {
            console.log('登录失败')
          }
        })
      }
    })
  },

  // 去结算
  settleAccounts() {
    var that = this;
    if (!that.data.hasUserInfo && that.data.canIUse) {
      return;
    }
    let num = []
    num = that.data.num
    wx.navigateTo({
      url: '../clearing/clearing',
    });
    setTimeout(function () {
      that.setData({
        isBtnClicked: false
      });
    }, 1000);
  }

})