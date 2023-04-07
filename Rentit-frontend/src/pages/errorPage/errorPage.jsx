import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <div>
      <pre> </pre>
      <pre> Page not found!</pre>
      <pre> </pre>
      <pre> Error 404</pre>
      <pre> </pre>
      <pre>
        Click here to go to home page -
        <button onClick={handleClick}>Home</button>
      </pre>
    </div>
  );
}

export default ErrorPage;
