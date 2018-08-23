<template>
    <div id="box">
        <div class="toggleOne">
            <div @click="toggle1">
                <span class="toggleLeft">你根本不知道的花加</span>
                <span class="toggleRight">{{value1}}</span>
            </div>

            <transition name="fade">
                <div v-if="active1">
                    <img :src="items" v-for="items in toggleOneData">
                </div>
            </transition>

        </div>
        <div class="toggleTwo">
            <div @click="toggle2">
                <span class="toggleLeft">完美服务带你飞</span>
                <span class="toggleRight">{{value2}}</span>
            </div>

            <div v-if="active2">
                <img :src="items" v-for="items in toggleTwoData">
            </div>
        </div>
    </div>
</template>

<script>
    
    export default{
       data(){
           return{
               active1:false,
               active2:false,
               value1:'+',
               value2:'+',
               toggleOneData:[
                   '../../statics/images/1505115756587710.jpg',
                   '../../statics/images/1505115756846151.jpg',
                   '../../statics/images/1505115756274303.jpg',
                   '../../statics/images/15059644046132.jpeg'
               ],
               toggleTwoData:[
                   '../../statics/images/1505115757759224.jpg',
                   '../../statics/images/1505115757337607.jpg',
                   '../../statics/images/1505115757309583.jpg',
                   '../../statics/images/1505115757103187.jpg',
                   '../../statics/images/1505115757590583.jpg',
                   '../../statics/images/1505115757632829.jpg',
                   '../../statics/images/1505115757807748.jpg'
               ]
           }
       },
        methods:{
            toggle1(){
                this.active1 = !this.active1;
                if(this.value1 == '+'){
                    this.value1 = '-';
                }else {
                    this.value1 = '+';
                }
            },
            toggle2(){
                this.active2 = !this.active2;
                if(this.value2 == '+'){
                    this.value2 = '-';
                }else {
                    this.value2 = '+';
                }
            },
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
    /*动画效果*/
    .fade-enter-active, .fade-leave-active{
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .toggleOne{
        margin-top: -10px;
    }
    .toggleOne,
    .toggleTwo{
        overflow: hidden;
        border-bottom:1px solid #e5e5e5;
    }
    img{
        width: 100%;
    }
    span{
        display: inline-block;
        padding:18px 17px;
        line-height: 18px;
        font-size: 12px;
    }
    .toggleLeft{
        float: left;
        /*background-color: red;*/
        width: 80%;
    }
    .toggleRight{
        float: right;
        transform: scale(2);
        /*background-color: yellow;*/
        /*width: 20%;*/
    }


</style>
