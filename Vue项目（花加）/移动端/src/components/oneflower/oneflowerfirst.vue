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
                        one:'../../../statics/images/1505115756651208.jpg',
                        two:'../../../statics/images/1505115758884884.jpg',
                        listInfo:[
                            {
                                img:'../../../statics/images/15060769341911.jpg',
                                title:'简花•标准',
                                desc:'普通花量，1-15枝鲜花',
                                tip:'·平台新用户首单送INS花瓶·',
                                money:'¥99元/月',
                                add:'f1'
                            },
                            {
                                img:'../../../statics/images/15060770603309.jpg',
                                title:'简花•优选',
                                desc:'大花量，2-15枝鲜花',
                                tip:'·平台新用户首单送JULY花瓶·',
                                money:'¥179元/月',
                                add:'f2'
                            },
                            {
                                img:'../../../statics/images/15089997303592.jpg',
                                title:'惠花•自由双拼',
                                desc:'大花量，2-15枝鲜花',
                                tip:'·平台新用户首单送INS花瓶·',
                                money:'¥99元起/月',
                                add:'f3'
                            },
                            {
                                img:'../../../statics/images/15095241607089.jpg',
                                title:'奇花•进口',
                                desc:'打卡全世界进口好花',
                                tip:'·平台新用户首单送JULY花瓶·',
                                money:'¥169元起/月',
                                add:'f4'
                            },

                        ],
                        three:'../../../statics/images/1505115758803979.jpg',
                         four:'../../../statics/images/1505115758273355.png',
                        listLove:[{
                            img:'../../../statics/images/15064206905282.jpg',
                            title:'挚爱•进口',
                            desc:'10枝进口玫瑰',
                            tip:'·平台新用户首单送赫柏花瓶·',
                            money:'¥399元/月',
                            add:'f5'
                        }
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
