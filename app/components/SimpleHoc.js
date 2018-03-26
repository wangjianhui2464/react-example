/**
 * Created by Dennis Wang
 * on 2018/3/26 02:44
 */

import React, {Component} from 'react';


const simpleHoc = WrappedComponent => {
  console.log('simpleHoc');
  return class extends Component {
    componentDidMount() {
      console.log(' cmpt 222  did mount ');
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}

class Usual extends Component {

  componentDidMount() {
    console.log(' cmpt 1  did mount ');
  }

  render() {
    console.log(this.props, 'props');
    return (
      <div>
        Usual
      </div>
    )
  }
}

export default simpleHoc(Usual);

