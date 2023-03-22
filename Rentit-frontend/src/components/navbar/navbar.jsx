import React from 'react';
import './navbar.css';
import logo from '../../images/Logo.svg';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let user = null;
  let data = null;
  const navigate = useNavigate();
  const checkLogin = () => {
    if (sessionStorage.getItem('userDetails')) {
      data = JSON.parse(sessionStorage.getItem('userDetails'));
      user = 'Hi, ' + data.given_name;
    } else user = 'Login';
    return user;
  };

  const handleBtnClick = (e) => {
    if (e.target.name === 'login' || (e.target.name === 'rent' && !data))
      navigate('/login');

    if (e.target.name === 'rent' && data) navigate('/rent');
  };

  return (
    <>
      <div className='navbar'>
        <div id='logo'>
          <Link to='/'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
        </div>
        <div className='searchBox search'>
          <button type='submit' className='searchBtn buttom search btn'>
            <FaSearch className='search' size={18} />
          </button>
          <input type='text' className='searchBar ' placeholder='Search' />
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
