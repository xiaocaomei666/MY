<template>
    <div id="box" :class="{bodyWhite:showProduct || showStory}">

        <!--导航栏-->
        <div class="header" :class="{headerWhite:showProduct || showStory}">
            <div class="logoHeader" :class="{filterIogo:showProduct || showStory || showblack}">
                <img src="http://static2.flowerplus.cn/Static/newpc/images/logo-b.png" alt="花加" >
            </div>
            <div class="headerLeader">
                <ul :class="{headerProductColor:showProduct || showStory || showblack}">
                    <router-link to="/home">
                        <li class="headerLeaderOne" @mouseenter="mouseEnter(0)" @mouseleave="mouseLeave" :class="{itemHover:itemHoverIndex == 0}" @click="product1Click"><span>加上花&nbsp;就对了</span></li>
                    </router-link>

                    <router-link to="/explore">
                        <li @mouseenter="mouseEnter(1)" @mouseleave="mouseLeave"  :class="{itemHover:itemHoverIndex == 1}" @click="product1Click">探索花加</li>
                    </router-link>

                    <router-link to="/product">
                    <li @mouseenter="mouseEnter2(2)" @mouseleave="mouseLeave2"  :class="{itemHover:itemHoverIndex == 2,itemHoverBlack:itemHoverIndex == 2}" @click="product2Click">产品</li>
                    </router-link>

                    <router-link to="/story">
                        <li @mouseenter="mouseEnter3(3)" @mouseleave="mouseLeave3"  :class="{itemHover:itemHoverIndex == 3,itemHoverBlack:itemHoverIndex == 3}" @click="product1Click">花加故事</li>
                    </router-link>

                    <li @mouseenter="mouseEnter4(4)" @mouseleave="mouseLeave4"  :class="{itemHover:itemHoverIndex == 4 ,itemHoverFF:itemHoverIndex == 4}">{{data4}}</li>
                    <li @mouseenter="mouseEnter5(5)" @mouseleave="mouseLeave5"  :class="{itemHover:itemHoverIndex == 5 ,itemHoverFF:itemHoverIndex == 5}">{{data5}}</li>
                </ul>
            </div>
        </div>

        <!--产品白块-->
        <div class="headerProduct" v-if="showProduct" @mouseenter="mouseEnterHeaderP" @mouseleave="mouseLeaveHeaderP">
            <div class="headerProductImage">
                <img src="http://static2.flowerplus.cn/Static/newpc/images/cpxl.jpg" alt="">
            </div>
            <dl class="headerProductdl">
                <dt>办公适用</dt>
                <router-link to="/product" @click="product2Click">
                <dd @click="product2Click"><a href="">MINI桌花 | 79元起</a></dd>
                <dd @click="product2Click"><a href="">小森立·绿植 | 39元起</a></dd>
                </router-link>
            </dl>
            <dl class="headerProductdl headerProductleft">
                <dt>家居适用</dt>
                <router-link to="/product">
                    <dd @click="product2Click"><a href="">简花 | 99元起</a></dd>
                    <dd @click="product2Click"><a href="">混合 | 99元起</a></dd>
                    <dd @click="product2Click"><a href="">挚爱·玫瑰 | 399元</a></dd>
                    <dd @click="product2Click"><a href="">Alpha | 1699元</a></dd>
                </router-link>
            </dl>


        </div>

        <!--花加故事白块-->
        <div class="headerProduct" v-if="showStory" @mouseenter="mouseEnterProduct" @mouseleave="mouseLeaveProduct">
            <div class="headerProductImage">
                <img src="http://static2.flowerplus.cn/Static/newpc/images/gsxl.jpg" alt="">
            </div>
            <dl class="headerProductdl headerProductleft">
                    <dt>花加故事</dt>
                <router-link to="/storyin">
                    <dd @click="product1Click"><a href="">品牌故事 | 一个关于鲜花的梦想</a></dd>
                </router-link>
                    <router-link to="/story">
                    <dd @click="product1Click"><a href="">鲜花故事 | 不为人知的故事</a></dd>
                    <dd @click="product1Click"><a href="">花加团队 | 每一个花加人</a></dd>
                </router-link>

            </dl>


        </div>




        <router-view></router-view>

    </div>
</template>

<script>

    export default{
        data(){
            return{
                showblack:false,
                itemHoverIndex:-1,
                data4:'花加艺术',
                data5:'商业合作',
                showProduct:false,
                showStory:false,
                underline:false
            }
        },
        methods:{
            mouseEnter(index){
                this.itemHoverIndex = index;
            },
            mouseLeave(){
                this.itemHoverIndex = null;
            },
            mouseEnter4(index){
                this.itemHoverIndex = index;
                this.data4 = '即将到来';
            },
            mouseLeave4(){
                this.itemHoverIndex = null;
                this.data4 = '花加艺术';
            },
            mouseEnter5(index){
                this.itemHoverIndex = index;
                this.data5 = '即将到来';
            },
            mouseLeave5(){
                this.itemHoverIndex = null;
                this.data5 = '商业合作';
            },
            mouseEnter2(index){
                this.itemHoverIndex = index;
                this.showProduct = true;
            },
            mouseLeave2(){
                this.itemHoverIndex = null;
                this.showProduct = false;
            },
            mouseEnter3(index){
                this.itemHoverIndex = index;
                this.showStory = true;
            },
            mouseLeave3(){
                this.itemHoverIndex = null;
                this.showStory = false;
            },
            mouseEnterHeaderP(){
                this.showProduct = true;
                this.itemHoverIndex = 2;
            },
            mouseLeaveHeaderP(){
                this.showProduct = false;
                this.itemHoverIndex = null;
            },
            mouseEnterProduct(){
                this.showStory = true;
                this.itemHoverIndex = 3;
            },
            mouseLeaveProduct(){
                this.showStory = false;
                this.itemHoverIndex = null;
            },
            product2Click(){
                this.itemHoverIndex = 2;
                this.showblack  = true;
            },
            product1Click(){
                this.itemHoverIndex = 1;
                this.showblack  = false;
            }


        }
    }
</script>

<style scoped>

    /*箭头*/
    .cursor{
        /*background-color: red;*/
        position: absolute;
        left: 50%;
        bottom: 20px;
        padding: 10px;
        margin-left: -40px;
        cursor: pointer;
        z-index: 11000;
        transform: translateY(-20px);
        transition: all 1s ease;
        animation: all 1s infinite;
    }
    .cursor:hover{
        transform: translateY(20px);
    }
    .cursor img{
        width: 40px;
    }

    .header{
        width: 100%;
        padding: 60px;
        position: absolute;
        z-index: 2000;
    }
    .headerWhite{
        background-color: #fff;
    }
    .logoHeader{
        position: absolute;
        z-index:1000;
        top: 55px;
        left: 62px;
    }
    .logoHeader img{
        /*使得图片变成白色*/
        -webkit-filter:invert(1);
        list-style-type: none;
        width: 178px;
        height: 50px;
    }
    .headerLeader{
        position: absolute;
        z-index:1000;
        width: 80%;
        text-align: right;
        /*float: right;*/
    }
    .headerLeader li{
        display: inline-block;
        color:white;
        /*margin-left: 30px;*/
        font-family:'微软雅黑';
        padding: 15px;
        cursor: pointer;
        /*background-color: red;*/
        /*margin-left: 30px;*/
        /*margin-right: 30px;*/
    }
    .headerLeaderOne{

    }
    .filterIogo img{
        /*使得图片变成黑色*/
        -webkit-filter:invert(0);
        transition: all 0.3s ease-in-out;
    }
    .bodyWhite{
        background-color: #fff;
        transition: all 0.3s ease-in-out;
    }
    .itemHover{
        border-bottom:2px white solid;
        transition: all 0.2s ease-in-out;
    }
    .itemClick{
        border-bottom:2px white solid;
        padding-bottom: 15px;

    }
    .itemHoverFF{
        text-decoration: line-through;
        transition: all 0.2s ease-in-out;
    }
    .headerProduct{
        width: 100%;
        height: 500px;
        background-color: white;
        position: absolute;
        top: 115px;
        left: 0;
        z-index: 2000;
    }
    .headerProductImage img{
        width: 320px;
    }
    .headerProductdl{
        display: inline-block;
        float: right;
        margin: 50px;
        letter-spacing: 5px;
    }
    .headerProductImage{
        float: right;
        display: inline-block;
        margin: 50px;
    }
    .headerProductleft{
        border-left:1px solid #777;
        padding-left: 50px;
    }

    .headerProductdl dd a{
        color:#666;
        font-size: 12px;
        line-height: 50px;
        margin-bottom: 30px;
    }
    .headerProductdl dd a:hover{
        color:#000;
    }
    .sectionVideo{
        position: absolute;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        overflow: hidden;
        background-size: cover;
        text-align: center;
        z-index: -1;
    }
    .headerProductColor li{
        color:black;
    }
    .itemHoverBlack{
        border-bottom:2px black solid;
        transition: all 0.2s ease-in-out;
    }
    .headerProductdl dt{
        /*color:black;*/
        font-size: 18px;
        margin-bottom: 30px;
        font-weight:bold;
    }
</style>
