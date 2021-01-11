import { Action } from 'redux'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export interface AddTodo extends Action {
  type: typeof ADD_TODO
  payload: {
    id: number
    title: string
  }
}

export interface RemoveTodo extends Action {
  type: typeof REMOVE_TODO
  payload: {
    id: number
  }
}

let nextId = 0

export const addTodo = (title: string): AddTodo => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextId++,
      title: title
    }
  }
}

export const removeTodo = (id: number): RemoveTodo => {
  return {
    type: REMOVE_TODO,
    payload: {
      id
    }
  }
}

export type TodoActionTypes = AddTodo | RemoveTodo