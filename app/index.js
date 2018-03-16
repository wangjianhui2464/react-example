import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ParentToChild from './components/ParentToChild'
import ChildToParent from './components/ChildToParent'

const style = {
  childItem: {
    backgroundColor: '#e1e1e1',
    padding: '20px',
    margin: 10
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <ParentToChild style={style.childItem}/>
        <ChildToParent style={style.childItem}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));