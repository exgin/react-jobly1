import React, { useEffect, useState } from 'react';
import { decode } from 'jsonwebtoken';
import './App.css';
import Routes from './Routes';
import useLocalStorage from './hooks/useLocalStorage';
import JoblyAPI from './JoblyAPI';
import Context from './Context';

// TODO:
/*

-get token to say in usecontext or in the session

Add the search bar component
  -Have it work with the Job & Companies components
  -Make it 'live-search' using a proccess called debounce
 */

export const BASE_TOKEN = 'default-token';

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage(BASE_TOKEN);

  useEffect(() => {
    const getCurrUser = async () => {
      try {
        let { username } = decode(token);
        let res = await JoblyAPI.getCurrentUser(username);
        setCurrUser(res);
        console.log(`currUser: ${currUser}`);
      } catch (error) {
        console.error(`getCurrUser error: ${error}`);
        setCurrUser(null);
      }
      getCurrUser();
    };
  }, [token]);

  return (
    <Context.Provider value={{ currUser, setCurrUser }}>
      <div className='App'>
        <Routes setToken={setToken} />
      </div>
    </Context.Provider>
  );
}

export default App;
