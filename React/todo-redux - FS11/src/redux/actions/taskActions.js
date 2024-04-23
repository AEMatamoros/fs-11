export const addTaskAction = (payload) => {
  return { type: "task/addTask", payload };
};

export const updateTaskAction = (payload) => {
  return { type: "task/updateTask", payload };
};

export const deleteTaskAction = (payload) => {
  return { type: "task/deleteTask", payload };
};

export const filterTaskAction = (payload) => {
  return { type: "task/filterTask", payload };
};
