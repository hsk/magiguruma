import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class App extends React.Component {
  render() {
    return <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  }
}

/*
export default function App() {
  return <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
}
*/
