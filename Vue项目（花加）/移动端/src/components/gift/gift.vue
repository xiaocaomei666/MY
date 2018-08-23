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
                        one:'../../statics/images/1505115758104722.jpg',
                        two:'../../statics/images/1505807973607813.png',
                        listInfo:[
                            {
                                img:'../../statics/images/15112422136105.jpg',
                                title:'射手座',
                                desc:'普通花量，1-15枝鲜花',
                                tip:'·平台新用户首单送INS花瓶·',
                                money:'¥99元/月',
                                add:'f1'
                            }

                        ],
                        three:'../../statics/images/15081243053026.jpg',
                        four:'../../statics/images/15081228028299.jpg',
                        listLove:[
                            {
                            img:'../../statics/images/15119343942122.png',
                            title:'为爱勇敢',
                            desc:'10枝进口玫瑰',
                            tip:'·平台新用户首单送赫柏花瓶·',
                            money:'¥399元/月',
                            add:'f5'
                        },
                        ]
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
