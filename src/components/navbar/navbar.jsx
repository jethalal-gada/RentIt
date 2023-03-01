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
    if (localStorage.getItem('userDetails') != null) {
      data = JSON.parse(localStorage.getItem('userDetails'));
      user = 'Hi, ' + data.given_name;
    } else user = 'Login';
    return user;
  };

  const handleLogin = () => {
    if (data) navigate('/profile', { state: data });
    else navigate('/login');
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
            {/* <Link to='login'> */}
            <button className='login' onClick={handleLogin}>
              {checkLogin()}
            </button>{' '}
            {/* </Link> */}
          </div>
          <Link to='rent'>
            <button className='rent btn button'>Rent</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
