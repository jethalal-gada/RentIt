import React from 'react';
import './navbar.css';
import logo from '../../images/Logo.svg';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useGlobalContext } from '../../Context';

const Navbar = () => {
  const { setSearchTerm, setSearchData } = useGlobalContext();
  const searchText = useRef('');
  let user = null;
  let data = null;
  const navigate = useNavigate();
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && searchText.current.value.trim()) {
      handleSearch();
    }
  });
  const checkLogin = () => {
    if (sessionStorage.getItem('userDetails')) {
      data = JSON.parse(sessionStorage.getItem('userDetails'));
      user = 'Hi, ' + data.given_name;
    } else user = 'Login';
    return user;
  };

  const handleBtnClick = (e) => {
    if (e.target.name === 'login' || (e.target.name === 'rent' && !data))
      navigate('/user');

    if (e.target.name === 'rent' && data) navigate('/rent');
  };

  const handleSearch = (e) => {
    navigate('/');
    if (e) e.preventDefault();
    setSearchTerm(searchText.current.value.trim());
  };

  const handleGoHome = () => {
    setSearchTerm(null);
    setSearchData(null);
    searchText.current.value = '';
  };
  return (
    <>
      <div className='navbar'>
        <div id='logo'>
          <Link to='/'>
            <img
              className='logo'
              src={logo}
              alt='logo'
              onClick={handleGoHome}
            />
          </Link>
        </div>
        <div className='searchBox search'>
          <button
            onClick={handleSearch}
            type='submit'
            className='searchBtn buttom search btn'
          >
            <FaSearch className='search' size={18} />
          </button>
          <input
            type='text'
            className='searchBar '
            placeholder='Search'
            ref={searchText}
          />
        </div>
        <div className='navBtns'>
          <div className=' buttom'>
            <button className='login' name='login' onClick={handleBtnClick}>
              {checkLogin()}
            </button>{' '}
          </div>
          <button
            className='rent btn button'
            name='rent'
            onClick={handleBtnClick}
          >
            Rent
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
