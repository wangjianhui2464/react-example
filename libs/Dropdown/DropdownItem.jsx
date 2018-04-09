/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default class DropdownItem extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onItemSelect: PropTypes.func,
    children: PropTypes.any,
  };

  static defaultProps = {
    className: 'dropdown-items',
    disabled: false,
    onItemSelect: () => null,
    children: null,
  };

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    // 处理传递给回调函数的参数，目前只返回外部传递进来的 props。
    const { onItemSelect, disabled } = this.props;
    // if dropItem is disabled, do nothing.
    if (!disabled) {
      const filterProps = {};
      // 处理传递给回调函数的参数：去掉 typeof 为 function
      Object.keys(this.props).forEach((item) => {
        if (typeof this.props[item] !== 'function') {
          filterProps[item] = this.props[item];
        }
        if (item === 'children') {
          // children 是字符串，直接赋值给 buttonText
          if (!React.isValidElement(this.props[item])) {
            filterProps.buttonText = this.props[item];
          } else {
            // children 是 React element 元素 递归查找下级 props.children
            filterProps.buttonText = this.findChildren(this);
          }
        }
      });
      onItemSelect(filterProps);
    }
  }

  /**
   * 递归查找最下级节点 children
   * @param element clickItem
   */
  findChildren(element) {
    if (element.props && element.props.children) {
      if (typeof element.props.children === 'string') {
        return element.props.children;
      }
      // children 不是字符串，还有下级
      return this.findChildren(element.props.children);
    }
    // 没有children
    return element.children;
  }

  render() {
    const { disabled, className } = this.props;
    const classNameStr = `${disabled ? 'disabled' : ''} ${className}`;
    return (
      <div className={classNameStr} onClick={this.handleSelect}>
        {this.props.children}
      </div>
    );
  }
}
