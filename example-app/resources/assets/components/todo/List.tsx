
import { RemoveTodo } from 'actions/TodoAction'
import React, { FC } from 'react'
import { Todo } from 'types/Todo'

type Props = {
  todos: Todo[],
  removeTodoHandler: (id: number) => RemoveTodo
}

const Form: FC<Props> = (props) => {
  return (
    <div className="list">
      <table>
        <tbody>
          {props.todos.map(todo => (
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td><button onClick={() => {props.removeTodoHandler(todo.id)}}>削除</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Form