// 项目的js入口文件
//1.导入jquery
//　import *** from *** 是es6中导入模块的方式
import $ from 'jquery';
//类似　node 中这个写法　const $ =require('jquery')
//webpack默认只能打包处理js类型的文件　如果要处理非js类型的文件　需要安装一些合适的第三方loader加载器
//1.cnpm i style-loader css-loader -D
//2.webpack.config.js 新增一个配置节点　module


import './css/index.css';
import './css/index.less';
import './css/index.scss';
import 'bootstrap/dist/css/bootstrap.css'

$(function(){
    $('li:odd').css('backgroundColor','green');
    $('li:even').css('backgroundColor',function(){
        return '#'+'D97634';
    });
});

//class es6中提供的新语法　用来实现es6中面向对象编程的语法
class Person{
    static info={name:'zhangsan',age:20}
}
//Babel将高级es6语法转为低级语法
//1.　第一套包　cnpm i babel-core babel-loader babel-plugin-transform-runtime -D//  第二套包 cnpm i babel-preset-env babel-prerset-stage-0 -D
//2. 打开　webpack.config.js 在module节点下的rule数组中，添加一个新的匹配规则
// {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
//3. 项目的根目录中，新建一个.babelrc　的Babel配置文件
//{"presets":[],"plugins":[]}

//1.webpack能够处理各个js文件的互相依赖关系
//2.webpack能够处理js兼容问题,把高级的浏览器不识别的语法转为低级的，浏览器能正常识别的语法

//webpack 要打包的文件路径　--output 打包好的输出文件路径

//使用webpack-dev-server 这个工具来实现自动打包编译的功能
//1.　npm i webpack-dev-server -D 安装到项目本地开发依赖
//2. 这个工具的用户和webpack命令的用法完全一样
//3. 由于是在本地项目中安装的，所以无法执行webpack-dev-server命令
//4. webpack-dev-server如果想要正常运行要求　在本地项目中必须安装webpack
//5. webpack-dev-server 生成的bundle.js并没有存放到实际的物理磁盘上，而是直接放到电脑内存中
