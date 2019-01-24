const path=require('path');
//启用webpack-dev-server热更新第2步
const webpack=require('webpack');
//导入安装的html-webpack-plugin 在内存中生成html插件 只要是插件放到plugins中去
//自动在内存中的根据指定页面生成一个内存的页面
//自动将bundle.js追加到html页面中
const htmlWebpackPlugin=require('html-webpack-plugin');

//这个配置文件，其实就是一个js文件　通过node中的模块操作　向外暴露了一个配置对象
//路径操作用path模块
module.exports={
    entry:path.join(__dirname,'./src/main.js'),//入口,表示要使用webpack打包哪个文件
    output:{
        path:path.join(__dirname,'./dist'),//指定打包好的文件输出到哪个目录中去
        filename:'bundle.js'//指定输出的文件名称
    },//输出文件相关配置
    devServer:{
        //这是配置webpack-dev-server参数的第二种方式
        //--open --port 6060 --contentBase src --hot
        open:true,
        port:6060,
        contentBase:'src',
        hot:true //启用webpack-dev-server热更新第1步
    },
    plugins:[//配置插件节点
        new webpack.HotModuleReplacementPlugin(),//new 一个热更新的模块对象这是启用webpack-dev-server热更新第3步
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename:'index.html'
        })//创建一个在内存中生成html页面的插件
    ],
    module:{//配置所有第三方模块加载器
        rules:[//所有第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},//调用loader时，从后往前调用　
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=50000&name=[hash:8]-[name].[ext]']},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:['url-loader']},//有可能会被转成base64编码的字符
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
}

//当直接执行webpack命令时，webpack做了以下几步
//1.找到webpack.conf.js
//2.解析完得到一个配置文件中导出的配置对象
//3.打包构建