<template>
    <div id="box">
        <!--头部-->
        <div class="headerLogo"><img src="../../statics/images/Logo.svg" alt="FLOWERPLUS花加"></div>
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
    /*头部*/
    .headerLogo{
        height: 50px;
        line-height: 50px;
        text-align: center;
        padding: 8px 0 0 0;
    }
</style>
