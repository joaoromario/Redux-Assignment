// Inside the slice file, create 3 states: firstname, lastname, and age. You can decide what the default values are

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserType = {
  firsName: string;
  lastName: string;
  age: number;
};

type StateType = {
  users: UserType[];
};

const initialState: StateType = {
  users: [
    {
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
    add: (state, action: PayloadAction<UserType>) => {
      state.users.push(action.payload);
    },
  },
});

export const { add } = userSlice.actions;
export const usersReducer = userSlice.reducer;
