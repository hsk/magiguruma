import React from 'react'
import { PropTypes } from 'prop-types'

export default class Link extends React.Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { active, children, onClick } = this.props
    if (active) return <span>{children}</span>
    else        return <a href="#" onClick={e => {e.preventDefault(); onClick()}}>{children}</a>
  }
}

/*
export default function Link({ active, children, onClick }) {
  if (active) return <span>{children}</span>
  return <a href="#" onClick={e => {e.preventDefault(); onClick()}}>{children}</a>
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
*/
