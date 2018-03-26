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
        <h3>渲染劫持</h3>
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
 * 高阶组件 操作 props
 * @param WrappedComponent
 */
const iiHoc = (WrappedComponent) => {
  return class extends WrappedComponent {
    render() {
      console.log(this.state, 'state');
      return super.render();
    }
  }
};

export default iiHoc(Usual);