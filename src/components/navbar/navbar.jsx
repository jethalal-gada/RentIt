import React from 'react';
import './navbar.css';
import logo from '../../images/Logo.svg';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { FaRegUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div id='logo'>
          <Link to='/'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
        </div>
        <div className='searchBox search'>
          <button
            type='submit'
            className='searchBtn buttom search btn'
            // onClick={handleSubmit}
          >
            <FaSearch className='search' size={18} />
          </button>
          <input
            type='text'
            className='searchBar '
            placeholder='Search'
            // ref={searchText}
          />
        </div>
        <div className='navBtns'>
          <div className=' buttom'>
            {/* <u>
              <FaRegUserCircle className='user btn' size={18} />
            </u> */}
            <Link to='login'>
              <u className='login'> Login</u>{' '}
            </Link>
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
