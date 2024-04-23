import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import taskReducer from "../reducers/taskReducer";

const enhancer = devToolsEnhancer();

export const store = createStore(taskReducer, enhancer);
