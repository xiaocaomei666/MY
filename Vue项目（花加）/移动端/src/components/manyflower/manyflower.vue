<template>
    <div id="box">

        <!--中间内容区域-->
        <subflower :imgs="listDesc"></subflower>
    </div>
</template>

<script>
    import subflower from '../../common/subflower.vue';

    export default{
        /*使用子组件*/
        components:{
            subflower
        },
        data(){
            return{
                listDesc:[
                    {
                        one:'../../../statics/images/1505115758533887.jpg',
                        two:'../../../statics/images/1505115758107049.png',
                        listInfo:[
                            {
                                img:'../../../statics/images/15060769745565.jpg',
                                title:'混合•悦花',
                                desc:'3种花材 8-12枝',
                                tip:'·平台新用户首单送INS花瓶·',
                                money:'¥99元/月',
                                add:'f1'
                            },
                            {
                                img:'../../../statics/images/15108319988188.jpeg',
                                title:'COLOR•缤纷',
                                desc:'1种进口花  2-3种国内精选花',
                                tip:'·平台新用户首单送奥兰花瓶·',
                                money:'¥139元/月',
                                add:'f2'
                            },
                            {
                                img:'../../../statics/images/15060773485231.jpg',
                                title:'混合•繁花',
                                desc:'4-6种花材  12枝以上+配叶',
                                tip:'·平台新用户首单送INS花瓶·',
                                money:'¥169元/月',
                                add:'f3'
                            },
                            {
                                img:'../../../statics/images/15064208074855.jpg',
                                title:'混合•谜藏',
                                desc:'6-8种花材  24枝以上+配叶',
                                tip:'·平台新用户首单送波点花瓶·',
                                money:'¥399元起/月',
                                add:'f4'
                            },
                            {
                                img:'../../../statics/images/15086423152004.jpeg',
                                title:'【包年499】混合•悦花',
                                desc:'3种花材 8-12枝',
                                tip:'·新用户首单送INS花瓶·',
                                money:'¥499/包年',
                                add:'f5'
                            },

                        ],
                        three:'',
                        four:'',
                        listLove:[]
                    }
                ]
            }
        },
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

</style>
