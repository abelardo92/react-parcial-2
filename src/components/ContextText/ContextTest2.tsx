// @ts-nocheck
// import Test from './components/Test.tsx';
import './../Hello/Hello.css';
import React, { useContext } from 'react';
import { UserContext } from '../../imports/userContext.ts';
import { User } from '../../imports/userContext';

function ContextTest2() {

  const { id, name, age, address } = useContext<User>(UserContext);

  return (
      <div className="HelloContainer">
        <div className="TextContainer">
          <p>{id}</p>
          <p>{name}</p>
          <p>{age}</p>
          <p>{address}</p>
        </div>
      </div>
  );
}

export default ContextTest2;