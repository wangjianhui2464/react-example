/**
 * Created by Dennis Wang
 * on 2018/3/26 11:08
 */

import React, {Component} from 'react'

class Usual extends Component {
  constructor() {
    super();
    this.state = {
      usual: 'usual',
    }
  }

  componentDidMount() {
    console.log('didMount')
  }

  render() {
    return (
      <div className="container" style={{marginTop: '10px', backgroundColor: '#e1e1e1', padding: '20px'}}>
        <h3>控制 state</h3>
        <br/>
        <div style={{border: '1px solid red', padding: '0 10px', margin: '10px 0'}}>
          当前组件 state：
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    )
  }
}

/**
 * 控制 state 示例：获取 props、state
 * @param WrappedComponent
 * @return {{new(): {render(): *}}}
 * @constructor
 */
const MyContainer = (WrappedComponent) => class extends WrappedComponent {
  render() {
    return (
      <div className="container" style={{marginTop: '10px', backgroundColor: '#e1e1e1', padding: '20px'}}>
        <h2>HOC Debugger Component</h2>
        <p>Props</p>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <p>State</p>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {super.render()}
      </div>);
  }
};


/**
 * 高阶组件 操作 props
 * @param WrappedComponent
 */
const iiHoc = (WrappedComponent) => {
  return class extends WrappedComponent {
    render() {
      console.log('---渲染劫持-高阶组件-拿到包裹组件 state--', this.state);
      return super.render();
    }
  }
};

/**
 * 此处返回的 高阶组件 可以 挨个改为上述 几个 高阶组件测试。
 * MyContainer、iiHoc
 */
export default MyContainer(Usual);