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
                        one:'../../../statics/images/1505186747794464.jpg',
                        two:'../../../statics/images/1505186747144957.png',
                        listInfo:[
                            {
                                img:'../../../statics/images/15064063199619.jpg',
                                title:'混合•悦花',
                                desc:'3种花材 8-12枝',
                                tip:'·平台新用户首单送INS花瓶·',
                                money:'¥99元/月',
                                add:'f1'
                            },
                            {
                                img:'../../../statics/images/15064081218205.jpg',
                                title:'COLOR•缤纷',
                                desc:'1种进口花  2-3种国内精选花',
                                tip:'·平台新用户首单送奥兰花瓶·',
                                money:'¥139元/月',
                                add:'f2'
                            },
                            {
                                img:'../../../statics/images/15077062954149.jpg',
                                title:'混合•繁花',
                                desc:'4-6种花材  12枝以上+配叶',
                                tip:'·平台新用户首单送INS花瓶·',
                                money:'¥169元/月',
                                add:'f3'
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
