<template>
    <div id="box">

        <!--轮播图-->
        <div class="fSpireSlider">
            <mt-swipe :auto="3000" class="fSpire">
                <mt-swipe-item v-for="item,index in sliderList">
                    <img :src="item">
                </mt-swipe-item>
            </mt-swipe>
            <span class="fSpireDir">{{value}} / {{length}}</span>

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
                    <li v-for="item in sliderNew">{{item}}</li>
                </ul>
            </div>
            <!--图片展示区域-->
            <div class="f1ImageShow">
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
            return {
                value: 0,
                length: 0,
                sliderList: [
                    '../../../statics/images/14968310272005.jpg',
                    '../../../statics/images/14968310339947.jpg',
                    '../../../statics/images/14968310369207.jpg',
                    '../../../statics/images/14968310382558.jpg'
                ],
                sliderDesc: [
                    {title: '简花-单品鲜花包月套餐'},
                    {desc: '经典单品，新手必备；每周配送1次，每次1束，每月共4束。'},
                    {money: '￥ 99-1176'},
                ],
                sliderIcon: [
                    {img: '../../../statics/images/15107329932033.svg', des: '产地直采'},
                    {img: '../../../statics/images/15107329932033.svg', des: '花损赔付'},
                    {img: '../../../statics/images/15107329932033.svg', des: '准时送达'}
                ],
                sliderNew: [
                    '新用户首单赠送INS花瓶',
                    '购买套餐可优惠换购配件商品'
                ],
                sliderImage: [
                    '../../../statics/images/1502964613425278.jpg',
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
                sliderMore: [
                    '../../../statics/images/1495593436974575.jpg',
                    '../../../statics/images/15120444638882.jpeg'
                ],
                id: 0
            }
        },
        methods: {
            getLength(){
                this.length = this.sliderList.length;
            },
            menu() {
                window.scrollTo(0, 0);
            }
        },
        created(){
            this.getLength();
            this.menu();

        }
    }
</script>

<style scoped>
    /*立即订阅*/
    .fBook {
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 48px;
        line-height: 48px;
        background-color: #fff;
        z-index: 2;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    .fBookHome {
        flex: 1;
        height: 48px;
        display: inline-block;
        line-height: 48px;
        text-align: center;
        vertical-align: middle;
        margin-top: 8px;
    }

    .subscription {
        flex: 7;
        background-color: #ff6672;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        line-height: 48px;
        text-align: center;
        display: inline-block;
    }

    /*文字展示区域*/
    .f1Ul {
        padding: 18px 12px;
    }

    .f1Title {
        font-size: 16px;
        color: #333;
        font-weight: bold;
    }

    .f1Desc {
        font-size: 12px;
        color: #999;
        letter-spacing: 0;
        line-height: 18px;
        margin: 6px 0;
    }

    .f1Money {
        font-size: 20px;
        color: #FC6B80;
        font-weight: bold;
        margin-top: 16px;
    }

    .f1Dl {
        padding: 12px;
        background-color: #FAFAFA;
        border-bottom: 8px solid #f5f5f5;
        display: flex;
        flex-direction: row;
        /*justify-content: center;*/
        align-items: center;
    }

    .f1Dl dt {
        display: inline-block;
    }

    .f1Dl dd {
        display: inline-block;
        margin-right: 5px;
        font-size: 12px;
        color: #999;
    }

    .f1Dl dt img {
        width: 16px;
        vertical-align: middle;
        border: 0;
    }

    .f1Pay {
        display: flex;
        flex-direction: row;
        align-items: center;
        /*padding-top: 15px;*/
        padding: 15px;
        border-bottom: 8px solid #f5f5f5;
    }

    .f1PayLeft {
        font-size: 14px;
        color: #333;
        font-weight: bold;
        margin-right: 10px;
    }

    .f1PayMiddle {
        margin: 0 10px;
    }

    .f1PayMiddle li {
        border: 1px solid #FD567C;
        box-sizing: border-box;
        margin-bottom: 5px;
        font-size: 10px;
        color: #FD567C;
        padding: 1px 5px;
        text-align: center;
    }

    .f1PayNew {
        /*background-color: red;*/
        /*display: flex;*/
        /*flex-direction: column;*/
    }

    .f1PayNew li {
        font-size: 12px;
        color: #111;
        line-height: 30px;
        /*display: block;*/
    }

    /*轮播图*/
    .fSpire.mint-swipe {
        width: 100%;
        height: 412px;
    }

    .fSpire .mint-swipe-items-wrap {
        width: 100%;
        height: 100%;
    }

    .fSpire .mint-swipe-item {
        height: 100%;
    }

    .fSpire .mint-swipe-item img {
        width: 100%;
        height: 100%;
    }

    .fSpire .mint-swipe-indicator {
        width: 15px;
        height: 3px;
        background-color: white;
        opacity: 1;
        border-radius: 0;
    }

    .fSpire .mint-swipe-indicator.is-active {
        background: #b6e9ee;
        opacity: 1;
    }

    .fSpire img {
        width: 100%;
        height: 100%;
    }

    .fSpireSlider {
        position: relative;
    }

    .fSpireDir {
        position: absolute;
        right: 10px;
        bottom: 10px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        padding: 2px 8px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        width: 45px;
    }

    .f1ImageShow img {
        width: 100%;
    }
</style>
