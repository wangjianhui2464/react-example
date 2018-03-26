/**
 * Created by Dennis Wang
 * on 2018/3/26 01:50
 */

import React from 'react';
import {Route} from 'react-router-dom';

import ParentToChild from './components/ParentToChild';
import ChildToParent from './components/ChildToParent';
import BrotherToBrother from './components/BrotherToBrother';
import BroUseObserver from './components/BroUseObserver';
import SimpleHoc from './components/SimpleHoc';
import HocOperateProps from './components/HocOperateProps';
import HocGetRefs from './components/HocGetRefs';
import HocOutOfState from './components/HocOutOfState';
import HocElementWarppedHoc from './components/HocElementWarppedHoc';

const Routes = () => (
  <div>
    <Route exact path="/"
           render={() =>
             <div style={{textalign: 'center', marginTop: '50px', fontSize: '24px'}}>
               欢迎大家参加 React 系列分享之 《深入 React
               组件、通信、性能》
             </div>
           }/>
    <Route path="/parentToChild" component={ParentToChild}/>
    <Route path="/childToParent" component={ChildToParent}/>
    <Route path="/brotherToBrother" component={BrotherToBrother}/>
    <Route path="/broUseObserver" component={BroUseObserver}/>
    <Route path="/simpleHoc" component={SimpleHoc}/>

    <Route path="/hocOperateProps" component={HocOperateProps}/>
    <Route path="/hocGetRefs" component={HocGetRefs}/>
    <Route path="/hocOutOfState" component={HocOutOfState}/>
    <Route path="/hocElementWarppedHoc" component={HocElementWarppedHoc}/>


  </div>
);

export default Routes;