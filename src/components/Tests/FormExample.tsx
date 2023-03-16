// @ts-ignore
import { FormEvent } from "react";
import React from 'react';
import useFormTest from "./../../hooks/useFormTest.ts";

function FormExample() {

  const [values, handleChange] = useFormTest({userName: '', password: ''});

  const register = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(values.userName, values.password);
  }

  return (
    <form onSubmit={register}>
      <br />
      <label>Username: </label>
      <input
      value={values.userName}
      onChange={handleChange}
      name="userName"
      type="text"
      placeholder="Your username" />
      <br />
      <label>Password: </label>
      <input
      value={values.password}
      onChange={handleChange}
      name="password"
      type="text"
      placeholder="Your password" />
      <br />
      <input type="submit" value="Login" />
    </form>
  );
}

export default FormExample;