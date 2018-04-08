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
    this.props.onItemSelect(this);
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
