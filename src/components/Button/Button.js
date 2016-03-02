import React, { Component, PropTypes } from 'react'
import { getThemes } from '../../utils/theme'
import classNames from 'classnames'

export default class Button extends Component {

  static propTypes = {
    theme: PropTypes.oneOf(getThemes()),
    active: PropTypes.bool,
    fill: PropTypes.bool,
    big: PropTypes.bool,
    round: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
  };

  render () {
    const { theme, active, fill, big, round, children, className, ...props } = this.props
    const classes = classNames({
      'button': true,
      'active': active,
      'button-round': round,
      'button-fill': fill,
      'button-big': big,
      [`color-${theme}`]: theme
    }, className)
    return (
      <div className={classes} {...props}>{children}</div>
    )
  }
}