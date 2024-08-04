import React, { useState } from "react";

function Form({ addTodo }) {
  const [title, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      userId: 1,
      id: Date.now(),
      title,
      completed: false,
    };
    //to pass value to wrapper
    addTodo(newTodo);
    setValue("");
    console.log(newTodo);
  };
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Place your task for today"
        value={title}
        onChange={handleChange}
      />
      <button disabled={!title} type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}

export default Form;
