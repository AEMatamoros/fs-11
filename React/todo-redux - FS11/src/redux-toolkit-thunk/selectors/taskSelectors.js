export const selectTasks = (state) => {
  return [
    // ...state.tasksStore.tasks.filter((e) => e.completed),
    ...state.tasksStore.tasks,
    { id: 0, title: "Default", description: "None", completed: false },
  ];
};
export const selectLoading = (state) => state.tasksStore.loading;
export const selectError = (state) => state.tasksStore.error;
