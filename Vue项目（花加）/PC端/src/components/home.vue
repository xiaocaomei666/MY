<template>
    <div id="box">

        <div id="app" class="app">
            <page :currentPage="currentPage" class="Page">
                <section class="animate page1" ref="section1">
                    <!--视频-->
                    <div class="sectionVideo active">
                        <video class="section_video" src="http://static2.flowerplus.cn/Static/newpc/images/sy_video.mp4" poster="http://static2.flowerplus.cn/Static/newpc/images/1.jpg" autoplay="autoplay" preload="auto" loop="loop"></video>
                    </div>
                    <!--描述-->
                    <div class="animate pageDes">
                        <img src="http://static2.flowerplus.cn/Static/newpc/images/w1.png" alt="">
                        <router-link to="/explore">
                            <span class="page1Span">进入探索花加</span>
                        </router-link>

                    </div>
                </section>
            </page>
            <page :currentPage="currentPage">
                <section class="animate move-left">
                    <!--描述-->
                    <div class="animate pageDes2">
                        <img src="http://static2.flowerplus.cn/Static/newpc/images/w2.png" alt="">
                       <router-link to="/explore">
                           <span class="page1Span2">进入探索花加</span>
                       </router-link>
                    </div>
                </section>
            </page>
            <page :currentPage="currentPage">
                <section class="animate move-left">
                    <!--描述-->
                    <div class="animate pageDes3">
                        <img src="http://static2.flowerplus.cn/Static/newpc/images/w3.png" alt="">
                        <router-link to="/explore">
                        <span class="page1Span3">进入探索花加</span>
                        </router-link>
                    </div>
                </section>
            </page>
            <page :currentPage="currentPage">
                <section class="animate move-left">
                    <!--描述-->
                    <div class="animate pageDes4">
                        <img src="http://static2.flowerplus.cn/Static/newpc/images/w4.png" alt="">
                        <router-link to="/explore">
                        <span class="page1Span4">进入探索花加</span>
                        </router-link>
                    </div>
                </section>
            </page>
            <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption"></page-controller>
        </div>

        <!--箭头-->
        <div class="cursor">
            <img src="http://static2.flowerplus.cn/Static/newpc/images/icon_arrow.png" alt="">
        </div>

    </div>
</template>

<script>
    import Page from './Page.vue';
    import PageController from './PageController.vue';

    // 页面进出动画
    function afterEnterAnimate($child) {
        $child.$el.querySelector('.animate').classList.remove('move-left', 'move-right');
    }
    function beforeLeaveAnimate($child) {
        let moveType = Math.random() > 0.5 ? 'move-left' : 'move-right';
        $child.$el.querySelector('.animate').classList.add(moveType);
    }

    export default{
        name:'app',
        data(){
           return{
               itemHoverIndex:null,
               data4:'花加艺术',
               data5:'商业合作',
               showProduct:false,
               showStory:false,

               currentPage: 1,
               options: [{
//                   background: 'rgba(229, 199, 46, 1)',
                   background: 'url("http://static2.flowerplus.cn/Static/newpc/images/1.jpg")',
                   color: '#fff',
                   isCenter: true,
                   // the function before page show
                   afterEnter: afterEnterAnimate,
                   // the function after page show
                   beforeLeave: beforeLeaveAnimate
               }, {
//                   background: 'rgba(79, 204, 76, 1)',
                   background: 'url("http://static2.flowerplus.cn/Static/newpc/images/2.jpg")',
                   color: '#fff',
                   isCenter: true,
                   afterEnter: afterEnterAnimate,
                   beforeLeave: beforeLeaveAnimate
               }, {
//                   background: 'rgba(233, 84, 84, 1)',
                   background: 'url("http://static2.flowerplus.cn/Static/newpc/images/3.jpg")',
                   color: '#fff',
                   isCenter: true,
                   afterEnter: afterEnterAnimate,
                   beforeLeave: beforeLeaveAnimate
               }, {
//                   background: 'rgba(46, 153, 229, 1)',
                   background: 'url("http://static2.flowerplus.cn/Static/newpc/images/4.jpg")',
                   color: '#fff',
                   isCenter: true,
                   afterEnter: afterEnterAnimate,
                   beforeLeave: beforeLeaveAnimate
               }
                   ],
               controllerOption: {
                   arrowsType: false,
                   navbar: true,
                   highlight: true,
                   loop: false
               }
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

            changePage(index) {
                // beforeLeave Hook
                let beforeIndex = this.currentPage - 1;
                let leaveFunction = this.options[beforeIndex].beforeLeave;
                typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex]);
                // change page
                this.currentPage = index;
                // afterEnter Hook
                let nextIndex = index - 1;
                let enterFunction = this.options[nextIndex].afterEnter;
                this.$nextTick(function() {
                    typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex]);
                })
            }

        },
        computed: {
            // 总page数
            pageNum() {
                return this.options.length;
            }
        },

        components: {
            Page, PageController
        },
        mounted() {
            this.$children.forEach((child, index) => {
                // 动态设置各个page内的options
                if (child.option === null) {
                    let childOption = this.options[index];
                    this.$set(childOption, 'index', index + 1);
                    child.option = childOption;
                }
            });
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

    .Page{
        position: absolute;
        left: -100%;
        top: -100%;
        background-color: yellow;
    }

    /*文字描述*/
    .pageDes{
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(100%,200%);
    }
    .pageDes2{
          transform: translate(60%,15%);
      }
    .pageDes3{
        transform: translate(-50%,15%);
    }
    .pageDes4{
        transform: translate(50%,15%);
    }
    .page1Span,
    .page1Span3,
    .page1Span2,
    .page1Span4{
        padding: 15px;
        width: 220px;
        display: block;
        margin-top: 45px;
        text-align: center;
        letter-spacing: 12px;
        font-size: 20px;
    }
    .page1Span{
        border: 1px solid white;
        color:white;
        margin-left: 150px;
    }
    .page1Span2{
        border: 1px solid rgba(255,255,255,0.4);
        padding: 15px;
        color:white;
        margin-left: 100px;
    }
    .page1Span3{
        border: 1px solid #555;
        padding: 15px;
        color:black;
        margin-left: 180px;
        font-size: 22px;
    }
    .page1Span4{
        border: 1px solid rgba(255,255,255,0.4);
        padding: 15px;
        color:white;
        margin-left: 200px;
    }

    /*视频*/
    .sectionVideo{
        position: absolute;
        width: 110%;
        height: 100%;
        background-size: cover;
        text-align: center;
        z-index: -1;
    }




    /*页面组件*/
    .app {
        height: 100%;
        width: 100%;
    }



    /* 下面的是与fullPage无关的样式 */

    .animate {
        transition: all .8s ease-out 0s;
    }

    .move-left {
        transform: translateY(1000%);
    }

    .move-right {
        transform: translateX(1000%);
    }

    @media screen and (max-width:768px) {
        html,
        body {
            font-size: 12px;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        /*text-decoration: underline;*/
    }

    .person-img {
        width: 223px;
        height: 185px;
        float: left;
        background-color: #fff;
        box-shadow: 3px 3px 10px #999;
    }

    .person-img img {
        height: 100%;
        width: 100%;
    }

    .person-basic-info {
        overflow: hidden;
        float: right;
        margin-left: 40px;
    }

    .info-line {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }


    dt {
        font-weight: bold;
        font-size: 16px;
    }

    ul {
        padding-left: 1em;
    }

    .avatar {
        margin: 10px auto;
        display: block;
        box-shadow: 1px 1px 5px #666;
    }

    .author-info {
        text-align: center;
    }

</style>
