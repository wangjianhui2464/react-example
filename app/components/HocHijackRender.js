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
        <input type='input' name="hoc"/>
        <div style={{border: '1px solid red', padding: '0 10px', margin: '10px 0'}}>
          当前组件 state：
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    )
  }
}

/**
 * 条件渲染
 * @param WrappedComponent
 * @return {{new(): {render(): *}}}
 * @constructor
 */
const MyContainer1 = (WrappedComponent) => class extends WrappedComponent {
  render() {
    if (this.state.usual) {
      return super.render();
    } else {
      return null;
    }
  }
};

/**
 *
 * @param WrappedComponent
 */
const MyContainer2 = (WrappedComponent) => {
  return class extends WrappedComponent {
    render() {
      const elementsTree = super.render();
      let newProps = {};
      if (elementsTree && elementsTree.type === 'input') {
        newProps = {value: 'may the force be with you'};
      }
      const props = Object.assign({}, elementsTree.props, newProps);
      const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children);
      return newElementsTree;
    }
  }
};


/**
 * 此处返回的 高阶组件 可以 挨个改为上述 几个 高阶组件测试。
 * MyContainer1、MyContainer2
 */
export default MyContainer2(Usual);