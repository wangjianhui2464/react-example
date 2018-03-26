/**
 * Created by Dennis Wang
 * on 2018/3/25 23:04
 */

import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Observer from '../utils/Observer'

export default class Parent extends Component {
  componentDidUpdate() {
    console.log('parent update');
  }

  render() {
    return (
      <div className="container" style={{marginTop: '10px', backgroundColor: '#e1e1e1', padding: '20px'}}>
        <h3>"发布/订阅模式" 来实现各种层级的组件间通信</h3>
        <Child_1/>
        <Child_2/>
      </div>
    );
  }
}

/**
 * 第一个 子组件
 */
class Child_1 extends Component {
  componentDidMount() {
    setTimeout(() => {
      // 发布 msg 事件
      Observer.trigger('msg', '事件执行了哦。查看控制台，有几个子组件重新渲染了。');
    }, 2000);
  }

  componentDidUpdate() {
    console.log('Child_1 update');
  }

  render() {
    return (
      <div>
        <p>一级子组件</p>
      </div>
    )
  }
}

/**
 * 第二个子组件。
 */
class Child_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '我订阅了一个事件。3s后触发。'
    };
  }

  componentDidMount() {
    // 监听 msg 事件
    Observer.on('msg', (msg) => {
      this.setState({
        msg
      });
    });
  }

  componentDidUpdate() {
    console.log('Child_2 触发了重新 update 渲染');
  }

  render() {
    return (
      <div>
        <p>二级子组件： <span style={{color: 'red'}}>{this.state.msg}</span></p>
        <Child_2_1/>
      </div>
    )
  }
}

/**
 * 二代孙组件
 */
class Child_2_1 extends Component {
  componentDidUpdate() {
    console.log('Child_2_1 触发了重新 update 渲染');
  }

  render() {
    return (
      <div>
        <p>二级下一级组件</p>
      </div>
    )
  }
}