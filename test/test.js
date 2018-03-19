/**
 * Created by Dennis Wang
 * on 2018/3/19 0019 18:12
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('--ListItem--', this.props.checked)
    return (
      <li>
        <input type="checkbox" defaultChecked={this.props.checked}
               onChange={this.props.onChange}/>
        <span>checked: {this.props.checked.toString()},</span>
        <span>value: {this.props.value}</span>
      </li>
    );
  }
}


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
    };
  }

  onItemChange(entry) {
    console.log('--List--', entry);
    const {list} = this.state;
    this.setState({
      list: list.map(prevEntry => {
        console.log(prevEntry, entry);
        return {
          text: prevEntry.text,
          checked: prevEntry.text === entry.text ? !prevEntry.checked : prevEntry.checked,
        }
      }),
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
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      list: [
        {text: 1, checked: false},
        {text: 2, checked: true},
        {text: 3, checked: false},
        {text: 4, checked: true},
        {text: 5, checked: false}
      ]
    }
  }

  handleChange(changeItem) {
    console.log('--App--', changeItem);
    let newList = [].concat([...this.state.list]);
    this.state.list.forEach((listItem, index) => {
      if (listItem.text === changeItem.text) {
        newList[index].text = changeItem.text;
        newList[index].checked = !changeItem.checked;
      }
    });

    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div style={{margin: '50px'}}>
        <List
          list={this.state.list}
          handleItemChange={this.handleChange}
        />
        <div style={{margin: '30px'}}>
          {
            this.state.list.map((entry, index) => {
              return (
                <div key={index}>{entry.text + ":" + entry.checked}</div>
              )
            })
          }
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));