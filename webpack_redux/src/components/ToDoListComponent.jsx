'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../actions/todo.jsx';

export let ToDoListComponent = connect((state)=>({todo:state.todo}))(({todo, dispatch}) => {
    return (
        <ul>{
            todo.map( (t) => {
                return <li key={t.id}>
                    <span style={ { textDecoration: t.completed ? 'line-through' : 'none' } }>
                        { t.text }
                        {/* 追加 */}
                        <input type="checkbox" onClick={ (e) => {  dispatch(toggleToDo(t.id))  } } checked={ t.completed } />
                    </span>
                </li>;
            })
        }</ul>
    );
})
