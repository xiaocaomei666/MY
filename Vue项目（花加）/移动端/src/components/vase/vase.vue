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
                        one:'../../statics/images/1505115759439557.png',
                        two:'',
                        listInfo:[
                           {
                                img:'../../statics/images/15060784782287.jpg',
                                title:'石头花瓶',
                                desc:'',
                                tip:'',
                                money:'¥179元/月',
                                add:'f1'
                            },
                            {
                                img:'../../statics/images/15060790004300.jpg',
                                title:'气泡花瓶',
                                desc:'',
                                tip:'',
                                money:'¥109元/月',
                                add:'f5'
                            },
                            {
                                img:'../../statics/images/15077041595365.jpg',
                                title:'水晶花瓶',
                                desc:'',
                                tip:'',
                                money:'¥89元/月',
                                add:'f2'
                            },
                            {
                                img:'../../statics/images/15077037355420.png',
                                title:'卡摩斯花瓶',
                                desc:'',
                                tip:'',
                                money:'¥109元',
                                add:'f3'
                            },
                            {
                                img:'../../statics/images/15060782844017.jpg',
                                title:'波点花瓶2色',
                                desc:'',
                                tip:'',
                                money:'¥79元/月',
                                add:'f5'
                            },
                            {
                                img:'../../statics/images/15060783006573.jpg',
                                title:'水晶花瓶',
                                desc:'',
                                tip:'',
                                money:'¥89元/月',
                                add:'f2'
                            },

                            {
                                img:'../../statics/images/15060782604459.jpg',
                                title:'弗洛拉花瓶',
                                desc:'',
                                tip:'',
                                money:'¥169元起/月',
                                add:'f4'
                            },
                            {
                                img:'../../statics/images/15088258345525.jpg',
                                title:'水晶花瓶',
                                desc:'',
                                tip:'',
                                money:'¥89元/月',
                                add:'f2'
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
