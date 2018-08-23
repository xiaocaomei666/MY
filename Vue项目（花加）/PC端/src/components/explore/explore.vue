<template>
    <div id="box">
        <div class="topImage">
            <img src="http://static2.flowerplus.cn/Static/newpc/images/expore_banner.jpg" alt="" class="topImage1">
        </div>

        <div class="lightImage">
            <img src="http://static2.flowerplus.cn/Static/newpc/images/light.png" alt="" class="topImage2">
            <div class="line"></div>
            <div class="wordP">
                <p>尝试在生活的地方放上一瓶鲜花</p>
                <p>
                    只想好好取悦自己，用鲜花点亮生活，治愈一切</p>
                <p>
                    订阅FLŌWERPLUS花加，一月四次，一周一束</p>
                <p>
                    和每个平淡且重复的日子说ByeBye</p>
            </div>
            <div>
                <img src="http://static2.flowerplus.cn/Static/newpc/images/light.jpg" alt="" class="topImage3">
            </div>
            <img src="http://static2.flowerplus.cn/Static/newpc/images/qsdy.png" class="topImage4">
            <div class="line"></div>
            <div class="wordP">
                <p>3步轻松订阅鲜花，简单快速</p>
                <p>宠爱自己只需5分钟，从现在开始，对自己更好</p>
            </div>
            <div class="flexDiv">
                <div>
                    <div><img src="http://static2.flowerplus.cn/Static/newpc/images/buy.jpg" alt=""></div>
                    <h5>选择心仪的鲜花包月套餐</h5>
                    <p>我们为你准备了丰富的选择与服务</p>
                    <p>
                        在手机上轻松选购下单</p>
                </div>
                <div>
                    <div><img src="http://static2.flowerplus.cn/Static/newpc/images/delivery.jpg" alt=""></div>
                    <h5>设计到采摘，完美服务</h5>
                    <p>花艺师将为你倾心设计本周花束</p>
                    <p>

                        花田最时令的鲜花，全程保鲜至你手上</p>
                </div>
                <div>
                    <div><img src="http://static2.flowerplus.cn/Static/newpc/images/support.jpg" alt=""></div>
                    <h5>享受一周的美好</h5>
                    <p>收到鲜花，将有详尽实用的插花指南</p>
                    <p>全天小管家为你排忧解难</p>
                </div>
            </div>
            <div>
                <img src="http://static2.flowerplus.cn/Static/newpc/images/qsdy.jpg" alt="" class="topImage3">
            </div>
            <img src="http://static2.flowerplus.cn/Static/newpc/images/pzxx.png" class="topImage4">
            <div class="line"></div>
            <div class="wordP">
                <p>在中国鲜花之乡云南，花加有20000亩鲜花种植基地，600万枝鲜花每周由此采摘</p>
                <p>此外，花加还与全球鲜花大国达成协议，只进口品质上乘的A级花材</p>
            </div>
            <div>
                <img src="http://static2.flowerplus.cn/Static/newpc/images/pzxx.jpg" alt="" class="topImage3">
            </div>
            <img src="http://static2.flowerplus.cn/Static/newpc/images/ysg.png" class="topImage4">
            <div class="line"></div>
            <div class="wordP">
                <p>FLŌWERPLUS花加已与多位国际花艺大师达成合作</p>
                <p>为你每周的花束中增添无穷艺术魅力，体验来自全球的鲜花美学冲击</p>
            </div>
            <div><img src="http://static2.flowerplus.cn/Static/newpc/images/ysg.jpg" alt="" class="topImage3"></div>
            <div class="flexDiv2">
                <div>
                    <img src="http://static2.flowerplus.cn/Static/newpc/images/icon_zj.jpg" alt="">
                    <div class="flexDivIn">
                        <p>精选全球A级鲜花</p>
                        <p>18道工序  15次质检</p>
                    </div>

                </div>
                <div>
                    <img src="http://static2.flowerplus.cn/Static/newpc/images/icon_gj.jpg" alt="">
                    <div class="flexDivIn">
                    <p>国际花艺大师技术支持</p>
                    <p>万千搭配  高品位养成</p>
                    </div>
                </div>
                <div>
                    <img src="http://static2.flowerplus.cn/Static/newpc/images/icon_fj.jpg" alt="">
                    <div class="flexDivIn">
                    <p>全国包邮 0℃冷链</p>
                    <p>极致鲜花保鲜</p>
                    </div>
                </div>
                <div>
                    <img src="http://static2.flowerplus.cn/Static/newpc/images/icon_hp.jpg" alt="">
                    <div class="flexDivIn">
                    <p>8,000,000+位用户见证</p>
                    <p>口碑相传  五星好评</p>
                    </div>
                </div>
            </div>
            <footers></footers>
        </div>

    </div>
</template>

<script>
    import footers from '../foot.vue';
    export default{
       components:{
           footers
       }
    }
</script>

<style scoped>
    #box{
        /*height: 8000px;*/
    }
    .topImage .topImage1{
        width: 100%;
        vertical-align: middle;
        position: absolute;
        left: 0;
        top: 0;
        z-index:-1;
    }
    .lightImage{
        position: absolute;
        z-index: 300;
        left: 0;
        top: 95%;
        /*margin-left: 5%;*/
        text-align: center;
    }
    .topImage2{
        width: 30%;
    }
    .line{
        height: 1px;
        width: 15%;
        background-color: rgba(0,0,0,0.7);
        margin-left: -8%;
        margin-top: 5%;
        position: absolute;
        left: 50%;
        top: 0;
        z-index: 1000;
        /*background-color: red;*/
    }
    .wordP{
        margin-top: 50px;
    }
    .wordP p{
        color:#000;
        letter-spacing: 5px;
        line-height: 50px;
        font-size: 14px;
        text-align: center;
    }
    .topImage3{
        width: 100%;
        margin-top: 150px;
    }
    .topImage4{
        margin-top: 60px;
    }
    .flexDiv{
        margin-top: 60px;
    }
    .flexDiv,
    .flexDiv2{
        display: flex;
        flex-direction: row;
        flex: 1;

    }
    .flexDiv>div,
    .flexDiv2>div{
        flex: 1;
    }
    .flexDiv>div h5{
        margin-bottom: 25px;
        letter-spacing: 3px;
    }
    .flexDiv>div p{
        letter-spacing: 4px;
        font-size: 14px;
        line-height: 30px;
    }
    .flexDivIn{
        display: inline-block;
    }
    .flexDivIn p{
       letter-spacing: 4px;
        font-size: 14px;
        line-height: 35px;
    }
    .flexDiv2>div img{
        margin-right: 10px;
    }
    .flexDiv2{
        border-top: 1px solid #000;
        border-bottom:1px solid #000;
        margin-top: -4px;
        padding: 15px 20px;
    }


</style>
