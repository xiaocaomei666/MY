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
    // meal: true,
    // 产品详情图
    product: [
      {
        "img": "../../images/index_commodity.jpg",
      }
    ],
    // 记录商品选择与否
    clickProduct1: '-1',
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
    // // 用于储存品类水卡
    // categorySet: [],
    // categorySetn: [],
    // // 用于储存套餐
    // stylesSet: [],
    // stylesSetn: [],
    // // 用于储存规格水卡
    // litreSet: [],
    // litreSetn: [],
    // // 用于储存品类单桶
    // categoryoneset: [],
    // categoryonesetn: [],
    // litreoneset: [],
    // litreonesetn: [],
    gift: '',  //限时赠品
    money: [],  //价格数组
    cartArray: [], //存储的商品数组
    typeItem: '', //选择的类型
    sizeItem: '',//选择的规格
    imageSmall: '', //存储的图片
    place: '',//出售的地点
    optionId: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let id = options.id;
    console.log(options, '吃大餐的数据')
    that.setData({
      optionId: id
    })
    // 根据不同id显示不同的商品详情
    if (id == 0) {
      // 甜品蛋糕
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
        "price": "10-30"
      };
      that.data.category = ["水果生日蛋糕", "巧克力生日蛋糕", "黑森林小蛋糕", "芝士小蛋糕", "慕斯小蛋糕"];
      that.data.litre = ["大", "小"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/cake1.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/drink2.jpg",
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
      ];
      that.data.gift = "限时赠品：精美小蛋糕*1,送完即止";
      that.data.money = [30, 25, 25, 20, 8, 6, 9, 7, 6, 4];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/timg.jpg";
      that.data.place = "春三";
    } else if (id == 1) {
      // Q堡堡
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/q1.jpg',
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/q4.jpg",
        }
      ];
      that.data.des = {
        "title": "Q堡堡",
        "declare": "北区食堂门口Q堡堡，各种套餐优惠，满25元送货上门",
        "price": "8-30"
      };
      that.data.category = ["奥尔良鸡翅", "香辣大鸡腿", "鸡块", "鸡肉堡", "脆皮炸全鸡", "鸡肉卷", "紫薯派/菠萝派", "薯条", "川香鸡柳"];
      that.data.litre = ["大", "小"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/q2.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/q3.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/q1.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/q5.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/q4.jpg",
        },
      ];
      that.data.gift = "限时优惠：前10名消费送薯条一份，送完即止";
      that.data.money = [5, 8, 8, 10, 1, 2, 8, 9, 15, 20, 8, 10, 5, 6, 4, 5, 2, 3];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/q6.jpg";
      that.data.place = "北区饭堂门口Q堡堡";
    } else if (id == 2) {
      // 夏日凉品
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/drink0.gif',
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/drink4.jpg",
        }
      ];
      that.data.des = {
        "title": "堂茶学院店",
        "declare": "学院后门堂茶，新品上市，品类繁多，供您选择",
        "price": "5-13"
      };
      that.data.category = ["柠檬茶", "芒果奶盖", "草莓沙冰", "双皮奶", "百香柠檬", "烤奶茶", "抹茶红豆沙冰", "西柚芦荟茶", "巧克力布丁"];
      that.data.litre = ["大杯", "小杯"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/drink.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/drink3.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/drink4.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/drink5.jpg",
        },
      ];
      that.data.gift = "夏日优惠：满35元赠送小蛋糕一份，送完即止";
      that.data.money = [8, 10, 9, 11, 8, 10, 5, 6, 11, 12, 8, 10, 11, 13, 8, 10, 8, 9];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/drink6.jpg";
      that.data.place = "学院后门堂茶店"
    } else if (id == 3) {
      // 鸡腿饭
      that.data.des = {
        "title": "鸡腿饭",
        "declare": "北区饭堂、春一饭堂有鸡腿饭，饭量很足，满25元送货上门，请提前预定",
        "price": 8,
        "pricedel": 8.5
      };

      that.data.litre = ["北区","春一"];
      that.data.gift = "9.5折";
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chick2.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chick4.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chick1.jpg',
        }
      ];
      that.data.category = ["鸡腿饭(大份)", "鸡腿饭(小份)"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/chick1.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/chick2.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/chick5.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chick3.jpg',
        }
      ];
      that.data.money = [8, 8, 7, 7];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/chick6.jpg";
    } else {
      // 饭点的东西 
      that.data.des = {
        "title": options.title,
        "declare": options.declare,
        "price": options.price,
        "pricedel": options.pricedel
      };
      that.data.litre = options.place.split(" ");
      that.data.gift = options.gift;
      that.setData({
        indexSlider: that.data.indexSlider,
        des: that.data.des,
        category: that.data.category,
        styles: that.data.styles,
        litre: that.data.litre,
        product: that.data.product,
        gift: that.data.gift,
        money: that.data.money,
        imageSmall: that.data.imageSmall,
        place: that.data.place
      })
    }
    if (id == 4) {
      // 煎饼果子
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/pie2.jpg',
        }
      ];
      that.data.category = ["肉松煎饼果子", "鸡蛋煎饼果子", "任意双拼煎饼果子"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/pie1.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/pie2.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/pie3.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/pie4.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/pie5.jpg",
        }
      ];
      that.data.money = [3, 3, 3, 3, 3, 3,];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/pie6.jpg";
    } else if (id == 5) {
      // 豆浆油条
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/dou.jpg',
        }
      ];
      that.data.category = ["豆浆", "油条", "豆浆油条"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/dou2.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/dou3.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/dou.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/dou4.jpg",
        }
      ];
      that.data.money = [1, 1, 1, 1, 2, 2];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/dou5.jpg";
    } else if (id == 6) {
      // 天下包子
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/bread8.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/bread5.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/bread1.jpg',
        }
      ];
      that.data.category = ["肉包", "菜包", "叉烧包", "牛角面包", "肉松包", "吐司", "奶油包"];
      that.data.product = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/bread6.jpg',
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/bread2.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/bread3.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/bread7.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/bread5.jpg",
        }
      ];
      that.data.money = [1.5, 1.5, 1, 1, 1.5, 1.5, 2, 2, 2.5, 2.5, 3, 3, 2.5, 2.5];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/bread4.jpg";
    } else if (id == 7) {
      // 五彩饺子
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/dumpling6.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/dumpling3.jpg',
        }
      ];
      that.data.category = ["韭菜蒸饺", "白菜蒸饺", "三鲜水饺", "猪肉水饺",];
      that.data.product = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/dumpling4.jpg',
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/dumpling.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/dumpling5.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/dumpling2.jpg',
        }
      ];
      that.data.money = [3, 3, 3.5, 3.5, 3.5, 3.5, 4, 4];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/dumpling7.jpg";
    } else if (id == 8) {
      // 丝滑肠粉
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/roll1.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/roll4.jpg',
        }
      ];
      that.data.category = ["鸡蛋肠", "鸡蛋瘦肉肠", "布达拉肠"];
      that.data.product = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/roll2.jpg',
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/roll3.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/roll5.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/roll1.jpg',
        }
      ];
      that.data.money = [3, 3, 3.5, 3.5, 3, 3];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/roll6.jpg";
    } else if (id == 9) {
      // 炒粉面
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/noddle2.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/noddle6.jpg',
        }
      ];
      that.data.category = ["炒河粉", "炒米线", "炒面"];
      that.data.product = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/noddle3.jpg',
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/noddle4.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/noddle5.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/noddle6.jpg',
        }
      ];
      that.data.money = [5, 5, 5, 5, 5, 5];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/noddle4.jpg";
    } else if (id == 10) {
      // 粥
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/zhou4.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/zhou7.jpg',
        }
      ];
      that.data.category = ["皮蛋瘦肉粥", "鸡蛋粥", "薏米粥", "五谷杂粮粥"];
      that.data.product = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/zhou1.jpg',
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/zhou2.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/zhou3.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/zhou6.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/zhou5.jpg',
        }
      ];
      that.data.money = [3, 3, 2.5, 2.5, 3, 3, 4, 4];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/zhou1.jpg";
    } else if (id == 11) {
      // 牛奶饮品
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/milk5.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/milk6.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/milk7.jpg',
        }
      ];
      that.data.category = ["椰子牛奶", "水果牛奶", "布丁牛奶", "酸牛奶", "纯牛奶", "高钙奶"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/milk2.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/milk3.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/milk5.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/milk4.jpg',
        }
      ];
      that.data.money = [3, 3, 3.5, 3.5, 3, 3, 4, 4, 3.5, 3.5, 4, 4];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/milk1.jpg";
    } else if (id == 12) {
      // 鸡腿饭
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chick2.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chick4.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chick1.jpg',
        }
      ];
      that.data.category = ["鸡腿饭(大份)", "鸡腿饭(小份)"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/chick1.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/chick2.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/chick5.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chick3.jpg',
        }
      ];
      that.data.money = [8, 8, 7, 7];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/chick6.jpg";
    } else if (id == 13) {
      // 香煎牛扒
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/cow6.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/cow4.jpg',
        }
      ];
      that.data.category = ["香煎牛扒(大份)", "香煎牛扒(小份)"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/cow1.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/cow3.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/cow5.jpg',
        }
      ];
      that.data.money = [9, 9, 8, 8];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/cow4.jpg";
    } else if (id == 14) {
      // 牛腩饭
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/cowrice.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/cowrice3.jpg',
        }
      ];
      that.data.category = ["牛腩饭(大份)", "牛腩饭(小份)"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/cowrice2.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/cowrice5.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/cowrice4.jpg",
        }
      ];
      that.data.money = [10, 10, 9.5, 9.5];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/cowrice4.jpg";
    } else if (id == 15) {
      // 黄焖鸡米饭
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chickrice3.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chickrice2.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chickrice.jpg',
        }
      ];
      that.data.category = ["黄焖鸡米饭(大份)", "黄焖鸡米饭(小份)"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/chickrice4.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/chickrice5.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/chickrice6.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/chickrice.jpg',
        }
      ];
      that.data.money = [10, 10, 9.5, 9.5];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/chickrice7.jpg";
    } else if (id == 16) {
      // 招牌牛筋丸粉面
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/niujinwan2.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/niujinwan1.jpg',
        }
      ];
      that.data.category = ["牛筋丸河粉", "牛筋丸米线", "牛筋丸面"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/niujinwan2.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/niujinwan4.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/niujinwan1.jpg",
        }
      ];
      that.data.money = [6, 6, 6, 6, 6, 6];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/niujinwan2.jpg";
    } else if (id == 17) {
      // 潮汕猪脚饭
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/pigleg2.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/pigleg6.jpg',
        }
      ];
      that.data.category = ["潮汕猪脚饭饭(大份)", "潮汕猪脚饭(小份)"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/pigleg.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/pigleg3.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/pigleg4.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/pigleg5.jpg',
        }
      ];
      that.data.money = [8, 8, 7, 7];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/pigleg3.jpg";
    } else if (id == 18) {
      // 煲子饭
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/sons4.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/sons5.jpg',
        }
      ];
      that.data.category = ["煲仔饭(大份)", "煲仔饭(小份)"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/sons1.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/sons2.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/sons3.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/sons6.jpg',
        }
      ];
      that.data.money = [10, 10, 9, 9];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/sons1.jpg";
    } else if (id == 19) {
      // 糖醋排骨
      that.data.indexSlider = [
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/tcpg.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/tcpg2.jpg',
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/tcpg5.jpg',
        }
      ];
      that.data.category = ["糖醋排骨(大份)", "糖醋排骨(小份)"];
      that.data.product = [
        {
          "img": "http://p701vezuq.bkt.clouddn.com/tcpg3.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/tcpg4.jpg",
        },
        {
          "img": "http://p701vezuq.bkt.clouddn.com/tcpg5.jpg",
        },
        {
          'img': 'http://p701vezuq.bkt.clouddn.com/tcpg6.jpg',
        }
      ];
      that.data.money = [6, 6, 5, 5];
      that.data.imageSmall = "http://p701vezuq.bkt.clouddn.com/tcpg3.jpg";
    }
    that.setData({
      indexSlider: that.data.indexSlider,
      des: that.data.des,
      category: that.data.category,
      styles: that.data.styles,
      litre: that.data.litre,
      product: that.data.product,
      gift: that.data.gift,
      money: that.data.money,
      imageSmall: that.data.imageSmall,
      place: that.data.place
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
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.setData({
      clickProduct1: e.currentTarget.dataset.index,
      typeItem: that.data.category[index]
    })
    console.log("点击类型", that.data.typeItem);
    let clickProduct1 = that.data.clickProduct1;
    let clickProduct3 = that.data.clickProduct3;
    let money = that.data.money;
    if (clickProduct3 != '-1') {
      for (let i = 0; i < ((money.length) / 2); i++) {
        if (clickProduct1 == i && clickProduct3 == 0) {
          that.data.des.price = money[2 * i];
        } else if (clickProduct1 == i && clickProduct3 == 1) {
          that.data.des.price = money[(2 * i) + 1];
        }
      }
      that.setData({
        des: that.data.des
      })
    }
  },

  // 点击规格
  clickProductSize(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.setData({
      clickProduct3: e.currentTarget.dataset.index,
    })

    if (that.data.optionId > 2) {
      that.setData({
        place: that.data.litre[index]
      })
    } else {
      that.setData({
        sizeItem: that.data.litre[index]
      })
    }
    console.log("点击规格", that.data.sizeItem);
    let clickProduct1 = that.data.clickProduct1;
    let clickProduct3 = that.data.clickProduct3;
    let money = that.data.money;
    if (clickProduct1 != '-1') {
      for (let i = 0; i < ((money.length) / 2); i++) {
        if (clickProduct1 == i && clickProduct3 == 0) {
          that.data.des.price = money[2 * i];
        } else if (clickProduct1 == i && clickProduct3 == 1) {
          that.data.des.price = money[(2 * i) + 1];
        }
      }
      that.setData({
        des: that.data.des
      })
    }
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

  // 加入购物车  cartArray
  addcars(e) {
    var that = this;
    if (that.data.clickProduct1 == '-1') {
      wx.showToast({
        title: '请选择类型',
        icon: 'none',
        duration: 1000
      })
    } else if (that.data.clickProduct3 == '-1') {
      wx.showToast({
        title: '请选择规格',
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
      var skuName = that.data.typeItem;
      var capacity = that.data.sizeItem;
      var price = that.data.des.price;
      var buyQuantity = that.data.num;
      var place = that.data.place;

      if (wx.getStorageSync('cartArray').length != 0) {
        var cartArray = wx.getStorageSync('cartArray');
      } else {
        var cartArray = that.data.cartArray
      }
      var imageSmall = that.data.imageSmall;
      for (let i = 0; i < carnum + 1; i++) {
        var cartArrayObj = {};
        cartArrayObj.skuName = skuName;
        cartArrayObj.capacity = capacity;
        cartArrayObj.price = price;
        cartArrayObj.buyQuantity = buyQuantity;
        cartArrayObj.imageSmall = imageSmall;
        cartArrayObj.place = place;
      }
      cartArray.push(cartArrayObj);
      that.setData({
        cartArray: cartArray
      })
      console.log('加入购物车数组', that.data.cartArray);
      wx.setStorageSync('cartArray', that.data.cartArray);
    }
  },

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
            title: '请选择类型',
            icon: 'none',
            duration: 1000
          })
        } else if (that.data.clickProduct3 == '-1') {
          wx.showToast({
            title: '请选择规格',
            icon: 'none',
            duration: 1000
          })
        } else {
          var carnum = that.data.carnum;
          console.log(carnum, '555')
          carnum = carnum + 1
          that.setData({
            carnum: carnum,
            redshow: true
          })
          var skuName = that.data.typeItem;
          var capacity = that.data.sizeItem;
          var price = that.data.des.price;
          var buyQuantity = that.data.num;
          var place = that.data.place;

          if (wx.getStorageSync('cartArray').length != 0) {
            var cartArray = wx.getStorageSync('cartArray');
          } else {
            var cartArray = that.data.cartArray
          }
          var imageSmall = that.data.imageSmall;
          for (let i = 0; i < carnum + 1; i++) {
            var cartArrayObj = {};
            cartArrayObj.skuName = skuName;
            cartArrayObj.capacity = capacity;
            cartArrayObj.price = price;
            cartArrayObj.buyQuantity = buyQuantity;
            cartArrayObj.imageSmall = imageSmall;
            cartArrayObj.place = place;
          }
          cartArray.push(cartArrayObj);
          that.setData({
            cartArray: cartArray
          })
          console.log('加入购物车数组', that.data.cartArray);
          wx.setStorageSync('cartArray', that.data.cartArray);
        
          wx.switchTab({
            url: '../shopping-trolley/shopping-trolley',
          })
        }
      } else {
        if (that.data.clickProduct1 == '-1') {
          wx.showToast({
            title: '请选择类型',
            icon: 'none',
            duration: 1000
          })
        } else if (that.data.clickProduct3 == '-1') {
          wx.showToast({
            title: '请选择规格',
            icon: 'none',
            duration: 1000
          })
        } else {
          var carnum = that.data.carnum;
          console.log(carnum, '555')
          carnum = carnum + 1
          that.setData({
            carnum: carnum,
            redshow: true
          })
          var skuName = that.data.typeItem;
          var capacity = that.data.sizeItem;
          var price = that.data.des.price;
          var buyQuantity = that.data.num;
          var place = that.data.place;

          if (wx.getStorageSync('cartArray').length != 0) {
            var cartArray = wx.getStorageSync('cartArray');
          } else {
            var cartArray = that.data.cartArray
          }
          var imageSmall = that.data.imageSmall;
          for (let i = 0; i < carnum + 1; i++) {
            var cartArrayObj = {};
            cartArrayObj.skuName = skuName;
            cartArrayObj.capacity = capacity;
            cartArrayObj.price = price;
            cartArrayObj.buyQuantity = buyQuantity;
            cartArrayObj.imageSmall = imageSmall;
            cartArrayObj.place = place;
          }
          cartArray.push(cartArrayObj);
          that.setData({
            cartArray: cartArray
          })
          console.log('加入购物车数组', that.data.cartArray);
          wx.setStorageSync('cartArray', that.data.cartArray);

          wx.switchTab({
            url: '../shopping-trolley/shopping-trolley',
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