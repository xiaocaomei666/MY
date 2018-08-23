<template>
    <div id="box">
        123
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
    
</style>
