'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions/todo.jsx';

export let AddToDoComponent = connect()(({dispatch}) => {
    let input;

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(input.value));
        input.value = "";
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input ref={ node => {input = node} }/>
                <button>Todo に追加する</button>
            </form>
        </div>
    );
});
