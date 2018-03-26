/**
 * Created by Dennis Wang
 * on 2018/3/26 11:08
 */

import React, {Component} from 'react'

const MyContainer = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      };

      this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(event) {
      this.setState({
        name: event.target.value
      });
    }

    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onNameChange,
        }
      };

      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
};

// @MyContainer
class App extends Component {
  render() {
    return (
      <div className="container" style={{marginTop: '10px', backgroundColor: '#e1e1e1', padding: '20px'}}>
        <h3>抽离 State </h3>
        <br/>
        <input name='名字' {...this.props.name} />

        <div style={{border: '1px solid red', padding: '0 10px', margin: '10px 0'}}>
          当前组件 props：<pre>{JSON.stringify(this.props, null, 2)}</pre>
        </div>
      </div>
    )
  }
}

export default MyContainer(App)