# my-site

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 版本适配

```javascript
安装vue-router要安装3.0的版本，因为vue2.0以上的适配vue-router的版本，vue3.0以上的适配vue-router4.0以上的版本
```

### 路由实现懒加载/延迟加载

### 使用 sass 预处理器

```javascript
方便维护css代码，变量前缀加$,混入用@mixin，使用@include将混入引入文档，放在style文件夹里（记得加lang="scss"）
```

### 使用 keep-alive

```javascript
在使用keep-alive来缓存组件时，使用$route.meta.keepAlive来进行判断是否需要进行组件缓存，需要的话得在router.js上的路由跳转那加上meta:[keepAlive：true]
```

### 插槽 slot

```javascript
插槽一般用于父组件传递插槽内容给子组件插槽，可以通过父组件选择传入的内容来决定子组件显示的内容，这样提高了利用率，也不用重复定义相同的子组件
旧写法：父组件在任何标签上用slot='名字'
新写法：父组件只能在template标签上使用v-slot='名字'
父组件用v-slot，子组件用<slot></slot>标签
```
