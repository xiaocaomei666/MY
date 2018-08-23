/*打包入口*/

/*导入vue核心包*/
import Vue from 'vue';
/*导入配置路由规则的包*/
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/*导入组件*/
/*导入样式*/
import 'mint-ui/lib/style.min.css';
import mintUI from 'mint-ui';
Vue.use(mintUI);

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

/*导入第三方组件mui*/
import '../statics/mui/css/mui.css';
import '../statics/mui/css/icons-extra.css';


/*导入App.vue的vue对象*/
import App from './App.vue';

/*导入组件*/
import Home from './components/Home.vue';
import oneflower from './components/oneflower/oneflowerfirst.vue';
import manyflower from './components/manyflower/manyflower.vue';
import miniflower from './components/miniflower/miniflower.vue';
import gift from './components/gift/gift.vue';
import vase from './components/vase/vase.vue';
import around from './components/around/around.vue';
import book from './components/book/book.vue';

import flowerinfo from './components/oneflower/f1.vue';


/*导入全局样式*/
import '../statics/css/site.css';

/*设置路由规则*/
var router1 = new VueRouter({
    linkActiveClass:'active',
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/new',component:oneflower},
        {path:'/house',component:manyflower},
        {path:'/star',component:miniflower},
        {path:'/gift',component:gift},
        {path:'/vase',component:vase},
        {path:'/around',component:around},
        {path:'/book',component:book},
        {path:'/flowerinfo/:id',component:flowerinfo},
        // {path:'/f2',component:f2},
        // {path:'/f3',component:f3},
        // {path:'/f4',component:f4},
        // {path:'/f5',component:f5},
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