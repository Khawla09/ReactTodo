import { useState } from "react";
// import Header from "./components/Header";
// import Form from "./components/Form";
// import TodoWrapper from "./components/TodoWrapper";
//custom components
import CustomForm from "./components1/CustomForm";
import TaskList from "./components1/TaskList";
const initialState = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];
function App() {
  const [tasks, setTasks] = useState(initialState);
  function addTask(task) {
    setTasks([...tasks, task]);
  }
  return (
    <div className="container">
      {/* <TodoWrapper todosList={initialState} /> */}
      <header>
        <h1>Mt todo list</h1>
      </header>
      <CustomForm addTask={addTask} />
      {/* <TaskList tasks={tasks} /> */}
      {tasks && <TaskList tasks={tasks} />}
    </div>
  );
}

export default App;
