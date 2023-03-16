// @ts-nocheck
import './../Hello/Hello.css';
import React, { useEffect, useState } from 'react';
import ContextTest2 from './ContextTest2.tsx';
import { User, UserContext } from '../../imports/userContext.ts';

function ContextTest() {

  const [user, setUser] = useState<User>({
    id: 1234,
    name: 'Abelardo',
    age: 31,
    address: 'xxxxx',
  });

  useEffect(() => {
    setTimeout(() => setUser({ ...user, age: 35 }), 3000)
  },[user]);

  return (
    <UserContext.Provider value={user}>
      <ContextTest2 />
    </UserContext.Provider>
  );
}

export default ContextTest;