import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('userDetails');
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
