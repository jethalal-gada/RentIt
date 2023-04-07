import React from 'react';
import { useNavigate } from 'react-router-dom';
import unhappy from '../../images/unhappy.svg';
import './errorPage.css';
function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <div className='errMsg'>
      <pre className='err'> </pre>
      <pre className='err'> Page not found!</pre>
      <pre className='err'> </pre>
      <pre className='err'> Error 404</pre>
      <pre className='err'> </pre>
      <pre className='err'>
        <pre>Click here to go to home page</pre>
        <button id='home' className='post' onClick={handleClick}>
          Home
        </button>
      </pre>
      <div className='unhappy'>
        <img id='unhappy' src={unhappy} alt='' />
      </div>
    </div>
  );
}

export default ErrorPage;
