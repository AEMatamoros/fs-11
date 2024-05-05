import { createAction } from "@reduxjs/toolkit";

export const addTaskAction = createAction("task/addTask");
export const updateTaskAction = createAction("task/updateTask");
export const deleteTaskAction = createAction("task/deleteTask");
export const filterTaskAction = createAction("task/filterTask");
