import React, { useState } from "react";

function CustomForm({ addTask }) {
  const [title, setTask] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      userId: 1,
      id: Date.now(),
      title,
      completed: false,
    };
    addTask(newTodo);
    //when we submit it goes back to empty
    setTask("");
    // console.log(e);
  };
  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        {/* <p>{task}</p> */}
        <input
          value={title}
          onInput={(e) => setTask(e.target.value)}
          type="text"
          id="task"
          className="input"
          required
          autoFocus
          maxLength={80}
          placeholder="Enter a new Task!"
        />
        <button
          className="btn"
          style={{ padding: "20px", color: "blue" }}
          aria-label="Add Task"
          type="submit"
        >
          +
        </button>
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      {/* emmer */}
    </form>
  );
}

export default CustomForm;
