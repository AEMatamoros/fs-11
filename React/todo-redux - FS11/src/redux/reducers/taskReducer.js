const initialState = { tasks: [], filter: "all" };

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "task/addTask":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "task/updateTask":
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index === action.payload) {
            let newTask = { ...task, completed: !task.completed };
            return newTask;
          } else {
            return task;
          }
        }),
      };
    case "task/deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };

    case "task/filterTask":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
