<template>
    <div id="box">

        <!--头部logo-->
        <logo></logo>

        <!--导航栏-->
        <shopnav></shopnav>

        <!--轮播图-->
        <mt-swipe :auto="4000" class="homeSpire">
            <mt-swipe-item v-for="item in sliderList">
                <img :src="item.src">
            </mt-swipe-item>
        </mt-swipe>

        <!--新用户送花瓶-->
        <div class="wordBottom">
            新用户送花瓶 | 百城包邮 | 500万+用户的选择
        </div>

        <!--商品展示区域-->
        <div class="shopLists">
            <ul class="shopListShow">
                <li v-for="(item,index) in shopList">
                    <!--单品-->
                    <router-link to="/new" v-for="item in shopListOne">
                        <img :src="item.logo" alt="">
                        <img :src="item.src" alt="">
                    </router-link>
                    <!--混合-->
                    <router-link to="/house" v-for="item in shopListTwo">
                        <img :src="item.logo" alt="">
                        <img :src="item.src" alt="">
                    </router-link>
                    <!--MINI-->
                    <router-link to="/star" v-for="item in shopListThree">
                        <img :src="item.logo" alt="">
                        <img :src="item.src" alt="">
                    </router-link>
                    <!--礼品-->
                    <router-link to="/gift" v-for="item in shopListFour">
                        <img :src="item.logo" alt="">
                        <img :src="item.src" alt="">
                    </router-link>
                    <!--花瓶-->
                    <router-link to="/vase" v-for="item in shopList">
                        <img :src="item.logo" alt="">
                        <img :src="item.src" alt="">
                    </router-link>
                    <ul class="listFour">
                        <router-link to="/vase">
                            <li v-for="li in item.listFour">
                                <img :src="li.img">

                                <span>{{li.title}}</span>
                                <p class="listFourLine"></p>
                                <span class="listFourMoney">{{li.money}}</span>
                                <s>{{li.delMoney}}</s>
                            </li>
                        </router-link>
                    </ul>
                </li>
            </ul>
            <!--附近-->
            <ul class="shopListNear">
                <router-link to="/around" v-for="item in shopListNear">
                    <div>
                        <img :src="item.logo" alt="单品" class="shopListShowLogo">
                        <!--<img :src="item.src" class="shopListShowImage">-->
                    </div>
                    <ul class="listFour">
                        <li v-for="li in item.listFive">
                            <img :src="li.img">
                            <p class="listFourTwo">
                                <span>{{li.sellG}}</span>
                                <span>{{li.newG}}</span>
                            </p>
                            <span>{{li.title}}</span>
                            <p class="listFourLine"></p>
                            <span class="listFourMoney">{{li.money}}</span>
                            <span class="delMoney">{{li.delMoney}}</span>
                        </li>
                    </ul>
                </router-link>
            </ul>
            <!--用户说-->
            <div class="shopListsUser">
                <ul class="shopListUser">
                    <li v-for="item in shopListUser">
                        <div>
                            <img :src="item.logo" alt="单品" class="shopListShowLogo">
                        </div>

                        <div class="listShowUser">
                            <ul class="containerUser">
                                <li v-for="li in item.listSlider">
                                    <img :src="li.img" class="listBigImg">
                                    <p>{{li.title}}</p>
                                    <p id="listTwo">
                                        <img :src="li.person" alt="">
                                        <span>{{li.name}}</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>


                </ul>
            </div>



        </div>

        <!--底部-->
        <footers></footers>

    </div>
</template>

<script>
    /*导入子组件*/
    import logo from '../common/logo.vue';
    import shopnav from '../common/shopnav.vue';
    import footers from '../common/footer.vue';
    
    export default{
        /*使用子组件*/
        components:{
            logo,
            shopnav,
            footers
        },
        data(){
            return{
                active:-1,
                ulPhotoList:[
                    {title:'单品花束',path:'new'},
                    {title:'混合花束',path:'house'},
                    {title:'MINI花束',path:'star'},
                    {title:'礼品',path:'gift'},
                    {title:'花瓶',path:'vase'},
                    {title:'周边',path:'around'},
                ],
                ulWidth:420,
                isActive:false,
                isActiveHome:true,
                /*轮播图的数据*/
                sliderList:[
                    {src:'../statics/images/15125509981980.jpg'},
                    {src:'../statics/images/15115083665147.jpg'},
                    {src:'../statics/images/15119287479475.png'},
                    {src:'../statics/images/15106266414447.jpg'},
                    {src:'../statics/images/15127333553074.jpg'},
                    {src:'../statics/images/15108916387474.jpg'}
                ],
                /*商品展示的数据*/
                shopListOne:[
                    {
                        logo:' ../statics/images/1505115757128899.png',
                         src:' ../statics/images/1505115757869207.jpg',
                        listFour:[]
                    },
                ],
                shopListTwo:[
                    {
                        logo:'../statics/images/1505115757465713.png',
                         src:'../statics/images/1505115757801299.jpg',
                        listFour:[]
                    },
                ],
                shopListThree:[
                    {
                        logo:'../statics/images/1505115757627824.png',
                         src:'../statics/images/1505115757690946.jpg',
                        listFour:[]
                    },
                ],
                shopListFour:[
                    {
                        logo:'../statics/images/1505115758275829.png',
                         src:'../statics/images/1505115758552774.jpg',
                        listFour:[]
                    },
                ],
                shopList:[
                    {
                        logo:'../statics/images/1505197018676962.png',
                        src:'',
                        listFour:[
                            {
                                img:'../statics/images/15060784782287.jpg',
                                title:'石头花瓶',
                                money:'￥179元'
                            },
                            {
                                img:'../statics/images/15060790004300.jpg',
                                title:'气泡花瓶',
                                money:'￥109元'
                            },
                            {
                                img:'../statics/images/15077041595365.jpg',
                                title:'水晶花瓶4色',
                                money:'￥89元'
                            },
                            {
                                img:'../statics/images/15077037355420.png',
                                title:'卡摩斯花瓶',
                                money:'￥109元'
                            },
                        ]
                    },


                ],
                shopListNear:[
                    {
                        logo:'../statics/images/1505115757605233.png',
                        src:'',
                        listFive:[
                            {
                                img:'../statics/images/15130678577897.png',
                                sellG:'折扣',
                                newG:'新品',
                                title:'限量款眼罩（现货）',
                                money:'￥89元',
                                delMoney:'￥109元'
                            },
                            {
                                img:'../statics/images/15130677586530.png',
                                sellG:'折扣',
                                newG:'新品',
                                title:'限量款零钱包',
                                money:'￥149元',
                                delMoney:'￥179元'
                            },
                            {
                                img:'../statics/images/15130677167273.png',
                                sellG:'折扣',
                                newG:'新品',
                                title:'限量经典款化妆包',
                                money:'￥149元',
                                delMoney:'￥179元'
                            },
                            {
                                img:'../statics/images/15130762772064.png',
                                sellG:'折扣',
                                newG:'新品',
                                title:'限量款首饰包',
                                money:'￥169元',
                                delMoney:'￥199元'
                            },
                        ]
                    },
                ],
                shopListUser:[
                    {
                        logo:'../statics/images/1505197018316532.png',
                        listSlider:[
                            {
                                img:'../statics/images/1505809442814510.jpg',
                                title:'我家娜娜对于我沉迷撸花不是很高兴，所以喜欢挡住我拍花，并不是我特意要拍她.......',
                                person:'../statics/images/1505809442349453.jpg',
                                name:'の猫小姐'
                            },
                            {
                                img:'../statics/images/1505813623328044.jpg',
                                title:'加上ta,摆放之处注定引人注目，早已习惯这种与花相伴的日子',
                                person:'../statics/images/1505809442237678.jpg',
                                name:'小睡神'
                            },
                            {
                                img:'../statics/images/1505813623319961.jpg',
                                title:'把每个最好的你摄入相机，定格瞬间，是再美好不过的小确幸。',
                                person:'../statics/images/1505809442853345.jpg',
                                name:'Busy'
                            },
                        ]
                    }
                ]

            }
        },
        methods:{
            /*计算ul的宽度*/
            getUlWidth(){
                var w = 70;
                var count = this.ulPhotoList.length+2;
                this.ulWidth = w * count;
            },
            /*当点击li的时候，出现下划线*/
            SetUnderLine(index){
                this.active = index;
                this.isActiveHome = false;
            },
            /*设置点击首页的相关事件*/
            SetHome(){
                this.isActiveHome = true;
                this.active=-1;
            },
            menu() {
                window.scrollTo(0, 0);
            }
        },
        created(){
            this.getUlWidth();
            this.menu();
        }
    }
</script>

<style scoped>
    img{
        width: 100%;
    }

    /*隐藏系统显示的滚动条*/
    ::-webkit-scrollbar{width:0}



    /*导航栏*/

    .ulPhoto li{
        color: black;
        display: inline-block;
        list-style: none;
        margin-right: 4px;
        padding:5px 9px;
    }
    .ulPhoto a{
        font-size: 15px;
        height: 30px;
        line-height: 30px;
        padding-bottom: 10px;
    }


    /*轮播图*/
    /*首页中的轮播图效果*/
    .homeSpire.mint-swipe{
        width: 100%;
        height: 210px;
    }
    .homeSpire .mint-swipe-items-wrap{
        width: 100%;
        height: 210px;
    }
    .homeSpire .mint-swipe-item{
        height: 210px;
    }
    .homeSpire .mint-swipe-item img{
        height: 210px;
        width: 100%;
    }
    .homeSpire .mint-swipe-indicators{
        background-color: red;
    }
    .homeSpire .mint-swipe-indicator{
        width: 15px;
        height: 3px;
        background-color: red;
        opacity: 1;
        border-radius: 0;
    }
    .homeSpire .mint-swipe-indicator.is-active{
        background: #02C1ED;
        opacity: 1;
    }
    .homeSpire img{
        width: 100%;
        height: 451px;
    }

    /*轮播图底部的文字*/
    .wordBottom{
        line-height: 30px;
        font-size: 12px;
        text-align: center;
        background-color: #e9f9ec;
    }

    /*商品展示*/
    .shopListShowLogo,
    .shopListShowImage {
        width: 100%;
    }
    .listFour{
        padding:0 15px;
        margin-top: -20px;
    }
    .listFour li img{
        width: 100%;
    }
    .listFour li{
        width: 50%;
        text-align: center;
        /*background-color: red;*/
        display: inline-block;
        position: relative;
    }
    .listFour span{
        display: block;
        color:#4A4A4A;
        letter-spacing: 2px ;
        line-height: 14px;
    }
    .listFourLine{
        position: absolute;
        left: 50%;
        border-bottom:2px solid #777;
        width: 40px;
        margin-left: -20px;
        margin-top: 20px;
        z-index:9987
    }
    .listFourMoney{
        margin-top: 40px;
    }
    .listFourTwo span{
        display: inline-block;
        margin-bottom: 10px;
        margin-top: 30px;
    }
    .listFourTwo span:nth-child(1){
        background-color: #FF3488;
        border-radius: 15px;
        font-size: 10px;
        color:#FFFFFF;
        letter-spacing: 2px;
        line-height: 16px;
        padding:2px 12px;
        margin-right: 6px;
    }
    .listFourTwo span:nth-child(2){
        border-radius: 30px;
        font-size: 10px;
        color:#000;
        letter-spacing: 2px;
        line-height: 16px;
        padding:2px 12px;
        margin-right: 6px;
        border: 1px solid #626262;
    }
    .delMoney{
        font-size: 12px;
        margin-top: 15px;
        text-decoration: line-through;
    }
    .containerUser{
        display: flex;
        overflow-x: auto;
        flex-direction: row;
        flex:1;
    }
    .containerUser li{
        display: inline-block;
        flex:1;
        width: 500px;
    }
    .containerUser li p{
        margin-left: 15px;
        margin-bottom: 0;
        padding: 8px 5px 0 0;
        color:#333;
        font-size: 12px;
    }

    .containerUser li img{
        width: 350px;
        margin-left: 15px;
    }
    .containerUser li:last-child img.listBigImg{
        margin-right: 20px;
    }
    #listTwo img{
        width: 24px;
        height: 24px;
        border: 1px solid #333;
        border-radius: 12px;
        margin-left: 0;
    }
    #listTwo span{
        display: inline-block;
        margin-left: 10px;
        margin-top: -18px;
        vertical-align: middle;
        font-size: 16px;
    }








</style>
