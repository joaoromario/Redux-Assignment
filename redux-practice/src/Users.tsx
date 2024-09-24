import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { add, UserType } from "./features/users/userSlice";

export function Users() {
  const users = useSelector((state: RootState) => state.users.usersState);
  const dispatch = useDispatch();

  const handleIncrease = (id: UserType["id"]) => {
    dispatch(add(id));
  };

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.firsName} {user.lastName} <br /> Age: {user.age}{" "}
            <button onClick={() => handleIncrease(user.id)}>
              Increase Age
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
