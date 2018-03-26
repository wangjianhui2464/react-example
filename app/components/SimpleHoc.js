/**
 * Created by Dennis Wang
 * on 2018/3/26 02:44
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const simpleHoc = WrappedComponent => {
  console.log('simpleHoc');
  return class extends Component {
    componentDidMount() {
      console.log(' 高阶组件 222  did mount ');
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
};

/**
 * 常用组件
 * 即 wrappedComponent 被包裹组件。
 */
class UsualComponent extends Component {
  componentDidMount() {
    console.log(' 常用组件 111  did mount ');
  }


  render() {
    console.log(this.props, 'props');
    return (
      <div className="container" style={{marginTop: '10px', backgroundColor: '#e1e1e1', padding: '20px'}}>
        <h3>这个常用组件，被包装过，包裹他的组件可以对此组件进行修改，也可以执行 生命周期的所有钩子函数。</h3>
        <div>下面我们就来看一下 高阶组件可以实现的一些功能：</div>
        <ul>
          <li><Link to="hocOperateProps">操作props</Link></li>
          <li><Link to="hocGetRefs">refs获取组件实例</Link></li>
          <li><Link to="hocOutOfState">抽离state</Link></li>
          <li><Link to="hocElementWarppedHoc">使用其它元素包裹 WarppedComponent</Link></li>
        </ul>
      </div>
    )
  }
}

export default simpleHoc(UsualComponent);