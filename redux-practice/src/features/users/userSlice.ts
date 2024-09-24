// Inside the slice file, create 3 states: firstname, lastname, and age. You can decide what the default values are

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserType = {
  id: number;
  firsName: string;
  lastName: string;
  age: number;
};

type StateType = {
  usersState: UserType[];
};

const initialState: StateType = {
  usersState: [
    {
      id: 1,
      firsName: "Joao",
      lastName: "Sinhasique",
      age: 1,
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<UserType["id"]>) => {
      const user = state.usersState.find((u) => u.id === action.payload);
      if (user) {
        user.age += 1; // Increment the user's age by 1
      }
    },
  },
});

export const { add } = userSlice.actions;
export const usersReducer = userSlice.reducer;
