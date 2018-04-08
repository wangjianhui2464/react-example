/* eslint-disable react/forbid-prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Dropdown extends React.PureComponent {
  static propTypes = {
    // 触发菜单打开事件
    trigger: PropTypes.oneOf(['hover', 'click']),
    // 下拉列表 DropdownItem 节点数组
    dropItems: PropTypes.array,
    // 自定义样式名称
    className: PropTypes.string,
    // 点击是否隐藏
    hideOnClick: PropTypes.bool,
    // 点击菜单项 触发回调
    onItemSelect: PropTypes.func,
  };

  static defaultProps = {
    trigger: 'hover',
    dropItems: [],
    hideOnClick: true,
    className: 'dropdown-container',
    onItemSelect: () => null,
  };

  static childContextTypes = {
    dropdownComponent: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      buttonText: '点击下拉',
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  getChildContext() {
    return {
      dropdownComponent: this,
    };
  }

  componentDidMount() {
    this.initMenuEvent();

    if (this.props.children) {
      this.setState({
        buttonText: this.props.children,
      });
    }
  }

  /**
   * 选中下拉选项后执行函数
   * @param command  选中下拉项指定命令
   * @param clickInstance 选中下拉项组件实例
   */
  onDropownItemClick(command, clickInstance) {
    const { onItemSelect, hideOnClick } = this.props;
    // if dropitem is disabled, do nothing.
    if (clickInstance && !clickInstance.props.disabled) {
      if (hideOnClick) {
        this.setState({
          visible: false,
        });
      }

      // 点击之后将点击节点 text 置于 button 上
      if (clickInstance.props.children) {
        this.setState({
          buttonText: clickInstance.props.children,
        });
      }

      /**
       * 如果有选中就调用回调
       */
      if (onItemSelect) {
        setTimeout(() => {
          onItemSelect(command, clickInstance);
        });
      }
    }
  }

  /**
   * click 触发点击其他区域隐藏 下拉列表
   */
  handleClickOutside() {
    if (this.state.visible) {
      this.setState({ visible: false });
    }
  }

  /**
   * 打开下拉菜单
   */
  handleClick() {
    this.setState({ visible: !this.state.visible });
  }

  /**
   * hover 触发显示 下拉列表
   */
  showItems() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setState({ visible: true }), 200);
  }

  /**
   * hover 触发隐藏 下拉列表
   */
  hideItems() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setState({ visible: false }), 150);
  }

  /**
   * 初始化菜单打开事件
   */
  initMenuEvent() {
    const { trigger } = this.props;
    const triggerEle = ReactDOM.findDOMNode(this.refs.trigger);
    if (trigger === 'hover') {
      // menu 响应鼠标 hover 事件
      triggerEle.addEventListener('mouseenter', this.showItems.bind(this));
      triggerEle.addEventListener('mouseleave', this.hideItems.bind(this));
      // dropdown 亦响应 hover 事件
      const dropdownEle = ReactDOM.findDOMNode(this.refs.dropdown);
      if (dropdownEle) {
        dropdownEle.addEventListener('mouseenter', this.showItems.bind(this));
        dropdownEle.addEventListener('mouseleave', this.hideItems.bind(this));
      }
    } else if (trigger === 'click') {
      triggerEle.addEventListener('click', this.handleClick.bind(this));
    }
  }

  render() {
    const { className, dropItems } = this.props;

    return (
      <div className={className}>
        {/* 菜单部分 */}
        <div ref="trigger">{this.state.buttonText}</div>

        {/* 下拉部分 */}
        <div ref="dropdown">{this.state.visible ? dropItems : null}</div>
      </div>
    );
  }
}

export default Dropdown;
