import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

//Defining provider function to provide data to any components wrapped inside it
const AppProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false);
  const [loginObj, setLoginObj] = useState(null);
  const [savesCount, setSavesCount] = useState(0);
  const [postsCount, setPostsCount] = useState(0);
  const urlSaveUSer = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_ADDRESS}/user`;

  useEffect(() => {
    const saveUser = async () => {
      console.log('storing details');
      // console.log(loginObj);
      try {
        const response = await fetch(urlSaveUSer, {
          method: 'POST',
          body: JSON.stringify(loginObj),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: 'Bearer ' + loginObj.access_token,
          },
        });
        const data = await response.json();
        const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        userDetails._id = data.data._id;
        sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
        // console.log(data.data._id);
        // navigate('/');
      } catch (err) {
        console.log(err, 'Fail');
      }
    };
    if (loginObj) saveUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginObj]);
  return (
    <AppContext.Provider
      value={{
        logIn,
        setLogIn,
        loginObj,
        setLoginObj,
        savesCount,
        setSavesCount,
        postsCount,
        setPostsCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
