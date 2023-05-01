import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredPhone.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1
    ) {
      setError({
        title: "Ivalid input!",
        message:
          "Please enter valid details. Age dhoulf be > 0 and (non-empty values).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredEmail, enteredPhone, enteredAge);
    setEnteredUsername("");
    setEnteredEmail("");
    setEnteredPhone("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setEnteredPhone(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            id="age"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
