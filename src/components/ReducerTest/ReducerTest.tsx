
import './../Hello/Hello.css';
import React, { useEffect, useReducer } from 'react';

interface AuthState {
  validating: Boolean,
  token: string | null,
  name: string,
  userName: string,
}

type AuthAction = 
| { type: 'logout' }
| { type: 'login', payload: LoginPayload };

interface LoginPayload {
  userName: string,
  name: string,
}

const initialState : AuthState = {
  validating: true,
  token: null,
  name: '',
  userName: '',
} 

const authReducer = (state : AuthState, action: AuthAction) : AuthState => {
  switch(action.type) {
    case 'logout':
      return { 
        ...initialState,
        validating: false,
      };
    case 'login':
      const {name, userName} = action.payload;
      return {
        name,
        userName,
        validating: false,
        token: 'ABC123',
      };

    default:
      return state;
  }
}

function ReducerTest() {

  const [{ name, token, validating, userName }, dispatch] = useReducer(authReducer, initialState);

  const login = () => {
    const payload: LoginPayload = {
      name: 'Abelardo', 
      userName: 'Abelardo92',
    };
    dispatch({type: 'login', payload });
  }

  const logout = () => dispatch({type: 'logout' });

  useEffect(() => {
    // setTimeout(() => dispatch({type: 'logout'}), 3000);
    // setTimeout(() => login(), 3000);
    setTimeout(logout, 3000);
    // setTimeout(login, 3000);
  },[]);

  return (
  <>
  { validating && <h1>Validating...</h1>}
  { !validating && !token && <h1>User logged out!</h1>}
  { !validating && token && <h1>User logged! Welcome {name}</h1>}
  </>
  );
}

export default ReducerTest;