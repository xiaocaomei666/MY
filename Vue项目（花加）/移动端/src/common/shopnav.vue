<template>
    <div id="box">
        <!--导航栏-->
        <div id="cate">
            <!--头部选项-->
            <ul class="ulPhoto" v-bind="{style:'width:'+ulWidth+'px'}">
                <!--<li>-->
                    <!--&lt;!&ndash;<router-link to='/home' v-bind:class="{active: isActiveHome}" @click="SetHome">&ndash;&gt;-->
                    <!--<router-link to='/home'>-->
                        <!--首页-->
                    <!--</router-link>-->

                <!--</li>-->
                <!--<li v-for="(item,index) in ulPhotoList" @click="SetUnderLine(index)">-->
                <li v-for="(item,index) in ulPhotoList">
                    <router-link v-bind="{to:'/'+item.path}">
                        <!--<a v-bind:class="{active:active==index}">{{item.title}}</a>-->
                        {{item.title}}
                    </router-link>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    
    export default{
       data(){
           return{
//               active:0,
               ulPhotoList:[
                   {title:'首页',path:'home'},
                   {title:'单品花束',path:'new'},
                   {title:'混合花束',path:'house'},
                   {title:'MINI花束',path:'star'},
                   {title:'礼品',path:'gift'},
                   {title:'花瓶',path:'vase'},
                   {title:'周边',path:'around'}
               ],
               ulWidth:420,
//               isActive:false,
//               isActiveHome:true
           }
       },
        methods:{
            /*计算ul的宽度*/
            getUlWidth(){
                var w = 70;
                var count = this.ulPhotoList.length+1;
                this.ulWidth = w * count;
            },
            /*当点击li的时候，出现下划线*/
//            SetUnderLine(index){
//                console.log(index);
//                console.log(this.active);
//
////                this.isActiveHome = false;
////                console.log(this.isActiveHome);
//
//                this.active = index;
//                console.log(this.active);
//            },
            /*设置点击首页的相关事件*/
//            SetHome(){
//                this.isActiveHome = true;
//                this.active=-1;
//            }
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
    /*导航栏*/
    #cate{
        width: 420px;
        max-width: 420px;
        overflow-x: auto;
        margin-bottom: 0;
    }
    .ulPhoto{
        width: 490px;
        padding: 2px 10px 5px 10px;
        margin-top: 0;
    }
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
    .active{
        border-bottom: 2px solid #000;
    }
    /*隐藏系统显示的滚动条*/
    ::-webkit-scrollbar{width:0}

</style>
