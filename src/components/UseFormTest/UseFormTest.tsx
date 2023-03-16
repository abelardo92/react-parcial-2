import React, { useState } from 'react';
import { FormEvent } from 'react';
import useForm from '../../hooks/useForm.ts';
import FruitPicker from '../Tests/FruitPicker.tsx';

interface LoginForm {
  userName: string,
  password: string,
}

const initialState: LoginForm = {
  userName: '',
  password: '',
}

function UseFormTest() {

  const [{userName, password}, handleChange] = useForm(initialState);
  const [submitted, setSubmitted] = useState(false);

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={login}>
      <br />
      <label>Username: </label>
      <input 
      type="text" 
      name="userName"
      value={userName}
      onChange={handleChange}
      />
      <br />
      <label>Password: </label>
      <input 
      type="text" 
      name="password"
      value={password}
      onChange={handleChange}
      />
      <br />
      <br />
      <FruitPicker />
      <br />
      <br />
      <input type="submit" value="Login" />
      <br />
      <br />
      {submitted && <h4>Submitted: {userName} {password}</h4>}
    </form>
  );
}

export default UseFormTest;