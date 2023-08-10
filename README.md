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

### icon 的引入

[iconfont 引入方法](https://blog.csdn.net/qq_35430000/article/details/87103050 "https://blog.csdn.net/qq_35430000/article/details/87103050")

```plaintext
使用在线链接的话，可以在fontclass中更新链接，复制链接导入在App.vue上的style中
```

### 伪类选择器 &:nth-child()

```plaintext
可以在同样的元素中进行选择其中那个来进行修改
```

### 正则表达式模糊搜索城市名字

```
//根据搜索框的内容来用正则表达式进行匹配筛选
    matchCity() {
      const inputValue = this.inputContent.trim();//获取搜索框的内容然后去掉前后空格，防止匹配不了
      if (inputValue === '') {
        return [];//输入值为空，返回空数组
      }
      const pattern = new RegExp(inputValue.split("").join(".*"), "i");//将搜索框内容输入生成正则表达式
      return this.cities.filter(city => pattern.test(city));

    }
```

### vuex

```
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension (opens new window)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。
```

[vuex 稀土掘金根据官方教程完美解释](https://juejin.cn/post/6928468842377117709)

### 伪类找到相同元素的

```plaintext
使用 :last-child 选择器：
如果元素是其父元素的最后一个子元素（无论元素类型是什么），可以使用 :last-child 选择器。例如，如果你想选择一个无序列表（<ul>）的最后一个列表项（<li>），可以使用以下代码：
css
ul li:last-child {
  /* 样式规则 */
}
使用 :last-of-type 选择器：
如果元素是其元素类型的最后一个元素，可以使用 :last-of-type 选择器。例如，如果你有一个包含多个段落（<p>）的容器，并且想要选择最后一个段落，可以使用以下代码：
css
p:last-of-type {
  /* 样式规则 */
}
```
