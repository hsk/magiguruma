'use strict';
import React from 'react';
import { addToDo } from '../actions/todo.jsx';

export default class AddToDoComponent extends React.Component {
    render() {
        return <div>
            <form onSubmit={this.submit.bind(this)}>
                <input ref={ node => this.input = node }/>
                <button>Todo に追加する</button>
            </form>
        </div>
    }

    submit(e) {
        e.preventDefault();
        this.props.dispatch(addToDo(this.input.value));
        this.input.value = "";
    }
}
