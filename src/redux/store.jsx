import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { carsApi } from "../server/api";
import filterSlice from "./filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    carsApi.middleware,
  ],
});
setupListeners(store.dispatch);
