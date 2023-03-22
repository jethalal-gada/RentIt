import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useGlobalContext } from '../../authContext';

const Profile = () => {
  // const { logIn, setLogIn } = useGlobalContext();
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.removeItem('userDetails');
    // setLogIn(false);
    // console.log(logIn);
    navigate('/');
  };

  return (
    <>
      profile
      <div>Hi {data.given_name}</div>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
};
export default Profile;
