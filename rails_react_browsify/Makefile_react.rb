File.write("app/assets/javascripts/components/actions/user.js", <<-EOF)
export const SET_USER = 'SET_USER';

export function setUser(user) {
  return {
    type: SET_USER,
    user: user
  };
}
EOF

File.write("app/assets/javascripts/components/components/User.js", <<-EOF)
import React, { Component } from 'react';

class User extends Component {
  render() {
    const { user } = this.props;

    return (
      <span>{user.name}</span>
    );
  }
}

export default User;
EOF

File.write("app/assets/javascripts/components/containers/Root.js", <<-EOF)
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import UserApp from './UserApp';
import configureStore from '../store/configureStore';
import { setUser } from '../actions/user';

const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    store.dispatch(setUser(this.props.user));
  }

  render() {
    return (
      <Provider store={store}>
        <UserApp />
      </Provider>
    );
  }
}
EOF

File.write("app/assets/javascripts/components/containers/UserApp.js", <<-EOF)

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import * as UserActions from '../actions/user';

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);

File.write("app/assets/javascripts/components/reducers/index.js", <<-EOF)

import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
  user
});

export default rootReducer;
EOF

File.write("app/assets/javascripts/components/reducers/user.js", <<-EOF)
import { SET_USER } from '../actions/user';

const initialState = {
  name: 'guest'
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
EOF

File.write("app/assets/javascripts/components/store/configureStore.js", <<-EOF)

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
EOF

File.write("app/assets/javascripts/components.js", <<-EOF)

window.React = require('react');
window.ReactDOM = require('react-dom');
window.Root = require('./components/containers/Root').default;
EOF

File.write("config/routes.rb", <<-EOF)

Rails.application.routes.draw do
  resources :users, only: :show
end
EOF

File.write("app/controllers/users_controller.rb", <<-EOF)

class UsersController < ApplicationController
  def show
    @user = { name: 'test' }
  end
end
EOF

File.write("app/views/users/show.html.erb", <<-EOF)

<%= react_component('Root', { user: @user }) %>
EOF
