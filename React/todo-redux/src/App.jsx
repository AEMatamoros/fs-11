import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import {
  thunkFetchTaskActionOperator,
  thunkAddTaskActionOperator,
} from "./redux-toolkit-thunk/operators/TaskOperators";
import {
  selectTasks,
  selectLoading,
  selectError,
} from "./redux-toolkit-thunk/selectors/taskSelectors";
import { selectFilter } from "./redux-toolkit-thunk/selectors/filterSelectors";
//old
import {
  asyncUpdateTaskActionOperator,
  asyncDeleteTaskActionOperator,
} from "./redux-toolkit-async/operators/TaskOperators";

import { filterTaskAction } from "./redux-toolkit-slice/slices/FilterSlice";
//old
function App() {
  //Redux
  const dispatch = useDispatch();
  //Selectores del Store
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  //Fetch
  useEffect(() => {
    dispatch(thunkFetchTaskActionOperator());
  }, [dispatch]);

  //Dispatch
  const addTask = () => {
    if (newTask.title.trim() !== "") {
      dispatch(thunkAddTaskActionOperator(newTask));
    }
  };

  const updateTask = (newTask) => {
    dispatch(asyncUpdateTaskActionOperator(newTask));
  };

  const handleDelete = (id) => {
    dispatch(asyncDeleteTaskActionOperator(id));
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
                    onChange={() => updateTask(task)}
                  />
                  <span className={task.completed ? "completed" : ""}>
                    {task.title}
                  </span>
                  <p>{task.description}</p>
                  {/* <span>{JSON.stringify(task)}</span> */}
                  <button
                    onClick={() => {
                      handleDelete(task.id);
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
