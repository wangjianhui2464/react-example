import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Routes from './routes';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <div className="bodyContainer">
        <h2>《深入 React 组件、通信、性能》分享</h2>
        <Router>
          <div>
            <div className="menu">
              <Link to="parentToChild">父子通信</Link>
              <Link to="childToParent">子父通信</Link>
              <Link to="brotherToBrother">跨级组件</Link>
              <Link to="broUseObserver">无嵌套关系</Link>
              <span>|</span>
              <Link to="simpleHoc">高阶组件</Link>
              <Link to="broUseObserver">组合式组件</Link>
              <span>|</span>
              <Link to="broUseObserver">无嵌套关系</Link>
              <Link to="broUseObserver">无嵌套关系</Link>
            </div>
            <Routes/>
          </div>
        </Router>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));