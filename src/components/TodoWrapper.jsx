import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
function TodoWrapper({ todosList }) {
  const [todos, setTodos] = useState(todosList);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  //   const editTodo = (todo) => {
  //     setTodos([...todos, todo], todo.id);
  //   };
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  function editTask(task, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }
  //   const toggleComplete = (id) => {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, completed: !todo.completed } : { todo }
  //       )
  //     );
  //   };

  return (
    <div className="todo-wrapper">
      <h1>Get Things Done!</h1>
      <Form addTodo={addTodo} />
      {todos.map(
        (todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )

        // <Todo task={todo} key={index} toggleComplete={toggleComplete} />
      )}
    </div>
  );
}

export default TodoWrapper;
