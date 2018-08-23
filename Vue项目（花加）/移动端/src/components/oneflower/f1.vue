<template>
<div id="box">

    <!--轮播图-->
    <div class="fSpireSlider">
        <mt-swipe :auto="3000" class="fSpire">
            <mt-swipe-item v-for="(item,index) in sliderList">
                <img :src="item">
            </mt-swipe-item>
        </mt-swipe>
        <!--<span class="fSpireDir">{{value}} / {{length}}</span>-->

    </div>

    <!--中间内容-->
    <div>
        <!--文字展示-->
        <ul class="f1Ul">
            <li v-for="item in sliderDesc">
                <p class="f1Title">{{item.title}}</p>
                <p class="f1Desc">{{item.desc}}</p>
                <p class="f1Money">{{item.money}}</p>
            </li>
        </ul>
        <!--图标-->
        <div class="f1Dl">
            <dl v-for="item in sliderIcon">
                <dt><img :src="item.img"></dt>
                <dd>{{item.des}}</dd>
            </dl>
        </div>
        <!--促销-->
        <div class="f1Pay">
            <p class="f1PayLeft">促销</p>
            <ul class="f1PayMiddle">
                <li>赠送</li>
                <li>加价购</li>
            </ul>
            <ul class="f1PayNew">
                <li v-for="item in sliderNew" >{{item}}</li>
            </ul>
        </div>
        <!--图片展示区域-->
        <div class="f1ImageShow">
            <ul>
                <li v-for="item in sliderOne">
                    <img :src="item">
                </li>
            </ul>
            <ul>
                <li v-for="item in sliderImage">
                    <img :src="item">
                </li>
            </ul>
        </div>
        <!--点击图片加载首页-->
        <div class="f1ImageShow">
            <ul>
                <router-link to="/home" v-for="item in sliderMore">
                    <img :src="item">
                </router-link>
            </ul>
        </div>

    </div>

    <!--立即订阅-->
    <div class="fBook">
        <router-link to="/home" class="fBookHome">
            <img src="../../../statics/images/15107329934190.svg" alt="首页">
        </router-link>
        <router-link to="/book" class="subscription">立即订阅</router-link>
    </div>

</div>
</template>

<script>
    
    export default{
       data(){
           return{
               value:0,
               length:0,
               sliderList:[
//                   'http://oss.flowerplus.cn/product/20170607/14968310272005.jpg!60',
//                   'http://oss.flowerplus.cn/product/20170607/14968310339947.jpg!60',
//                   'http://oss.flowerplus.cn/product/20170607/14968310369207.jpg!60',
//                   'http://oss.flowerplus.cn/product/20170607/14968310382558.jpg!60'
               ],
               sliderList1:[
                   '../../../statics/images/14968310272005.jpg',
                   '../../../statics/images/14968310339947.jpg',
                   '../../../statics/images/14968310369207.jpg',
                   '../../../statics/images/14968310382558.jpg'
               ],
               sliderList2:[
                   '../../../statics/images/15051827262693.jpg',
                   '../../../statics/images/14998319849732.jpg',
                   '../../../statics/images/14998319823783.jpg',
                   '../../../statics/images/14998319907978.jpg'
               ],
               sliderList3:[
                   '../../../statics/images/15008675221474.jpg',
                  '../../../statics/images/15008675259555.jpg',
                  '../../../statics/images/15008675276591.jpg'
               ],
               sliderList4:[
                   '../../../statics/images/15095009625809.jpg', 
                   '../../../statics/images/15095009491987.jpg', 
                   '../../../statics/images/15095009517593.jpg',
                   '../../../statics/images/15095009549469.jpg',
                   '../../../statics/images/15095009588145.jpg'
               ],
               sliderList5:[
                   '../../../statics/images/15051826811692.jpg', 
                   '../../../statics/images/15008924243465.jpg', 
                   '../../../statics/images/15008924292111.jpg',
                   '../../../statics/images/15054454346143.jpg'
               ],

               sliderDesc:[
//                   {title:'简花-单品鲜花包月套餐'},
//                   {desc:'经典单品，新手必备；每周配送1次，每次1束，每月共4束。'},
//                   {money:'￥ 99-1176'},
               ],
               sliderDesc1:[
                   {title:'简花-单品鲜花包月套餐'},
                   {desc:'经典单品，新手必备；每周配送1次，每次1束，每月共4束。'},
                   {money:'￥ 99-1176'},
               ],
               sliderDesc2:[
                   {title:'简花优选-优质单品包月套餐'},
                   {desc:'新用户首单送JULY花瓶，每周限量主题花预选。'},
                   {money:'￥ 179-2148'},
               ],
               sliderDesc3:[
                   {title:'惠花PLUS-自由双拼包月套餐'},
                   {desc:'单混交替，自由组合；每周交替配送1次，每次1束，每月共4束.'},
                   {money:'￥ 99-4776'},
               ],
               sliderDesc4:[
                   {title:'奇花—单品鲜花全球购'},
                   {desc:'新用户首单送JULY花瓶.'},
                   {money:'￥ 169-329'},
                   {delmoney:'价格￥199-399'}
               ],
               sliderDesc5:[
                   {title:'挚爱-玫瑰进口版包月套餐'},
                   {desc:'新用户首单送赫柏花瓶，来自厄瓜多尔、哥伦比亚等盛产的贵族玫瑰，每月4束，每周1束。'},
                   {money:'￥ 399-4788'},
                   {delmoney:''}
               ],

               sliderIcon:[
                   {img:'../../../statics/images/15107329932033.svg',des:'产地直采'},
                   {img:'../../../statics/images/15107329932033.svg',des:'花损赔付'},
                   {img:'../../../statics/images/15107329932033.svg',des:'准时送达'}
               ],

               sliderNew:[
//                   '新用户首单赠送INS花瓶',
//                   '购买套餐可优惠换购配件商品'
               ],
               sliderNew1:[
                   '新用户首单赠送INS花瓶',
                   '购买套餐可优惠换购配件商品'
               ],
               sliderNew2:[
                   '新用户首单赠送July花瓶',
                   '购买套餐可优惠换购配件商品'
               ],
               sliderNew3:[
                   '新用户首单赠送INS花瓶',
                   '购买套餐可优惠换购配件商品'
               ],
               sliderNew4:[
                   '新用户首单赠送July花瓶',
                   '购买套餐可优惠换购配件商品'
               ],
               sliderNew5:[
                   '新用户首单赠送赫柏花瓶',
                   '购买套餐可优惠换购配件商品'
               ],

               sliderOne:[
//                   'http://oss.flowerplus.cn/tmp/image/20170817/1502964613425278.jpg!60'
               ],
               sliderOne1:[
                   '../../../statics/images/1502964613425278.jpg'
               ],
               sliderOne2:[
                   '../../../statics/images/1499745175860509.jpg'
               ],
               sliderOne3:[
                   '../../../statics/images/1495593933378991.gif'
               ],
               sliderOne4:[
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593933378991.gif!60'
               ],
               sliderOne5:[
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593933378991.gif!60'
               ],

               sliderImage:[
//                   'http://oss.flowerplus.cn/tmp/image/20170801/1501563893861990.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593435894892.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593435636360.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593436490209.gif!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170619/1497840499523695.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170923/1506140616125767.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593436561109.gif!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593436151307.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593436982757.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593436971177.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170719/1500456295618207.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20171211/1512985555355259.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20171213/1513178001855124.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593436966553.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170725/1500960073302416.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593436732728.jpg!60',
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593436396455.jpg!60',
               ],
               sliderImage1:[
                   '../../../statics/images/1501563893861990.jpg',
                   '../../../statics/images/1495593435894892.jpg',
                   '../../../statics/images/1495593435636360.jpg',
                   '../../../statics/images/1495593436490209.gif',
                   '../../../statics/images/1497840499523695.jpg',
                   '../../../statics/images/1506140616125767.jpg',
                   '../../../statics/images/1495593436561109.gif',
                   '../../../statics/images/1495593436151307.jpg',
                   '../../../statics/images/1495593436982757.jpg',
                   '../../../statics/images/1495593436971177.jpg',
                   '../../../statics/images/1500456295618207.jpg',
                   '../../../statics/images/1512985555355259.jpg',
                   '../../../statics/images/1513178001855124.jpg',
                   '../../../statics/images/1495593436966553.jpg',
                   '../../../statics/images/1500960073302416.jpg',
                   '../../../statics/images/1495593436732728.jpg',
                   '../../../statics/images/1495593436396455.jpg',
               ],
               sliderImage2:[
                   '../../../statics/images/1499745175946316.jpg',
                   '../../../statics/images/1499745175139530.jpg',
                   '../../../statics/images/1499745175704463.jpg',
                   '../../../statics/images/1499745175446819.gif',
                   '../../../statics/images/1499745175738388.jpg',
                   '../../../statics/images/1499745175892831.jpg',
                   '../../../statics/images/1499745175366743.jpg',
                   '../../../statics/images/1499745175971672.jpg',
                   '../../../statics/images/1499745175445332.jpg',
                   '../../../statics/images/1506414738243482.jpg',
                   '../../../statics/images/1499745176962992.gif',
                   '../../../statics/images/1499745176710234.jpg',
                   '../../../statics/images/1499745176328893.jpg',

                   '../../../statics/images/1499745176731273.jpg',
                   '../../../statics/images/1500456202597055.jpg',
                   '../../../statics/images/1495593436732728.jpg',
                   '../../../statics/images/1495593436396455.jpg',
               ],
               sliderImage3:[
                   '../../../statics/images/1495593933190646.jpg',
                   '../../../statics/images/1495593933813288.jpg',
                   '../../../statics/images/1495593933235471.jpg',
                   '../../../statics/images/1495593934438216.gif',
                   '../../../statics/images/1495593934985277.jpg',
                   '../../../statics/images/1495593934706870.gif',
                   '../../../statics/images/1495593934427891.jpg',
                   '../../../statics/images/1508815866235492.gif',
                   '../../../statics/images/1495593934937020.jpg',
                   '../../../statics/images/1495593934580026.gif',
                   '../../../statics/images/1495593934703889.jpg',
                   '../../../statics/images/1495593934467900.jpg',

                   '../../../statics/images/1499745176731273.jpg',
                   '../../../statics/images/1500456202597055.jpg',
                   '../../../statics/images/1495593436732728.jpg',
                   '../../../statics/images/1495593436396455.jpg',
               ],
               sliderImage4:[
                   '../../../statics/images/1509500772991439.jpg',
                   '../../../statics/images/1509500772861701.jpg',
                   '../../../statics/images/1509500772745581.jpg',
                   '../../../statics/images/1509507859252268.jpg',
                   '../../../statics/images/1509507871706471.jpg',
                   '../../../statics/images/1509500773106137.gif',
                   '../../../statics/images/1509500773277960.jpg',
                   '../../../statics/images/1509503265478401.jpg',
                   '../../../statics/images/1509500773561696.jpg',
                   '../../../statics/images/1513147751326710.jpg',
                   '../../../statics/images/1509500774629086.jpg',
               ],
               sliderImage5:[
                   '../../../statics/images/1500892691331814.jpg',
                   '../../../statics/images/1500892691188818.jpg',
                   '../../../statics/images/1500892691885744.jpg',
                   '../../../statics/images/1500968676114570.jpg',
                   '../../../statics/images/1500968688604720.jpg',
                   '../../../statics/images/1500892692562841.jpg',
                   '../../../statics/images/1500892692580463.gif',
                   '../../../statics/images/1500892692827862.jpg',
                   '../../../statics/images/1500892692789767.jpg',
                   '../../../statics/images/1500892692204667.jpg',
                   '../../../statics/images/1499745176731273.jpg',
                   '../../../statics/images/1500456202597055.jpg',
                   '../../../statics/images/1500892692585377.gif',
                   '../../../statics/images/1495593436732728.jpg',
                   '../../../statics/images/1495593436396455.jpg',
               ],

               sliderMore:[
//                   'http://oss.flowerplus.cn/tmp/image/20170524/1495593436974575.jpg!60',
//                   'http://oss.flowerplus.cn/oss_jpeg/2017-11-30/15120444638882.jpeg'
               ],
               sliderMore1:[
                   '../../../statics/images/1495593436974575.jpg',
                   '../../../statics/images/15120444638882.jpeg'
               ],
               sliderMore2:[
                   '../../../statics/images/1500454569535783.jpg',
                   '../../../statics/images/15120444638882.jpeg'
               ],
               sliderMore3:[
                   '../../../statics/images/1509171014829488.jpg',
                   '../../../statics/images/15120444638882.jpeg'
               ],
               sliderMore4:[
                   '../../../statics/images/1509500774773933.jpg',
                   '../../../statics/images/15120444638882.jpeg'
               ],
               sliderMore5:[
                   '../../../statics/images/1500892693535940.jpg',
                   '../../../statics/images/15120444638882.jpeg'
               ],
           }
       },
        methods:{
            /*获取轮播图中图片的数量*/
           getLength(){
               this.length = this.sliderList.length;
           },
            /*动态识别数据*/
            getListDatas(){
               if(this.id == 'f1'){
                   this.sliderList = this.sliderList1;
                   this.sliderDesc = this.sliderDesc1;
                   this.sliderNew = this.sliderNew1;
                   this.sliderOne = this.sliderOne1;
                   this.sliderImage = this.sliderImage1;
                   this.sliderMore = this.sliderMore1;
               }else if(this.id == 'f2'){
                   this.sliderList = this.sliderList2;
                   this.sliderDesc = this.sliderDesc2;
                   this.sliderNew = this.sliderNew2;
                   this.sliderOne = this.sliderOne2;
                   this.sliderImage = this.sliderImage2;
                   this.sliderMore = this.sliderMore2;
               }else if(this.id == 'f3'){
                   this.sliderList = this.sliderList3;
                   this.sliderDesc = this.sliderDesc3;
                   this.sliderNew = this.sliderNew3;
                   this.sliderOne = this.sliderOne3;
                   this.sliderImage = this.sliderImage3;
                   this.sliderMore = this.sliderMore3;
               }else if(this.id == 'f4'){
                   this.sliderList = this.sliderList4;
                   this.sliderDesc = this.sliderDesc4;
                   this.sliderNew = this.sliderNew4;
                   this.sliderOne = this.sliderOne4;
                   this.sliderImage = this.sliderImage4;
                   this.sliderMore = this.sliderMore4;
               }else if(this.id == 'f5'){
                   this.sliderList = this.sliderList5;
                   this.sliderDesc = this.sliderDesc5;
                   this.sliderNew = this.sliderNew5;
                   this.sliderOne = this.sliderOne5;
                   this.sliderImage = this.sliderImage5;
                   this.sliderMore = this.sliderMore5;
               }
            },
            menu() {
                window.scrollTo(0, 0);
            }
        },
        created(){
            /*路由传参*/
            this.id = this.$route.params.id;
            console.log(this.id);
            /*获取轮播图中图片的数量*/
            this.getLength();
            /*动态识别数据*/
            this.getListDatas();
            this.menu();

        }
    }
</script>

<style scoped>
    /*立即订阅*/
    .fBook{
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 48px;
        line-height: 48px;
        background-color: #fff;
        z-index:2;
        border-top:1px solid rgba(0,0,0,0.1);
    }
    .fBookHome{
        flex: 1;
        height: 48px;
        display: inline-block;
        line-height: 48px;
        text-align: center;
        vertical-align: middle;
        margin-top: 8px;
    }
    .subscription{
        flex:7;
        background-color: #ff6672;
        color:#fff;
        font-size: 16px;
        font-weight:bold;
        line-height: 48px;
        text-align: center;
        display: inline-block;
    }
    /*文字展示区域*/
    .f1Ul{
        padding: 18px 12px;
    }
    .f1Title{
        font-size: 16px;
        color:#333;
        font-weight:bold;
    }
    .f1Desc{
        font-size: 12px;
        color:#999;
        letter-spacing: 0;
        line-height: 18px;
        margin: 6px 0;
    }
    .f1Money{
        font-size: 20px;
        color:#FC6B80;
        font-weight: bold;
        margin-top: 16px;
    }
    .f1Dl{
        padding: 12px;
        background-color: #FAFAFA;
        border-bottom:8px solid #f5f5f5;
        display: flex;
        flex-direction: row;
        /*justify-content: center;*/
        align-items: center;
    }
    .f1Dl dt{
        display: inline-block;
    }
    .f1Dl dd{
        display: inline-block;
        margin-right: 5px;
        font-size: 12px;
        color:#999;
    }
    .f1Dl dt img{
        width: 16px;
        vertical-align: middle;
        border: 0;
    }
    .f1Pay{
        display: flex;
        flex-direction: row;
        align-items: center;
        /*padding-top: 15px;*/
        padding: 15px;
        border-bottom:8px solid #f5f5f5;
    }
    .f1PayLeft{
        font-size: 14px;
        color:#333;
        font-weight:bold;
        margin-right: 10px;
    }
    .f1PayMiddle{
        margin: 0 10px;
    }
    .f1PayMiddle li{
        border: 1px solid #FD567C;
        box-sizing: border-box;
        margin-bottom: 5px;
        font-size: 10px;
        color:#FD567C;
        padding: 1px 5px;
        text-align: center;
    }
    .f1PayNew{
        /*background-color: red;*/
        /*display: flex;*/
        /*flex-direction: column;*/
    }
    .f1PayNew li{
        font-size: 12px;
        color: #111;
        line-height: 30px;
        /*display: block;*/
    }
    /*轮播图*/
    .fSpire.mint-swipe{
        width: 100%;
        height: 412px;
    }
    .fSpire .mint-swipe-items-wrap{
        width: 100%;
        height: 100%;
    }
    .fSpire .mint-swipe-item{
        height: 100%;
    }
    .fSpire .mint-swipe-item img{
        width: 100%;
        height: 100%;
    }
    .fSpire .mint-swipe-indicator{
        width: 15px;
        height: 3px;
        background-color: white;
        opacity: 1;
        border-radius: 0;
    }
    .fSpire .mint-swipe-indicator.is-active{
        background: #b6e9ee;
        opacity: 1;
    }
    .fSpire img{
        width: 100%;
        height: 100%;
    }
    .fSpireSlider{
        position: relative;
    }
    .fSpireDir{
        position: absolute;
        right:  10px;
        bottom: 10px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        padding: 2px 8px;
        font-size: 14px;
        color:#fff;
        text-align: center;
        width: 45px;
    }
    .f1ImageShow img{
        width: 100%;
    }
</style>
