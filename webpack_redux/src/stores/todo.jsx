'use strict';
import { createStore } from "redux";
import { reducer } from '../reducers/index.jsx';

export const store = createStore(reducer, {todo: []});
