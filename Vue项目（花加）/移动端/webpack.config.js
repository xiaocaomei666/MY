/**
 * Created by 小草莓 on 2017/11/20.
 */
/*导入包，获取到插件对象*/
var htmlwp = require('html-webpack-plugin');

module.exports = {
    /*指定打包的入口文件*/
    entry:'./src/main.js',

    /*指定输出的文件*/
    output:{
        /*这里要求使用全路径，这样相当于前面的绝对路径*/
        path:__dirname+'/dist',
        filename:'build.js'
    },
    module:{
        /*也可以使用rules代替，写法不唯一*/
        loaders:[
            {
                /*将所有的.css文件通过指定的loader打包*/
                test:/\.css$/,
                /*从右边向左边调用，写法不唯一*/
                loader:'style-loader!css-loader'
            },
            {
                /*将所有的.scss文件通过指定的loader打包*/
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                /*将所有的.scss文件通过指定的loader打包*/
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                /*将当前项目中所有的.js文件都要进行es6转es5操作，node_modules除外*/
                test:/\.js$/,
                /*使用的转换工具*/
                loader:'babel-loader',
                /*node_modules中的所有.js文件不去转换，提高打包性能*/
                exclude:/node_modules/

            },
            {
                /*将所有的.scss文件通过指定的loader打包*/
                test:/\.(jpg|png|gif|ttf|svg)$/,
                /*如果图片小于20k，会打包到build.js中，如果大于20k不会导入进去*/
                /*大于20k的图片被打包到dist中，只是在build.js中保留了路径。在页面中加载不出来*/
                loader:'url-loader?limit=20000'
            },
            {
                // 打包.vue文件
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /vue-preview.src.*?js$/,
                loader: 'babel'
            }
        ]
    },
    babel:{
        /*配置将ES6语法转换为ES5*/
      presets:['es2015'],
        /*解决打包.vue文件不报错*/
        plugins:['transform-runtime']
    },

    plugins:[
        new htmlwp({
            title: '首页',  //生成的页面标题
            filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
            template: 'index1.html' //根据index1.html这个模板来生成(这个文件请程序员自己生成)
        })
    ]


};

/*然后在当前目录下打开cmd,直接输入webpack打包*/