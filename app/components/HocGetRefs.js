/**
 * Created by Dennis Wang
 * on 2018/3/26 11:08
 */

import React, {Component} from 'react'

class UsualComponent extends Component {
  render() {
    return (
      <div className="container" style={{marginTop: '10px', backgroundColor: '#e1e1e1', padding: '20px'}}>
        <h3>refs获取组件实例</h3>
        <br/>
        查看 console 看可以看到包裹组件通过 ref 拿到了此组件的实例。
      </div>
    )
  }
}

/**
 * 高阶组件：获取 refs 实例
 * @param WrappedComponent
 */
const refHoc = (WrappedComponent) => {

  return class extends Component {
    componentDidMount() {
      console.log(this.instanceComponent, 'instanceComponent');
    }

    render() {
      return (
        <WrappedComponent
          ref={instanceComponent => this.instanceComponent = instanceComponent}
          {...this.props}/>
      );
    }
  }
};

export default refHoc(UsualComponent);