### 项目介绍
基于React+React-Router4+Mobx搭建的一个个人博客，使用Webpack做项目构建工具，后台使用Express+MongoDB  
(后台管理页面前端部分在[这里](https://github.com/wasabiiii/blog-BE) )

### 项目初始化
安装配置环境
```
yarn
```

### 运行
```
nodemon app.js
webpack --watch
```
使用```webpack --watch```监听文件改动，让webpack自动重新构建

在浏览器的url栏中访问```localhost:8000```即可


### 线上打包
```
yarn run dist
```