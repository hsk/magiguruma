'use strict';
import { createStore } from "redux";
import React from 'react';
import { render } from 'react-dom';
import { Provider,connect } from 'react-redux';

// ToDo を一意に特定できる ID
let nextTodoId = 0;

// ToDo の追加
function addToDo (text) {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: text,
    };
}
// ToDo の完了／未完了
function toggleToDo (id) {
    return {
        type: 'TOGGLE_TODO',
        id: id,
    };
}

function reducer (state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todo: state.todo.concat({
                    id: action.id,
                    text: action.text,
                    completed: false
                })
            };
        case 'TOGGLE_TODO':
            return {
                todo: state.todo.map(t => {
                    if (t.id !== action.id) {
                        return t;
                    }

                    return Object.assign({}, t, {completed: !t.completed});
                })
            };
        default:
            return state;
    }
}

const store = createStore(reducer, {todo: []});

let AddToDoComponent = ({dispatch}) => {
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
};

AddToDoComponent = connect()(AddToDoComponent);


let ToDoListComponent = ({todo, dispatch}) => {
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
};

function mapStateToProps(state) {
    return {
        todo: state.todo
    };
}


ToDoListComponent = connect(mapStateToProps)(ToDoListComponent);

const App = () => (
    <div>
        <AddToDoComponent />
        <ToDoListComponent />
    </div>
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
);
