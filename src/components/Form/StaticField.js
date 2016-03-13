import React, { Component, PropTypes } from 'react'

export default class StaticField extends Component {

  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    value: PropTypes.string,
    placeholder: PropTypes.string
  };

  renderIcon () {
    const { icon } = this.props
    if (icon) {
      return (
        <div className='item-media'>{icon}</div>
      )
    }
    return null
  }

  renderLabel () {
    const { label } = this.props
    if (label) {
      return (
        <div className='item-title label'>{label}</div>
      )
    }
    return null
  }

  renderInput () {
    const { placeholder, value, ...props } = this.props
    if (value && value.length > 1) {
      return (<div {...props}>{value}</div>)
    }
    return (
      <div className='placeholder' {...props}>{placeholder}</div>
    )
  }

  render () {
    return (
      <li>
        <div className='item-content'>
          {this.renderIcon()}
          <div className='item-inner'>
            {this.renderLabel()}
            <div className='item-input'>
              {this.renderInput()}
            </div>
          </div>
        </div>
      </li>
    )
  }
}
