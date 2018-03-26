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
      <div className="container" style={{marginTop: '10px', backgroundColor: '#e1e1e1', padding: '20px',}}>
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
      Observer.trigger('msg', '事件执行了哦。看看子组件有几个重新渲染的。');
    }, 2000);
  }

  componentDidUpdate() {
    console.log('Child_1 update');
  }

  render() {
    return (
      <div>
        <p>child_1 component</p>
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
        <p>child_2 component: {this.state.msg}</p>
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
        <p>Child_2_1 component</p>
      </div>
    )
  }
}