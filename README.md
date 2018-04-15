# React 学习记录示例代码：

> 此库内容更多是阅读《深入React技术栈》整理的示例代码。
> 
> 当初刚开始学习上手就是直接从 React Native 开始的，所以其依赖的 React 却没有好好学习过。感觉有很多细节的知识有遗漏，所以重新学习 React 查漏补缺！


## Install

```bash
git clone https://github.com/wangjianhui2464/react-example.git

cd react-example

# 提示：在 Windows 系统下 yarn 一直不成功，建议使用 npm 运行，避免大家走弯路。
# Mac 下随意。
npm install -d

npm run dev
```


## 目录

### 组件库：

1. [Dropdown：下拉组件](./libs/Dropdown/example.js)
2. [懒加载]

### 示例代码：

1. 组件间通信
    - [父组件向子组件通信](./app/components/ParentToChild.js)
    - [子组件向父组件通信](./app/components/ChildToParent.js)
    - [跨级组件通信](./app/components/BrotherToBrother.js)
    - [组件通信-订阅模式](./app/components/BroUseObserver.js)

2. 组件间抽象
    - mixin （官方不太推荐）
    - [高阶组件](./app/components/SimpleHoc.js)
    - 组合式组件开发

3. 组件性能优化
    - 纯函数
    - PureRender
    - Immutable
    - key
    - react-addons-perf
