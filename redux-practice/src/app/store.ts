import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../features/users/userSlice";
export const store = configureStore({
  reducer: {
    // multiple reducers can go here
    users: usersReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
