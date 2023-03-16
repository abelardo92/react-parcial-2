import React, { useEffect, useReducer } from 'react';

interface AuthState {
  validating: Boolean,
  token: string | null,
  userName: string,
  name: string,
}

const initialState = {
  validating: true,
  token: null,
  userName: '',
  name: ''
}

interface LoginPayload {
  userName: string,
  name: string,
}

type AuthAction = 
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload };


const authReducer = ( state: AuthState, action: AuthAction ) : AuthState => {
  switch(action.type) {
    case 'logout':
      return {
        ...initialState,
        validating: false,
      };
    case 'login':
      const { name, userName } = action.payload;
      return {
        validating: false,
        token: 'ABC123',
        name,
        userName,
      }
    default:
      return state;
  }
}

function ReducerExample() {

  const [{name, validating, token}, dispatch] = useReducer(authReducer, initialState);

  const logout = () => {
    dispatch({type: 'logout'});
  }

  const login = () => {

    const payload: LoginPayload = {
      name: 'Abelardo', 
      userName: 'Abelardo92',
    };
    dispatch({type: 'login', payload });
  }

  useEffect(() => {
    // setTimeout(logout, 2000);
    setTimeout(login, 2000);
  },[]);

  return (
    <>
      { validating && <h1 className='alert alert-danger' >Loading...</h1>}
      { !validating && !token && (<h1>Not authenticated!</h1>)}
      { !validating && token && (<h1>Authenticated! Welcome {name} </h1>)}
      {/* <p>Not authenticated...</p> */}
    </>
  );
}

export default ReducerExample;