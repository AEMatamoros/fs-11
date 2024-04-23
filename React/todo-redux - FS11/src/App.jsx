import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskAction,
  updateTaskAction,
  deleteTaskAction,
  filterTaskAction,
} from "./redux/actions/taskActions";
import "./App.css";

function App() {
  //Redux
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const [state, setState] = useState({
    tasks: [],
    isLoading: false,
    error: false,
    filter: "all",
  });

  //State
  const isLoading = state.isLoading;
  const error = state.error;

  //Dispatch
  const addTask = () => {
    if (newTask.title.trim() !== "") {
      dispatch(addTaskAction(newTask));
    }
  };

  const updateTask = (id) => {
    dispatch(updateTaskAction(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTaskAction(id));
  };

  const handleFilter = (filterState) => {
    dispatch(filterTaskAction(filterState));
  };

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    completed: false,
  });

  return (
    <div className="App">
      <h1>ToDo GoIt</h1>
      <div className="container">
        <div className="task-inputs">
          <input
            type="text"
            placeholder="Task title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Task description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="filter-options">
          <label>Show: </label>
          <select value={filter} onChange={(e) => handleFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
        {isLoading ? (
          <h2>Cargando</h2>
        ) : (
          <ul className="task-list">
            {tasks
              .filter((task) => {
                if (filter === "all") {
                  return true;
                } else if (filter === "completed") {
                  return task.completed;
                } else if (filter === "incomplete") {
                  return !task.completed;
                }
                return true;
              })
              .map((task, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => updateTask(index)}
                  />
                  <span className={task.completed ? "completed" : ""}>
                    {task.title}
                  </span>
                  <p>{task.description}</p>
                  {/* <span>{JSON.stringify(task)}</span> */}
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        )}

        {!!error && <h2>Ocurrio un Error</h2>}
      </div>
    </div>
  );
}

export default App;
