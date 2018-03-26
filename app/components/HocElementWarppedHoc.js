/**
 * Created by Dennis Wang
 * on 2018/3/26 11:08
 */

import React, {Component} from 'react'

/**
 * 使用其他元素包裹
 * 装饰器模式，
 */
const MyContainer = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div style={{backgroundColor: '#e3093a', padding: '20px', border: '1px solid #f3f3f3'}}>
          <WrappedComponent/>
        </div>
      )
    }
  }
};

/**
 * ES7中添加了一个decorator的属性，使用@符表示，可以更精简的书写
 * 可在类头部增加 注解方式
 * ES7 有兼容问题，需要 transform-decorators-legacy 插件编译
 */
@MyContainer
class UsualComponent extends Component {
  render() {
    return (
      <div className="container" style={{marginTop: '10px', backgroundColor: '#e1e1e1', padding: '20px'}}>
        <h3>使用其他元素包裹 WarppedComponent</h3>
        <br/>
        高阶组件
      </div>
    )
  }
}


export default UsualComponent