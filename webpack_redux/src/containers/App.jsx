'use strict';
import React from 'react';
import { render } from 'react-dom';
import { AddToDoComponent } from '../components/AddToDoComponent.jsx';
import { ToDoListComponent } from '../components/ToDoListComponent.jsx';

export const App = () =>
    <div>
        <AddToDoComponent />
        <ToDoListComponent />
    </div>
