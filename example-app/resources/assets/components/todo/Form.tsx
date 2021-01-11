import { AddTodo } from 'actions/TodoAction'
import React, { ChangeEvent, FC, useState } from 'react'

type Props = {
  addTodoHandler: (title: string) => AddTodo
}

const Form: FC<Props> = (props) => {
  const [title, setTitle] = useState('')
  
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = () => {
    props.addTodoHandler(title)
    setTitle('')
  }

  return (
    <div className="form">
      <div className="">
        <input type="text" className="" value={title} onChange={handleChangeTitle}></input>
        <button onClick={handleSubmit}>追加</button>
      </div>
    </div>
  )
}

export default Form