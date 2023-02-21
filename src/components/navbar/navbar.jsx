import React from 'react';
import './navbar.css';
import logo from '../../images/Logo.svg';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="searchBox search">
          <button
            type="submit"
            className="searchBtn buttom search"
            // onClick={handleSubmit}
          >
            <FaSearch className="text-purple" size={18} />
          </button>
          <input
            type="text"
            className="searchBar "
            placeholder="Search"
            // ref={searchText}
          />
        </div>
        <div className="navBtns">
          <Link to="login">
            <div className="login btn buttom">
              <u> Login</u>{' '}
            </div>
          </Link>
          <Link to="rent">
            <button className="rent btn buttom">Rent</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
