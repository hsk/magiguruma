'use strict';
import { createStore } from "redux";
import { reducer } from '../reducers/index.jsx';

export default createStore(reducer, {todos: []});
