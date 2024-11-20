import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { Todo as TodoType } from './Todos.type'
import swal from 'sweetalert';


function TodosWrapper() {

  const [todos,setTodos] = useState<TodoType[]>([])

  const addTodo = (title:string)=>{
   setTodos([...todos,{
    id:crypto.randomUUID(),
    title:title,
    completed:false,
   }])
   return true
  }

  const deletTodo = (id:string) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      buttons:['No','Yes']
    })
    .then(result => {
      if (result) {
        setTodos(todos.filter(todo => todo.id !== id))
        swal("Deleted!", "Your imaginary file has been deleted!", "success");
      }
    });

   
    return true
  }

  const toggleComplete = (id:string) =>  {
     setTodos(todos.map((todo) => todo.id===id?{...todo,completed: !todo.completed } : todo))
    return true
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