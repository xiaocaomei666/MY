<template>
  <div>
<div class="footer">
  <div class="foot-by">
        <img src="http://static2.flowerplus.cn/Static/newpc/images/logo-b.svg" alt="" class="foot-img">
      <img src="http://static2.flowerplus.cn/Static/newpc/images/icon_wx.svg" alt="" class="coning" @click="okshow()">

    <img src="http://static2.flowerplus.cn/Static/newpc/images/icon_wb.svg" alt="" class="coning">
  </div>

  <div class="foot-middle">
    <ul class="foot-m-ul">
      <li>产品</li>
      <li>单品系列</li>
      <li>混合系列</li>
      <li> MINI系列</li>
      <li>礼品</li>
      <li>花瓶&周边</li>
    </ul>
    <ul class="foot-m-ul">
      <li>花加故事</li>
      <li>鲜花故事</li>
      <li>品牌故事</li>
      <li>花加团队</li>
    </ul>
    <ul class="foot-m-ul">
      <li>花加艺术</li>
      <!--<li>{{data1}}</li>-->
      <li @mouseenter="mouseEnter1(1)" @mouseleave="mouseLeave1()"  :class="{ullink:itemHoverIndex == 1}">{{data1}}</li>
      <li @mouseenter="mouseEnter2(2)" @mouseleave="mouseLeave2()"  :class="{ullink:itemHoverIndex == 2}">{{data2}}</li>

    </ul>
    <ul class="foot-m-ul">
      <li>商业合作</li>
      <li @mouseenter="mouseEnter3(3)" @mouseleave="mouseLeave3()"  :class="{ullink:itemHoverIndex == 3}">{{data3}}</li>
      <li @mouseenter="mouseEnter4(4)" @mouseleave="mouseLeave4()"  :class="{ullink:itemHoverIndex == 4}">{{data4}}</li>
      <li @mouseenter="mouseEnter5(5)" @mouseleave="mouseLeave5()"  :class="{ullink:itemHoverIndex == 5}">{{data5}}</li>
      <li @mouseenter="mouseEnter6(6)" @mouseleave="mouseLeave6()"  :class="{ullink:itemHoverIndex == 6}">{{data6}}</li>
      <li @mouseenter="mouseEnter7(7)" @mouseleave="mouseLeave7()"  :class="{ullink:itemHoverIndex == 7}">{{data7}} </li>
    </ul>
  </div>

  <div class="foot-r">
    <div class="call">
      <img src="http://static2.flowerplus.cn/Static/newpc/images/ewm.jpg" alt="">
      <p class="look">关注花加服务号<br>即刻订阅美好</p>
    </div>
    <div class="tel">
      <p>联系我们</p>
      <p class="f24">400-8885-928</p>
      <p class="f12">( 9:00-21:00 )</p>
    </div>
  </div>
  <div class="top">
    <img src="http://static2.flowerplus.cn/Static/newpc/images/icon_Top.svg" alt="" @click="backTop">
    <p>返回顶部</p>
  </div>

</div>
    <div class="foot-b">
      <p>Copyright@2017 flowerplus.cn Inc.All Rights Reserved. 上海分尚网络科技有限公司<br>版权所有 沪ICP备13016979</p>
    </div>


    <!--模态框-->
    <div class="popshow" v-if="ok" @click="maskshow()">
    <div class="mask"></div>
    <div class="pop">
      <img src="http://static2.flowerplus.cn/Static/newpc/images/ewm.jpg" alt="">
    </div>
    </div>
  </div>
</template>

<style scoped>
.footer{
  height: 41vh;
  min-height: 260px;
  background: #fff;
  overflow: hidden;
  border-bottom: #666 solid .5px;
  display: flex;
  display: -webkit-flex;
  display: -o-flex;
  align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  position: relative;
}
  .foot-by{
    width: 25%;
    float: left;
    padding-left: 6%;
    box-sizing: border-box;
    cursor: pointer;
  }
  .foot-img{
    width: 55%;
    display: block;
    margin-bottom: 55px;
  }
  .coning{
    width: 40px;
    opacity: .6;
    margin-right: 6.26%;
    display: inline-block;
    transition: all 800ms ease;
    -moz-transition: all 800ms ease;
    -webkit-transition: all 800ms ease;
  }



  /*middle*/
.foot-middle{
  float: left;
  width: 35%;
  padding: 0 7.5%;
  display: flex;
  display: -webkit-flex;
  border-right: #666 solid 1px;
  border-left: #666 solid 1px;
  justify-content: space-around;
}
  .foot-m-ul{
    color: #666;
    line-height: 30px;
    letter-spacing: 3px;
    width: 100px;
  }
.foot-m-ul>li{
  cursor: pointer;
  color: #666;
  font-size: 12px;
}
.foot-m-ul li:first-child {
  padding-bottom: 18px;
  border-bottom: 1px solid #000;
  margin-bottom: 18px;
  font-weight: bold;
  color: #000;
  display: inline-block;
}


  .foot-r{
    width: 24%;
    float: left;
    color: #000;
    padding-left: 3%;
    box-sizing: border-box;
    letter-spacing: 2px;
    display: flex;
    display: -webkit-flex
  }
  .call{
    width: 35%;
    min-width: 115px;
    text-align: center;
    margin-right: 9%;
    line-height: 20px;
  }
.call>img{
  width: 100%;
  vertical-align: middle;
}
  .look{
    margin-top: 11px;
    margin-bottom: 5px;
    font-size: 12px;
  }
  .tel{
    min-width: 150px;
    letter-spacing: 2px;
  }
.tel p:nth-child(2) {
  margin-top: 11px;
  margin-bottom: 5px;
  font-size: 18px;
}
.tel p:nth-child(3) {
  margin-bottom: 55px;
  font-weight: bold;
  font-size: 12px;
}


  .top{
    position: absolute;
    top: 57%;
    right: 0%;
    width: 10%;
    text-align: center;
    cursor: pointer;
    color: #000;
    letter-spacing: 4px;
    font-size: 12px;
  }
  .top>img{
    width: 25px;
    height: 25px;
    margin-bottom: 13px;
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    transition: all 800ms ease;
    -moz-transition: all 800ms ease;
    -webkit-transition: all 800ms ease;
  }

  .foot-b{
    color: #000;
    letter-spacing: 3px;
    text-align: center;
    line-height: 28px;
    display: -webkit-box;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-align-items: center;
    height: 17vh;
    background: #fff;
    font-size: 12px ;
  }

  /*模态框*/
.popshow{
  -webkit-animation: showBoxAnimate .35s ease;
  animation: showBoxAnimate .35s ease;
  display: block !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;

}
  .mask{
    background: rgba(0,0,0,.7);
    width: 100%;
    height: 100%;
  }
  .pop{
  position: absolute;
  top: 15%;
  left: 50%;
  width: 20%;
  min-width: 240px;
  transform: translateX(-50%);
  }
  .pop>img{
    width: 100%;
    vertical-align: middle;
  }
  .ullink{
    text-decoration: line-through;
  }
  .rou{
    display:inline-block;
  }
</style>

<script>
  export default{
      data(){
          return{
              ok:false,
            data1:'跨界创作',
            data2:'花艺大师',
            data3:'集合采购',
            data4:'品牌合作',
            data5:'渠道合作',
            data6:'媒体合作',
            data7:'花艺师合作',
            itemHoverIndex:''

          }
      },
    methods:{
      okshow(){
          this.ok=true;
      },
      maskshow(){
        this.ok=false;
      },
      mouseEnter1(index){
        this.itemHoverIndex = index;
        this.data1 = '即将到来';
      },
      mouseLeave1(){
        this.itemHoverIndex = null;
        this.data1 = '跨界创作';
      },
      mouseEnter2(index){
        this.itemHoverIndex = index;
        this.data2 = '即将到来';
      },
      mouseLeave2(){
        this.itemHoverIndex = null;
        this.data2 = '花艺大师';
      },
      mouseEnter3(index){
        this.itemHoverIndex = index;
        this.data3 = '即将到来';
      },
      mouseLeave3(){
        this.itemHoverIndex = null;
        this.data3 = '集合采购';
      },
      mouseEnter4(index){
        this.itemHoverIndex = index;
        this.data4 = '即将到来';
      },
      mouseLeave4(){
        this.itemHoverIndex = null;
        this.data4 = '品牌合作';
      },
      mouseEnter5(index){
        this.itemHoverIndex = index;
        this.data5 = '即将到来';
      },
      mouseLeave5(){
        this.itemHoverIndex = null;
        this.data5 = '渠道合作';
      },
      mouseEnter6(index){
        this.itemHoverIndex = index;
        this.data6= '即将到来';
      },
      mouseLeave6(){
        this.itemHoverIndex = null;
        this.data6 = '媒体合作';
      },
      mouseEnter7(index){
        this.itemHoverIndex = index;
        this.data7 = '即将到来';
      },
      mouseLeave7(){
        this.itemHoverIndex = null;
        this.data7 = '花艺师合作';
      },
      backTop() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    }
  }
</script>
