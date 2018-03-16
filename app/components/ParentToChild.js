/**
 * Created by Dennis Wang
 * on 2018/3/16 0016 17:33
 */

import React, { Component } from 'react'


class List extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.list.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}


export default class ParentToChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " Parent --> Child 演示示例",
      list: [
        { text: '这就是第1个' },
        { text: '这就是第2个' },
        { text: '这就是第3个' },
        { text: '这就是第4个' },
        { text: '这就是第5个' },
        { text: '这就是第6个' }
      ]
    };
  }

  render() {
    return (
      <div>
        <List style={this.props.style} title={this.state.title} list={this.state.list} />
      </div>
    );
  }
}