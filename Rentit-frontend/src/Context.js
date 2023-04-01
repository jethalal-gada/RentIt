import React, { useState, useContext, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const AppContext = React.createContext();

//Defining provider function to provide data to any components wrapped inside it
const AppProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false);
  const [loginObj, setLoginObj] = useState(null);
  // const navigate = useNavigate();
  const urlSaveUSer = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_ADDRESS}/user`;

  // if (sessionStorage.getItem('userDetails')) setLogIn(true);
  useEffect(() => {
    const saveUser = async () => {
      console.log('storing details');
      try {
        await fetch(urlSaveUSer, {
          method: 'POST',
          body: JSON.stringify(loginObj),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        // navigate('/');
      } catch (err) {
        console.log(err, 'Fail');
      }
    };
    if (loginObj) saveUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginObj]);
  return (
    <AppContext.Provider value={{ logIn, setLogIn, loginObj, setLoginObj }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
