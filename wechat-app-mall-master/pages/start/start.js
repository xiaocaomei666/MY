//login.js
//获取应用实例
var app = getApp();
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {}
  },
  // 进入订餐系统
  goToIndex:function(){
    wx.switchTab({
      url: '/pages/index/index',
    });
  },

  onLoad:function(){
    var that = this;
    // 改变导航栏标题
    wx.setNavigationBarTitle({
      title:'广师订餐'
    })
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo: userInfo
      })
    })
  },

  onShow:function(){

  },

  // 加载中的显示与隐藏
  onReady: function(){
    var that = this;
    setTimeout(function(){
      that.setData({
        remind: ''
      });
    }, 1000);
    
    //加速器
    wx.onAccelerometerChange(function(res) {
      var angle = -(res.x*30).toFixed(1);
      if(angle>14){ angle=14; }
      else if(angle<-14){ angle=-14; }
      if(that.data.angle !== angle){
        that.setData({
          angle: angle
        });
      }
    });
  }
});