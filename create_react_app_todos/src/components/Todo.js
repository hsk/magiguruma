import React from 'react'
import { PropTypes } from 'prop-types'

export default class Todo extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    const { onClick, completed, text } = this.props
    return <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none'}}>
      {text}
    </li>
  }
}

/*
export default function Todo({ onClick, completed, text }) {
  return <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
    {text}
  </li>
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
*/
