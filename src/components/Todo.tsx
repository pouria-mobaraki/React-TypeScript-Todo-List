import React from 'react'
import { Todo as TodoType } from './Todos.type'

type TodoProps = {
  todo:TodoType;
  deletTodo: (id:string)=>void;
  toggleComplete:(id:string)=>void;
}

function Todo({todo,deletTodo,toggleComplete}:TodoProps) {
  return (
    <div className="Todo">
      <p
        className= {todo.completed ? 'completed' : ""}
      >
        {todo.title}
      </p>
      {/* <div><FontAwesomeIcon icon={faTrash} /></div> */}
    </div>
  )
}

export default Todo