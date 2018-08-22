// pages/questions/questions.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //问题描述
    questionBeans: [
      {
        'title': '订餐小程序的配送范围',
        'desc': [
          '学生宿舍',
          '教学楼',
          '工业中心',
          '实验楼',
          '行政楼',
          '校医室'
        ]
      },
      {
        'title': '订餐时间和配送时间',
        'desc': [
          '订餐时间',
          '配送时间',
        ]
      },
      {
        'title': '食堂可消费时段和学校食堂节假日时间安排',
        'desc': [
          '食堂可消费时段',
          '学校食堂节假日时间安排'
        ]
      },
      {
        'title': '新用户优惠的问题',
        'desc': [
          '新用户首单立减5元',
        ]
      }
    ],
    //
    questionChoose: '',
    //问题显示与隐藏
    questionShow: false,
    //问题的下标
    questionIndex: '-1',
    //具体问题的下标
    questiondescIndex: '',
    //按钮是否被点击
    isBtnClicked: false,
    // 大标题
    titleIndex:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //点击向右箭头
  tapQuestion(e) {
    var that = this;
    console.log(e.currentTarget.dataset.item);
    console.log(e.currentTarget.dataset.index);
    that.setData({
      titleIndex: e.currentTarget.dataset.index
    })
    that.setData({
      questionShow: !that.data.questionShow,
      questionIndex: e.currentTarget.dataset.index
    });
  },

  //点击具体描述
  tapQuestionDesc(e) {
    var that = this;
    console.log(e.currentTarget.dataset.index);
    console.log(e.currentTarget.dataset.item);

    that.setData({
      questionChoose: e.currentTarget.dataset.item,
      questionShow: true,
      questiondescIndex: e.currentTarget.dataset.index + 1
    })

    if (!that.data.isBtnClicked) {
      wx.navigateTo({
        url: '../question-desc/question-desc?id=' + that.data.questionChoose + '&index=' + that.data.questiondescIndex + '&titleIndex=' + that.data.titleIndex
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