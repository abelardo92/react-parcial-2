import { useState, createContext, useContext, FormEventHandler, FormEvent } from "react";
import React from 'react';

function ContextExample() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const register = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({userName, password});
  }

  return (
    <form onSubmit={register}>
      <br />
      <label>Username: </label>
      <input
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      type="text"
      placeholder="Your username" />
      <br />
      <label>Password: </label>
      <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="text"
      placeholder="Your password" />
    </form>
  );
}

export default ContextExample;