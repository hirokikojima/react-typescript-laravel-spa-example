import { TodoActionTypes, ADD_TODO, REMOVE_TODO } from 'actions/TodoAction'
import { Todo } from 'types/Todo'

export type TodoState = {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: []
}

const TodoReducer = (state: TodoState = initialState, action: TodoActionTypes): TodoState => {  
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, {
          id: action.payload.id,
          title: action.payload.title
        }]
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    default:
      return state
  }
}

export default TodoReducer