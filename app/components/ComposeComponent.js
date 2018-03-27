/**
 * Created by Dennis Wang
 * on 2018/3/26 22:40
 */
import React, {Component} from 'react';

class SelectInput extends Component {
  static displayName = 'SelectInput';

  render() {
    const {selectedItem, isActive, onClickHeader, placeholder} = this.props;
    const {text} = selectedItem;
    return (
      <div>
        <div onClick={onClickHeader}><Input
          type="text"
          disabled
          value={text} placeholder={placeholder}
        />
          <Icon className={isActive} name="angle-down"/></div>
      </div>
    );
  }
}

// 完成 SearchInput 与 List 的交互
const searchDecorator = WrappedComponent => {
  class SearchDecorator extends Component {
    constructor(props) {
      super(props);
      this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(keyword) {
      this.setState({
        data: this.props.data,
        keyword,
      });
      this.props.onSearch(keyword);
    }

    render() {
      const {data, keyword} = this.state;
      return (
        <WrappedComponent
          {...this.props}
          data={data} keyword={keyword} onSearch={this.handleSearch}
        />);
    }
  }

  return SearchDecorator;
};


// 完成 List 数据请求
const asyncSelectDecorator = WrappedComponent => {
  class AsyncSelectDecorator extends Component {
    componentDidMount() {
      const {url, params} = this.props;
      fetch(url, {params}).then(data => {
        this.setState({
          data,
        });
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props} data={this.state.data}
        />);
    }
  }

  return AsyncSelectDecorator;
};

const compose = (...funcs) => component => {
  if (funcs.length === 0) {
    return component;
  }
  const last = funcs[funcs.length - 1];
  return funcs.reduceRight((res, cur) => cur(res), last(component));
};

const FinalSelector = compose(asyncSelectDecorator, searchDecorator, selectedItemDecorator)(Selector);

class SearchSelect extends Component {
  render() {
    return (
      <FinalSelector {...this.props}>
        <SelectInput/>
        <SearchInput/>
        <List/>
      </FinalSelector>);
  }
}