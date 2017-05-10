'use strict';
import React from 'react';
import { toggleToDo } from '../actions/todo.jsx';

export default class ToDoListComponent extends React.Component {
    render() {
        return <ul>{
            this.props.todos.map(todo =>
                <li key={todo.id}>
                    <span style={ { textDecoration: todo.completed ? 'line-through' : 'none' } }>
                        { todo.text }
                        <input type="checkbox" onClick={(e)=>this.click(e,todo)} checked={ todo.completed } />
                    </span>
                </li>
            )
        }</ul>
    }

    click(e, todo) {
        this.props.dispatch(toggleToDo(todo.id))
    }
}
