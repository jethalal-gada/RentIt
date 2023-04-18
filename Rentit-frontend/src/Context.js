/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

//Defining provider function to provide data to any components wrapped inside it
const AppProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false); //Current user's login data
  const [loginObj, setLoginObj] = useState(null);
  const [savesCount, setSavesCount] = useState(0);
  const [postsCount, setPostsCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState(''); //Store the searched term
  const [searchData, setSearchData] = useState(null); //Store search results
  const [searching, setSearching] = useState(false); //To handle loader while search
  const [selectedOption, setSelectedOption] = useState('all'); //To handle filter
  const [filteredData, setFilteredData] = useState(null);

  const url = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}/${process.env.REACT_APP_ADDRESS}/items`;
  const urlSaveUSer = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}/${process.env.REACT_APP_ADDRESS}/user`;

  //To store the user's data in DB after login
  useEffect(() => {
    const saveUser = async () => {
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
        //Get user's login data from session storage and add access token and user's DB id to it
        const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        userDetails._id = data.data._id;
        userDetails.access_token = loginObj.access_token;
        sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
      } catch (err) {
        console.log(err, 'Fail');
      }
    };
    //After getting user's data give a call to save it
    if (loginObj) saveUser();
  }, [loginObj]);

  //After getting the searched term send it to DB
  useEffect(() => {
    const search = async () => {
      setSearching(true);
      const response = await fetch(`${url}/search/${searchTerm}`);
      const data = await response.json();
      setSearchData(data.data.items);
      setSearching(false);
    };

    if (searchTerm) search();
  }, [searchTerm]);
  //After applying filter
  useEffect(() => {
    const filter = async () => {
      setSearching(true);
      const response = await fetch(`${url}/filter/${selectedOption}`);
      const data = await response.json();
      setFilteredData(data.data.items);
      setSearching(false);
    };
    if (selectedOption === 'all') setFilteredData(null);
    else filter();
  }, [selectedOption]);
  //Pass all states as props to all child components
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
        searchTerm,
        setSearchTerm,
        searchData,
        setSearchData,
        searching,
        setSearching,
        selectedOption,
        setSelectedOption,
        filteredData,
        setFilteredData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//This fuction will be used by children to get current app context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
