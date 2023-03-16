import React, { ChangeEventHandler, useState } from 'react';
import { FormEvent } from 'react';
import useForm from '../../hooks/useForm.ts';
import RolesMenu from './RolesMenu.tsx';

interface EmployeeForm {
  userName: string,
  fullName: string,
  description: string,
  position: number,
  role: number,
}

const initialState: EmployeeForm = {
  userName: '',
  fullName: '',
  description: '',
  position: 1,
  role: 1,
}

// interface ContextData {
//   handleChange: ChangeEventHandler<HTMLInputElement>,
//   data: EmployeeForm,
// }

function UseFormTest2() {

  const [data, handleChange] = useForm(initialState);

  // const contextData = {
  //   data,
  //   handleChange
  // };

  const {userName, fullName, description, position, role} = data;
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
      <label>Full Name: </label>
      <input 
      type="text" 
      name="fullName"
      value={fullName}
      onChange={handleChange}
      />
      <br />
      <br />
      <label>Description: </label>
      <textarea
        name='description'
        value={description} // ...force the input's value to match the state variable...
        onChange={handleChange} // ... and update the state variable on any edits!
        rows={5}
        cols={30}
      />
      <br />
      <br />
      <label>Position: </label>
      <select
        name='position'
        value={position} // ...force the select's value to match the state variable...
        onChange={handleChange} // ... and update the state variable on any change!
      >
      <option value={1}>Manager</option>
      <option value={2}>Developer</option>
      <option value={3}>Scrum master</option>
      <option value={4}>Software Architect</option>
    </select>
      <RolesMenu 
      role={role}
      handleChange={handleChange}
      />
      <input type="submit" value="Login" />
      <br />
      <br />
      {submitted && <h4>Submitted: 
        userName: {userName} <br/>
        fullName: {fullName} <br/>
        description: {description} <br/>
        position: {position} <br/>
        role: {role}<br/>
        </h4>}
    </form>
  );
}

export default UseFormTest2;