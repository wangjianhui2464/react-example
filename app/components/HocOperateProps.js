/**
 * Created by Dennis Wang
 * on 2018/3/26 11:08
 */

import React, {Component} from 'react'

class UsualComponent extends Component {
  render() {
    console.log(this.props.hocProps, 'hocProps');
    return (
      <div className="container" style={{marginTop: '10px', backgroundColor: '#e1e1e1', padding: '20px'}}>
        <h3>操作 props 示例</h3>
        <br/>
        查看 console 看区别。这里有一个 props 传过来的方法。
        <a onClick={this.props.handleClick} href='javascript:void(0);'>点我</a>
      </div>
    )
  }
}


/**
 * 高阶组件 操作 props
 * @param WrappedComponent
 */
const propsProxyHoc = (WrappedComponent) => {

  return class extends Component {
    handleClick() {
      alert('click');
    }

    render() {
      return (
        <WrappedComponent handleClick={this.handleClick} hocProps={this.props}/>
      );
    }
  };
};

export default propsProxyHoc(UsualComponent);