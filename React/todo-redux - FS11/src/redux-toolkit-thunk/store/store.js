import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { taskReducer } from "../slices/TaskSlice";
import { filterReducer } from "../slices/FilterSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfiguration = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfiguration, filterReducer);

export const store = configureStore({
  reducer: { tasksStore: taskReducer, filterStore: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
