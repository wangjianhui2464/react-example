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
    return (
      <li>
        <input type="checkbox" defaultChecked={this.props.checked}
               onChange={this.props.onChange}/>
        <span>选中了: {this.props.checked ? '✅' : '❌'},   </span>
        <span>值: {this.props.value}</span>
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
    const {list} = this.state;
    this.setState({
      list: list.map(prevEntry => {
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
        <h3>Parent --> Child 演示示例</h3>
        <ul>
          {this.state.list.map((entry, index) => (
            <ListItem
              key={`list-${index}`} value={entry.text} checked={entry.checked}
              onChange={this.onItemChange.bind(this, entry)}/>
          ))}
        </ul>
      </div>
    );
  }
}

/**
 * 根组件
 */
class ChildToParent extends Component {
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
      <div style={{margin: '10px', backgroundColor: '#e1e1e1', padding: '20px',}}>
        <List
          list={this.state.list}
          handleItemChange={this.handleChange}
        />

        <h4>根组件里属性展示：</h4>
        <div style={{margin: '10px'}}>
          {
            this.state.list.map((entry, index) => {
              return (
                <div key={index}>{entry.text + ": " + (entry.checked ? '✅' : '❌')}</div>
              )
            })
          }
        </div>
      </div>
    );
  }
}


ReactDOM.render(<ChildToParent/>, document.getElementById('app'));