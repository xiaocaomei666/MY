<template>
    <div id="box">
        <!--头部logo-->
        <logo></logo>

        <!--导航栏-->
        <shopnav></shopnav>

       <!--中间区域-->
        <div class="flowerBox">
            <ul>
                <li v-for="item in listDesc" class="listDesc">
                    <img :src="item.one" class="listDescOne">
                    <img :src="item.two" alt="简花" class="listInfoImg">
                    <ul class="listDescUrl">
                        <li v-for="li in item.listInfo">
                            <img :src="li.img">
                            <p>{{li.title}}</p>
                            <p>{{li.desc}}</p>
                            <p class="lineP"></p>
                            <p>{{li.tip}}</p>
                            <p>{{li.money}}</p>
                        </li>
                    </ul>
                    <img :src="item.three" class="listDescOne">
                    <img :src="item.four" class="listInfoImg">
                    <ul class="listDescUrl listDescUrl2">
                        <li v-for="li in item.listLove">
                            <img :src="li.img">
                            <p>{{li.title}}</p>
                            <p>{{li.desc}}</p>
                            <p class="lineP"></p>
                            <p>{{li.tip}}</p>
                            <p>{{li.money}}</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <!--切换显示或隐藏-->
        <toggle></toggle>

        <!--底部区域-->
        <footers></footers>

    </div>
</template>

<script>
    import logo from '../../common/logo.vue';
    import shopnav from '../../common/shopnav.vue';
    import toggle from '../../common/toggle.vue';
    import footers from '../../common/footer.vue';

    export default{
        /*使用子组件*/
        components:{
            logo,
            shopnav,
            toggle,
            footers
        },
        data(){
            return{
                listDesc:[
                    {
                        one:'http://oss.flowerplus.cn/tmp/image/20170911/1505115756651208.jpg!60',
                        two:'http://oss.flowerplus.cn/tmp/image/20170911/1505115758884884.jpg!60',
                        listInfo:[
                            {
                                img:'http://oss.flowerplus.cn/product/20170922/15060769341911.jpg!60',
                                title:'简花•标准',
                                desc:'普通花量，1-15枝鲜花',
                                tip:'·平台新用户首单送INS花瓶·',
                                money:'¥99元/月'
                            },
                            {
                                img:'http://oss.flowerplus.cn/product/20170922/15060770603309.jpg!60',
                                title:'简花•优选',
                                desc:'大花量，2-15枝鲜花',
                                tip:'·平台新用户首单送JULY花瓶·',
                                money:'¥179元/月'
                            },
                            {
                                img:'http://oss.flowerplus.cn/product/20171026/15089997303592.jpg!60',
                                title:'惠花•自由双拼',
                                desc:'大花量，2-15枝鲜花',
                                tip:'·平台新用户首单送INS花瓶·',
                                money:'¥99元起/月'
                            },
                            {
                                img:'http://oss.flowerplus.cn/product/20171101/15095241607089.jpg!60',
                                title:'奇花•进口',
                                desc:'打卡全世界进口好花',
                                tip:'·平台新用户首单送JULY花瓶·',
                                money:'¥169元起/月'
                            },

                        ],
                        three:'http://oss.flowerplus.cn/tmp/image/20170911/1505115758803979.jpg!60',
                        four:'http://oss.flowerplus.cn/tmp/image/20170911/1505115758273355.png!60',
                        listLove:[{
                                img:'http://oss.flowerplus.cn/product/20170926/15064206905282.jpg!60',
                                title:'挚爱•进口',
                                desc:'10枝进口玫瑰',
                                tip:'·平台新用户首单送赫柏花瓶·',
                                money:'¥399元/月'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .listDescOne{
        height: 210px;
    }
    .listInfoImg{
        width: 100%;
    }
    .listDescUrl{
        margin-bottom: 20px;
    }
    .listDescUrl li{
        display: inline-block;
        width: 50%;
    }
    .lineP{
        position: absolute;
        left: 50%;
        border-bottom:2px solid #777;
        width: 40px;
        margin-left: -20px;
        margin-top: 6px;
        z-index:9987
    }
    .listDescUrl li{
        text-align: center;
        position: relative;
    }
    .listDescUrl li img{
        width: 100%;
    }
    .listDescUrl li p:nth-child(2){
        line-height: 18px;
        padding: 0 10px;
        margin-top: 10px;
        font-size: 16px;
        letter-spacing: 2px;
    }
    .listDescUrl li p:nth-child(3){
        font-size: 12px;
        color:#4A4A4A;
        letter-spacing: 2px;
        line-height: 14px;
    }
    .listDescUrl li p:nth-child(5){
        font-size: 12px;
        letter-spacing: 2px;
        line-height: 14px;
        color:#FF3488!important;
        margin-top:30px!important;
    }
    .listDescUrl li p:nth-child(6){
        margin-top: 14px;
        color:#4A4A4A;
        letter-spacing: 2px;
        line-height: 14px;
        font-size:16px!important;
    }
    .listDescUrl2{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        border-bottom:1px solid #e5e5e5;
        padding-bottom: 50px;
    }
    .listDescUrl2 li{
        flex:1;
    }
    .listDescUrl2 li img{
        width: 100%;
    }

</style>
