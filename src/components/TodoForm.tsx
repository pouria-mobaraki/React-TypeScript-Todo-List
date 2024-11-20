import React, { useState } from 'react'
 
type TodoFormProp = {
  addTodo : (title:string) => boolean
}

function TodoForm({addTodo}:TodoFormProp) {

  const [value,setValue] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(value){
      addTodo(value)
      setValue('')
    }
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
      value={value}
      onChange={(e)=>setValue(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  )
}

export default TodoForm