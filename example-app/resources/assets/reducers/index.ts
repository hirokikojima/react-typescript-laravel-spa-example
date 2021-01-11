import { combineReducers } from 'redux'
import TodoReducer, { TodoState } from 'reducers/TodoReducer'

export type Store = {
  todo: TodoState
}

export default combineReducers({
  todo: TodoReducer
})
