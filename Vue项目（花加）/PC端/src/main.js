/**
 * Created by 小草莓 on 2017/12/15.
 */

/*导入vue核心包*/
import Vue from 'vue';
/*导入配置路由规则的包*/
import VueRouter from 'vue-router';
Vue.use(VueRouter);


/*导入App.vue的vue对象*/
import App from './App.vue';


/*导入组件*/
import Home from './components/home.vue';
import explore from './components/explore/explore.vue';
import product from './components/product/product.vue';
import story from './components/story/story.vue';
import storyin from './components/story/storyin.vue';

/*导入全局样式*/
import '../statics/css/site.css';

/*设置路由规则*/
var router1 = new VueRouter({
    linkActiveClass:'itemClick',
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/explore',component:explore},
        {path:'/product',component:product},
        {path:'/story',component:story},
        {path:'/storyin',component:storyin},
    ]
});

/*创建vue对象进行渲染*/
new Vue({
    el:'#app',
    router:router1,
    /*render函数是vue里面的默认函数，为了解析.vue文件*/
    /*解析上面的组件*/
    render:create=>create(App)
});