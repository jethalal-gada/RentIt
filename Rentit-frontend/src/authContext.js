import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false);
  if (sessionStorage.getItem('userDetails')) setLogIn(true);
  return (
    <AppContext.Provider value={{ logIn, setLogIn }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
