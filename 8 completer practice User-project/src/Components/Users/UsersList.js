import React from "react";

import styles from "./UsersList.module.css";

import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>({user.age} years)</div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
