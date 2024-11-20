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
    completed:true
   }])
   return true
  }

  const deletTodo = (id:string) => {
    setTodos(todos.filter(todo => todo.id !== id))
    return true
  }

  const toggleComplete = (id:string) =>  {
    // code...
  }

  return (
    <div className="TodoWrapper">
    <h1>Todo List ❤️ </h1>
    {/* Add New Todo Form */}

    <TodoForm addTodo={addTodo}/>

    {/* display todos */}
    
    {todos.map(todo =>(
      <Todo key={todo.id} todo={todo} deletTodo = {deletTodo} toggleComplete={toggleComplete}/>
    ))}
  </div>
  )
}

export default TodosWrapper