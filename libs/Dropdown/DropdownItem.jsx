import React from 'react';
import PropTypes from 'prop-types';

export default class DropdownItem extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    command: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.any,
  };

  static defaultProps = {
    className: 'dropdown-items',
    disabled: false,
    children: null,
    command: '',
  };

  static contextTypes = {
    dropdownComponent: PropTypes.any,
  };

  handleSelect() {
    this.context.dropdownComponent.onDropownItemClick(this.props.command, this);
  }

  render() {
    const { disabled, className } = this.props;
    const classNameStr = `${disabled ? 'disabled' : ''} ${className}`;
    return (
      <div className={classNameStr} onClick={this.handleSelect.bind(this)}>
        {this.props.children}
      </div>
    );
  }
}
