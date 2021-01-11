import { AddTodo, addTodo, RemoveTodo, removeTodo } from 'actions/TodoAction'
import Form from 'components/todo/Form'
import List from 'components/todo/List'
import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Store } from 'reducers/index'
import { TodoState } from 'reducers/TodoReducer'

type Props = {
  todoState: TodoState,
  addTodo: (title: string) => AddTodo,
  removeTodo: (id: number) => RemoveTodo 
}

const TodoPage: FC<Props> = (props) => (
  <div className="container">
    <h1>ListPage</h1>
    <Form addTodoHandler={props.addTodo} />
    <List todos={props.todoState.todos} removeTodoHandler={props.removeTodo} />
  </div>
)

const mapStateToProps = (state: Store) => ({
  todoState: state.todo
})

const mapDispatchToProps = {
  addTodo: (title: string) => (addTodo(title)),
  removeTodo: (id: number) => (removeTodo(id))
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPage)