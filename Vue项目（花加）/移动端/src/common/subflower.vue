<template>
    <div id="box">
        <!--头部logo-->
        <logo></logo>

        <!--导航栏-->
        <shopnav></shopnav>

        <!--中间区域-->
        <div class="flowerBox">
            <ul>
                <li v-for="item in imgs" class="listDesc">
                    <img :src="item.one" class="listDescOne">
                    <img :src="item.two" class="listInfoImg" v-if="item.two">
                    <ul class="listDescUrl">
                        <li v-for="li in item.listInfo" >
                            <router-link v-bind="{to:'/flowerinfo/'+li.add}">
                                <img :src="li.img">
                                <p>{{li.title}}</p>
                                <p>{{li.desc}}</p>
                                <p class="lineP"></p>
                                <p>{{li.tip}}</p>
                                <p>{{li.money}}</p>
                            </router-link>
                        </li>
                    </ul>
                    <img :src="item.three" class="listDescOne" v-if="item.three">
                    <img :src="item.four" class="listInfoImg" v-if="item.four">
                    <ul class="listDescUrl listDescUrl2">
                        <li v-for="li in item.listLove">
                            <router-link v-bind="{to:'/flowerinfo/'+li.add}">
                                <img :src="li.img">
                                <p>{{li.title}}</p>
                                <p>{{li.desc}}</p>
                                <p class="lineP"></p>
                                <p>{{li.tip}}</p>
                                <p>{{li.money}}</p>
                            </router-link>

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
    import logo from './logo.vue';
    import shopnav from './shopnav.vue';
    import toggle from './toggle.vue';
    import footers from './footer.vue';

    export default{
        /*接受父组件传递过来的数据*/
        props:['imgs'],
        /*使用子组件*/
        components:{
            logo,
            shopnav,
            toggle,
            footers
        },
        data(){
            return{

            }
        },
        created(){
            this.menu();
        },
        methods:{
            menu() {
                window.scrollTo(0, 0);
            }
        }
    }
</script>

<style scoped>
    img{
        width: 100%;
    }
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
        width: 50%;
    }

</style>
