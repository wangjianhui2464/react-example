import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Link, hashHistory} from 'react-router-dom';
import Routes from './routes';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <div className="bodyContainer">
        <Router history={hashHistory}>
          <div>
            <h2><Link to="/">《深入 React 组件、通信、性能》分享</Link></h2>
            <div className="menu">
              <Link to="/parentToChild">父子通信</Link>
              <Link to="/childToParent">子父通信</Link>
              <Link to="/brotherToBrother">跨级组件</Link>
              <Link to="/broUseObserver">观察者模式</Link>
              <span>|</span>

              <Link to="/simpleHoc">高阶组件</Link>
              {/*<Link to="/broUseObserver">组合式组件</Link>*/}
              <span>|</span>

              <Link to="/pureComponent">性能优化</Link>
            </div>
            <Routes/>
          </div>
        </Router>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
