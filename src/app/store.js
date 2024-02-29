import { configureStore } from "@reduxjs/toolkit";
import { playersApi } from "../API/playersSlice";

export const store = configureStore({
  reducer: {
    playersApi: playersApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playersApi.middleware)
});