// Store
import { configureStore } from "@reduxjs/toolkit";
import { heroReducer } from "../slice/heroSlice";
// Redux PersistGate
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
import storage from "redux-persist/lib/storage";

const heroPersistConfig = {
  key: "hero",
  storage,
};

export const store = configureStore({
  reducer: {
    hero: persistReducer(heroPersistConfig, heroReducer),
  },
  // persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
