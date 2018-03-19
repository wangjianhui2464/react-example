/**
 * Created by Dennis Wang
 * on 2018/3/19 0019 18:12
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.checked}
               onChange={this.props.onChange} />
        <span>{this.props.value}</span>
      </li>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.map(entry => ({
        text: entry.text,
        checked: entry.checked,
      })),
    };
  }

  onItemChange(entry) {
    const { list } = this.state;
    this.setState({
      list: list.map(prevEntry => ({
        text: prevEntry.text,
        checked: prevEntry.text === entry.text ?
          !prevEntry.checked : prevEntry.checked,
      })),
    });
    this.props.handleItemChange(entry);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((entry, index) => (
            <ListItem
              key={`list-${index}`}
              value={entry.text}
              checked={entry.checked}
              onChange={this.onItemChange.bind(this, entry)}
            />
          ))}
        </ul>
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange(item) {
    console.log(item);
  }

  render() {
    return (
      <List
        list={[{ text: 1 }, { text: 2 }]}
        handleItemChange={this.handleItemChange}
      />
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));