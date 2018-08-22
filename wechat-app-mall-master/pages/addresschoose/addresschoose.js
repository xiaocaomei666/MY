const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [
      {
        receiverName: '小草莓',
        receiverMobile: '18123456789',
        proviceName: '广东技术师范大学',
        cityName: '女生宿舍',
        districtName: '西区楼下',
        address: '',
        tag: '宿舍楼',
      },
      {
        receiverName: '吴某某1',
        receiverMobile: '18123456789',
        proviceName: '广东技术师范大学',
        cityName: '实验楼',
        districtName: '课室',
        address: '微机6',
        tag: '实验楼',
      },
      {
        receiverName: '吴某某2',
        receiverMobile: '18123456789',
        proviceName: '广东技术师范大学',
        cityName: '男生宿舍',
        districtName: '7栋楼下',
        address: '靠近北区的楼梯',
        tag: '宿舍楼',
      },
      {
        receiverName: '吴某某3',
        receiverMobile: '18123456789',
        proviceName: '广东技术师范大学',
        cityName: '工业中心',
        districtName: '办公室',
        address: '606',
        tag: '工业中心',
      },
      {
        receiverName: '吴某某4',
        receiverMobile: '18123456789',
        proviceName: '广东技术师范大学',
        cityName: '教学楼',
        districtName: '二教',
        address: '606',
        tag: '教学楼',
      },
      {
        receiverName: '吴某某5',
        receiverMobile: '18123456789',
        proviceName: '广东技术师范大学',
        cityName: '办公室',
        districtName: '716',
        address: '门口',
        tag: '行政楼',
      },
      {
        receiverName: '吴某某6',
        receiverMobile: '18123456789',
        proviceName: '广东技术师范大学',
        cityName: '校医室',
        districtName: '',
        address: '门口',
        tag: '校医室',
      },
    ],
    receiverName1: '',
    receiverMobile1: '',
    tag1: '',
    proviceName1: '',
    cityName1: '',
    districtName1: '',
    addressDetail1: '',
    message2: '',
    index: '',
    iconshow: -1,
    arb: false,
    // txtStyle: 0,
    delBtnWidth: 80,//删除的宽
    text: 0,
    litext: true,
    list: true,
    //按钮是否被点击
    isBtnClicked: false,
    startX: 0,//记录点击是的x
    startY: 0,//记录点击是的y
    addresschose: '',//记录地址被选择的数据
    statue: "",
    empty: false,
    addressIndex:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showLoading({
    //   title: '加载中',
    // })
    var that = this;
    console.log(options);
    var statue = options.statue;
    //上一页面的传参
    that.setData({
      statue: statue
    })
    // wx.getStorage({
    //   key: 'token',
    //   success: function (res) {
    //     app.func.getreq('customercenter/customer/query/customerAddress', '', res.data, function (res) {
    //       if (res.code == 0) {
    //         wx.hideLoading()
    //         if (res.addressList.length == 0){
    //           that.setData({
    //             empty:true
    //           })
    //         }
    //         for(let i = 0; i<res.addressList.length; i++){
    //           res.addressList[i].receiverMobile = res.addressList[i].receiverMobile.substr(0, 3) + '****' + res.addressList[i].receiverMobile.substr(7);
    //           if (res.addressList[i].defaultFlag == 1) {
    //             var index = res.addressList.indexOf(res.addressList[i]);
    //             that.setData({
    //               iconshow: index
    //             })
    //           }
    //         }
    //         that.setData({
    //           addressList: res.addressList,
    //         })
    //       } else {
    //         console.log('未知异常')
    //       }

    //     })
    //   }
    // })
  },

  // 新增地址
  add() {
    var self = this;
    if (!self.data.isBtnClicked) {
      wx.navigateTo({
        url: '../shipping-address/shipping-address?statue=1'
      })
      self.setData({
        isBtnClicked: true
      });
      setTimeout(function () {
        self.setData({
          isBtnClicked: false
        });
      }, 1000);
    }
  },

  // 删除地址
  touchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        //设置触摸起始点水平方向位置
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY
      });
    }
  },

  //触摸时触发，手指在屏幕上每移动一次，触发一次
  touchM: function (e) {
    // console.log("touchM:", e);
    var that = this;

    if (e.touches.length == 1) {
      //记录触摸点位置的X坐标
      var moveX = e.touches[0].clientX;
      var ce = that.data.startY - e.touches[0].clientY;
      // console.log("11:" + ce);
      if (ce <= -15 || ce >= 15) {
        return
      } else {
        //计算手指起始点的X坐标与当前触摸点的X坐标的差值
        var disX = that.data.startX - moveX;
        // console.log('disx:' + disX)
        //delBtnWidth 为右侧按钮区域的宽度
        var delBtnWidth = that.data.delBtnWidth;
        var txtStyle = "";
        var ces = 0;

        if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
          txtStyle = "left:" + 0 + "px";
          // ces = (delBtnWidth + disX);
          if (ces < 0) {
            // console.log("我出来过吗?")
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
        var list = that.data.addressList;
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
            addressList: list,
          });
      }
    }

  },

  touchE: function (e) {
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
      var list = that.data.addressList;
      list[index].txtStyle = txtStyle;
      list[index].litext = true
      list[index].delBtnWidth = 80,
        //更新列表的状态
        that.setData({
          addressList: list,
        });
    }
  },

  //地址返回上一个页面传值
  back(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var pages = getCurrentPages();//当前页面
    var prevPage = pages[pages.length - 2];//上一页面
    that.setData({
      addressList: that.data.addressList
    })

    prevPage.setData({//直接给上移页面赋值
      addresschose: that.data.addressList[index],
    });
    if (that.data.statue == "2") {
      wx.navigateBack({//返回
        delta: 1
      })
    }

  },

  //修改默认地址点击激活√
  img(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var list = that.data.addressList;
    console.log(index);
    // wx.getStorage({
    //   key: 'token',
    //   success: function (res) {
    //     app.func.getreq('customercenter/customer/update/updateDefaultAddress', { "id": list[index].id}, res.data, function (res) {
    //       if (res.code == 0) {
    //         console.log('网络成功')
    //       } else {
    //         console.log('未知异常')
    //       }
    //     })
    //   }
    // })
    that.setData({
      iconshow: index,
    });
  },

  //点击删除
  delAdd: function (e) {
    var that = this
    var list = that.data.addressList;
    var index = e.currentTarget.dataset.index;
    list[index].delBtnWidth = 120,
      list[index].litext = false;

    // wx.getStorage({
    //   key: 'token',
    //   success: function (res) {
    //     app.func.req('customercenter/customer/update/customerAddress', { "id": list[index].id, "aliveFlag": 0}, res.data, function (res) {
    //       if (res.code == 0) {
    //         console.log('网络成功');
    //         //移除列表中下标为index的项  
    //         console.log(index, 'index')
    //         console.log(list[index].id, '用户id')
    list.splice(index, 1);

    that.setData({
      addressList: list,
      empty: true
    })
    //       } else {
    //         console.log('未知异常')          
    //       }
    //     })
    //   }
    // })   
  },

  // 编辑
  redact(e) {
    var self = this;
    var index = e.target.dataset.index;
    self.setData({
      addressIndex:index
    })
    if (!self.data.isBtnClicked) {
      wx.navigateTo({
        url: '../shipping-address/shipping-address?name=' + self.data.addressList[index].receiverName + "&number=" + self.data.addressList[index].receiverMobile + "&proviceName=" + self.data.addressList[index].proviceName + "&cityName=" + self.data.addressList[index].cityName + "&districtName=" + self.data.addressList[index].districtName + "&address=" + self.data.addressList[index].address + "&tag=" + self.data.addressList[index].tag + "&id=" + self.data.addressList[index].id + "&star=3"
      })
      self.setData({
        isBtnClicked: true
      });
      setTimeout(function () {
        self.setData({
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
    // wx.showLoading({
    //   title: '加载中',
    // })

    var that = this;
    let pages = getCurrentPages();
    // 下一个页面
    let currPage = pages[pages.length - 1];
    if (currPage.data.receiverName1) {
      // that.setData({//将携带的参数赋值
      //   message2: currPage.data.message2
      // });
      let receiverName = currPage.data.receiverName1
      let receiverMobile = currPage.data.receiverMobile1
      let tag = currPage.data.tag1
      let proviceName = currPage.data.proviceName1
      let cityName = currPage.data.cityName1
      let districtName = currPage.data.districtName1
      let addressDetail = currPage.data.addressDetail1
      that.data.addressList.push({
        receiverName: receiverName,
        receiverMobile: receiverMobile,
        tag: tag,
        proviceName: proviceName,
        cityName: cityName,
        districtName: districtName,
        addressDetail: addressDetail,
      }) 
      // that.data.addressList[that.data.addressIndex] = that.data.message2;
      that.setData({
        addressList: that.data.addressList
      })
      console.log('回传数据', receiverName + receiverMobile + tag + receiverName + proviceName + cityName + districtName + districtName + addressDetail)
    }



    // wx.getStorage({
    //   key: 'token',
    //   success: function (res) {
    //     app.func.getreq('customercenter/customer/query/customerAddress', '', res.data, function (res) {
    //       if (res.code == 0) {
    //         wx.hideLoading()
    //         if (res.addressList.length == 0) {
    //           that.setData({
    //             empty: true
    //           })
    //         }
    //         console.log(res, '4545454545')
    //         for (let i = 0; i < res.addressList.length; i++) {
    //           res.addressList[i].receiverMobile = res.addressList[i].receiverMobile.substr(0, 3) + '****' + res.addressList[i].receiverMobile.substr(7);
    //           if (res.addressList[i].defaultFlag == 1) {
    //             console.log(res.addressList.indexOf(res.addressList[i]), 'morenmorenmoere');
    //             var index = res.addressList.indexOf(res.addressList[i]);
    //             that.setData({
    //               iconshow: index
    //             })
    //           }
    //         }
    //         that.setData({
    //           addressList: res.addressList,
    //         })
    //       } else {
    //         console.log('未知异常')
    //       }
    //     })
    //   }
    // })
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