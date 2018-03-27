# React 学习记录

> 此仓库内容是阅读《深入React技术栈》整理
> 一直在做 React Native 的东西，但是其依赖的 React 却没有好好学习过。感觉有很多细节的知识有遗漏。
>
> 记录自己曾经遗漏的小知识点。

## react 演示示例代码：

### 主题

1. 组件间通信
    - [父组件向子组件通信](./app/components/ParentToChild.js)
    - [子组件向父组件通信](./app/components/ChildToParents.js)
    - [跨级组件通信](./app/components/BrotherTOBrother.js)
    - [组件通信-订阅模式](./app/components/BroUseObserver.js)

2. 组件间抽象
    - mixin
    - [高阶组件](./app/components/SimpleHoc.js)
    - 组合式租价开发
    - 测试儿

3. 组件性能优化
    - 纯函数
    - PureRender
    - Immutable
    - key
    - react-addons-perf