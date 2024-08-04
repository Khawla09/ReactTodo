import React from "react";

function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="todo">
      <p
        key={task.id}
        style={task.completed ? { textDecoration: "line-through" } : {}}
      >
        {task.title}
      </p>
      <div>
        <button onClick={() => editTodo(task.id)}> Update📝 </button>
        <button onClick={() => deleteTodo(task.id)}>Delete🗑️</button>
      </div>
    </div>
  );
}

export default Todo;
// onClick={() => toggleComplete(task.id)}
//         className={`${task.completed ? "completed" : ""}`}
