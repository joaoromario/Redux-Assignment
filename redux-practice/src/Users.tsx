import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

export function Users() {
  const users = useSelector((state: RootState) => state.users.usersState);
  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.firsName} {user.lastName} <br /> Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
