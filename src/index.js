//这就是入口文件

//引入vue
// import Vue from 'a' ;
import Vue from 'vue';  //这里的vue是自己配置的别名

new  Vue ({
    el:'#app',
    data:{
        msg :' hello'
    },
   // 采用render的方式去渲染页面元素
    render :function(h){
        return h('p','我是一个p标签');
    }
})