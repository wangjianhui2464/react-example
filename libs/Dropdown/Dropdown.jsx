/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.PureComponent {
  static propTypes = {
    // 触发菜单打开事件
    trigger: PropTypes.oneOf(['hover', 'click']),
    // 自定义样式名称
    className: PropTypes.string,
    // 按钮text
    buttonText: PropTypes.string,
    // 点击是否隐藏
    hideOnClick: PropTypes.bool,
    // 点击菜单项 触发回调
    onItemSelect: PropTypes.func,
    children: PropTypes.any,
  };

  static defaultProps = {
    trigger: 'hover',
    buttonText: '点击下拉',
    hideOnClick: true,
    className: 'dropdown-container',
    onItemSelect: () => null,
    children: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      buttonText:
        props.buttonText && props.buttonText !== ''
          ? props.buttonText
          : '点击下拉',
    };

    this.handleClick = this.handleClick.bind(this);
    this.showItems = this.showItems.bind(this);
    this.hideItems = this.hideItems.bind(this);
    this.onDropownItemClick = this.onDropownItemClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.getContainer = this.getContainer.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  /**
   * 获取容器绑定 clickoutside
   * @param ref
   */
  getContainer(ref) {
    this.container = ref;
  }

  /**
   * hover 触发显示 下拉列表
   */
  showItems() {
    this.setState({ visible: true });
  }

  /**
   * hover 触发隐藏 下拉列表
   */
  hideItems() {
    this.setState({ visible: false });
  }

  /**
   * 打开下拉菜单
   */
  handleClick() {
    this.setState({ visible: !this.state.visible });
  }

  /**
   * click 触发点击其他区域隐藏 下拉列表
   */
  handleClickOutside(e) {
    // 拿到容器判断，当前点击包含在容器内，执行 clickOutSide
    const el = this.container;
    if (!el.contains(e.target)) {
      if (e.nativeEvent) {
        e.nativeEvent.stopPropagation();
      }
      if (this.state.visible) {
        this.setState({ visible: false });
      }
    }
  }

  /**
   * 选中下拉选项后执行函数
   * @param clickItem 选中下拉项组件实例
   */
  onDropownItemClick(clickItem) {
    const { onItemSelect, hideOnClick } = this.props;
    // if dropitem is disabled, do nothing.
    if (clickItem && !clickItem.props.disabled) {
      if (hideOnClick) {
        this.setState({
          visible: false,
        });
      }

      // 点击之后将点击节点 text 置于 button 上
      if (clickItem.props.children) {
        this.setState({
          buttonText: clickItem.props.children,
        });
      }

      /**
       * 如果有选中就调用回调
       */
      if (onItemSelect) {
        const filterProps = {};
        // 处理传递给回调函数的参数：去掉 typeof 为 function
        Object.keys(clickItem.props).forEach((item) => {
          if (typeof clickItem.props[item] !== 'function') {
            filterProps[item] = clickItem.props[item];
          }
        });

        onItemSelect(filterProps);
      }
    }
  }

  render() {
    const { className, trigger, children } = this.props;

    return (
      <div
        className={className}
        ref={this.getContainer}
        onMouseEnter={
          trigger && trigger === 'hover' ? this.showItems : () => null
        }
        onMouseLeave={
          trigger && trigger === 'hover' ? this.hideItems : () => null
        }
      >
        <div
          className="dropdown-menu"
          onClick={
            trigger && trigger === 'click' ? this.handleClick : () => null
          }
        >
          {this.state.buttonText}
        </div>

        {this.state.visible
          ? React.Children.map(children, (child, index) => {
            if (!child) {
              return null;
            }
            // 拼接返回组件 新属性
            const attribute = {
              key: child.key ? child.key : `item-${index}`,
              onItemSelect: this.onDropownItemClick,
            };
            if (child.key) {
              attribute.keyCmd = child.key;
            }
            return React.cloneElement(child, attribute);
          })
          : null}
      </div>
    );
  }
}

export default Dropdown;
