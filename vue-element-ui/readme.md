start up
===
1.amd加载模式， by requirejs
2.require.config.js是配置文件
3.使用vue 和 vue-beauty作为模板

与typescript的坑
===
由于element-ui/index.js输出是ELEMENT,所以与element-ui/index.d.ts输入定义不一样。
那么，应该添加一个声明:
declare let elementui: any;
declare module 'ELEMENT' {
    export = elementui;
}