import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { Todo as TodoType } from './Todos.type'

function TodosWrapper() {

  const [todos,setTodos] = useState<TodoType[]>([])

  const addTodo = (title:string)=>{
   setTodos([...todos,{
    id:crypto.randomUUID(),
    title:title,
    completed:false
   }])
   return true
  }

  return (
    <div className="TodoWrapper">
    <h1>Todo List ❤️ </h1>
    {/* Add New Todo Form */}

    <TodoForm addTodo={addTodo}/>

    {/* display todos */}
    
    {todos.map(todo =>(
      <Todo />
    ))}
  </div>
  )
}

export default TodosWrapper