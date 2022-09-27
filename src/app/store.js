import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import routerReducer from "../features/routerSlice";

export const store = configureStore({
  reducer: {
    router: routerReducer,
    counter: counterReducer,
  },
});
