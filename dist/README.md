1.打开命令行，执行命令 mkdir webpack-vue   创建一个项目文件夹
2.cd到这个项目路劲并且初始化这个项目  npm init -y
3.下载这个项目需要的资源包
    -生产环境
        -vue    npm install --save vue
    -开发环境
        -webpack    核心功能        npm install --save-dev webpack webpack-cli
        -webpack-cli    命令行功能
4. 项目根目录下面创建一个 src 文件夹（source意思 源文件），这个文件夹下面放源文件
5. 项目根目录下面创建一个 webpack.config.js （webpack 配置文件）
6. src 下面创建一个 js 文件作为项目的入口文件
7. 配置webpack的文件
8. 简单使用一下
9. 根目录 下面一个 index.html 文件，作为项目的页面入口


## 项目目录结构

- dist         (最终生成的文件-这个文件夹才是最终需要上传到服务器上代码)
- node_modules (放资源包)
- src          (源文件，里面放置一些项目自己写得模块。被webpack打包的文件，都需要放到这个文件夹下面)
  - index.js   (项目的打包入口)
- index.html   (项目页面入口)
- package-lock.json （包锁文件）
- package.json (项目依赖的资源包与项目的描述信息的文件)
- webpack.config.js (webpack的配置文件)


## webpack 的配置

四大核心 ，模式|入口|出口是必须要配置的。

- 模式      指定这次打包是打的开发环境用的包，还是生产环境用的包 4.x+ 支持的
- 入口      指定webpack需要打包的项目的入口文件
- 出口      打包之后生成的文件需要放到哪个位置
- 加载器    默认情况下，webpack只是简单的打包js文件，如果需要打包 css img 之类的文件，则需要添加相对应的加载器去处理这种类型的文件。
- 插件      插件是加载器干不了的事情，就可以去用插件来干。

如何配置，就是在 webpack.config.js 文件中，暴露一个写用这些选项的对象。


## 如何调用 webpack 开始打包

命令行中，使用 webpack 这个命令

- ./node_modules/.bin/webpack
- npx webpack (npm 5.x+ 最增的功能)
- 配置 package.json 的 npm 脚本


## 问题集合？

1. 2行代码打包之后生成了 100行。
  因为 webpack 自身默认让我们的代码能够使用 ems 的功能。

2. 如何将根目录下的 index.html 让其在打包的时候，自动生成到 dist 文件夹下面去。

  使用一款插件：HtmlWebpackPlugin

3. 需要使用的资源都是通过 npm 的方式去安装的

  vue

  npm install --save vue

  那个代码中要使用 vue ,就在哪里像 commonJS 一样通过一种方式去引入他就ok.

  通过 es6 的 模块引入方式

  import 'xxxx'

  import xxx from 'xxx'

4. import Vue from 'vue'; 引入的vue到底引入的是个啥

  1. 具体找到  node_moduels 下面的 vue 文件夹
  2. 找到 package.json 中 main 和 moudule 选项的值
  3. 如果 通过 commonJS require的方式去引入 vue。引入的是  main 选项指定的文件。
  4. 如果 通过 esm import的方式去引入 vue。引入的是 module 选项指定的文件。

5. import Vue from 'vue';       引入vue模块后，发现页面内容无法被渲染

  vue.common.js     供commonJs规范引入  是有module.exprots去暴露
  vue.esm.js        供esm.js规范引入    是按照esm的规范去暴露

  vue.runtime     运行时的版本            render 函数去渲染模板
  vue.没runtime   运行时 + 编译器（完整版）template 

  修改 引入的vue 文件为 完整版的esm版本

  PS: 请不要直接修改 node_moduels下面 vue 的package.json，可以通过设置 webapck 的别名这个选项要完成。

6. 自动打包（开发时的打包）

  webpack-dev-server 资源包

  1. npm install --save-dev webpack-dev-server
  2. 配置
  3. webpack 启动 换成 webpack-dev-server 启动

7. 引入模块的方式去引入 样式文件报错

  css-loader      对css文件做转换 转换成 webpack所能识别的模块css文件
  style-loader    对上一步转换之后的 css模块文件再做解析，解析到页面的 style 标签中去。

  1. npm install --save-dev css-loader style-loader
  2. 配置


## 插件的使用
    1. 找到需要使用的插件并安装他。注意短横线（开发依赖）
    2. 在 webpack.config.js 中引入他
    3. 在 plugins 选项中调用他，并按照他的文档去做配置。