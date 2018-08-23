<template>
    <div id="box">
        <ul>
            <router-link to="/home"><li>首页 &nbsp;&nbsp;&nbsp;· </li></router-link>
            <router-link to="/book"><li>会员中心 &nbsp;&nbsp;&nbsp;· </li></router-link>
            <router-link to="/book"><li>常见问题 </li></router-link>
        </ul>
        <div>
            <img src="http://static2.flowerplus.cn/Static/web/v5/mobile/Images/Logo.svg" alt="FLOWERPLUS花加">
        </div>

    </div>
</template>

<script>
    
    export default{
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
    #box{
        margin-top: 30px;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
    }
    #box ul{

    }
    #box ul li{
        display: inline-block;
        font-size: 14px;
        color:#231916;
        font-weight:bold;
        padding: 0 10px;
    }
    img{
        width: 120px;
        margin-top: 10px;
        margin-bottom: 20px;
    }
</style>
