/**
 * Created by Dennis Wang
 * on 2018/3/16 0016 17:33
 */

import React, { Component } from 'react'


class ListItem extends Component {
  render() {
    return (
      <li style={{ backgroundColor: '#ffeef1', margin: '3px' }}>
        <input type='checkbox' checked={this.props.checked}
               onChange={this.props.onChange} />
        <span>{this.props.value}</span>
      </li>
    )
  }
}

class List extends Component {

  render() {
    return (
      <div style={this.props.style}>
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.list.map((listItem, index) => (
            <ListItem key={`list-${index}`} value={listItem.text}
                      onChange={this.props.onChange} />
          ))}
        </ul>
      </div>
    )
  }
}


export default class ChildToParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " Child --> Parent 演示示例",
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

  onItemChange(event, listItem) {
    const { list } = this.state;
    console.log(event)
    console.log(listItem)
  }

  render() {
    return (
      <div>
        <List style={this.props.style} title={this.state.title} list={this.state.list}
              onChange={this.onItemChange.bind(this)} />
      </div>
    );
  }
}