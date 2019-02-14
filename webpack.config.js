//这里就是webpack的配置文件

const  path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//需要暴露一个对象， 暴露的方式还是commonjs

module.exports = {
    // 模式
     mode : 'production'  ,   //development  或 production       一个是开发模式，一个是上线模式

     //入口
     entry : './src/index.js',

     //出口

     output : {
         //出口的位置 （绝对路径）
         path : path.resolve(__dirname , './dist') ,     //会在项目的根目录下创建一个 dist 文件夹
         filename : 'bundle.js'                          //打包之后文件的名字
     },
     plugins :[
         //自动生成一个 html 文件在出口的位置， 并且会自动在生成的文件中引入打包的js文件
         new HtmlWebpackPlugin({
             title: '三只熊猫',             //有template，title就会失效
             filename : 'anc.html',
             template : './index.html'      // 将 index.html作为生成的abc.html的模板    
         })
     ]
}