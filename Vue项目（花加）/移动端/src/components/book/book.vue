<template>
    <div id="box">
            <img src="../../../statics/images/banner.png" alt="鲜花订阅">

        <div class="boxLogin">

            <div class="input-container">
                <div class="input-box">
                    <img src="../../../statics/images/icon_phone.svg">
                    <input type="tel" class="" maxlength="11" placeholder="请输入您的手机号码">
                </div>
                <button class="inputGetNum" id="SendCode" disabled="">获取验证码</button>
            </div>

            <div class="input-container input-box">
                <img src="../../../statics/images/icon_valicaf.svg">
                <input class="" pattern="[0-9]*" maxlength="5"  placeholder="请输入短信验证码">
            </div>

            <a href="javascript:;" class="inputSub" id="submit">登录</a>
           
        </div>
    </div>
</template>

<script>
    
    export default{
        methods:{
            menu() {
                window.scrollTo(0, 0);
            }
        },
        created(){
            this.menu();
        }
    }
</script>

<style scoped>
    img{
        width: 100%;
    }
    .boxLogin{
        padding: 24px 17px;
    }
    .input-container{
        position: relative;
        display: flex;
        width: 100%;
        height: 40px;
        margin-bottom: 32px;
        /*background-color: red;*/
    }
    .input-container img{
        width: 16px;
        position: absolute;
        left: 7px;
        bottom: 12px;
        z-index: 100;
    }
    .input-box{
        /*position: relative;*/
        /*padding-right: 96px;*/
        /*display: inline-block;*/
    }
    .input-box input{
        box-sizing: border-box;
        padding: 10px 65px 10px 32px;
        line-height: 20px;
        width: 100%;
        background-color: #f5f5f5;
        position: relative;
        height: 40px;
        border: none;
        font-size: 14px;
        color:#777;
    }
    .inputGetNum{
        /*border: 1px solid #777;*/
        color:#ccc;
        height: 35px;
        margin-left: 10px;
        margin-top: 4px;
    }
    .inputSub{
        background-color: #cccccc;
        border-radius: 2px;
        line-height: 40px;
        height: 40px;
        display: block;
        width: 100%;
        font-size: 14px;
        color:#fff;
        text-align: center;
    }
</style>
