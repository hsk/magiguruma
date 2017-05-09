'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './containers/App.jsx';
import { store } from './stores/todo.jsx';


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
);
