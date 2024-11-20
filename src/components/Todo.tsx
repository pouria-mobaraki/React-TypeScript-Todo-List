import React from 'react'
import { Todo as TodoType } from './Todos.type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from  '@fortawesome/free-solid-svg-icons'

type TodoProps = {
  todo:TodoType;
  deletTodo: (id:string)=>boolean;
  toggleComplete:(id:string)=>boolean;
}

function Todo({todo,deletTodo,toggleComplete}:TodoProps) {
  return (
    <div className="Todo">
      <p onClick={()=>toggleComplete(todo.id)}
        className= {todo.completed ? 'completed' : ""}
      >
        {todo.title}
      </p>
      <div><FontAwesomeIcon icon={faTrash} onClick={(()=> deletTodo(todo.id))}/></div>
    </div>
  )
}

export default Todo