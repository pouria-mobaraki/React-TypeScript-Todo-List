import React from 'react'

function Todo() {
  return (
    <div className="Todo">
      <p
        className="completed" // or completed className
      >
        Test Todo Title :))
      </p>
      <div>{/* <FontAwesomeIcon icon={faTrash} /> */}</div>
    </div>
  )
}

export default Todo