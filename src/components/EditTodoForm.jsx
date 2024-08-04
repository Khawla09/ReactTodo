import React, { useState } from "react";

function EditTodoForm({ editTodo, task }) {
  const [title, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newTodo = {
    //   userId: 1,
    //   id: Date.now(),
    //   title,
    //   completed: false,
    //   isEditing: true,
    // };
    //to pass value to wrapper

    editTodo(task.id, task);
    setValue("");
    // console.log(newTodo);
  };
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task..."
        value={title}
        onChange={handleChange}
      />
      <button disabled={!title} type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
}

export default EditTodoForm;
