'use strict';
import React from 'react';
import { render } from 'react-dom';
import AddToDo from './AddToDo.jsx';
import ToDoList from './ToDoList.jsx';

export default class App extends React.Component {
    render() {
        return <div>
            <AddToDo />
            <ToDoList />
        </div>
    }
}
